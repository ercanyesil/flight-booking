import { useState, useEffect } from 'react';
import { Seat } from '@/types';
import { generateSeatLayout } from '@/utils/helpers';

export const useSeats = () => {
  const [seats, setSeats] = useState<Seat[]>([]);
  const [selectedSeats, setSelectedSeats] = useState<Seat[]>([]);

  // İlk yükleme ve localStorage yönetimi
  useEffect(() => {
    setSeats(generateSeatLayout());
    
    if (typeof window !== 'undefined') {
      const savedSelected = localStorage.getItem('selectedSeats');
      if (savedSelected) {
        setSelectedSeats(JSON.parse(savedSelected));
      }
      
      const savedOccupiedSeats = localStorage.getItem('occupiedSeats');
      if (savedOccupiedSeats) {
        const occupiedSeatsIds = JSON.parse(savedOccupiedSeats);
        setSeats(prev => prev.map(seat => ({
          ...seat,
          isOccupied: seat.isOccupied || occupiedSeatsIds.includes(seat.id),
          isDisabled: seat.isDisabled || occupiedSeatsIds.includes(seat.id)
        })));
      }
    }
  }, []);

  return {
    seats,
    setSeats,
    selectedSeats,
    setSelectedSeats
  };
};
