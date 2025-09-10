import { useEffect, useState } from "react";

const API_URL = "https://localhost:7023/";

export default function Request({ endpoint }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`${API_URL}/${endpoint}`)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, [endpoint]);

  return data;
}
