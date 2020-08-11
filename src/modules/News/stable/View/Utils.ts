import { NewsInstance } from '../NewsTypes';
import RSSParser from 'rss-parser';

const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';

export const getFeedNewsList = async (rssUrl: string): Promise<NewsInstance[]> => {
  const parser = new RSSParser();

  try {
    const result = await parser.parseURL( `${CORS_PROXY}${rssUrl}`)
    const items = result?.items || [];

    return items.map(({ link = '', title = '', content = '' }) => ({
      id: link,
      title: title,
      description: content,
    }));
  } catch (e) {
    console.error(e)
  }

  return [];
};
