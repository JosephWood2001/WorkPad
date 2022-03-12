import React from 'react';
import { View } from 'react-native';
import { withTheme } from 'react-native-paper';
import colors from '../config/colors';

function BottomBar(props: any) {
    const{ colors,roundness } = props.theme;

    return (
        <View
            style={{
                backgroundColor:colors.primary,
                flex:1,
            }}
        >

        </View>
    );
}

export default withTheme(BottomBar);