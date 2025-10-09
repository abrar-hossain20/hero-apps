import axios from "axios";
import { useEffect, useState } from "react";

const useAppsData = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios.get('/AppsData.json')
      .then(response => setProducts(response.data))
      .catch(err => setError(err))
      .finally(() => setLoading(false))
  }, []);

  return { products, loading, error };
};
export default useAppsData;