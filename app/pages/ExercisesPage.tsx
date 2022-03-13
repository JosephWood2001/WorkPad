import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-paper';

function ExercisesPage(props: any) {
    return (
        
        <Button mode="contained" onPress={() => console.log('Pressed')}>
            Create New Workout
        </Button>
    );
}

export default ExercisesPage;