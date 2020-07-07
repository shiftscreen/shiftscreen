import React from 'react';
import { BasicSlidePartsFragment } from 'generated/graphql';
import { DefaultModule } from 'modules';
import * as R from 'ramda';

import { InstancePreview as ModuleInstancePreview } from 'components/Modules';

interface Props {
  slide: BasicSlidePartsFragment;
}

class SlidePreview extends React.Component<Props> {
  shouldComponentUpdate(nextProps: Readonly<Props>): boolean {
    const slideUpdated = R.not(R.equals(nextProps.slide, this.props.slide));
    const appInstanceUpdated = R.not(R.equals(nextProps.slide.appInstance, this.props.slide.appInstance));
    return R.or(slideUpdated, appInstanceUpdated);
  }

  render() {
    const { appInstance } = this.props.slide;

    if (!appInstance) return (
      <DefaultModule/>
    );

    return (
      <ModuleInstancePreview instance={appInstance}/>
    )
  }
}

export default SlidePreview;
