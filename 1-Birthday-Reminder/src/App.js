//steps-

// 1. Declared the initialState using useState
// 2. passed the initial Data onto the list component and then rendered it
// 3. using the setPeople function to clear the birthdays 



import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {

const [people, setPeople] = useState(data);

const clearPeopleHandler = () => {
  setPeople([]);
}

  return <main>
    <section className='container'>
      <h3>{people.length} birthdays today</h3>
      <List people={people}/>
      <button onClick={clearPeopleHandler}>Clear All</button>
    </section>
  </main>;
}

export default App;
