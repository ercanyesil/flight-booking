import axios from 'axios';
import { Passenger } from '../types';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

interface User {
  id: number;
  name: string;
}

interface ReservationResponse {
  success: boolean;
  message: string;
  data: {
    passengers: Passenger[];
    selectedSeats: string[];
    timestamp: string;
  };
}

export const fetchOccupiedSeatsInfo = async () => {
  try {
    const response = await axios.get<User[]>(API_URL);
    return response.data.slice(0, 10).map(user => ({
      seatId: user.id,
      passengerName: user.name
    }));
  } catch (error) {
    console.error('Yolcu verisi çekilirken hata oluştu:', error);
    return [];
  }
};

export const submitReservation = async (passengers: Passenger[], selectedSeats: string[]) => {
  try {
    const reservationData = {
      passengers,
      selectedSeats,
      timestamp: new Date().toISOString(),
    };
    
    return new Promise<ReservationResponse>((resolve) => {
      setTimeout(() => {
        resolve({ success: true, message: 'Rezervasyon başarıyla tamamlandı', data: reservationData });
      }, 1000);
    });
  } catch (error) {
    console.error('Rezervasyon gönderilirken hata oluştu:', error);
    throw error;
  }
};