import { ConfigType } from './WelcomeTypes';

export const defaultConfig: ConfigType = {
  name: 'NAZWA',
  text: {
    highlightedColor: '#7265FC',
  },
  border: {
    width: 16,
    color: '#7265FC',
  },
  image: {
    type: 'url',
    url: '/logo512.png',
  }
};
