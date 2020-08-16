import React from 'react';
import * as R from 'ramda';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SlideLoading } from 'shared';

import { ConfigType } from '../CounterTypes';
import dayjs from 'dayjs';
import {
  CompletedContainer, CompletedIconWrapper, CompletedInner, CompletedText,
  Container,
  DateContainer, DateInner,
  LabelContainer,
  LabelInner
} from './Style';
import { countAndGetFormattedDiff, getFormattedDiff } from './Utils';

library.add(faCheckCircle);

interface Props {
  config: ConfigType;
}

const View: React.FC<Props> = ({ config }: Props) => {
  const { label, date, completionMessage } = config;
  const [[value, text], setValueText] = React.useState<[string, string]>(
    countAndGetFormattedDiff(date),
  );
  const completed = R.lt(parseInt(value, 10), 0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      if (!completed) {
        setValueText(countAndGetFormattedDiff(date))
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

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
          do&nbsp;<span>{label}</span>&nbsp;pozostało
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
