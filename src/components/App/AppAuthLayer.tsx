import React from 'react';
import { Api } from 'constants/index';
import { auth } from 'utils';
import dayjs from 'dayjs';

interface Props {
  children: React.ReactNode;
}

const AppAuthLayer: React.FC<Props> = ({ children }) => {
  const [refreshing, setRefreshing] = React.useState<boolean>(false);

  React.useEffect(() => {
    const interval = setInterval(() => {
      const tokenExpiration = localStorage.getItem(Api.tokenExpiration);
      if (tokenExpiration) {
        const expireTime = parseInt(tokenExpiration, 10);
        const now = dayjs().unix();
        const timeToExpire = expireTime - now;

        if (timeToExpire < 30 && !refreshing) {
          setRefreshing(true);

          auth
            .refreshToken({ soft: true })
            .then((success: boolean) => {
              !success && auth.logout({ soft: true })
            })
            .catch(() => (
              auth.logout({ soft: true })
            ))
            .finally(() => (
              setRefreshing(false)
            ))
        }
      }

    }, 3000);

    return () => (
      clearTimeout(interval)
    );
  }, []);

  return (
   <React.Fragment>
     {children}
   </React.Fragment>
 );
};

export default AppAuthLayer;
