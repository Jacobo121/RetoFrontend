import {useState, useEffect } from 'react';
import axios from 'axios';

const useRequest = url => {
    const [persons, setPersons] = useState([]);

    useEffect(() => {
        axios.get(url)
        .then(response => setPersons(response.data))
        /* .then(data =>  setPersons(data)) */
    }, [url])
    return persons;
}

export default useRequest;