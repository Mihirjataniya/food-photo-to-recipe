'use client';
import axios from "axios";
import { useState } from "react";

export default function Home() {
  const [data, setData] = useState([]);
  const [imageUrl, setImageUrl] = useState("");

  const fetchLabels = async (event) => {
    event.preventDefault(); 
    try {
      const response = await axios.post('/api/identify-dish', {
        imageUrl: imageUrl
      });
      console.log(response.data);
      setData(response.data.labels); 
    } catch (error) {
      console.error("Error fetching labels:", error);
    }
  };

  return (
    <div className="p-5">
      <form onSubmit={fetchLabels}>
        <input
          onChange={(e) => setImageUrl(e.target.value)}
          type="text"
          className="border-2 border-black w-96 outline-none p-2"
          placeholder="Enter image url"
        />
        <button className="w-32 bg-blue-500 p-2 ml-10" type="submit">
          Submit
        </button>
      </form>
      <div>
        {/* Map over the data and render relevant properties */}
        {data &&
          data.map((label, index) => (
            <div key={index} className="border p-2 mb-2">
              <p><strong>Description:</strong> {label.description}</p>
              <p><strong>Score:</strong> {label.score}</p>
              <p><strong>Confidence:</strong> {label.confidence}</p>
              {/* Add other properties if needed */}
            </div>
          ))}
      </div>
    </div>
  );
}
