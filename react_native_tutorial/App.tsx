import React, { Component, useState } from 'react';
import { Button, Image, Text, TextInput, View } from 'react-native';

//  function component: i initialilze component 
//  as a function:
// const Cat = () => {
//   return ( 
        //  <Text> is a react element
//     <Text>Hello, i am cata</Text> 
//   );
// }; 

/* 
   with class component, i have to import component, 
   which i extend the class with, and then invoke 
   in the render function (from library), which returns 
   everythinf inside of it as a react element; 
*/ 
class Cat extends Component { 
  
  //  variables must be placed under "render()"
  render() { 
    const name = "mario"; 
    const secondName = "luigi";
    const getFullName = (name, secondName) => { 
      return name + ', ' + secondName;
    }

    return ( 
      //  between curly braces i can return variables and 
      //  functions' returns 
      <View> 
        <Image 
          source={{ 
            uri: "https://reactnative.dev/docs/assets/p_cat1.png" 
          }} 
          style={{ 
            height: 100, 
            width: 100
          }}
        />
        <Text> 
          Hello i am classy {getFullName(name, secondName)} 
        </Text> 
        <TextInput 
          style={{ 
            height: 40, 
            borderColor: 'grey', 
            borderWidth: 1
          }} 
          defaultValue="Name me!"
        />
      </View>
    )
  }
}  

/*  
  components' name must be high-cased(maiuscolo); 
  props allow to customize components, and i can 
  set a different one for each time i call the 
  component. i can also set arrays, or objects as props, but  
  they must be wrapped in curly braces. 
  in general, props are used to configure component as i renders.
*/
const CatFunction = (props) => { 
  const [isHungry, setIsHungry] = useState(true); 

  return ( 
    <View> 
      <Text> 
        Hello, i am {props.name}, and i am {isHungry ? 'hungry' : 'full'}
      </Text> 
      <Button 
      onPress={ 
        () => { 
          setIsHungry(false);
        }
      } 
      disabled={!isHungry}
      title={ isHungry ? 'pourr some milk please' : 'thank you!'}
      />
    </View>
  );
}

class Cafe extends Component { 
  render() { 
    /* 
      i can render the same component multiple times in another 
      component. so Cafe is the parent component, and Cat is the 
      child component  
    */
    return ( 
      <View> 
        <Text> 
          Welcome!
        </Text>  
        <Cat /> 
        <CatFunction 
        name="marilou" 
        food={["fish", "kibble"]} 
        age={2}/> 
        <CatFunction name="leone" />
        <CatFunction name="eustache" />
      </View>
    );
  }
}

//  "export" is used to make the function/class 
//  available to the whole project:
export default Cafe;
