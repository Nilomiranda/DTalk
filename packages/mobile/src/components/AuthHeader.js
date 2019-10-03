import React from 'react';
import styled from 'styled-components/native';

const HeaderContainer = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 170px;
`;

const HeaderTitle = styled.Text`
  font-size: 46px;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #000;
`;

const AuthHeader = () => (
  <HeaderContainer>
    <HeaderTitle>Dtalk</HeaderTitle>
  </HeaderContainer>
);

export default AuthHeader;
