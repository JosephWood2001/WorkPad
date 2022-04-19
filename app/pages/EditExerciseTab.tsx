import React, {useState, useEffect} from 'react';
import { Switch, Text, TextInput } from 'react-native-paper';
import Exercise from '../objects/Exercise';
import { AppRegistry, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

function EditExerciseTab() {
    const [exercise, setExercise] = useState<Exercise>(new Exercise("new exercise","",null,null,false));
  
    const save = async () => {
        try {
            await AsyncStorage.setItem("Exercise", JSON.stringify(exercise) );
        } catch (error) {
            alert(error);
        }
    };

    const load = async () => {
        try {
            let jsonValue = await AsyncStorage.getItem("Exercise");

            if(jsonValue != null){
                setExercise( JSON.parse(jsonValue) );
            }
        } catch (error) {
            alert(error);
        }
    };

    /*
    const remove = async () => {
        try {
            await AsyncStorage.removeItem("Exercise");
        } catch (error) {
            alert(error);
        }finally{
            setExercise("" as any);
        }
    }*/

    useEffect(() =>{
        load();
    },[]);
    


    return (
        <View>
            <TextInput
                label="Exercise Name"
                value={exercise.myName}
                onChangeText={newName => setExercise({...exercise, myName:newName})}
            />
        </View>
        
    );
}

export default EditExerciseTab;