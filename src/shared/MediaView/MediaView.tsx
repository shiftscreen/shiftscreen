import React from 'react';
import { useFileLinkByKeyLazyQuery } from 'generated/graphql';

import { MediaType, MediaSource } from './MediaViewTypes';

interface Props {
  type: MediaType;
  source: MediaSource;
  className?: string;
}

const MediaView: React.FC<Props> = ({ type, source, ...props }: Props) => {
  const [url, setUrl] = React.useState<string | undefined>(source.url);
  const [fileLink] = useFileLinkByKeyLazyQuery({
    onCompleted: (data) => setUrl(data.fileKey.file.link.url)
  });

  const getUrlByKey = () => {
    if (source.key) {
      try {
        fileLink({
          variables: {
            fileKey: source.key
          }
        })
      } catch (e) {
        console.error(e)
      }
    }
  };

  React.useEffect(getUrlByKey, []);

  if (!url) {
    return null;
  }

  return (
    <img src={url} {...props}/>
  )
};

export default MediaView;
