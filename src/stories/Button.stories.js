import Button from "../components/Button"
// we have to export a default object that object is going to be our story
export default {
  title: "Components/Button",
  component: Button,//component we are rendering
  //argTypes is the place wher we can define our types for arguments and we can define clickevents too.. here we pass the props name and we say what action it does here in this case handleClick is the name of the prop and the action is onClick
  argTypes: { handleClick: { action: "handleClick" } },
}


// we have tell story books what are different storeis are here the name of the stor is red
//we have to export a default function which returns our component.
//export const Red =()=> <Button label='press me' backgroundColor ='red' />
//instead we have to create a whole function like below and this functio  takes args as parameter and gives the whole args to the buttton
const Template = args => <Button {...args} />
//by saying this we copy the function every time Template.bind({})
export const Red = Template.bind({})
Red.args = {
  backgroundColor: "red",
  label: "Press Me",
  size: "md",
}

export const Green = Template.bind({})
Green.args = {
  backgroundColor: "black",
  label: "Press Me",
  size: "md",
}

export const Small = Template.bind({})
Small.args = {
  backgroundColor: "red",
  label: "Press Me",
  size: "sm",
}

export const Large = Template.bind({})
Large.args = {
  backgroundColor: "red",
  label: "Press Me",
  size: "lg",
}

export const LongLabel = Template.bind({})
LongLabel.args = {
  backgroundColor: "red",
  label: "Press Me adsf asdf asdf asdfasdfasd fasd fasd fasd",
  size: "md",
}
