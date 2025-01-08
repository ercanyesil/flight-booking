import { Seat, Passenger } from '../types';

export const SEAT_PRICE = 1000;
export const MAX_PASSENGERS = 3;
export const INACTIVITY_TIMEOUT = 30000; // 30 saniye

export const generateSeatLayout = (): Seat[] => {
  const seats: Seat[] = [];

  for (let i = 1; i <= 76; i++) {
    seats.push({
      id: i,
      number: i.toString(),
      isOccupied: i <= 10,
      isSelected: false,
      isDisabled: i <= 10
    });
  }
  return seats;
};

export const calculateTotalPrice = (selectedSeats: Seat[]): number => {
  return selectedSeats.length * SEAT_PRICE;
};

export const validatePassengerForm = (formData: Passenger): boolean => {
  const requiredFields: (keyof Passenger)[] = ['isim', 'soyisim', 'telefon', 'email', 'cinsiyet', 'dogumTarihi'];
  return requiredFields.every(field => formData[field] && formData[field].trim() !== '');
};