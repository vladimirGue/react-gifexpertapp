
import React, { useState } from 'react';
import { PropTypes} from 'prop-types';

export const AddCategory = ( { setCategories } ) => {

    const [inputValue, setInputValue] = useState('');

    //para poder escribir cualquier cosa en el input
    const handleInputChange = ( e ) =>{
        setInputValue(e.target.value);
    }

    const handleSubmit = ( e ) => {
        e.preventDefault();

        //validamos que el input no este vacio
        if (inputValue.trim().length > 2) {
            setCategories(cats => [inputValue, ...cats]);
            setInputValue('');
        }

    }

    return (
        <form onSubmit={ handleSubmit }>
            <input type='text' value={inputValue} onChange={ handleInputChange }></input>
        </form>
    )
}

//validamos que se reciva una funcion como argumento
AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
