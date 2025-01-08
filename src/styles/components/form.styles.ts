import styled from 'styled-components';

export const FormSection = styled.div`
  background-color: #ffffff;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  }
`;

export const FormTitle = styled.h3`
  color: #333;
  margin-bottom: 20px;
  font-size: 1.2rem;
  font-weight: 600;
  padding-bottom: 10px;
  border-bottom: 2px solid #007bff;
  display: inline-block;
`;

export const FormGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const FormField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const Label = styled.label`
  font-size: 0.9rem;
  color: #495057;
  font-weight: 500;
  margin-bottom: 4px;
`;

export const Input = styled.input`
  padding: 12px 16px;
  border: 1px solid #ced4da;
  border-radius: 6px;
  font-size: 15px;
  background-color: #fff;
  transition: all 0.2s ease-in-out;
  color: #495057;
  width: 100%;
  box-sizing: border-box;

  &:not(:focus) {
    background-color: #f8f9fa;
  }

  &:focus {
    outline: none;
    border-color: #80bdff;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
    background-color: #fff;
  }

  &:hover:not(:focus) {
    border-color: #adb5bd;
    background-color: #f8f9fa;
  }

  &:invalid {
    border-color: #dc3545;
    box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);
  }

  &::placeholder {
    color: #adb5bd;
    font-size: 14px;
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #0069d9;
    transform: translateY(-1px);
  }

  &:disabled {
    background-color: #b3d7ff;
    cursor: not-allowed;
    transform: none;
  }

  &:active {
    transform: translateY(1px);
  }
`;

export const ErrorMessage = styled.span`
  color: #dc3545;
  font-size: 12px;
  margin-top: 4px;
`;

export const TotalPrice = styled.div`
  margin: 20px 0;
  padding: 15px;
  margin-top: 50px;
  border-radius: 4px;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #856404;

  .selected-seats {
    display: flex;
    gap: 5px;
    align-items: center;
  }

  .seat-number {
    background-color: #ffd700;
    padding: 5px 10px;
    border-radius: 4px;
    border: 1px solid #d39e00;
  }

  .total-amount {
    color: green;
    font-size: 1.1em;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 5px;

    .calculation {
      font-size: 0.8em;
      color: #666;
    }
  }
`;

export const Select = styled.select`
  padding: 12px 16px;
  border: 1px solid #ced4da;
  border-radius: 6px;
  font-size: 15px;
  background-color: #fff;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  color: #495057;
  width: 100%;
  box-sizing: border-box;
  appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23495057' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 12px center;
  background-size: 16px;

  &:focus {
    outline: none;
    border-color: #80bdff;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }

  &:hover {
    border-color: #adb5bd;
  }

  &:invalid {
    color: #757575;
  }

  option {
    color: #495057;
    padding: 8px;
  }

  option:first-child {
    color: #757575;
  }
`;
