import React, { useState } from "react";
import PropTypes from "prop-types";
import countries from "../../../data/countries";

const SelectCountry = (props) => {
  const [selectedOption, setSelectedOption] = useState(countries[0].value);
  const { id, className } = props;

  return (
    <select
      id={id}
      value={selectedOption}
      onChange={(e) => setSelectedOption(e.target.value)}
      className={className}
    >
      <option />
      {countries.map((item) => (
        <option key={item.code} value={item.code}>
          {item.name}
        </option>
      ))}
    </select>
  );
};

const propTypes = {
  id: PropTypes.string,
  onChange: PropTypes.func,
};

SelectCountry.propTypes = propTypes;

export default SelectCountry;
