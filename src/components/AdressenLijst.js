import React, { useEffect, useState } from "react";
import './Adressenlijst.css'

export const AdressenLijst = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
    fetch("http://192.168.1.25:3001/api/people", {
        credentials: "same-origin"
    })
      .then((response) => {
        if (!response.ok) {
            throw new Error(
                `This is an HTTP error: The status is ${response.status}`
            );
        }
        return response.json();
    })
      .then((actualData) => {
        setData(actualData);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setData(null);
      })
      .finally(() => {
        setLoading(false);
      });
}, []);
return (
    <>
        <table key="1">    
            <tr>
            <th>Naam</th>
            <th>Straatnaam</th>
            <th>Huisnr</th>
            <th>Bus</th>
            </tr>
        {loading && <div>A moment please...</div>}
        {error && (
            <div>{`There is a problem fetching the post data - ${error}`}</div>
        )}
        {/* Aparte component maken van data persoon. Die dan aanpassen */}
        {data && data.map(({id, voornaam, straatnaam, huisnummer, busnummer}) => (
            <tr key={id}>
            <td>{voornaam}</td>
            <td>{straatnaam}</td>
            <td>{huisnummer}</td>
            <td>{busnummer}</td>
            </tr>
        ))}</table>
    </>
  );
};