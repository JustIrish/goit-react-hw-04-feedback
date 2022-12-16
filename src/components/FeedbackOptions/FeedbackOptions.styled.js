import styled from 'styled-components';

export const BtnWrap = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
`;

export const BtnOption = styled.button`
  min-width: 70px;
  padding: 8px;
  background-color: #addcde;
  border-radius: 10px;
  text-transform: capitalize;
  border: transparent;
  cursor: pointer;
  box-shadow: 0 5px 10px rgb(0 0 0 / 20%);
  transition: background-color, transform;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: #7fa4a5;
  }

  &:active {
    transform: scale(0.9);
  }
`;
