import Exercise from '../objects/Exercise';
import AsyncStorage from '@react-native-async-storage/async-storage';
async function LoadExercise(myName:string): Promise<Exercise | null> {
    try {
        let jsonValue = await AsyncStorage.getItem("Exercise:".concat(myName));

        if(jsonValue != null){
            console.log("LOADING:"+jsonValue+":LOADING");
            return( JSON.parse(jsonValue) );
        }else{
            console.warn("Exercise:".concat(myName).concat(" Not found in storage"));
            return(null);
        }
    } catch (error) {
        console.warn("Exercise:".concat(myName).concat(" Not found in storage"));
        return(null);
    }

    
}

export async function LoadAllExercises(): Promise<Exercise[]> {
    try {
        let keys:string[] = await LoadExerciseKeys();
        let exercises:Exercise[] = [];
        for (let index = 0; index < keys.length; index++) {
            const key = keys[index];
            let jsonValue = await AsyncStorage.getItem("Exercise:".concat(key));
            
            if(jsonValue != null){
                console.log("LOADING:"+jsonValue+":LOADING");
                exercises.push( JSON.parse(jsonValue) );
            }else{
                console.warn("Exercise:".concat(key).concat(" Not found in storage"));
            }
        }
        for (const key in keys) {
            
        }
        return(exercises);
        
    } catch (error) {
        console.warn("Exercises not found in storage");
        return([new Exercise("","",null,null,false)]);
    }

}

export async function LoadExerciseKeys(): Promise<string[]> {
    try {
        let jsonValue = await AsyncStorage.getItem("ExerciseKeys");

        if(jsonValue != null){
            console.log("LOADING:"+jsonValue+":LOADING");
            return( JSON.parse(jsonValue) );
        }else{
            return( [] as string[] );
        }
    } catch (error) {
        console.warn("ExerciseKeys not found in storage");
        return( [] as string[] );
    }

}

export default LoadExercise;