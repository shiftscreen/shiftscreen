import React from 'react';
import { Alert, Input, Modal } from 'antd';
import { useAddScreenKeyMutation } from 'generated/graphql';
import { Path, ScreenTypes } from 'types';
import { generatePath } from 'react-router';
import { ErrorAlert } from '../../../shared';
import { Card, Inner, Text } from './ScreenAddKeyModalStyle';

const { Search } = Input;

interface Props {
  visible: boolean;
  onClose: () => void;
  screen: ScreenTypes.ScreenExtended;
}

const ScreenAddKeyModal: React.FC<Props> = ({ screen, visible, onClose }: Props) => {
  const [addFileKey, { data, error, loading }] = useAddScreenKeyMutation();

  const handleAuthorize = (privateKey: string) => {
    try {
      addFileKey({
        variables: {
          screenId: parseInt(screen.id, 10),
          privateKey,
        }
      })
    } catch (e) {
      console.error(e)
    }
  };

  const handleCloseClick = () => (
    onClose()
  );

  const path = generatePath(Path.Show, {
    id: screen.id,
    publicKey: screen.publicKey,
  });

  return (
    <Modal
      title="Autoryzacja wyświetlacza"
      visible={visible}
      onCancel={handleCloseClick}
      footer={null}
    >
      <Inner>
        <Text>
          Wejdź w poniższy link na twoim ekranie
        </Text>
        <Card>
          {`${window.location.origin}${path}`}
        </Card>
        <Text>
          i podaj poniżej kod, który się na nim wyświetla
        </Text>
        <Search
          placeholder="123-123-123"
          enterButton="Autoryzuj"
          size="large"
          onSearch={handleAuthorize}
          loading={loading}
        />
        {error && (
          <ErrorAlert error={error} />
        )}
        {data && (
          <Alert
            message="Pomyślnie autoryzowano wyświetlacz"
            type="success"
            showIcon
          />
        )}
      </Inner>
    </Modal>
  );
};

export default ScreenAddKeyModal;
