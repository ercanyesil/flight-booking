import { useState, useEffect } from 'react';
import { INACTIVITY_TIMEOUT } from '@/utils/helpers';

export const useInactivity = () => {
  const [inactivityTimer, setInactivityTimer] = useState<NodeJS.Timeout | null>(null);
  const [showInactivityModal, setShowInactivityModal] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    window.resetInactivityTimer = () => {
      if (inactivityTimer) clearTimeout(inactivityTimer);
      setInactivityTimer(setTimeout(() => {
        setShowInactivityModal(true);
      }, INACTIVITY_TIMEOUT));
    };

    return () => {
      if (inactivityTimer) clearTimeout(inactivityTimer);
    };
  }, [inactivityTimer]);

  const handleInactivityConfirm = () => {
    setShowInactivityModal(false);
    setInactivityTimer(setTimeout(() => setShowInactivityModal(true), INACTIVITY_TIMEOUT));
  };

  const handleInactivityCancel = () => {
    setShowInactivityModal(false);
    localStorage.removeItem('selectedSeats');
    window.location.reload();
  };

  return {
    showInactivityModal,
    handleInactivityConfirm,
    handleInactivityCancel,
    resetInactivityTimer: typeof window !== 'undefined' ? window.resetInactivityTimer : undefined
  };
}; 