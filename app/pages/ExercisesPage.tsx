import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { FAB } from 'react-native-paper';
import LoadExercise from '../Functions/LoadExercise';
import SaveExercise from '../Functions/SaveExercise';
import Exercise from '../objects/Exercise';
import EditExerciseTab from './EditExerciseTab';
import ExerciseWidget from './ExerciseWidget';

function ExercisesPage() {

    const [exercises,setExercises] = useState([] as Exercise[]);
    
    const load = async (myName:string) => {
        let exercise = await LoadExercise(myName);
        if(exercise != null){
            exercises.push(exercise);
        }
        //hacky way to get the component to reload. Updating exercises by setting it to itself
        setExercises([...exercises]);
    }
    
    useEffect(()=>{
        for (let index = 0; index < exercises.length; index++) {
            exercises.pop();
        }
        load("Push-Ups");
    },[])
    
    

    return (
        <View style={{
            padding:5,
            flex:1,
        }}>
            {
                exercises.map((exercise) =>
                    <ExerciseWidget exercise={exercise} editable={true} key={exercise.myName}></ExerciseWidget>
                )
            }
            <FAB
                style={styles.fab}
                icon="plus"
                onPress={() => console.log('Pressed')}
            />
        </View>
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