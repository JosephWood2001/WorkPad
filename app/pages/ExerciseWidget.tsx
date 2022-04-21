import React, {useEffect, useState} from 'react';
import { View } from 'react-native';
import { Card, Title, Button, Paragraph, Text, Avatar, ToggleButton, TextInput } from 'react-native-paper';
import LoadExercise from '../Functions/LoadExercise';
import SaveExercise from '../Functions/SaveExercise';
import Exercise from '../objects/Exercise';

function ExerciseWidget(props : {exercise:Exercise,editable:boolean,isNew:boolean}) {

    let myName = props.exercise.myName;
    
    //state for the editing mode
    const [editing,setEditing] = useState(props.isNew);
    
    //states for widget values
    const [discription,setDiscription] = useState(props.exercise.discription);
    const [duration,setDuration] = useState(props.exercise.duration);
    const [intensity,setIntensity] = useState(props.exercise.intensity);
    const [record,setRecord] = useState(props.exercise.record);

    //content that will be displays in the body of the card
    const content: JSX.Element[] = [];
    //button that will be displayed on the bottom left of the card
    let bottomLeft: JSX.Element|null = null;
    //button that will be displayed to the right of the bottom left of the card
    let bottomNextLeft: JSX.Element|null = null;
    //button that will be displayed on the bottom right of the card
    let bottomRight: JSX.Element|null = null;
    

    if(!editing){ //Adds all of the elemets for not being in edit mode
            
        //adds discription text
        content.push(<Text key={"discription"}>{discription}</Text>);

        //adds icons for duration, intensity, and record
        if(duration != null){
            const subcontent: JSX.Element[] = [];
            for(let i = duration; i > 0; i--){
                subcontent.push(<Avatar.Icon size={30} icon="timer-outline" key={i} />);
            }
            content.push(<View style={{
                flexDirection:"row"
            }} key={"duration"}>{subcontent}</View>)
        }
        if(intensity != null){
            const subcontent: JSX.Element[] = [];
            for(let i = intensity; i > 0; i--){
                subcontent.push(<Avatar.Icon size={30} icon="weight" key={i}/>);
            }
            content.push(<View style={{
                flexDirection:"row"
            }} key={"intensity"}>{subcontent}</View>)
        }
        if(record == true){
            content.push(<Avatar.Icon size={30} icon="notebook-outline" key={"record"}/>);
        }

        //adds edit button
        if(props.editable == true){
            bottomLeft=<Button onPress={() => {setEditing(true);}}>Edit</Button>
        }

    }else{ //Adds all of the elemets for being in edit mode

        //change description
        content.push(
            <TextInput 
                onChangeText={(value: string) => setDiscription(value)}
                value={discription}
                key={"editDiscription"}
            />
        );

        //change durration
        content.push(
            <ToggleButton.Row 
                onValueChange={value => setDuration((value != "null") ? parseInt(value) : null)} //converts string to number|null
                value={((duration != null) ? duration.toString() : "null") as string} //converts number|null to string
                key={"editDuration"}
            >
                <ToggleButton icon="cancel" value="null" />
                <ToggleButton icon="timer-outline" value="1" />
                <ToggleButton icon="timer-outline" value="2" />
                <ToggleButton icon="timer-outline" value="3" />
            </ToggleButton.Row>
        );

        //change intensity
        content.push(
            <ToggleButton.Row 
                onValueChange={value => setIntensity((value != "null") ? parseInt(value) : null)} //converts string to number|null
                value={((intensity != null) ? intensity.toString() : "null") as string} //converts number|null to string
                key={"editIntensity"}
            >
                <ToggleButton icon="cancel" value="null" />
                <ToggleButton icon="weight" value="1" />
                <ToggleButton icon="weight" value="2" />
                <ToggleButton icon="weight" value="3" />
            </ToggleButton.Row>
        );

        //change record
        content.push(
            <ToggleButton.Row 
                onValueChange={value => setRecord((value == "true") ? true : false)}
                value={record.toString()}
                key={"editRecord"}
            >
                <ToggleButton icon="cancel" value="false" />
                <ToggleButton icon="notebook-outline" value="true" />
            </ToggleButton.Row>
        );

        //save button
        bottomLeft=<Button onPress={() => {
            setEditing(false);
            SaveExercise(new Exercise(myName,discription,duration,intensity,record))
        }}>Save</Button>;
    }


    return (
        <Card>
            <Card.Title
                title = {myName}
            />
            <Card.Content>
                {content}
            </Card.Content>
            <Card.Actions>
                {bottomLeft}
            </Card.Actions>
        </Card>
    );
}

export default ExerciseWidget;