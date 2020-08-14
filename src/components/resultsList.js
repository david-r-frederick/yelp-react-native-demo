import React from 'react';
import { withNavigation } from 'react-navigation';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import SingleResult from './singleResult';

const ResultsList = ({ headerText, resultsList, navigation }) => {
    if(!resultsList.length) {
        return null;
    }
    return (
        <View style={styles.container}>
            <Text style={styles.headerStyle}>{headerText}</Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={resultsList}
                keyExtractor={(result) => result.id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => {
                            navigation.navigate("ResultsShow", { id: item.id});
                        }}>
                            <SingleResult 
                                result={item} />
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    headerStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5
    },
    container: {
        marginVertical: 10
    }
});

export default withNavigation(ResultsList);
