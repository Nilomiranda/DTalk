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
  flex-direction: row;
  width: 300px;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: row;
  color: #000;
`;

const AuthHeader = () => (
  <HeaderContainer>
    <HeaderTitle>Dtalk</HeaderTitle>
  </HeaderContainer>
);

export default AuthHeader;
