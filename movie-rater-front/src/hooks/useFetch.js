import { useState, useEffect } from "react";
import {API} from "../services/api-service";
import {useCookies} from "react-cookie";

function useFetch () {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(['']);
    const [token] = useCookies(['auth'])

    useEffect( () => {
        async function fetchData() {
            setLoading(true);
            setError();

            let err;
            const data = await API.getMovies()
                .catch(err = setError(err));
            setData(data);
            setLoading(false);
        }

        fetchData();
    }, []);

    return [data, loading, error];



}

export {useFetch}