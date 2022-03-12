import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { withTheme } from 'react-native-paper';

function HomePage(props: any) {
    const{ colors,roundness } = props.theme;

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: colors.background,
            justifyContent:"space-around",
        },
        calendar:{
            flex: 8,
            alignItems:'center',
            justifyContent:'center',
            margin:10,
        },
        startWorkout:{
            flex: 1,
            alignItems:'center',
            justifyContent:'center',
            margin:10,
        },
        box:{
            backgroundColor: colors.primary,
            borderRadius: roundness,
        },
    });

    return (
        <View style={styles.container}>
            <View style={[styles.calendar,styles.box]}>
            </View>
            <View style={[styles.startWorkout,styles.box]}>
                
            </View>
        </View>
    );
}



export default withTheme(HomePage);