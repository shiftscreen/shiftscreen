import React from 'react';
import * as R from 'ramda';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { ConfigType } from '../CounterTypes';
import {
  CompletedContainer,
  CompletedIconWrapper,
  CompletedInner,
  CompletedText,
  Container,
  DateContainer,
  DateInner,
  LabelContainer,
  LabelInner
} from './Style';
import { countAndGetFormattedDiff } from './Utils';

library.add(faCheckCircle);

interface Props {
  config: ConfigType;
  onEnd?(): void;
}

const View: React.FC<Props> = ({ config, onEnd }: Props) => {
  const { label, date, completionMessage, afterComplete } = config;
  const [[value, text], setValueText] = React.useState<[string, string]>(
    countAndGetFormattedDiff(date),
  );
  const completed = R.lt(parseInt(value, 10), 0);
  const labelText = parseInt(value, 10) === 1 ? 'pozostał' : 'pozostało';

  React.useEffect(() => {
    const interval = setInterval(() => {
      if (!completed) {
        setValueText(countAndGetFormattedDiff(date))
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (completed && afterComplete === 'hide') {
    onEnd && onEnd();
    return null;
  }

  if (completed) return (
    <CompletedContainer>
      <CompletedInner>
        <CompletedIconWrapper>
          <FontAwesomeIcon icon={faCheckCircle} />
        </CompletedIconWrapper>
        <CompletedText>
          {completionMessage}
        </CompletedText>
      </CompletedInner>
    </CompletedContainer>
  );

  return (
    <Container>
      <LabelContainer>
        <LabelInner>
          do&nbsp;<span>{label}</span>&nbsp;{labelText}
        </LabelInner>
      </LabelContainer>
      <DateContainer>
        <DateInner>
          <span>{value}</span> {text}
        </DateInner>
      </DateContainer>
    </Container>
  )
};

export default React.memo(View);
