import React from 'react';

import View from './FilesStorageView';
import { useViewerStorageQuery } from 'generated/graphql';
import { Card } from 'antd';
import { ErrorAlert } from '../../../shared';

const FilesStorage: React.FC = () => {
  const { data, loading, error } = useViewerStorageQuery();

  if (loading) return (
    <Card loading/>
  );

  if (error || !data) return (
    <ErrorAlert error={error}/>
  );

  const { usedKilobytes, maxKilobytes } = data.viewer.storage;

  return (
    <View usedKilobytes={usedKilobytes} maxKilobytes={maxKilobytes}/>
  );
};

export default FilesStorage;
