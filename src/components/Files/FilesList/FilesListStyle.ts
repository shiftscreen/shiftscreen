import styled from 'styled-components';
import { Table as AntdTable } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Table = styled(AntdTable)`
  border-radius: .5rem;

  th.ant-table-cell {
    font-weight: 600;
  }
  
  .ant-typography-edit-content {
    margin: 0 0 0 1rem;
  }
`;

export const FAIcon = styled(FontAwesomeIcon)`
  color: #8249FB;
`;
