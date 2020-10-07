import React, { CSSProperties } from 'react';
import { useFileLinkByKeyLazyQuery } from 'generated/graphql';

import { MediaSource, MediaType } from './MediaViewTypes';
import { handleError } from '../../utils';

interface Props {
  type: MediaType;
  source: MediaSource;
  alt?: string;
  muted?: boolean;
  className?: string;
  style?: CSSProperties;
  onVideoEnded?(): void;
}

const MediaView: React.FC<Props> = ({ type, source, onVideoEnded, ...props }: Props) => {
  const [url, setUrl] = React.useState<string | undefined>();
  const [fileLink] = useFileLinkByKeyLazyQuery({
    onCompleted: (data) => setUrl(data.fileKey.file.link.url),
    pollInterval: 1000 * 60 * 14, // 14 minutes
    notifyOnNetworkStatusChange: true,
  });

  const getUrlByKey = async () => {
    if (source.key) {
      try {
        const { id, key } = source.key;

        await fileLink({
          variables: {
            fileKey: { id, key },
          },
        })
      } catch (e) {
        handleError(e);
      }
    }
  };

  React.useEffect(() => {
    if (source.type == 'key') {
      getUrlByKey();
    } else {
      setUrl(source.url);
    }
  }, [source]);

  if (!url) {
    return null;
  }

  if (type === 'image') return (
    <img
      src={url}
      alt={url}
      {...props}
    />
  );

  return (
    <video
      src={url}
      autoPlay
      onEnded={onVideoEnded}
      {...props}
    />
  );
};

export default MediaView;
