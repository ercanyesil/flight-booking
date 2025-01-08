import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #3681CB;
  /* box-shadow: 0 2px 4px rgba(0,0,0,0.1); */
  padding: 1rem 2rem;
`;

const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.h1`
  color: white;
  font-size: 1.5rem;
  margin: 0;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Nav>
        <Logo>Uçak Rezervasyon Sistemi</Logo>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;