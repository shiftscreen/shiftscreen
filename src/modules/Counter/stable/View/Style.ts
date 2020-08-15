import styled from 'styled-components';
import { Slides } from 'constants/index';

const size = Slides.size.base;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 1fr 1.5fr;
  width: ${size.width}px;
  height: ${size.height}px;
  background: #FAFAFA;
`;

export const LabelContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 864px;
  height: 100%;
  margin: auto;
`;

export const LabelInner = styled.div`
  text-align: center;
  font-weight: 800;
  font-size: 48px;
  line-height: 1.2;
  color: #2D313A;
  text-transform: uppercase;
  word-break: break-word;

  span {
    color: #43B2FF;
  }
`;

export const DateContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 48px;
  background: #F2F2F2;
`;

export const DateInner = styled.div`
  text-align: center;
  font-weight: 800;
  font-size: 48px;
  line-height: 1.2;
  color: #2D313A;
  text-transform: uppercase;

  span {
    font-size: 144px;
    color: #43B2FF;
  }
`;

export const CompletedContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${size.width}px;
  height: ${size.height}px;
  background: #43B2FF;
`;

export const CompletedInner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const CompletedIconWrapper = styled.div`
  margin-bottom: 64px;

  svg {
    font-size: 120px;
    color: #FFF;
  }
`;

export const CompletedText = styled(LabelInner)`
  color: #FFF;
  width: 864px;
`;

