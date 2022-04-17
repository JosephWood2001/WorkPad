import React from 'react';
import { View } from 'react-native';
import { Card, Title, Button, Paragraph, Text, Avatar } from 'react-native-paper';
import Exercise from '../objects/Exercise';

function ExerciseWidget(props : {exercise:Exercise,editable:boolean}) {
    let exercise = props.exercise as Exercise;
    const content: JSX.Element[] = [];

    //adds discription text
    if(exercise.discription != null){
        content.push(<Text>{exercise.discription}</Text>);
    }
    //adds icons for duration,intensity, and record
    if(exercise.duration != null){
        const subcontent: JSX.Element[] = [];
        for(let i = exercise.duration; i > 0; i--){
            subcontent.push(<Avatar.Icon size={30} icon="timer-outline" />);
        }
        content.push(<View style={{
            flexDirection:"row"
        }}>{subcontent}</View>)
    }
    if(exercise.intensity != null){
        const subcontent: JSX.Element[] = [];
        for(let i = exercise.intensity; i > 0; i--){
            subcontent.push(<Avatar.Icon size={30} icon="weight" />);
        }
        content.push(<View style={{
            flexDirection:"row"
        }}>{subcontent}</View>)
    }
    if(exercise.record == true){
        content.push(<Avatar.Icon size={30} icon="notebook-outline" />);
    }

    //adds edit button
    let edit:JSX.Element|null = null;
    if(props.editable == true){
        edit=<Button>Edit</Button>
    }
    return (
        <Card>
            <Card.Title
                title= {exercise.myName}
            />
            <Card.Content>
                {content}
            </Card.Content>
            <Card.Actions>
                {edit}
            </Card.Actions>
        </Card>
    );
}

export default ExerciseWidget;