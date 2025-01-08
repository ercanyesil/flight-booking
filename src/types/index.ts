export interface Passenger {
  isim: string;
  soyisim: string;
  telefon: string;
  email: string;
  cinsiyet: string;
  dogumTarihi: string;
}

export interface Seat {
  id: number;
  number: string;
  isOccupied: boolean;
  isSelected: boolean;
  isDisabled: boolean;
}

export interface ReservationState {
  selectedSeats: Seat[];
  passengers: Passenger[];
  totalPrice: number;
}