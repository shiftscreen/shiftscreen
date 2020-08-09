import { Api } from 'constants/index';
import { client } from 'apollo';
import { RefreshTokenDocument, RefreshTokenMutation, RevokeTokenDocument } from 'generated/graphql';
import dayjs from 'dayjs';

export const login = (accessToken: string, tokenExpirationTimestamp: number) => {
  localStorage.setItem(Api.token, accessToken);
  localStorage.setItem(Api.tokenExpiration, tokenExpirationTimestamp.toString());
  client.writeData({ data: { isLoggedIn: true } });
};

interface RefreshArgs {
  soft?: boolean;
}

export const refreshToken = async (
  { soft = false }: RefreshArgs = {}
): Promise<boolean> => {
  const result = await client.mutate<RefreshTokenMutation>({
    mutation: RefreshTokenDocument
  });

  if (result?.data?.refreshToken) {
    const { accessToken, expiresIn } = result.data.refreshToken;
    const tokenExpirationTimestamp = dayjs().add(expiresIn, 'second').unix();

    localStorage.setItem(Api.token, accessToken);
    localStorage.setItem(Api.tokenExpiration, tokenExpirationTimestamp.toString());

    if (!soft) {
      await client.resetStore();
    }

    return true;
  }

  return false;
};

interface LogoutArgs {
  soft?: boolean;
}

export const logout = async (
  { soft = false }: LogoutArgs = {}
) => {
  if (!soft) {
    await client.mutate({
      mutation: RevokeTokenDocument
    });
  }

  localStorage.removeItem(Api.token);
  localStorage.removeItem(Api.tokenExpiration);

  client.writeData({ data: { isLoggedIn: false } });
};
