import styled from 'styled-components';

export const SeatMapContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px 0;
`;

export const PlaneContainer = styled.div`
  width: 300px;
  background: white;
  padding: 40px 20px;
  border-radius: 150px 150px 0 0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
  margin-bottom: 20px;
`;

export const SeatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 8px;
  padding: 20px 10px;
`;

interface SeatButtonProps {
  isOccupied: boolean;
  isSelected: boolean;
}

export const SeatButton = styled.button<SeatButtonProps>`
  width: 35px;
  height: 35px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: ${props => 
    props.isOccupied ? '#ccc' : 
    props.isSelected ? '#ffd700' : '#fff'};
  cursor: ${props => props.isOccupied ? 'not-allowed' : 'pointer'};
  transition: all 0.2s ease;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover:not(:disabled) {
    transform: scale(1.1);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

export const SeatLegend = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;
  justify-content: center;
  padding: 10px;
  background-color: #f8f9fa;
  border-radius: 4px;
`;

export const LegendItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
`;

interface LegendBoxProps {
  color: string;
}

export const LegendBox = styled.div<LegendBoxProps>`
  width: 20px;
  height: 20px;
  background-color: ${props => props.color};
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const SeatInfo = styled.div`
  text-align: center;
  margin-top: 20px;
  padding: 10px;
  background-color: #f8f9fa;
  border-radius: 4px;
  font-size: 14px;
  color: #666;
`;

export const SeatPrice = styled.span`
  font-weight: 600;
  color: #28a745;
`;

export const SeatWarning = styled.div`
  color: #dc3545;
  font-size: 14px;
  text-align: center;
  margin-top: 10px;
`;
