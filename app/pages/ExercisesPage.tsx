import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { FAB, TextInput } from 'react-native-paper';
import LoadExercise, { LoadAllExercises } from '../Functions/LoadExercise';
import SaveExercise, { RemoveExerciseKey } from '../Functions/SaveExercise';
import Exercise from '../objects/Exercise';
import EditExerciseTab from './EditExerciseTab';
import { ExerciseWidget } from './ExerciseWidget';

function ExercisesPage() {
    const [exercises,setExercises] = useState([] as Exercise[]);
    
    const loadAll = async () => {
        setExercises(await LoadAllExercises());
    }

    const load = async (myName:string) => {
        let exercise = await LoadExercise(myName);
        if(exercise != null){
            exercises.push(exercise);
        }
        
        setExercises([...exercises]);
    }
    
    useEffect(()=>{
        for (let index = 0; index < exercises.length; index++) {
            exercises.pop();
        }
        
        loadAll();
    },[]);
    

    return (
        <View style={{
            padding:5,
            flex:1,
        }}>
            {
                exercises.map((exercise) =>
                    <ExerciseWidget exercise={exercise} editable={true} key={exercise.myName} isNew={false}></ExerciseWidget>
                )
            }
            <FAB
                style={styles.fab}
                icon="plus"
                onPress={() => {
                    setExercises([...exercises, new Exercise("unnamed","",null,null,false)]);
                }}
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