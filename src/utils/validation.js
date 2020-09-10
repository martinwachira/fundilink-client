

const formValidaiton=(values)=>{
  let errors = {}

  if(!values.username){
    errors.username ='please enter a username'
    console.log('no username ')
  }
  if(!values.password){
    errors.password = "please enter a password"
    console.log('no password ')
  }
  return errors
}


export{formValidaiton}
