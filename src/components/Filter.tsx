import React from "react";
import TeamsSelect from "./TeamsSelect/TeamsSelect";
import TribesSelect from "./TribesSelect/TribesSelect";

const Filter = () => {
  return (
    <div>
      <TribesSelect />
      <TeamsSelect />
    </div>
  );
};

export default Filter;
