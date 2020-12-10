// steps-
// 1. took the data from the props
// 2. stored it in variables and iterate using the map function and passed the key 
// 3. rendered it out


import React from 'react';

const List = (props) => {

  const people = props.people;

  return (
    <>
      {people.map((person)=> {
        console.log(person)
        const {id, name, age, image} = person;
        return <article key = {id} className = "person">
          <img src ={image} alt="{name}"/>
          <div>
          <h4>{name}</h4>
          <p>{age} years</p>
          </div>
        </article>
      })}
    </>
  );
};

export default List;
