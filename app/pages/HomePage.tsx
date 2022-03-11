import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../config/colors';

function HomePage() {
    return (
        <View style={styles.container}>
            <View style={styles.calendar}>
            </View>
            <View style={styles.startWorkout}>
                
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        justifyContent:"space-around",
    },
    calendar:{
        flex: 8,
        backgroundColor: colors.primary,
        alignItems:'center',
        justifyContent:'center',
        margin:10,
    },
    startWorkout:{
        flex: 1,
        backgroundColor: colors.primary,
        alignItems:'center',
        justifyContent:'center',
        margin:10,
    },
});

export default HomePage;