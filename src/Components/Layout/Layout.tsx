import React from "react";
import styled from "styled-components";

interface ContainerProps {
  children: React.ReactNode;
}

export const Container: React.FC<ContainerProps> = ({ children }) => {
  return <ContainerLayout>{children}</ContainerLayout>;
};

const ContainerLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #ededed;
`;
