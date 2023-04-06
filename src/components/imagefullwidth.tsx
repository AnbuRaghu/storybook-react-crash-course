import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import Button from './Button';

export const Container = styled.div`
  width: 1000px;
  max-width: 100%;
  padding: 0 1.25em;
  margin: 0 auto;
`
export const Wrapper = styled.div <{ imagePosition: string }>`
  display: flex;
  align-items: space-between;
  justify-content: space-between !important;
  margin: 1.4em 0;
  padding: 1.875em;
  .spacer{
    margin-bottom: 1em;
  }

  flex-direction:${({ imagePosition }) => imagePosition === 'left' ? 'row-reverse'  : 'row' };
  

  img {
    max-width: 100%;
    height:250px;
    object-fit: cover;
    flex-basis:50%;
    min-width:0;
    min-height:0;
  }
  p{
    margin-bottom:2em;
  }
  
  @media (max-width: 48em) {
    flex-direction: column-reverse;
  }
`;

const TextWrapper = styled.div`
flex: 1;
align-self: center;
margin:2em;
`
interface Props {
    imageSrc: string;
    className?: string;
    text: string;
    linkText: string;
    title: string;
    imagePosition: 'right' | 'left';
    href: string;
};

const ImageText: FunctionComponent<Props> = ({ imageSrc, text, linkText, imagePosition,title }: Props) => {
  const clickHandler: () => void = () => {
   console.log('clicked')
}

    return (
        <Container>
            <Wrapper imagePosition={imagePosition}>
                <TextWrapper>
                  <h3>{title}</h3>
                    <p>{text}</p>
                    <Button id={"testBtn"} buttonType="primary" buttonText={linkText} className="spacer" onClick={clickHandler} />
                    <Button id={"testBtn1"} buttonType="secondary" buttonText='sample test' onClick={clickHandler} />
                </TextWrapper>
                <img src={imageSrc} />
            </Wrapper>
        </Container>
    )

};
export default ImageText;