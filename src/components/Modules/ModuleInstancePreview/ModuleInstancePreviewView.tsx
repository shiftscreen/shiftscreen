import React from 'react';
import { Alert } from 'antd';
import loadable from '@loadable/component';

import { BasicAppInstancePartsFragment } from 'generated/graphql';
import { DefaultModule } from 'modules';
import { Container } from './ModuleInstancePreviewStyle';

const { ErrorBoundary } = Alert;

interface Props {
  instance: BasicAppInstancePartsFragment;
}

interface ModuleViewProps extends Props {
  config: any;
}

const ModuleInstancePreview: React.FC<Props> = ({ instance }: Props) => {
  const config = JSON.parse(instance.config);

  const ModuleView = loadable(({ instance }: ModuleViewProps) => (
      import(`modules/${instance.appId}/${instance.appVersion}/View`)
    ),
    {
      cacheKey: ({ instance }: ModuleViewProps) => (
        `${instance.appId}/${instance.appVersion}/View`
      ),
    }
  );

  return (
    <ErrorBoundary>
      <Container>
        <ModuleView
          fallback={<DefaultModule/>}
          instance={instance}
          config={config}
        />
      </Container>
    </ErrorBoundary>
  )
};

export default ModuleInstancePreview;
