import styled from 'styled-components';

export const Container = styled.div`
  grid-area: preview;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Inner = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 2rem;
`;

export const LeftContainer = styled.div`
  display: grid;
  grid-gap: 2rem;
`;

export const RightContainer = styled.div`
  
`;

export const PreviewContainer = styled.div`
  border: 1px solid #f0f0f0;
  border-radius: 7px;
  overflow: hidden;
`;
