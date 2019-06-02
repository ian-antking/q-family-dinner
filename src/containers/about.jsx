/* eslint-disable max-len */
import React from 'react';
import {
  Section,
  Content,
  Heading,
  Container,
} from 'react-bulma-components/full';


const AboutPage = () => (
  <Content>
    <Section>
      <Container>
        <p>
        Queer family tea is a weekly gathering at Partisan each Thursday between 6pm and 9pm.  It originated from a group of queers coming together in each others home and we decided more people might like to take part. So we are trialling it to see if this is true.
        </p>
        <p>
        This is a non profit and volunteer led event ran by the queer community for the queer community and those who support them.  Remember that when you come along.  We are just a group of queers trying to make a positive difference. We will probably have teething problems in the beginning.  If we aren't doing something well then feel free to tell us but all we ask is that you suggest solutions to things and if possible help to improve them if you feel able.
        </p>
      </Container>
    </Section>
    <Section>
      <Container>
        <Heading>
            What do we do?
        </Heading>
        <p>
            It's simple.  We get together.  We eat.  We hang out.  We chat and share our successes or issues of the week no matter how small.  Maybe there will be someone there who can give you advice or just listen.  Us queers know a lot about a lot of things and everyone can offer something to someone.  That includes you!
        </p>
      </Container>
      <Container>
        <Heading>
            Ethos
        </Heading>
        <p>
            We aim to be an inclusive community event and so we have a no tolerance policy for any discrimination regarding race, gender, sexualty, ability, health, age and body type. We can't claim to have all of this sorted at the moment and it's an ongoing process to make this ethos a reality but we will try our best and reevaluate what we do on a regular basis.
        </p>
        <p>
            Unfortunately at the moment Partisan can not accommodate people in wheelchairs but they are seeking funding to deal with this however we will actively support the other range of disabilities both visible and invisible as best as we can.
        </p>
        <p>
            Please note you don't have to prove your queerness to us!
        </p>
      </Container>
    </Section>
    <Section>
      <Container>
        <Heading>
            Food
        </Heading>
        <p>
            We keep the food vegan and gluten free and have to prepare it off site as Partisan doesn't have a food preparation license.  As time goes by we will happily take suggestions and encourage people to make the food.
        </p>
      </Container>
      <Container>
        <Heading>
            Cost
        </Heading>
        <p>
            We only ask for any donations you can spare to pay for ingredients for the next event.  If you don't have any money that week don't worry you can help out in other ways.  Just ask one of the volunteers and they will find you some way to contribute.
        </p>
      </Container>
    </Section>
  </Content>
);

export default AboutPage;
