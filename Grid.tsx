import React from 'react';
import {View, Text} from 'react-native';

const Grid: React.FC = () => {
    const rows = 10;
    const columns = 10;
    return (
        <View>
            {Array.from({ length: rows }).map((_, rowIndex) => (
                <View key={rowIndex}>
                    {Array.from({ length: columns }).map((_, columnIndex) => (
                        <View key={columnIndex}><Text>x</Text></View>
                    ))}
                </View>
            ))}
        </View>
    );
};

export default Grid;