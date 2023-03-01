import React from "react";

const ListCountries = ({ countriesMatch, setShowCountry }) => {
  const handleOnClick = (country) => {
    setShowCountry(country);
  };
  return (
    <div>
      <table>
        {countriesMatch.map((c) => {
          return (
            <>
              <tr key={c.name.common}>
                <td>{c.name.common}</td>
                <td>
                  <button onClick={() => handleOnClick(c)}>show</button>
                </td>
              </tr>
            </>

            /*   <ul key={c.name.common}>
      {c.name.common}
      <button onClick={() => handleOnClick(c)}>show</button>
      </ul> */
          );
        })}
      </table>
    </div>
  );
};

export default ListCountries;
