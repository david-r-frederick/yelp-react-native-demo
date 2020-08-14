import { useState, useEffect } from 'react';
import yelp from '../api/yelp';
import GetLocation from 'react-native-get-location';



export default () => {
    const [ results, setResults ] = useState([]);
    const [ errorMessage, setErrorMessage ] = useState('');
    const [ location, setLocation ] = useState("Houston, TX");

    useEffect(() => {
        GetLocation.getCurrentPosition({
            enableHighAccuracy: true,
            timeout: 15000
        }).then(loc => {
            setLocation(loc);
        }).catch(err => {
            console.log(err);
        })
    }, []);

    const searchApi = (searchTerm) => {
        yelp.get('/search', {
            params: {
                limit: 50,
                term: searchTerm,
                location: location
            }
        })
        .then(response => {
            setResults(response.data.businesses);
            setErrorMessage('');
        }).catch(err => {
            setErrorMessage('Something went wrong.');
        });
    };

    useEffect(() => {
        searchApi('steak')
    }, []);

    return [searchApi, results, errorMessage];
};