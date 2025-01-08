import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

export const AirplaneContainer = styled.div`
  margin: 20px 0;
  text-align: center;
`;

export const SeatGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
  margin: 20px auto;
  max-width: 600px;
`;

export const Seat = styled.button<{ isOccupied: boolean; isSelected: boolean }>`
  padding: 10px;
  border: 1px solid #ccc;
  background-color: ${props => 
    props.isOccupied ? '#ccc' : 
    props.isSelected ? '#ffd700' : '#fff'};
  cursor: ${props => props.isOccupied ? 'not-allowed' : 'pointer'};
`;

export const PassengerForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin: 20px 0;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

export const ErrorMessage = styled.div`
  color: red;
  font-size: 14px;
  margin-top: 5px;
`;

export const PriceDisplay = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin: 20px 0;
`; 