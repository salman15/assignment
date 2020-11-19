import React from "react";
import styled from "styled-components";

interface DefaultLayoutProps {
  children: React.ReactNode;
}

export const Container: React.FC<DefaultLayoutProps> = ({ children }) => {
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

export const WarningText: React.FC<DefaultLayoutProps> = ({ children }) => {
  return <WarningTextLayout>{children}</WarningTextLayout>;
};

const WarningTextLayout = styled.p`
  color: red;
`;

export const Column: React.FC<DefaultLayoutProps> = ({ children }) => {
  return <ColumnLayout>{children}</ColumnLayout>;
};

const ColumnLayout = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px;
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
`;
