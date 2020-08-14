import styled from 'styled-components';
import { Slides } from 'constants/index';

const size = Slides.size.base;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 4fr 6fr;
  width: ${size.width}px;
  height: ${size.height}px;
`;

interface CardContainerProps {
  centered?: boolean;
}

export const CardContainer = styled.div<CardContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: ${({ centered }) => centered ? 'center' : 'space-between'};
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 64px;
  background: #66BFFC;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 256px;
  height: 256px;
  border-radius: 8px;
  overflow: hidden;
`;

export const CardDay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 75%;
  font-weight: 800;
  font-size: 144px;
  color: #FFF;
  background: #508DB7;
`;

export const CardMonth = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 25%;
  font-weight: 700;
  font-size: 30px;
  text-transform: uppercase;
  color: #FFF;
  background: #407090;
`;

export const Holiday = styled.div`
  padding: 16px;
  background: #D8EFFF;
  color: #66BFFC;
  text-align: center;
  font-weight: 600;
  border-radius: 8px;
  font-size: 24px;
  line-height: 1.2;
`;

interface ListContainerProps {
  centered?: boolean;
}

export const ListContainer = styled.div<ListContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: ${({ centered }) => centered ? 'center' : 'space-between'};
  align-items: center;
  width: 100%;
  height: 100%;
  background: #FAFAFA;
  padding: 64px;
`;

export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(7, auto);
  width: 100%;
  grid-gap: 8px;
  height: 100%;
  max-height: 400px;
`;

export const NameDay = styled.div`
  font-weight: 800;
  font-size: 24px;
  line-height: 1.2;
  color: #508DB7;
  text-transform: uppercase;
  margin-top: 16px;
  margin-right: auto;
  
  span {
    color: #66BFFC;
  }
`;

interface ListElementProps {
  highlighted?: boolean;
  red?: boolean;
}

export const ListElement = styled.div<ListElementProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  width: 100%;
  border-radius: 8px;
  background: #D8EFFF;
  color: #66BFFC;
  font-size: 24px;
  font-weight: 600;
  
  ${({ red }) => red && `
    background: #FFD8D8;
    color: #FC6666;
  `}

  ${({ highlighted, red }) => highlighted && (
    red ? `
      color: #FFD8D8;
      background: #FC6666;
    ` : `
      color: #D8EFFF;
      background: #66BFFC;
    `
  )}
`;

export const ListHeaderElement = styled(ListElement)`
  height: 20px;
  font-size: 18px;
  align-items: flex-start;
  background: transparent;
  color: #508DB7;
`;
