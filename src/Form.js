import React, {useState} from 'react';

const Form = () => {

    const [name, setName] = useState('');

    const buttonClick = (event) => {
        console.log('clicked');

        // Update state here
        //setName();
    };

    return (
        <form>
            <label htmlFor="name">Name: 
                <input id="name" name="name" type="text"/>
            </label>
            
            <button onClick={buttonClick}>Submit</button>
        </form>
    );
};
export default Form;