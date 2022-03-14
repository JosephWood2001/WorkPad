export default class Exercise{
    exerciseName: string;
    weight: number | null;
    reps: number | null;
    sets: number | null;
    duration: number | null;
    
    constructor(exerciseName: string, weight: number | null, reps: number | null, sets: number | null, duration: number | null){
        this.exerciseName = exerciseName;
        this.weight = weight;
        this.reps = reps;
        this.sets = sets;
        this.duration = duration;
    }
}