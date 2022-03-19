import React, {useState, useEffect} from 'react';
import { Switch, Text, TextInput } from 'react-native-paper';
import Exercise from '../objects/Exercise';
import { AppRegistry, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

function EditExerciseTab() {
    const [exercise, setExercise] = useState<Exercise>(new Exercise("new exercise",null,null,null,null));
  
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
    
    let exerciseName = exercise.exerciseName;

    let durration = exercise.duration == null ? ""+60 : ""+exercise.duration;
    let durrationSwitch = exercise.duration != null;

    let weight = exercise.weight == null ? ""+60 : ""+exercise.weight;
    let weightSwitch = exercise.weight != null;

    let reps = exercise.reps == null ? ""+10 : ""+exercise.reps;
    let repsSwitch = exercise.reps != null;

    let sets = exercise.sets == null ? ""+10 : ""+exercise.sets;
    let setsSwitch = exercise.sets != null;

    return (
        <View>
            <TextInput
                label="Exercise Name"
                value={exerciseName}
                onChangeText={exerciseName => setExercise({...exercise, exerciseName:exerciseName})}
            />
            <View style={{flexDirection:"row"}}>
                <TextInput
                    style={{flex:8}}
                    label="Durration"
                    value={durration}
                    onChangeText={durration => setExercise({...exercise, duration:+durration})}
                    disabled={!durrationSwitch}
                />
                <Switch
                    style={{flex:1}}
                    value={durrationSwitch}
                    onValueChange={ durrationSwitch => setExercise({...exercise, duration:durrationSwitch?+durration:null}) }
                />
            </View>
            <View style={{flexDirection:"row"}}>
                <TextInput
                    style={{flex:8}}
                    label="Weight"
                    value={weight}
                    onChangeText={weight => setExercise({...exercise, weight:+weight})}
                    disabled={!weightSwitch}
                />
                <Switch
                    style={{flex:1}}
                    value={weightSwitch}
                    onValueChange={ weightSwitch => setExercise({...exercise, weight:weightSwitch?+weight:null}) }
                />
            </View>
            <View style={{flexDirection:"row"}}>
                <TextInput
                    style={{flex:8}}
                    label="Reps"
                    value={reps}
                    onChangeText={reps => setExercise({...exercise, reps:+reps})}
                    disabled={!repsSwitch}
                />
                <Switch
                    style={{flex:1}}
                    value={repsSwitch}
                    onValueChange={ repsSwitch => setExercise({...exercise, reps:repsSwitch?+reps:null}) }
                />
            </View>
            <View style={{flexDirection:"row"}}>
                <TextInput
                    style={{flex:8}}
                    label="Sets"
                    value={sets}
                    onChangeText={sets => setExercise({...exercise, sets:+sets})}
                    disabled={!setsSwitch}
                />
                <Switch
                    style={{flex:1}}
                    value={setsSwitch}
                    onValueChange={ setsSwitch => setExercise({...exercise, sets:setsSwitch?+sets:null}) }
                />
            </View>
        </View>
        
    );
}

export default EditExerciseTab;