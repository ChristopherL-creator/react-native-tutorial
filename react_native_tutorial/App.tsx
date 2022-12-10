import React, { Component, useState } from 'react';
import { Button, FlatList, Image, ScrollView, SectionList, StyleSheet, Text, TextInput, View } from 'react-native';

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
const logo = { 
  uri: 'https://reactnative.dev/img/tiny_logo.png', 
  width: 64, 
  height: 64
} 

const styles = StyleSheet.create({ 
  container: { 
    flex: 1, 
    paddingTop: 22
  }, 
  item: { 
    padding: 10, 
    fontSize: 18, 
    height: 44
  }, 
  sectionHeader: {
    paddingTop: 2, 
    paddingLeft: 10, 
    paddingRight: 10, 
    paddingBottom: 2, 
    fontSize: 14, 
    fontWeight: 'bold', 
    backgroundColor: 'rgba(247,247,247,1.0)', 
    color: 'black'
  },
}); 

const SectionListBasics = () => { 
  return ( 
    <View style={styles.container}> 
      <Text> 
        SectionListBasic
      </Text> 
      <SectionList 
      sections={[ 
        { 
          title: 'D', 
          data: [ 
            'Devin', 
            'Dan', 
            'Dominic'
          ]
        }, 
        { 
          title: 'J', 
          data: [ 
            'Jackson', 
            'James', 
            'Jillian', 
            'Jimmy', 
            'Joel', 
            'John', 
            'Julie'
          ]
        } 
      ]} 
      renderItem={({item}) => <Text style={styles.item}> 
                                {item} 
                              </Text>} 
      renderSectionHeader={({section}) => <Text style={styles.sectionHeader}> 
                                            {section.title} 
                                          </Text>} 
      keyExtractor={(item, index) => `basicListEntry-${item.title}`}
      />
    </View>
  )
}

const FlatListBasics = () => { 
  return ( 
    <View style={styles.container}> 
      <Text>
        FlatListBasics
      </Text>
      <FlatList 
      data={[ 
        {key: 'Dan'}, 
        {key: 'oven'},
        {key: 'brown'},
        {key: 'hrhr'},
        {key: 'hmmmm'},
        {key: 'haha'},
        {key: 'ohhhhhh'},
        {key: 'ohno D;'},
        {key: 'yolo'},
        {key: 'ooof'}, 
        {key: 'Dan1'}, 
        {key: 'oven1'},
        {key: 'brown1'},
        {key: 'hrhr1'},
        {key: 'hmmmm1'},
        {key: 'haha1'},
        {key: 'ohhhhhh1'},
        {key: 'ohno D;1'},
        {key: 'yolo1'},
        {key: 'ooof1'},
      ]} 
      renderItem={({item}) => <Text style={styles.item}> 
                                {item.key}            
                              </Text>}
      />
    </View>
  )
}

const App = () => (  
  <>
    <Text style={{ fontSize: 96 }}>Scroll me plz</Text>
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Text style={{ fontSize: 96 }}>If you like</Text>
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Text style={{ fontSize: 96 }}>Scrolling down</Text>
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Text style={{ fontSize: 96 }}>What's the best</Text> 
  </> 
)

class Cat extends Component { 
  //  in class components, states are stored in state objects
  state = { isHungry: true }; 

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
          {/*  
            is use "this.state." to access the state object
          */}
          Hello i am classy {getFullName(name, secondName)}, and i am {this.state.isHungry ? "hungry" : "full"} 
        </Text> 
        <Button 
        onPress={() => {  
          //  "this.setState()" sets value for the individual state object called inside of it
          this.setState({ isHungry: false });
        }} 
        disabled={!this.state.isHungry}
        title={ 
          this.state.isHungry ? "pourr me milk, please!" : "thank you!"
        }
        />
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
  /*  
    declare component's state by calling useState() function 
    insisde its function; useState() returns a state variable with a set value, 
    and a state function to modify it. 
    states are generally used to keep track of components' data which is 
    expected to change over time
  */
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
          /*  
            because setIsHungry() is a state-setting function,  when it fires, 
            it can rerender the const isHungry, assigning it its next value 
          */
        }
      } 
      disabled={!isHungry}
      title={ isHungry ? 'pourr some milk please' : 'thank you!'}
      />
    </View>
  );
} 

const PizzaTranslator = () => { 
  const [text, setText] = useState(''); 

  return ( 
    <View style={{padding: 40}}> 
      <TextInput 
      style={{height: 40}}
      placeholder="type here to translate"
      onChangeText={newText => setText(newText)}
      defaultValue={text}
      /> 
      <Text style={{ 
        padding: 10, 
        fontSize: 42 
      }}> 
        {text.split(' ').map((word) => word && 'O').join('')}
      </Text>
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
      /* 
        "<>" and < />" are JSX fragments. adjacent JSX elements must be 
        wrapped by in an enclosing tag. fragments allow that wihtout nesting 
        an extra View wrapping elme.
      */
      <ScrollView> 
        <Text> 
          Welcome!
        </Text> 
        <SectionListBasics />
        <FlatListBasics />
        <Cat /> 
        <CatFunction 
        name="marilou" 
        food={["fish", "kibble"]} 
        age={2}/> 
        <CatFunction name="leone" />
        <CatFunction name="eustache" /> 
        <PizzaTranslator /> 
        <App />
      </ScrollView>
    );
  }
} 

//  "export" is used to make the function/class 
//  available to the whole project:
export default Cafe;
