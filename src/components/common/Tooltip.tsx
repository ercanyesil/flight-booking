import React from 'react';
import styled from 'styled-components';

interface TooltipProps {
  children: React.ReactNode;
  text: string;
  showTooltip?: boolean;
}

const TooltipContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const TooltipText = styled.span`
  visibility: hidden;
  background-color: black;
  color: white;
  text-align: center;
  padding: 5px;
  border-radius: 6px;
  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
  transition: opacity 0.3s;

  ${TooltipContainer}:hover & {
    visibility: visible;
    opacity: 1;
  }
`;

const Tooltip: React.FC<TooltipProps> = ({ children, text, showTooltip = true }) => {
  if (!showTooltip || !text) return <>{children}</>;
  
  return (
    <TooltipContainer>
      {children}
      <TooltipText>{text}</TooltipText>
    </TooltipContainer>
  );
};

export default Tooltip; 