import type { NextPage } from 'next';
import Content from '../components/sections/Content';
import styled from 'styled-components';
import ImageText from '../components/atoms/ImageText';
import content from '../public/content';
import Button from '../components/atoms/Button';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SampleText = styled.h1`
  font-weight: normal;
`;

const Home: NextPage = () => {
  return (
    <Content>
      <Container>
        <SampleText>Index Page</SampleText>
       
        <ImageText
          imagePosition="right"
          title="make an appointment"
          text={
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum voluptatibus asperiores quasi corrupti '
          }
          linkText={'unsere elektroantriebe'}
          imageSrc={
            'https://images.unsplash.com/photo-1596836471905-0f4255f13eb8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZHVtbXl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
          }
          href="#"
          alt={'sample image'}
        />
        <ImageText
          imagePosition="left"
          title="make an appointment"
          text={
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum voluptatibus asperiores quasi corrupti '
          }
          linkText={'unsere elektroantriebe'}
          imageSrc={
            'https://images.unsplash.com/photo-1596836471905-0f4255f13eb8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZHVtbXl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
          }
          href="#"
          alt={'sample image'}
        />
          <ImageText
          imagePosition="right"
          title="make an appointment"
          text={
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum voluptatibus asperiores quasi corrupti '
          }
          linkText={'unsere connected app'}
          imageSrc={
            'https://images.unsplash.com/photo-1596836471905-0f4255f13eb8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZHVtbXl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
          }
          href="#"
          alt={'sample image'}
        />
      </Container>
    </Content>
  );
};

export default Home;
