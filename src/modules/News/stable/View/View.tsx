import React from 'react';
import { ConfigType } from '../NewsTypes';
import RSSParser from 'rss-parser';

interface Props {
  config: ConfigType;
  onEnd?(): void;
}

const View: React.FC<Props> = ({ config, onEnd }: Props) => {

  const CORS_PROXY = "https://cors-anywhere.herokuapp.com/"

  let parser = new RSSParser();
  parser.parseURL(CORS_PROXY + 'http://ckziu.jaworzno.pl/feed', function(err, feed) {
    if (err) throw err;
    console.log(feed);
  })

  return (
    <div>

    </div>
  );
};

export default View;
