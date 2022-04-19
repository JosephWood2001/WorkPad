import Exercise from '../objects/Exercise';
import AsyncStorage from '@react-native-async-storage/async-storage';
async function LoadExercise(myName:string): Promise<Exercise | null> {
    try {
        let jsonValue = await AsyncStorage.getItem("Exercise:".concat(myName));

        if(jsonValue != null){
            console.log("LOADING:"+jsonValue+":LOADING");
            return( JSON.parse(jsonValue) );
        }
    } catch (error) {
        console.warn("Exercise:".concat(myName).concat(" Not found in storage"));
        return(null);
    }

    return(null);
}
export default LoadExercise;