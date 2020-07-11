import styled from 'styled-components';
import { Button as AntdButton } from 'antd';

export const Container = styled.div`
  .ant-radio-group {
    display: grid;
    grid-template-columns: 1fr 1fr;
    
    .ant-radio-button-wrapper {
      text-align: center;
    
      &:first-child {
        border-bottom-left-radius: 0;
      }
      
      &:last-child {
        border-bottom-right-radius: 0;
      }
    }
  }
  
  .ant-input {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
`;

export const Button = styled(AntdButton)`
  border-top-left-radius: 0;
  border-top-right-radius: 0;
`;

export const KeyInputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FileNameContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6.4px 15px;
  font-weight: 600;
  background: #f5f5f5;
  border-left: 1px solid rgb(240, 239, 242);
  border-right: 1px solid rgb(240, 239, 242);
`;
