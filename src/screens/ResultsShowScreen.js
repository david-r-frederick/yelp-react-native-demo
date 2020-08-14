import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    Image,
    Linking,
    ScrollView,
} from 'react-native';
import yelp from '../api/yelp';

const resultsShowScreen = ({ navigation }) => {
    const [result, setResult] = useState(null);
    const id = navigation.getParam('id');

    const getResult = (id) => {
        yelp.get(`/${id}`)
            .then((response) => {
                setResult(response.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => getResult(id), []);

    if (!result) {
        return null;
    }

    return (
        <FlatList
            ListHeaderComponent={
                <>
                    <Text style={styles.name}>{result.name}</Text>
                    <Text style={styles.address}>
                        {result.location.display_address.join('\n')}
                    </Text>
                    <Text style={styles.phone}>{result.display_phone}</Text>
                    <Text
                        style={styles.link}
                        onPress={() => Linking.openURL(`${result.url}`)}
                    >
                        Visit Yelp
                    </Text>
                </>
            }
            data={result.photos}
            keyExtractor={(photo) => photo}
            renderItem={({ item }) => {
                return <Image style={styles.image} source={{ uri: item }} />;
            }}
        />
    );
};

const styles = StyleSheet.create({
    name: {
        fontSize: 25,
        fontWeight: 'bold',
        marginLeft: 15,
        marginTop: 15,
    },
    image: {
        height: 150,
        width: 300,
        marginLeft: 15,
        marginVertical: 10,
    },
    address: {
        marginLeft: 15,
        fontSize: 16,
        marginTop: 5,
    },
    phone: {
        marginLeft: 15,
        fontSize: 16,
    },
    link: {
        fontSize: 16,
        color: 'red',
        marginLeft: 15,
    },
});

export default resultsShowScreen;
