import React,{useState} from 'react';

import useFormHook from '../../Hooks/useFormHook';
import {formValidaiton} from '../../utils/validation.js'


const Form = ()=>{
  const {values,handleChange,handleSubmit} = useFormHook(formValidaiton)
  return(
    <div>
      <form onSubmit={(e)=>handleSubmit(e)}>
        <label>
          username
          <input type='text' name='username' value={values.username} onChange={(e)=>{handleChange(e)}}></input>
        </label>
        <label>
          password
          <input type='password' value={values.password} name='password' onChange={(e)=>{handleChange(e)}}></input>
        </label>
        <button type='Submit'>submit</button>
      </form>
    </div>
  )
}

export default Form
