import React from 'react';

import View from './FilesStorageView';
import { useViewerStorageQuery } from 'generated/graphql';
import { Alert, Card } from 'antd';

const FilesStorage: React.FC = () => {
  const { data, loading, error } = useViewerStorageQuery();

  if (loading) return (
    <Card loading />
  );

  if (error || !data) {
    console.error(error);
    return (
      <Alert
        message="Wystąpił błąd"
        type="error"
        showIcon
      />
    );
  }

  const { usedKilobytes, maxKilobytes } = data.viewer.storage;

  return (
    <View usedKilobytes={usedKilobytes} maxKilobytes={maxKilobytes}/>
  );
};

export default FilesStorage;
