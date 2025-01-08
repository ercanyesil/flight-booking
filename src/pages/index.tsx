import { useState, useEffect } from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import SeatMap from '@/components/seat/SeatMap';
import { Passenger } from '@/types';
import { MAX_PASSENGERS } from '@/utils/helpers';
import { submitReservation } from '@/services/api';
import PassengerForm from '@/components/form/PassengerForm';
import { Seat } from '@/types';
import {
  SubmitButton,
  TotalPrice as StyledTotalPrice,
  FormSection
} from '@/styles/components/form.styles';
import { toast } from 'react-toastify';
import Modal from '@/components/common/Modal';
import { getErrorMessage } from '@/utils/errorHandling';
import { useSeats } from '@/hooks/useSeats';
import { useInactivity } from '@/hooks/useInactivity';
import { usePassengers } from '@/hooks/usePassengers';
import Loading from '@/components/common/Loading';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;
const SubContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  gap: 50px;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 30px;
  color: black;
`;

export default function Home() {
  const { seats, selectedSeats, setSelectedSeats } = useSeats();
  const { showInactivityModal, handleInactivityConfirm, handleInactivityCancel } = useInactivity();
  const { passengers, formValidations, setFormValidations, handlePassengerChange } = usePassengers(selectedSeats.length);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isInitialLoading, setIsInitialLoading] = useState(true);

  useEffect(() => {
    // Simüle edilmiş initial loading
    const timer = setTimeout(() => {
      setIsInitialLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleSeatSelect = (seat: Seat) => {
    if (seat.isOccupied) {
      toast.error(`${seat.number} numaralı koltuk dolu! Lütfen başka bir koltuk seçiniz.`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return;
    }

    if (selectedSeats.length >= MAX_PASSENGERS && !selectedSeats.find(s => s.id === seat.id)) {
      toast.warning('En fazla 3 koltuk seçebilirsiniz!');
      return;
    }

    setSelectedSeats(prev => {
      const isSelected = prev.find(s => s.id === seat.id);
      const newSelectedSeats = isSelected 
        ? prev.filter(s => s.id !== seat.id)
        : [...prev, seat];
      localStorage.setItem('selectedSeats', JSON.stringify(newSelectedSeats));
      return newSelectedSeats;
    });

    // Reset inactivity timer
    if (window.resetInactivityTimer) {
      window.resetInactivityTimer();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const isAllFormsValid = formValidations.length === passengers.length && 
      formValidations.every(isValid => isValid);

    if (!isAllFormsValid) {
      toast.error('Lütfen tüm alanları doğru şekilde doldurunuz.');
      return;
    }

    setIsSubmitting(true);
    try {
      const result = await submitReservation(passengers, selectedSeats.map(s => s.number));
      if (result.success) {
        // Mevcut dolu koltukları al
        const currentOccupied = JSON.parse(localStorage.getItem('occupiedSeats') || '[]');
        // Yeni rezerve edilen koltukları ekle
        const newOccupied = [...currentOccupied, ...selectedSeats.map(seat => seat.id)];
        // LocalStorage'ı güncelle
        localStorage.setItem('occupiedSeats', JSON.stringify(newOccupied));
        
        toast.success('Rezervasyon başarıyla tamamlandı!');
        localStorage.removeItem('selectedSeats');
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      }
    } catch (error) {
      const { message } = getErrorMessage(error);
      toast.error(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Head>
        <title>Uçak Rezervasyon Sistemi</title>
        <meta name="description" content="Uçak koltuk rezervasyon sistemi" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {isInitialLoading ? (
        <Loading message="Sistem yükleniyor..." />
      ) : (
        <Container>
          <SubContainer>
            <SeatMap 
              seats={seats.map(seat => ({
                ...seat,
                isSelected: selectedSeats.some(s => s.id === seat.id)
              }))} 
              onSeatSelect={handleSeatSelect} 
            />
            
            {selectedSeats.length > 0 && (
              <FormSection>
                <Title>Yolcu Bilgileri</Title>
                <form onSubmit={handleSubmit}>
                  {passengers.map((passenger, index) => (
                    <PassengerForm
                      key={index}
                      passenger={passenger}
                      index={index}
                      onChange={(index, data) => {
                        const field = Object.keys(data)[0] as keyof Passenger;
                        handlePassengerChange(index, field, data[field] as string);
                      }}
                      onValidationChange={(index, isValid) => {
                        setFormValidations(prev => {
                          const newValidations = [...prev];
                          newValidations[index] = isValid;
                          return newValidations;
                        });
                      }}
                    />
                  ))}
                  
                  <StyledTotalPrice>
                    <div className="selected-seats">
                      {selectedSeats.map(seat => (
                        <span key={seat.id} className="seat-number">{seat.number}</span>
                      ))}
                    </div>
                    <div className="total-amount">
                      <span className="calculation">{selectedSeats.length} x 1000 TL</span>
                      <span>Toplam Tutar: {selectedSeats.length * 1000} TL</span>
                    </div>
                  </StyledTotalPrice>
                  
                  <SubmitButton type="submit" disabled={isSubmitting}>
                    İşlemleri Tamamla
                  </SubmitButton>
                </form>
              </FormSection>
            )}
          </SubContainer>
        </Container>
      )}
      {isSubmitting && (
        <Loading message="Rezervasyonunuz yapılıyor..." />
      )}
      <Modal
        isOpen={showInactivityModal && selectedSeats.length > 0}
        onConfirm={handleInactivityConfirm}
        onCancel={handleInactivityCancel}
        message="İşleme devam etmek istiyor musunuz?"
      />
    </>
  );
}
