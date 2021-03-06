import styled, { css } from "styled-components";

export const ButtonBase = styled.button<{ disabled: boolean }>`
  border: none;
  padding: 16px 32px;
  border-radius: 4px;
  margin: 16px 0;
  cursor: pointer;
  ${(props) =>
    props.disabled &&
    css`
      opacity: 0.5;
      cursor: not-allowed;
    `};
  :focus {
    outline: none;
  }
`;

export const ButtonStyle = styled(ButtonBase)`
  color: white;
  background-color: #fd6400;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
`;

export const ButtonLink = styled(ButtonBase)`
  text-decoration: underline;
  color: blue;
  padding: 0;
`;
