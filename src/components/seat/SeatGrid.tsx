import styled from 'styled-components';
import { Seat } from '@/types';
import {SeatButton} from '@/components/seat/SeatButton';

interface SeatGridProps {
  seats: Seat[];
  selectedSeats: number[];
  onSeatSelect: (seatId: number) => void;
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 0.5rem;
  padding: 1rem;
`;

const SeatGrid: React.FC<SeatGridProps> = ({ seats, selectedSeats, onSeatSelect }) => {
  return (
    <Grid>
      {seats.map((seat) => (
        <SeatButton
          key={seat.id}
          isOccupied={seat.isOccupied}
          isSelected={selectedSeats.includes(seat.id)}
          isDisabled={seat.isDisabled}
          onClick={() => onSeatSelect(seat.id)}
        >
          {seat.number}
        </SeatButton>
      ))}
    </Grid>
  );
};

export default SeatGrid;