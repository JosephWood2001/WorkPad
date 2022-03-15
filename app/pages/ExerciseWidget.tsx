import React from 'react';
import { View } from 'react-native';
import { Card, Title, Button, Paragraph, Text } from 'react-native-paper';
import Exercise from '../objects/Exercise';


function ExerciseWidget(props : {exercise:Exercise}) {
    let exercise = props.exercise as Exercise;
    let attributes = [];
    //adds all the attributes of exercise to attributes array
    if(exercise.duration != null){
        attributes.push(["Duration",exercise.duration]);
    }
    if(exercise.weight != null){
        attributes.push(["Weight",exercise.weight]);
    }
    if(exercise.reps != null){
        attributes.push(["Reps",exercise.reps]);
    }
    if(exercise.sets != null){
        attributes.push(["Sets",exercise.sets]);
    }

    return (
        <Card>
            <Card.Title
                title= {exercise.exerciseName}
            />
            <Card.Content>
                {
                    attributes.map((values) => (
                        <Text style={{fontWeight:'bold'}}>{values[0]}<Text style={{fontWeight:'normal'}}> {values[1]}</Text></Text>
                    ))
                }
            </Card.Content>
            <Card.Actions>
                <Button>Edit</Button>
            </Card.Actions>
        </Card>
    );
}

export default ExerciseWidget;