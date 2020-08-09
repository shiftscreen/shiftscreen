import React from 'react';
import { DeleteOutlined, SettingOutlined } from '@ant-design/icons';
import { red } from '@ant-design/colors';
import { BasicAppInstancePartsFragment } from 'types';
import { message, Modal, Typography } from 'antd';
import { DataProxy } from 'apollo-cache';

import { useDeleteAppInstanceMutation } from 'generated/graphql';
import { updateCache } from './CardActionsUtils';

const { confirm } = Modal;
const { Text } = Typography;

interface Props {
  instance: BasicAppInstancePartsFragment;
}

const CardActions = ({ instance }: Props): JSX.Element[] => [
  <DeleteAction instance={instance}/>,
];

const DeleteAction: React.FC<Props> = ({ instance }: Props) => {
  const [deleteAppInstance] = useDeleteAppInstanceMutation({
    onCompleted: () => (
      message.success('Pomyślnie usunięto instancję')
    ),
    onError: () => (
      message.error('Wystąpił błąd podczas usuwania instancji')
    ),
    update: (cache: DataProxy) => updateCache(cache, instance),
    variables: {
      id: parseInt(instance.id, 10),
    }
  });

  const confirmTitle = (
    <>Czy na pewno chcesz trwale usunąć instancję&nbsp;
      <Text strong>{instance.title}</Text>
      ?
    </>
  );

  const handleDeleteClick = () => (
    confirm({
      title: confirmTitle,
      icon: <DeleteOutlined/>,
      content: 'Tej czynności nie można cofnąć',
      okText: 'Usuń',
      okType: 'danger',
      cancelText: 'Nie',
      onOk: deleteAppInstance,
    })
  );

  return (
    <DeleteOutlined
      key="delete"
      style={{ color: red.primary }}
      onClick={handleDeleteClick}
    />
  );
};

export default CardActions;
