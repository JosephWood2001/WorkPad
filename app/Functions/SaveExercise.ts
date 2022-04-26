import Exercise from '../objects/Exercise';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LoadExerciseKeys } from './LoadExercise';
async function SaveExercise(exercise:Exercise) {
    try {
        await AsyncStorage.setItem("Exercise:".concat(exercise.myName), JSON.stringify(exercise) );
        console.log("SAVING:"+JSON.stringify(exercise)+":SAVING");
        await SaveExerciseKey(exercise.myName);
    } catch (error) {
        alert(error);
    }
}

async function SaveExerciseKey(key:string) {
    try {
        let keys:string[] = await LoadExerciseKeys()
        if(keys.find(e => e === key) == undefined){
            keys.push(key);
        }

        await AsyncStorage.setItem("ExerciseKeys", JSON.stringify(keys) );
        console.log("SAVING:"+JSON.stringify(keys)+":SAVING");
    } catch (error) {
        alert(error);
    }
}

export async function RemoveExerciseKey(key:string) {
    try {
        let keys:string[] = await LoadExerciseKeys()
        if(keys.find(e => e === key) != undefined){
            keys.splice(keys.indexOf(key),1);
        }
        
        await AsyncStorage.setItem("ExerciseKeys", JSON.stringify(keys) );
        console.log("REMOVED:"+JSON.stringify(keys)+":REMOVED");
    } catch (error) {
        alert(error);
    }
}

export default SaveExercise;