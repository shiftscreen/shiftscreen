import React from 'react';
import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

import { useAddAppInstanceMutation } from 'generated/graphql';
import { BasicAppInstancePartsFragment, Module } from 'types';
import { getDefaultValues, updateCache } from './ModuleInstanceAddCardUtils';
import { handleError } from '../../../utils';

interface Props {
  module: Module;
  onCreate(instance: BasicAppInstancePartsFragment): void;
}

const ModuleInstanceAddCard: React.FC<Props> = ({ module, onCreate }: Props) => {
  const [addAppInstance, { loading }] = useAddAppInstanceMutation({
    update: (proxy, mutationResult) => updateCache(proxy, mutationResult, module)
  });
  const defaultValues = getDefaultValues(module);

  const handleClick = async () => {
    try {
      await addAppInstance({
        variables: {
          values: defaultValues
        }
      }).then(result => {
        if (result.data) {
          onCreate(result.data.addAppInstance)
        }
      })
    } catch (e) {
      handleError(e);
    }
  };

  return (
    <Button
      icon={<PlusOutlined />}
      onClick={handleClick}
      loading={loading}
      disabled={loading}
      style={{
        height: '5rem',
        background: '#FAFAFA',
      }}
    >
      Nowa instancja
    </Button>
  );
};

export default ModuleInstanceAddCard;
