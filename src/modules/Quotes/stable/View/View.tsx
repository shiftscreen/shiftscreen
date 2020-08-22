import React from 'react';
import { ConfigType, QuoteInstance } from '../QuotesTypes';
import * as R from 'ramda';
import { useQuotePredefinedQuotesLazyQuery } from 'generated/graphql';
import { getRandomImage } from './Utils';
import { Author, Container, Content, Image, Inner, Wrapper } from './Style';

interface Props {
  config: ConfigType;
  onEnd?(): void;
}

const View: React.FC<Props> = ({ config }) => {
  const [getPredefinedQuotes, { data: predefinedQuotes }] = useQuotePredefinedQuotesLazyQuery({
    variables: {
      type: config.predefinedList,
    },
  });
  const quotesList = predefinedQuotes?.quotePredefinedQuotes || config.quotesList;
  const randomIndex = Math.floor(quotesList.length * Math.random());
  const randomQuote: QuoteInstance = {
    image: getRandomImage(config.predefinedList),
    imageType: 'background',
    ...quotesList[randomIndex],
  };

  React.useEffect(() => {
    const sourceIsPredefined = R.equals(config.sourceType, 'predefined');

    if (sourceIsPredefined) {
      getPredefinedQuotes();
    }
  }, [config.sourceType, config.predefinedList]);

  const showImage = randomQuote.imageType !== 'none';
  const imageBeside = randomQuote.imageType === 'beside';

  return (
    <Container imageBeside={imageBeside}>
      {showImage && randomQuote.image && (
        <Image
          type="image"
          source={randomQuote.image}
        />
      )}
      <Wrapper showDarkBackground={showImage}>
        <Inner>
          <Content>
            „{randomQuote.content}”
          </Content>
          <Author>
            {randomQuote.author}
          </Author>
        </Inner>
      </Wrapper>
    </Container>
  );
};

export default React.memo(View);
