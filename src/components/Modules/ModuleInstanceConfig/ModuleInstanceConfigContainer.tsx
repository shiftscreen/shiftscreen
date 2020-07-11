import React from 'react';
import * as R from 'ramda';
import { Formik } from 'formik';
import { Alert, Spin } from 'antd';
import { Form } from 'formik-antd';
import { LoadingOutlined } from '@ant-design/icons';
import loadable, { LoadableComponent } from '@loadable/component';
import AwesomeDebouncePromise from 'awesome-debounce-promise';
import useConstant from 'use-constant';

import { BasicAppInstancePartsFragment } from 'generated/graphql';
import { SpinnerContainer } from './ModuleInstanceConfigStyle';
import { getDefaultConfig } from './ModuleInstanceConfigUtils';

const { ErrorBoundary } = Alert;

interface Props {
  instance: BasicAppInstancePartsFragment;
  onChange(config: string): void;
}

const ModuleInstanceConfig: React.FC<Props> = ({ instance, onChange }: Props) => {
  const config = JSON.parse(instance.config);

  const ModuleConfig = React.useMemo(() => (
    loadable(() => (
        import(`modules/${instance.appId}/${instance.appVersion}/Config`)
      ),
      {
        cacheKey: () => (
          `${instance.appId}/${instance.appVersion}/Config`
        ),
      }
    )
  ), [instance.appId]);

  const defaultConfig = getDefaultConfig(instance);
  const mergedConfig: any = R.mergeLeft(config, defaultConfig);

  return (
    <ErrorBoundary>
      <ConfigForm
        onChange={onChange}
        config={mergedConfig}
        instance={instance}
        ModuleConfig={ModuleConfig}
      />
    </ErrorBoundary>
  )
};

interface FormProps {
  onChange(config: string): void;
  config: Object;
  instance: BasicAppInstancePartsFragment;
  ModuleConfig: LoadableComponent<any>;
}

const ConfigForm: React.FC<FormProps> = ({ onChange, instance, config, ModuleConfig }: FormProps) => {
  const indicator = (
    <LoadingOutlined style={{ fontSize: 24 }} spin />
  );

  const spinner = (
    <SpinnerContainer>
      <Spin
        style={{ padding: 48 }}
        indicator={indicator}
      />
    </SpinnerContainer>
  );

  const layout = {
    labelCol: { span: 10 },
    wrapperCol: { span: 14 },
  };

  const debouncedOnChange = React.useCallback(
    AwesomeDebouncePromise(onChange, 200),
    [instance.id],
  );

  const handleSubmit = (values: Object) => (
    debouncedOnChange(JSON.stringify(values))
  );

  return (
    <Formik<Object>
      initialValues={config}
      onSubmit={handleSubmit}
      enableReinitialize
    >
      {({ submitForm, ...props }) => (
        <Form
          name="module-instance-config-form"
          layout="horizontal"
          onChange={submitForm}
          {...layout}
          {...props}
        >
          <ModuleConfig
            submitForm={submitForm}
            fallback={spinner}
          />
        </Form>
      )}
    </Formik>
  );
};

export default ModuleInstanceConfig;
