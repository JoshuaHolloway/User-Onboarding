import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

// Components4
import Form from './Form';

// Initial values to be placed in program state at startup
const usersList = [
  { name: 'josh'},
  { name: 'mike'}
];

const initialFormValues = {
  name: ''
};

function App() {
  const [users, setUsers] = useState(usersList);
  const [formValues, setFormValues] = useState(initialFormValues);

  const change = (event) => {
    const { name, value } = event.target;

    console.log('input change, name: ', name, ', value: ', value, ', formValues: ', formValues);

    setFormValues({ ...formValues, [name]: value});
  };

  const submit = (event) => {
    event.preventDefault(); // don't navigate

    const newUser = { // create new user from form data
      name: formValues.name
    };

    setUsers([...users, newUser]);    // Append new user
    setFormValues(initialFormValues); // Reset form
  };

  return (
    <div className="App">
      {
        users.map((user, idx) => {
          return <div key={idx}>UserName: {user.name}</div>;
        })
      }
      
      <form onSubmit={submit}>
        <h5>Enter Your Info: </h5>
        <label htmlFor="name">Name: 
          <input 
            id="name"
            name="name"
            type="text"
            value={formValues.name}
            onChange={change}
          />
        </label>

        <button>Create Accoutn</button>
      </form>
      
    </div>
  );
}

export default App;
