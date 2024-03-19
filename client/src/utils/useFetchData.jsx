import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchData = (url) => {
  const [data, setData] = useState([]);
  const [meta, setMeta] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (url === '') {
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get(url);
        setData(response.data.data);
        setMeta(response.data.meta);
      } catch (err) {
        setError(err.response);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, meta, loading, error };
};

export default useFetchData;
