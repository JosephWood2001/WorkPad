import React from 'react';
import { View, StyleSheet } from 'react-native';
import { FAB } from 'react-native-paper';
import Exercise from '../objects/Exercise';
import ExerciseWidget from './ExerciseWidget';

function ExercisesPage() {
    return (
        <View style={{
            padding:5,
            flex:1,
        }}>
            <ExerciseWidget exercise={new Exercise("Push-Ups",null,20,3,null)}></ExerciseWidget>
            <FAB
                style={styles.fab}
                icon="plus"
                onPress={() => console.log('Pressed')}
            />
        </View>
        
    );
}

const styles = StyleSheet.create({
    fab: {
      position: 'absolute',
      margin: 16,
      right: 0,
      bottom: 0,
    },
})

export default ExercisesPage;