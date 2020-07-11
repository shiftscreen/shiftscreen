import styled from 'styled-components';
import { Button, Typography } from 'antd';

export const Container = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: auto 4rem;
`;

export const Inner = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  border-radius: 7px;
  overflow: hidden;
  font-weight: 600;
  font-size: 16px;
  border: 1px solid rgb(240, 239, 242);
`;

export const UnlinkButton = styled(Button)`
  height: 5.6rem;
  width: 4rem;
`;

export const ModuleTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  color: #FFF;
  border-bottom: 1px solid rgb(240, 239, 242);
  
  svg { 
    margin-right: 0.5em;
  }
`;

export const InstanceTitle = styled(Typography.Text)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 20rem;
  
  &.ant-typography-edit-content {
    left: 0;
    margin: 0;
  }
  
  .ant-input {
    resize: none;
    padding: 0;
    background: none;
    border: 0;
    margin: 0;
    max-width: 12rem;
    font-size: 16px;
  }
`;
