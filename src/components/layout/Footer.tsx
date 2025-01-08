import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #3681CB;
  padding: 2rem;
  margin-top: auto;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  color: white;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <p>&copy; 2025 Airline Booking. Tüm hakları saklıdır.</p>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;