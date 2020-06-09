import React from 'react';
import { BasicSlidePartsFragment } from 'generated/graphql';
import { getModuleVersion } from 'utils';
import { DefaultModule } from 'modules';

interface Props {
  slide: BasicSlidePartsFragment;
}

const SlidePreview: React.FC<Props> = ({ slide }: Props) => {
  const { appInstance } = slide;

  if (!appInstance) return (
    <DefaultModule/>
  );

  const { appId, appVersion, config } = appInstance;
  const Module = getModuleVersion(appId, appVersion);
  const moduleConfig = JSON.parse(config);

  if (!Module) return (
    <DefaultModule/>
  );

  return (
    <Module.View config={moduleConfig}/>
  );
};

export default SlidePreview;
