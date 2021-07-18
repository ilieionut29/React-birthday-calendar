import React, { Fragment } from "react";

const List = ({ peopleList }) => {
  return (
    <Fragment>
      {peopleList.map((person) => {
        const { id, name, age, img } = person;
        return (
          <article key={id} className="person">
            <img src={img} />
            <div>
              <h4>{name}</h4>
              <p>{age} year's</p>
            </div>
          </article>
        );
      })}
    </Fragment>
  );
};

export default List;
