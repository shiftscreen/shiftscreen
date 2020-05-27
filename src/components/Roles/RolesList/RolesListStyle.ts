import styled from 'styled-components';
import { Table as AntdTable } from 'antd';
import { Colors } from 'constants/index';

export const Table = styled(AntdTable)`
  border-radius: .5rem;

  th.ant-table-cell {
    font-weight: 600;
  }
  
  a {
    color: ${Colors.grey};
  }
`;
