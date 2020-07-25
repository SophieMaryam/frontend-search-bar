
import React from 'react';
import InputField from './InputField';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';

export default {
  component: InputField,
  title: 'InputField',
  excludeStories: /.*Data$/,
};

// const InputComponent = React.forwardRef((inputRef) => {
//   return (
//     <input
//       name="input-search"
//       ref={inputRef}
//       type='text'
//     />
//   )
// })  
storiesOf("Input", module)
.add('with text and both icons', () => <><InputField onChange={action('changed')} keyword="trui" /></>)
.add('with no value and search icon', () => <><InputField onChange={action('changed')} keyword="" /></>)
// .add("Input field - Active",
//     () => React.createElement(() => {
//       const inputRef = useRef()
//       const ref =  inputRef.current.focus()
//       return ( 
//       <InputComponent
//         name="input-search"
//         inputRef={ref}
//       />
//       )
//   })
// )


