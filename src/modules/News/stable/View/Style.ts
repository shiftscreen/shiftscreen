import styled, { css } from 'styled-components';
import { Slides } from 'constants/index';
import { MediaView } from 'shared';
import { Typography } from 'antd';

const size = Slides.size.base;

export const Image = styled(MediaView)`
  width: 100%;
  min-width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  
  & > div:not(:last-child) {
    margin-bottom: 32px;
  }
  
  /*@supports (display: grid) {
    display: grid;
    grid-gap: 32px;
    
    & > div:not(:last-child) {
      margin-bottom: 0;
    }
  }*/
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled(Typography.Paragraph)`
  font-size: 36px;
  line-height: 1.2;
  font-weight: 600;
  margin: 0 0 2rem;
  color: #2D313A;
`;

export const Description = styled(Typography.Paragraph)`
  margin: 0;
  padding: 0;
  font-size: 24px;
  line-height: 1.5;
  font-weight: 500;
  color: #4D525C;
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: #2D313A;
  opacity: 0.25;
`;

export const Domain = styled(Typography.Paragraph)`
  font-weight: 700;
  font-size: 24px;
  text-transform: uppercase;
  text-align: right;
  color: #4D525C;
  
  span {
    color: #43B2FF;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 32px;
  background: #FAFAFA;
`;

interface ContainerProps {
  noImage: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-wrap: wrap;
  width: ${size.width}px;
  height: ${size.height}px;
  
  & > img:first-child {
    flex-basis: 50%;
    width: 50%;
    min-width: 50%;
  }

  & > div:last-child {
    flex-basis: 50%;
  }

  @supports (display: grid) {
    display: grid;
    grid-template-columns: 1fr 1fr;

    & > div, & > img {
      flex: 1;
    }
  }
  
  ${({ noImage }) => noImage && css`
    & > div:last-child {
      flex-basis: 100%;
    }

    @supports (display: grid) {
      grid-template-columns: 100%;
    
      & > img:first-child {
        width: 100%;
        min-width: 100%;
      }

      & > img, & > div {
        flex: 1;
      }
    }

    ${Content} {
      background: #51768F;
      padding: 96px;
      
      ${Inner} {
        ${Title}, ${Description}, ${Domain} {
          color: #F4F4F4;
        }
        
        ${Divider} {
          background: #F4F4F4;
        }
      }
    }
  `}
`;
