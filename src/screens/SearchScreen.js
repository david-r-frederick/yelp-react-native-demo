import React, { useState } from 'react';
import { Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/resultsList';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    const filterResultsByPrice = (price) => {
        return results.filter((result) => {
            return result.price === price;
        });
    };

    return (
        <>
            <SearchBar
                term={term}
                onTermChange={(text) => {
                    setTerm(text);
                }}
                onTermSubmit={() => searchApi(term)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <ScrollView>
                <ResultsList
                    resultsList={filterResultsByPrice('$')}
                    headerText="Cost Effective"
                    />
                <ResultsList
                    resultsList={filterResultsByPrice('$$')}
                    headerText="A Bit Pricier"
                    />
                <ResultsList
                    resultsList={filterResultsByPrice('$$$')}
                    headerText="Big Spender"
                />
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({});

export default SearchScreen;
