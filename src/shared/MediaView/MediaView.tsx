import React from 'react';
import { useFileLinkByKeyLazyQuery } from 'generated/graphql';

import { MediaType, MediaSource } from './MediaViewTypes';

interface Props {
  type: MediaType;
  source: MediaSource;
  alt?: string;
  className?: string;
}

const MediaView: React.FC<Props> = ({ type, source, ...props }: Props) => {
  const [url, setUrl] = React.useState<string | undefined>();
  const [fileLink] = useFileLinkByKeyLazyQuery({
    onCompleted: (data) => setUrl(data.fileKey.file.link.url)
  });

  const getUrlByKey = async () => {
    if (source.key) {
      try {
        const { id, key } = source.key;

        await fileLink({
          variables: {
            fileKey: { id, key },
          }
        })
      } catch (e) {
        console.error(e)
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

  return (
    <img src={url} alt={url} {...props}/>
  )
};

export default MediaView;
