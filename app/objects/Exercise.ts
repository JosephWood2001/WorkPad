export default class Exercise{
    myName: string;
    discription: string | null;
    duration: number | null;
    intensity: number | null;
    record: boolean;

    
    constructor(myName: string, discription: string | null, duration: number | null, intensity: number | null, record: boolean){
        this.myName = myName;
        this.discription = discription;
        this.duration = duration;
        this.intensity = intensity;
        this.record = record;
    }
}