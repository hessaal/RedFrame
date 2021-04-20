import React from 'react';
import Alert from 'react-bootstrap/Alert';


/* 
this component will return input element 
while :

label: is the input label 
placeholder: is the input place holder text
value : is the input value 
name : is the input name 
error : is the error msgs for this input
onChange:is the function that will handle what will happen if the input value changed 
type: is the input type 
id : is the input id 
checked:is the input checked

*/

const Input = ({ label, placeholder, value, name, error, onChange, type, id, checked }) => {
    let classname = '';
    if (checked) {
        classname = ' checked';
    }
    return (
        <>
            <label className={label !== '' ? 'label' + classname : 'empty_label'} htmlFor={id || name}>{label}</label>
            <input className="input "
                type={type}
                id={id}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                name={name}
                checked={checked} />
            {/* bootstrap comoponet alert shows the error msg */}
            {error && <Alert variant="danger">{error}</Alert>}
        </>
    );
};

export default Input;