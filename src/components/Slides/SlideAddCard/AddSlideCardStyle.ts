import styled from 'styled-components';

export const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.05);
  border-radius: 7px;
  height: 216px;
  width: 192px;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  border: 0;
  
  svg {
    font-size: 3rem;
    color: rgba(0, 0, 0, 0.1);
  }
  
  &:hover {
    background: rgba(0, 0, 0, 0.075);
  }
`;
