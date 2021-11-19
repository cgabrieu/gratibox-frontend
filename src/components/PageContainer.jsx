import React from 'react';
import styled from 'styled-components';

export default function PageContainer({ children }) {
  return <Container>{children}</Container>;
}

const Container = styled.div`
  padding: 20px 15px 5px 15px;
  height: 100%;
`;
