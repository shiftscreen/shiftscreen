import React from 'react';
import { generatePath, useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Container, Inner, BackButton, Title } from './StudioHeaderStyle';
import { PanelTypes, Path, ScreenTypes, useUpdateScreenMutation } from 'types';
import { message } from 'antd';

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
      </Inner>
    </Container>
  );
};

export default StudioHeader;
