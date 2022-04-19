import Exercise from '../objects/Exercise';
import AsyncStorage from '@react-native-async-storage/async-storage';
async function SaveExercise(exercise:Exercise) {
    try {
        await AsyncStorage.setItem("Exercise:".concat(exercise.myName), JSON.stringify(exercise) );
        console.log("SAVING:"+JSON.stringify(exercise)+":SAVING");
    } catch (error) {
        alert(error);
    }
}
export default SaveExercise;