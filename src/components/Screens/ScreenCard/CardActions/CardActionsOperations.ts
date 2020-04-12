import { message } from 'antd';
import { Screen } from 'types';
import { client } from 'apollo';
import {
  UpdateScreenDocument,
  UpdateScreenMutation,
  UpdateScreenMutationVariables,
  DeleteScreenDocument,
  DeleteScreenMutation,
  ViewerRolesDocument,
  DeleteScreenMutationVariables,
} from 'generated/graphql';

const updateScreenById = async (variables: UpdateScreenMutationVariables) => (
  client.mutate<UpdateScreenMutation>({
    mutation: UpdateScreenDocument,
    variables,
  })
);

const deleteScreenById = async (variables: DeleteScreenMutationVariables) => (
  client.mutate<DeleteScreenMutation>({
    mutation: DeleteScreenDocument,
    variables,
    refetchQueries: [{
      query: ViewerRolesDocument,
    }]
  })
);

export const activateScreen = async (screen: Screen): Promise<void> => {
  const variables: UpdateScreenMutationVariables = {
    id: parseInt(screen.id, 10),
    values: {
      isActive: true,
    }
  };

  try {
    await updateScreenById(variables);
    message.success(`Pomyślnie aktywowano wyświetlacz ${screen.title}`);
  } catch (e) {
    console.error(e);
    message.error(`Wystąpił błąd przy aktywacji wyświetlacza ${screen.title}`)
  }
};


export const deactivateScreen = async (screen: Screen): Promise<void> => {
  const variables: UpdateScreenMutationVariables = {
    id: parseInt(screen.id, 10),
    values: {
      isActive: false,
    }
  };

  try {
    await updateScreenById(variables);
    message.success(`Pomyślnie dezaktywowano wyświetlacz ${screen.title}`);
  } catch (e) {
    console.error(e);
    message.error(`Wystąpił błąd przy dezaktywacji wyświetlacza ${screen.title}`)
  }
};

export const deleteScreen = async (screen: Screen): Promise<void> => {
  const variables: DeleteScreenMutationVariables = {
    id: parseInt(screen.id, 10),
  };

  try {
    await deleteScreenById(variables);
    message.success(`Pomyślnie usunięto wyświetlacz ${screen.title}`);
  } catch (e) {
    console.error(e);
    message.error(`Wystąpił błąd przy usuwaniu wyświetlacza ${screen.title}`)
  }
};
