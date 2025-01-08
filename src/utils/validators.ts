import { Passenger } from '@/types';

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePhone = (phone: string): boolean => {
  const phoneRegex = /^5[0-9]{9}$/;
  return phoneRegex.test(phone);
};

export const validateAge = (birthDate: string): boolean => {
  const today = new Date();
  const birth = new Date(birthDate);
  let calculatedAge = today.getFullYear() - birth.getFullYear();
  const monthDiff = today.getMonth() - birth.getMonth();
  
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    calculatedAge--;
  }
  
  return calculatedAge >= 12;
};

export const validatePassenger = (passenger: Passenger): { isValid: boolean; errors: string[] } => {
  const errors: string[] = [];

  if (!passenger.isim.trim()) errors.push('İsim alanı zorunludur');
  if (!passenger.soyisim.trim()) errors.push('Soyisim alanı zorunludur');
  if (!passenger.email.trim()) {
    errors.push('E-posta alanı zorunludur');
  } else if (!validateEmail(passenger.email)) {
    errors.push('Geçerli bir e-posta adresi giriniz');
  }
  if (!passenger.telefon.trim()) {
    errors.push('Telefon alanı zorunludur');
  } else if (!validatePhone(passenger.telefon)) {
    errors.push('Geçerli bir telefon numarası giriniz (5XX XXX XX XX)');
  }
  if (!passenger.cinsiyet) errors.push('Cinsiyet seçimi zorunludur');
  if (!passenger.dogumTarihi) {
    errors.push('Doğum tarihi zorunludur');
  } else if (!validateAge(passenger.dogumTarihi)) {
    errors.push('Yetişkin yolcu için yaş sınırı 12+ olmalıdır');
  }

  return {
    isValid: errors.length === 0,
    errors
  };
};