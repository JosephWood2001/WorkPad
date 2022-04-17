import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { FAB } from 'react-native-paper';
import Exercise from '../objects/Exercise';
import EditExerciseTab from './EditExerciseTab';
import ExerciseWidget from './ExerciseWidget';

function ExercisesPage() {

    const Stack = createNativeStackNavigator();

    const ExercisesPage = () => {
        return(
            <View style={{
                padding:5,
                flex:1,
            }}>
                <ExerciseWidget exercise={new Exercise("Push-Ups", "do some pushups", 3, 2, true)} editable={true}></ExerciseWidget>
                <FAB
                    style={styles.fab}
                    icon="plus"
                    onPress={() => console.log('Pressed')}
                />
            </View>
        );
    };

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name='ExercisesPage'
                    options={{headerShown:false}}
                    component={ExercisesPage}
                />
                <Stack.Screen
                    name='EditExerciseTab'
                    options={{title:"Edit Exercise"}}
                    component={EditExerciseTab}
                />
            </Stack.Navigator>
        </NavigationContainer>

        
    );
}

const styles = StyleSheet.create({
    fab: {
      position: 'absolute',
      margin: 16,
      right: 0,
      bottom: 0,
    },
})

export default ExercisesPage;