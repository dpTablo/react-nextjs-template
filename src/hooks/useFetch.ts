import { useState, useEffect } from 'react';

/** hook 예제 */
const useFetch = (url: string) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((returnedData) => setData(returnedData));
    }, [url]);

    return [data];
};

export default useFetch;
