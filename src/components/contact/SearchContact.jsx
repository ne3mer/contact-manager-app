import React from "react";
import { PURPLE, COMMENT } from "../../helpers/colors";
const SearchContact = () => {
  return (
    <div className="input-group mx-2 w-75" dir="ltr">
      <span
        className="input-group-text"
        id="basic-addon1"
        style={{ backgroundColor: "PURPLE" }}
      >
        <i className="fa fa-search" />
      </span>
      <input
        dir="rtl"
        type="text"
        style={{ backgroundColor: COMMENT, borderColor: PURPLE }}
        className="form-control"
        aria-label="search"
        aria-describedby="basic-addon1"
        placeholder="جستجوی مخاطب"
      />
    </div>
  );
};

export default SearchContact;
