import styled from 'styled-components';

interface InputProps {
  error?: boolean;
  fullWidth?: boolean;
}

const Input = styled.input<InputProps>`
  padding: 0.75rem 1rem;
  border: 1px solid ${props => props.error ? '#ff4444' : '#ddd'};
  border-radius: 4px;
  font-size: 1rem;
  width: ${props => props.fullWidth ? '100%' : 'auto'};
  transition: border-color 0.2s ease;

  &:focus {
    outline: none;
    border-color: #007bff;
  }

  &:disabled {
    background-color: #f5f5f5;
    cursor: not-allowed;
  }
`;

export default Input;