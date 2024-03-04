import React, {useState} from 'react'

//Imports the essential React library to build components.
//Imports the useState hook, which allows you to manage state within functional components.


import { Button, TextInput, StyleSheet, View, Text, ScrollView, FlatList } from 'react-native';

//Imports various components from the 'react-native' library:
//Button: A basic button component for user interactions.
//TextInput: A component to handle text input from the user.
//StyleSheet: Used to create styles for cleaner component styling.
//View: A fundamental layout component acting as a container.
//Text: Used to display text within your app.
//ScrollView: A scrollable container. (Not used in this snippet, but likely included prematurely for goal list expansion).
//FlatList: A component for rendering lists, optimized for performance.


export default function App () {

//Declares a functional component named App. The export default makes this the main component of your application.


const [enteredGoalText, setEnteredGoalText ] = useState('');

//Creates a state variable using the useState hook:
//enteredGoalText: Holds the text entered by the user in the input field.
//setEnteredGoalText: A function to update the value of enteredGoalText.
//The initial value is an empty string ('').


const [courseGoals, setCourseGoals] =useState([]);

//Creates another state variable:
//courseGoals: An array to store all the goals entered by the user.
//setCourseGoals: A function to update the courseGoals array.
//The initial value is an empty array ([]).

  function goalInputHandler (enteredText) {

//Function to handle changes in the text input field.
//enteredText: The text currently in the input field.

    setEnteredGoalText(enteredText);

// Updates the enteredGoalText state variable.


  }
  function addGoalHandler (){

//Function to handle when the "Add Goal" button is pressed


    setCourseGoals ((currentCourseGoals) => [...currentCourseGoals, enteredGoalText]);
    
//Updates the courseGoals state variable by creating a new array with the previous goals (...currentCourseGoals) and the new goal (enteredGoalText).

    setEnteredGoalText('');

// setEnteredGoalText(''); Clears the text input field.

  }

  return (

//return (...) - This defines the visual structure of the App component.

//Main container with styles from the appContainer style object.
//Container for the goal input and button, with styles from the inputContainer style object.

//The text input field.
//onChangeText={goalInputHandler}: Calls the goalInputHandler whenever the text changes.
//value={enteredGoalText}: Binds the input value to the state


//The "Add Goal" button.
//onPress={addGoalHandler}: Calls addGoalHandler when pressed.


      <View style={styles.appContainer}> 
        <View style= {styles.inputContainer}>
          <TextInput style= {styles.textInput} placeholder='My Goal' onChangeText={goalInputHandler} value={enteredGoalText} /> 
          <Button title="Add Goal" onPress={addGoalHandler} />
        </View>
            
        <FlatList  data={courseGoals} renderItem={({ item }) => (<View style={styles.goalsContainer}><Text style={{ fontSize: 20 }}>{`\u2022 ${item}`}</Text></View>)}
/>

      </View>
  );

}



//data={courseGoals}

//The FlatList component takes a data prop, which expects an array. Here, you're providing the courseGoals array, which contains the list of goals the user has entered.

//renderItem is a prop that determines how each item in the data array should be rendered on the screen. It takes a function as its value. Let's dissect this function:
//({ item }) => ... :  This uses destructuring to extract the item from an object provided by the FlatList for each iteration. The item variable represents a single goal from your courseGoals array.

//(<View style={styles.goalsContainer}><Text>{item}</Text></View>) : This is the JSX code returned by the renderItem function.

//<View style={styles.goalsContainer}> Creates a container for each individual goal to apply styling from the goalsContainer style object.

//<Text>{item}</Text> Displays the text of the goal (item) within the container.




const styles = StyleSheet.create({

appContainer: {
  paddingTop: 50,
  paddingHorizontal: 16,
},

inputContainer: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingBottom: 24,
  borderBottomWidth: 1,
},

textInput: {
 borderWidth: 1,
 width: '70%',
 marginRight: 8,
 padding: 8,

},
goalsContainer: {

  paddingTop: 20,

},




});