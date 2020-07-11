import styled from 'styled-components';
import { Typography } from 'antd';

export const Container = styled.header`
  padding: 1.5rem;
`;

export const Inner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: calc(1920px - 3rem);
  margin: auto;
`;

export const BackButton = styled.button`
  background: transparent;
  color: #fff;
  border-radius: 7px;
  transition: 0.2s ease-in-out;
  font-size: 1.5rem;
  padding: 0.75rem;
  display: flex;
  
  &:hover {
    background: rgba(255, 255, 255, 0.25);
  }
`;

export const Title = styled(Typography.Title)`
  padding: 0.5rem;
  
  &.ant-typography {
    color: #fff;
    font-size: 1.5rem;
    margin: auto;
    background: rgba(255,255,255,0.1);
    border-radius: 7px;
    
    .anticon {
      color: rgba(255,255,255,0.25);
    }
  }
  
  &.ant-typography-edit-content {
    left: 0;
  }
  
  .ant-input {
    resize: none;
    padding: 0;
    background: none;
    color: #fff;
    font-size: 1.5rem;
    border: 0;
    margin: 0;
  }
`;
