import React from "react";
import SelectState from "../UI/Dropdowns/States/States";
import SelectCountry from "../UI/Dropdowns/Countries/Countries";
import s from "./form.module.css";

const Form = () => {
  return (
    <div className="max-w-screen-sm mx-auto px-8">
      <form name="form" className={"grid grid-cols-1 gap-4"}>
        <label className="col-span-1">
          <div className="uppercase">first name</div>
          <input
            name="firstName"
            required
            type="text"
            className={s.standardInput}
          />
        </label>
        <label className="col-span-1">
          <div className="uppercase">last name</div>
          <input
            required
            id="lastName"
            name="lastName"
            type="text"
            className={s.standardInput}
          />
        </label>
        <label className="col-span-1">
          <div className="uppercase">street address</div>
          <input
            required
            id="street"
            name="street"
            type="text"
            className={s.standardInput}
          />
        </label>
        <label className="col-span-1">
          <div className="uppercase">city</div>
          <input
            required
            id="city"
            name="city"
            type="text"
            className={s.standardInput}
          />
        </label>
        <label className="col-span-1">
          <div className="uppercase">state</div>
          <SelectState id="state" className={s.standardInput} />
        </label>
        <label className="col-span-1">
          <div className="uppercase">country</div>
          <SelectCountry id="country" className={s.standardInput} />
        </label>
        <button className="uppercase bg-black text-white p-2 hover:opacity-80">
          submit
        </button>
      </form>
    </div>
  );
};

export default Form;
