import { message } from 'antd';
import { Screen } from 'types';

export const activateScreen = async (screen: Screen): Promise<void> => {
  await setTimeout(() => {
    message.success(`Pomyślnie aktywowano wyświetlacz ${screen.title}`)
  })
};


export const deactivateScreen = async (screen: Screen): Promise<void> => {
  await setTimeout(() => {
    message.success(`Pomyślnie dezaktywowano wyświetlacz ${screen.title}`)
  })
};

export const deleteScreen = async (screen: Screen): Promise<void> => {
  await setTimeout(() => {
    message.success(`Pomyślnie usunięto wyświetlacz ${screen.title}`)
  })
};
