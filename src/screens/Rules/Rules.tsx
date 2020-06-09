import React from 'react';
import { Divider, Typography } from 'antd';
import { Container, Inner } from './RulesStyle';

const { Title, Paragraph } = Typography;

const Rules: React.FC = () => (
  <Container>
    <Inner>
      <Title>
        Regulamin serwisu
      </Title>
      <Divider/>
      <Title level={2}>
        1. Lorem ipsum dolor sit amet
      </Title>
      <Paragraph>
        Consectetur adipiscing elit. Suspendisse facilisis scelerisque nisl. Ut ut tortor turpis. Sed quis orci ac metus
        venenatis vehicula vel vestibulum velit. Duis efficitur gravida ultricies. Cras lorem lorem, pellentesque et sem
        id, sodales sollicitudin ipsum. Suspendisse potenti. Donec imperdiet porta tellus, non tempus libero lacinia a.
        Quisque maximus blandit nisi. Integer accumsan, leo pulvinar molestie facilisis, ante nulla scelerisque nulla,
        vel fermentum nisl neque vitae lectus. Ut non commodo dui, non fermentum sem. Sed ornare dapibus erat, a
        faucibus massa pharetra eu. Quisque pulvinar sem velit, vitae mollis lorem auctor ac. Mauris viverra dui odio,
        ac congue nisl consequat sed. Vestibulum dignissim, neque nec tristique viverra, urna sem tempus mauris,
        eleifend vulputate arcu nibh et nisl. Aenean porttitor aliquet vestibulum. Nunc non suscipit eros, ultrices
        blandit neque.
      </Paragraph>
      <Title level={2}>
        2. Aliquam sodales sagittis lacinia
      </Title>
      <Paragraph>
        Donec auctor nisi nisl, eu congue tortor consequat ut. Nulla in nulla et magna imperdiet ornare. Nam rhoncus,
        felis ac tristique euismod, nulla massa dictum eros, vitae condimentum neque ex sed felis. Pellentesque habitant
        morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras porta, ante quis luctus vehicula,
        orci magna imperdiet libero, a condimentum eros quam non ante. Sed non metus at augue facilisis sodales
        fringilla ut lacus. Suspendisse accumsan dui et dui viverra condimentum. Mauris aliquet risus vel mattis
        ullamcorper. Morbi vitae dolor molestie, faucibus justo ac, porttitor dolor. Ut luctus, eros eu blandit
        ultrices, nunc leo efficitur nisi, eu laoreet est elit in enim. Sed viverra iaculis elit vitae dapibus.
      </Paragraph>
    </Inner>
  </Container>
);

export default Rules;
