import React, { useState } from 'react';
import styled from 'styled-components';
import { Passenger } from '@/types';
// import PassengerForm from './PassengerForm';
import Button from '../ui/Button';
import { validatePassenger } from '@/utils/validators';

interface BookingFormProps {
  selectedSeats: number[];
  onSubmit: (data: { passengers: Passenger[] }) => void;
}

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Summary = styled.div`
  background-color: #f5f5f5;
  padding: 1rem;
  border-radius: 4px;
  margin-bottom: 1rem;
`;

const BookingForm: React.FC<BookingFormProps> = ({ selectedSeats, onSubmit }) => {
  const [passengers, setPassengers] = useState<Passenger[]>(
    selectedSeats.map(() => ({
      isim: '',
      soyisim: '',
      telefon: '',
      email: '',
      cinsiyet: '',
      dogumTarihi: ''
    }))
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all passengers
    const isValid = passengers.every(validatePassenger);
    if (!isValid) {
      alert('Lütfen tüm yolcu bilgilerini eksiksiz doldurun');
      return;
    }

    onSubmit({ passengers });
  };

  const handlePassengerChange = (index: number, data: Partial<Passenger>) => {
    setPassengers(prev => {
      const newPassengers = [...prev];
      newPassengers[index] = { ...newPassengers[index], ...data };
      return newPassengers;
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormContainer>
        <Summary>
          <h3>Rezervasyon Özeti</h3>
          <p>Seçilen Koltuk Sayısı: {selectedSeats.length}</p>
          <p>Toplam Tutar: {selectedSeats.length * 1000} TL</p>
        </Summary>

        {/* {passengers.map((passenger, index) => (
          <PassengerForm
            key={index}
            index={index}
            passenger={passenger}
            onChange={handlePassengerChange}
          />
        ))} */}

        <Button type="submit" variant="primary" size="large">
          Rezervasyonu Tamamla
        </Button>
      </FormContainer>
    </form>
  );
};

export default BookingForm;