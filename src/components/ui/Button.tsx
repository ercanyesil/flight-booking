import styled, { css } from 'styled-components';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
}

const Button = styled.button<ButtonProps>`
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.2s ease;

  ${props => props.fullWidth && css`
    width: 100%;
  `}

  ${props => {
    switch (props.size) {
      case 'small':
        return css`
          padding: 0.5rem 1rem;
          font-size: 0.875rem;
        `;
      case 'large':
        return css`
          padding: 1rem 2rem;
          font-size: 1.125rem;
        `;
      default:
        return css`
          padding: 0.75rem 1.5rem;
          font-size: 1rem;
        `;
    }
  }}

  ${props => {
    switch (props.variant) {
      case 'secondary':
        return css`
          background-color: #f5f5f5;
          color: #333;
          &:hover {
            background-color: #e0e0e0;
          }
        `;
      case 'danger':
        return css`
          background-color: #ff4444;
          color: white;
          &:hover {
            background-color: #ff1111;
          }
        `;
      default:
        return css`
          background-color: #007bff;
          color: white;
          &:hover {
            background-color: #0056b3;
          }
        `;
    }
  }}

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export default Button;