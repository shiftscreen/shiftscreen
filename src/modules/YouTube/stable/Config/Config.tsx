import React from 'react';
import { Form, Input, Checkbox } from 'formik-antd';
import { ModuleConfigProps } from 'types';
import { Alert, Divider } from 'antd';

const Config: React.FC<ModuleConfigProps> = () => (
  <>
    <Alert
      type="info"
      message="Jeśli chcesz ukryć reklamy, zainstaluj w przeglądarce ekranu rozszerzenie blokujące"
    />
    <Divider/>
    <Form.Item
      name="url"
      label="Link"
    >
      <Input name="url" />
    </Form.Item>
    <Form.Item
      name="mute"
      label="Wycisz"
    >
      <Checkbox name="mute" />
    </Form.Item>
  </>
);

export default React.memo(Config);
