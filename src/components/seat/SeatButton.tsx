import styled from 'styled-components';

interface SeatButtonProps {
  isOccupied: boolean;
  isSelected: boolean;
  isDisabled: boolean;
}

export const SeatButton = styled.button<SeatButtonProps>`
  width: 40px;
  height: 40px;
  border: 1px solid #ccc;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${({ isDisabled, isOccupied }) =>
    isDisabled || isOccupied ? 'not-allowed' : 'pointer'};
  background-color: ${({ isOccupied, isSelected, isDisabled }) => {
    if (isDisabled) return '#ccc';
    if (isOccupied) return '#ff4444';
    if (isSelected) return '#4CAF50';
    return '#fff';
  }};
  opacity: ${({ isDisabled }) => (isDisabled ? 0.5 : 1)};
  transition: all 0.2s ease;

  &:hover:not(:disabled) {
    transform: ${({ isOccupied }) => (isOccupied ? 'none' : 'scale(1.1)')};
  }
`;