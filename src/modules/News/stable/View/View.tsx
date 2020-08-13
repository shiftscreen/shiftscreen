import React from 'react';
import * as R from 'ramda';
import ReactHtmlParser from 'react-html-parser';
import { ConfigType, NewsInstance } from '../NewsTypes';
import { getFeedNewsList } from './Utils';
import { LoadingIndicator } from 'shared';
import {
  Container,
  LoadingContainer,
  Image,
  Title,
  Header,
  Content,
  Divider,
  Description,
  Domain,
  Inner
} from './Style';

interface Props {
  config: ConfigType;
  onEnd?(): void;
}

const View: React.FC<Props> = ({ config }) => {
  const { domain, rssUrl, sourceType } = config;
  const sourceIsRss = sourceType === 'rss';
  const [loading, setLoading] = React.useState<boolean>(sourceIsRss);
  const [newsList, setNewsList] = React.useState<NewsInstance[]>([]);
  const randomIndex = Math.floor(newsList.length * Math.random());
  const randomNews = newsList[randomIndex];

  const getFeedNewsListCallback = React.useCallback(getFeedNewsList, [rssUrl]);

  const getAndSetNewsList = async () => {
    const hasRssUrl = R.not(R.empty(rssUrl));
    const shouldGetFromRss = R.and(sourceIsRss, hasRssUrl);
    let newsList: NewsInstance[] = config.newsList;

    if (shouldGetFromRss) {
      newsList = await getFeedNewsListCallback(rssUrl || '');
    }

    setNewsList(newsList);
    setLoading(false);
  };

  React.useEffect(() => {
    getAndSetNewsList()
  }, [config.newsList, rssUrl]);

  if (loading || !randomNews) return (
    <LoadingContainer>
      <LoadingIndicator/>
    </LoadingContainer>
  );

  const { title, description, image } = randomNews;

  return (
    <Container noImage={R.not(image)}>
      {image && (
        <Image
          type="image"
          source={image}
          alt={title}
        />
      )}
      <Content>
        <Inner>
          <Header>
            <Title ellipsis={{ rows: 3 }}>
              {title}
            </Title>
            <Description
              ellipsis={{ rows: 5 }}
            >
              {ReactHtmlParser(
                description,
                {
                  transform: (node) => (
                    (node.type === 'tag' && node.name === 'img') ? null : undefined
                  )
                })}
            </Description>
          </Header>
          {domain && (
            <>
              <Divider/>
              <Domain ellipsis>
                więcej na:&nbsp;
                <span>{domain}</span>
              </Domain>
            </>
          )}
        </Inner>
      </Content>
    </Container>
  );
};

export default View;
