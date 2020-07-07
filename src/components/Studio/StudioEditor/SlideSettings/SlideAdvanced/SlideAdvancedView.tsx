import React from 'react';
import { Button } from 'antd';
import { SettingOutlined } from '@ant-design/icons';

import { BasicSlidePartsFragment } from 'generated/graphql';
import SlideAdvancedModal from './SlideAdvancedModal';

interface Props {
  slide: BasicSlidePartsFragment;
}

const SlideAdvanced: React.FC<Props> = ({ slide }: Props) => {
  const [visible, setVisible] = React.useState<boolean>(false);

  const handleClick = (): void => (
    setVisible(true)
  );

  const handleCreate = async (values: any) => {
    setVisible(false);
  };

  const handleClose = () => (
    setVisible(false)
  );

  return (
    <>
      <Button
        size="large"
        onClick={handleClick}
        icon={<SettingOutlined />}
      >
        Zaawansowane
      </Button>
      <SlideAdvancedModal
        visible={visible}
        onClose={handleClose}
        onCreate={handleCreate}
        slide={slide}
      />
    </>
  );
};

export default SlideAdvanced;
