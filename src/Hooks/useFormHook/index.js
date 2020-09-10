import {useState,useEffect} from 'react';

const useFormHook =(validaiton)=>{
  const [values,setValues] = useState({username:'',password:''})
  const [errors,setErrors] = useState({})
  const [isSubmitting,setIsSubmitting] = useState(false)

  const handleChange =(e)=>{
    const {value,name} = e.target
    setValues({...values,[name]:value})
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    setErrors(validaiton(values))
    setIsSubmitting(true)
  }

  useEffect(()=>{
    if(isSubmitting && Object.keys(errors).length===0){
      //call to database to store the username and password will go here 
      console.log('made it ')
    }
    setIsSubmitting(false)
  },[isSubmitting,errors])

  return{
    values,
    handleChange,
    handleSubmit
  }
}

export default useFormHook
