import React from 'react';
import { useParams } from 'react-router';
import { ErrorAlert } from 'shared';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

import { useScreenExtendedByIdQuery } from 'generated/graphql';
import { LoadingContainer } from './StudioStyle';
import { Header } from 'components/Studio';
import StudioSlidesList from '../../components/Studio/StudioSlidesList';

interface Params {
  id: string;
}

const Studio: React.FC = () => {
  const { id } = useParams<Params>();
  const { data, error, loading } = useScreenExtendedByIdQuery({
    variables: { id: parseInt(id, 10) },
  });

  const loadingIndicator = (
    <LoadingOutlined style={{ fontSize: 48 }} spin />
  );

  if (loading) return (
    <LoadingContainer>
      <Spin indicator={loadingIndicator} />
    </LoadingContainer>
  );

  if (!data || error) return (
    <ErrorAlert error={error}/>
  );

  return (
    <div>
      <Header screen={data.screen}/>
      <StudioSlidesList/>
    </div>
  );
};

export default Studio;
