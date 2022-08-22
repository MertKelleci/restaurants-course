import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");

  async function searchApi(searchTerm) {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 20,
          term: searchTerm,
          location: "Istanbul",
        },
      });
      setResults(response.data.businesses);
    } catch (error) {
      setError("Something Went Wrong");
    }
  }

  useEffect(() => {
    searchApi("Pizza");
  }, []);

  return [results, error, searchApi];
};
