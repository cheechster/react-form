import React, { useState } from "react";
import states from "../../../data/states_titlecase.json";
import PropTypes from "prop-types";

const SelectUSState = (props) => {
  const [selectedOption, setSelectedOption] = useState(states[0].value);

  {
    const { id, className } = props;
    return (
      <select
        id={id}
        className={className}
        value={selectedOption}
        onChange={(e) => setSelectedOption(e.target.value)}
      >
        <option />
        {states.map((item) => (
          <option key={item["abbreviation"]} value={item["abbreviation"]}>
            {item.name}
          </option>
        ))}
      </select>
    );
  }
};

const propTypes = {
  id: PropTypes.string,
  onChange: PropTypes.func,
  className: PropTypes.string,
};

SelectUSState.propTypes = propTypes;

export default SelectUSState;
