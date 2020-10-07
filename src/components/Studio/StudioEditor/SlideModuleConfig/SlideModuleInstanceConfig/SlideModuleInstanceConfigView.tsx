import React from 'react';
import AwesomeDebouncePromise from 'awesome-debounce-promise';
import useConstant from 'use-constant';

import { BasicAppInstancePartsFragment, BasicAppInstancePartsFragmentDoc, useUpdateAppInstanceMutation } from 'types';
import { client } from 'apollo';
import { InstanceConfig as ModuleInstanceConfig } from 'components/Modules';
import { Container } from './SlideModuleInstanceConfigStyle';
import { handleError } from '../../../../../utils';

interface Props {
  instance: BasicAppInstancePartsFragment;
}

const SlideModuleInstanceConfig: React.FC<Props> = ({ instance }: Props) => {
  const [updateAppInstance] = useUpdateAppInstanceMutation();

  const debouncedUpdateAppInstance = useConstant(() =>
    AwesomeDebouncePromise(updateAppInstance, 1000)
  );

  const handleUpdate = async (config: string) => {
    try {
      await debouncedUpdateAppInstance({
        variables: {
          id: parseInt(instance.id, 10),
          values: {
            config,
          }
        },
        optimisticResponse: {
          __typename: 'Mutation',
          updateAppInstance: {
            ...instance,
            config,
            __typename: 'AppInstance',
          }
        }
      })
    } catch (e) {
      handleError(e);
    }
  };

  const handleChange = async (config: string) => {
    client.writeFragment({
      id: `AppInstance:${instance.id}`,
      fragment: BasicAppInstancePartsFragmentDoc,
      data: {
        ...instance,
        config,
      }
    });

    await handleUpdate(config);
  };

  return (
    <Container>
      <ModuleInstanceConfig
        onChange={handleChange}
        instance={instance}
      />
    </Container>
  );
};

export default SlideModuleInstanceConfig;
