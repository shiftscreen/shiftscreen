import React from 'react';
import { bootstrap, PRIVATE_KEY_TOKEN } from './ShowUtils';
import { useParams } from 'react-router';
import { useScreenExtendedByKeyQuery } from '../../generated/graphql';
import { KeyContainer } from './ShowStyle';
import WebFont from 'webfontloader';
import ShowView from './ShowView';

WebFont.load({
  google: {
    families: ['Roboto:900,700,600,500']
  },
});

const Show: React.FC = () => {
  const [authorized, setAuthorized] = React.useState<boolean>(false);
  const { publicKey, id } = useParams();
  const privateKey = localStorage.getItem(PRIVATE_KEY_TOKEN);
  const { data, error } = useScreenExtendedByKeyQuery({
    variables: {
      screenKey: {
        publicKey,
        privateKey: privateKey || '',
        screenId: parseInt(id, 10),
      }
    },
    onCompleted: () => setAuthorized(true),
    pollInterval: authorized ? 1000 * 60 * 5 : 1000, // 5 min or 1 s
    notifyOnNetworkStatusChange: true,
  });
  const slides = (data?.screenByKey.slides || []).filter(slide => slide.isActive);

  React.useEffect(() => {
    bootstrap();
  }, []);

  if (!data || error) return (
    <KeyContainer>
      {privateKey}
    </KeyContainer>
  );

  return (
    <ShowView slides={slides} />
  )
};

export default Show;
