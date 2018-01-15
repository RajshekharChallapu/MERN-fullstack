//surveyField contains logic to render a single 
//label text input
import React from 'react';
export default({input, label, meta: {error,touched}})=>{
    /*we can use above code instead of console.log(props.input); */
return(
    <div>
    <label>{label}</label>
    <input {...input} style={{marginBottom:'5px'}}/> {/* onBlur={input.onBlur} onChange={input.onChange} */}
    <div className="red-text" style ={{marginBottom:'20px'}}>
    {touched && error}
    </div>
    </div>
);

};