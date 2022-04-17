import React, {useState} from 'react';
import { View } from 'react-native';
import { withTheme, BottomNavigation, Text } from 'react-native-paper';
import ExercisesPage from './ExercisesPage';
import HomePage from './HomePage';

const HomeRoute = () => <HomePage/>;

const WorkoutsRoute = () => <Text>Workouts</Text>;

const ExercisesRoute = () => <ExercisesPage/>;

function MainNavigation() {

    //Sets the states for the page navigation
    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'home', title: 'Home', icon: 'account' },
        { key: 'workouts', title: 'Workouts', icon: 'weight-lifter' },
        { key: 'exercises', title: 'Exercises', icon: 'dumbbell' },
    ]);

    const renderScene = BottomNavigation.SceneMap({
        home: HomeRoute,
        workouts: WorkoutsRoute,
        exercises: ExercisesRoute,
    });

    return (
        <BottomNavigation
            navigationState={{ index, routes }}
            onIndexChange={setIndex}
            renderScene={renderScene}
        />
        
    );
}

export default withTheme(MainNavigation);