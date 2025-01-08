import styled, { keyframes } from 'styled-components';

const fly = keyframes`
  0% {
    transform: translateX(-200%) translateY(0) rotate(0deg);
  }
  50% {
    transform: translateX(0) translateY(-50px) rotate(0deg);
  }
  100% {
    transform: translateX(200%) translateY(0) rotate(0deg);
  }
`;

const LoadingOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const LoadingContainer = styled.div`
  text-align: center;
  position: relative;
  width: 300px;
  height: 200px;
`;

const Plane = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: ${fly} 3s ease-in-out infinite;

  svg {
    width: 80px;
    height: 80px;
    fill: #007bff;
  }
`;

const Trail = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, 
    transparent 0%, 
    rgba(0, 123, 255, 0.1) 25%, 
    rgba(0, 123, 255, 0.3) 50%, 
    rgba(0, 123, 255, 0.1) 75%, 
    transparent 100%
  );
`;

const LoadingText = styled.p`
  margin-top: 120px;
  color: #333;
  font-size: 16px;
  font-weight: 500;
`;

interface LoadingProps {
  message?: string;
}

const Loading = ({ message = 'İşleminiz gerçekleştiriliyor...' }: LoadingProps) => {
  return (
    <LoadingOverlay>
      <LoadingContainer>
        <Trail />
        <Plane>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M21,16V14L13,9V3.5A1.5,1.5 0 0,0 11.5,2A1.5,1.5 0 0,0 10,3.5V9L2,14V16L10,13.5V19L8,20.5V22L11.5,21L15,22V20.5L13,19V13.5L21,16Z" />
          </svg>
        </Plane>
        <LoadingText>{message}</LoadingText>
      </LoadingContainer>
    </LoadingOverlay>
  );
};

export default Loading; 