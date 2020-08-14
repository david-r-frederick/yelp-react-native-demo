import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
    return (
    <View style={styles.backgroundStyle}>
        <Feather name="search" style={styles.featherIconStyle} />
        <TextInput 
            placeholder="Search" 
            style={styles.inputStyle}
            value={term}
            onChangeText={onTermChange}
            autoCapitalize="none"
            autoCorrect={false}
            onEndEditing={onTermSubmit}
            />
    </View>
    );
}

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: 'rgb(220, 220, 220)',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row',
        marginVertical: 13
    },
    inputStyle: {
        flex: 1,
        fontSize: 18
    },
    featherIconStyle: {
        fontSize: 35,
        alignSelf: "center",
        marginHorizontal: 8
    }
});

export default SearchBar;