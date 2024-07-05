import { CenteredHeaderContent, HeaderContainer, Title, HeaderContent, Logo } from '../style/headerStyle.js';
import logo from './assets/naver_logo.svg';
import styled from 'styled-components';


function Header() {
  return (
    <div className="App">
      <HeaderContainer>
       <Logo src={logo} alt="logo" />
       </HeaderContainer>
      <HeaderContainer>
        <Title>네이버 카페 클론</Title>
      </HeaderContainer>
    </div>
  );
}
export default Header;
