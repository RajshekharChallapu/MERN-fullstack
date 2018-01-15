//surveyField contains logic to render a single 
//label text input

import React from 'react';

export default({input, label})=>{

    /*we can use above code instead of console.log(props.input); */
return(
    <div>
    <label>{label}</label>
    <input {...input} /> {/* onBlur={input.onBlur} onChange={input.onChange} */}
    </div>
);

};