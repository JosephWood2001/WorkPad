import React from 'react';
import { View } from 'react-native';
import { Card, Title, Button, Paragraph } from 'react-native-paper';
import Exercise from '../objects/Exercise';


function ExerciseWidget(props : {exercise:Exercise}) {
    let exercise = props.exercise as Exercise;
    return (
        <Card>
            <Card.Title
                title= {exercise.exerciseName}
            />
            <Card.Content>
                <Paragraph>TODO: make this a list of the values that arn't null</Paragraph>
            </Card.Content>
            <Card.Actions>
                <Button>Edit</Button>
            </Card.Actions>
        </Card>
    );
}

export default ExerciseWidget;