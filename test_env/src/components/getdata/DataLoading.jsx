import { useEffect, useState } from "react";
import axios from "axios";

function useDataLoading() {
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);
  const [dataContainer, setDataContainer] = useState(null);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const data = await axios.get("http://localhost:3000/products");
        console.log(data.data);

        if (data.data) {
          setDataContainer(data.data);
        }
        setLoading(false);
      } catch (error) {
        setErr(error);
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return { dataContainer, loading, err };
}

function DataLoading() {
  const { dataContainer, loading, err } = useDataLoading();
  console.log(dataContainer, loading, err);

  return <div></div>;
}

export default DataLoading;
