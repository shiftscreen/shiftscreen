import styled from 'styled-components';
import { Slides } from 'constants/index';

const size = Slides.size.base;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  width: ${size.width}px;
  height: ${size.height}px;
  background: #FAFAFA;
`;

export const ClockFaceContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #F2F2F2;
`;

export const ClockFace = styled.div`
  position: relative;
  border-radius: 100%;
  border: 10px solid #43B2FF;
  background: #FFF;
  width: 185px;
  height: 185px;
`;

export const ClockDigitalContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const ClockDigitalInner = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const ClockDigitalText = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  color: #2D313A;
  font-weight: 800;
  font-size: 96px;
  height: 120px;
  
  &:last-child {
    padding-right: 96px;
  }
`;

export const ClockDigitalDate = styled.div`
  padding: 0 96px 0 10px;
  font-size: 64px;
  font-weight: 800;
  text-align: left;
  background: #43B2FF;
  color: #FFF;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  text-transform: uppercase;
  line-height: 1.2;
`;

interface ClockHandProps {
  rotate: number;
}

export const ClockHandMinute = styled.div<ClockHandProps>`
  height: 64px;
  width: 10px;
  border-radius: 10px;
  background: #47A8EC;
  position: absolute;
  left: calc(50% - 5px);
  top: calc(50% - 64px);
  transform-origin: 50% calc(100% - 5px);
  transform: rotate(${({ rotate }) => rotate}deg);
  transition: transform 100ms ease-in-out;
`;

export const ClockHandHour = styled(ClockHandMinute)`
  height: 48px;
  background: #3A92CF;
  top: calc(50% - 48px);
`;
