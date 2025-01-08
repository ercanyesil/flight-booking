import { useState, useEffect } from 'react';
import { Passenger } from '@/types';

export const usePassengers = (selectedSeatsLength: number) => {
  const [passengers, setPassengers] = useState<Passenger[]>([]);
  const [formValidations, setFormValidations] = useState<boolean[]>([]);

  useEffect(() => {
    if (selectedSeatsLength > passengers.length) {
      const newPassengers = [...passengers];
      for (let i = passengers.length; i < selectedSeatsLength; i++) {
        newPassengers.push({
          isim: '',
          soyisim: '',
          telefon: '',
          email: '',
          cinsiyet: '',
          dogumTarihi: ''
        });
      }
      setPassengers(newPassengers);
    } else if (selectedSeatsLength < passengers.length) {
      setPassengers(prev => prev.slice(0, selectedSeatsLength));
    }
  }, [selectedSeatsLength, passengers]);

  const handlePassengerChange = (index: number, field: keyof Passenger, value: string) => {
    setPassengers(prev => {
      const newPassengers = [...prev];
      if (newPassengers[index]) {
        newPassengers[index] = {
          ...newPassengers[index],
          [field]: value
        };
      }
      return newPassengers;
    });
  };

  return {
    passengers,
    formValidations,
    setFormValidations,
    handlePassengerChange
  };
}; 