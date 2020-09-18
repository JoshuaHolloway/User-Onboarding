import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Form from './Form';
import schema from './validation/formSchema';
import * as yup from 'yup';
import './App.css';

// Initial values to be placed in program state at startup
const usersList = [
  { name: 'josh'},
  { name: 'mike'}
];
const initialFormValues = {
  name: ''
};
const initialFormErrors = {
  name: ''
};

function App() {
  const [users, setUsers] = useState(usersList);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);

  // --------------------------------------------

  const validate = (name, value) => {
    // Validate this specific key/value pair
    yup
      // -We give reach the schema as the first arg,
      //  and the key we want to test as the second.
      .reach(schema, name)
      // -We then run validate using the value
      .validate(value)
      // -If the validation is successful, 
      //  we clear the error message
      .then(valid => {

        //console.log('validate() - valid: ', valid);

        setFormErrors({...formErrors, [name]: ""})
      })
      // -If validation is unsuccessful, we can set 
      //  the error message to the message returned
      //  from yup (that we created in our schema).
      .catch(err => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0]
        });
      });
  };

  // --------------------------------------------

  const change = (event) => {
    const { name, value } = event.target;

    validate(name, value);

    //console.log('input change, name: ', name, ', value: ', value, ', formValues: ', formValues);

    setFormValues({ ...formValues, [name]: value});
  };

  // --------------------------------------------

  const submit = (event) => {
    event.preventDefault(); // don't navigate

    const newUser = { // create new user from form data
      name: formValues.name
    };

    setUsers([...users, newUser]);    // Append new user
    setFormValues(initialFormValues); // Reset form

  };

  // --------------------------------------------

  const post_request = () => {

    console.log('post_request');

    const sentData = { data: "Hello World!" };

    axios
      .post("https://reqres.in/api/users", sentData)
      .then(res => {
        console.log(res.data); // Data was created successfully and logs to console
      })
      .catch(err => {
        console.log(err); // There was an error creating the data and logs to console
      });
  };
  useEffect(() => {
    post_request();
  }, []);

  // --------------------------------------------

  useEffect(() => {
    schema.isValid(formValues)
      .then(valid => {
        //console.log('valid:', valid);
      });
  }, [formValues]);

  // --------------------------------------------

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
