import React from 'react';
import { generatePath, useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { BackButton, Container, Inner, Title } from './StudioHeaderStyle';
import { PanelTypes, Path, ScreenTypes, useUpdateScreenMutation } from 'types';
import { Button, message } from 'antd';
import ScreenAddKeyModal from '../../Screens/ScreenAddKeyModal';

interface Props {
  screen: ScreenTypes.ScreenExtended;
}

const StudioHeader: React.FC<Props> = ({ screen }: Props) => {
  const history = useHistory();
  const { id, title, color } = screen;

  const [updateScreen] = useUpdateScreenMutation({
    onError: () => message.error('Wystąpił błąd podczas próby aktualizacji ekranu'),
  });

  const handleTitleEdit = async (title: string) => {
    try {
      await updateScreen({
        variables: {
          id: parseInt(id, 10),
          values: { title },
        },
        optimisticResponse: {
          __typename: 'Mutation',
          updateScreen: {
            ...screen,
            title,
            __typename: 'Screen',
          }
        }
      });
    } catch (e) {
      console.error(e);
    }
  };

  const handleBackClick = () => {
    const path = generatePath(Path.PanelElement, {
      element: PanelTypes.PanelPath.Screens,
      id,
    });

    history.push(path);
  };

  const style = {
    backgroundColor: color,
  };

  return (
    <Container style={style}>
      <Inner>
        <BackButton onClick={handleBackClick}>
          <FontAwesomeIcon icon="chevron-left"/>
        </BackButton>
        <Title level={2} editable={{ onChange: handleTitleEdit }}>
          {title}
        </Title>
        <ScreenAuthModal
          screen={screen}
        />
      </Inner>
    </Container>
  );
};

const ScreenAuthModal: React.FC<Props> = ({ screen }) => {
  const [modalVisible, setModalVisible] = React.useState<boolean>(false);

  const handleClose = () => (
    setModalVisible(false)
  );

  const handleButtonClick = () => (
    setModalVisible(true)
  );

  return (
    <>
      <Button
        onClick={handleButtonClick}
        size="large"
        ghost
      >
        Skonfiguruj wyświetlacz
      </Button>
      <ScreenAddKeyModal
        visible={modalVisible}
        onClose={handleClose}
        screen={screen}
      />
    </>
  )
};

export default StudioHeader;
