import React from 'react';
import Colors from '../utils/colors';
import PageContent from '../components/page-content';
import { Heading, Content } from 'react-bulma-components/full';


const randomColor = () => {
  const { pink, blue } = Colors.trans;
  const colors = [pink, blue];
  const index = Math.floor(Math.random() * 2);
  return colors[index];
};

const Page = props => {
  const page = props.page ? { ...props.page.fields } : null;
  const color = randomColor();

  return page ? (
    <PageContent
      {...props}
      page={page}
      color={color}
      events={props.events}
    />
  ) : (
    <Content>
      <Heading>Loading</Heading>
    </Content>
  );
};
export default Page;
