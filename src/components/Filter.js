import React from "react";
import { useState } from "react";
import { Form, FormControl } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";

export const Filter = ({
  inputSearch,
  setInputSearch,
  keyRate,
  setKeyRate,
}) => {

  const onStarClick=(nextValue)=>{
    setKeyRate(nextValue);
  }
  return (
    <div>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          onChange={(event) => {
            setInputSearch(event.target.value);
          }}
          value={inputSearch}
        />
        
      </Form>
      <ReactStars
        count={5}
        size={22}
        activeColor="#ffd700"
        onChange={onStarClick}
      />
     
    </div>
  );
};
export default Filter;
