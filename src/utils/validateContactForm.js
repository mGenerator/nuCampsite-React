export const validateContactForm = (values)=>{
    const errors = {};
    //firstName validation
    if(!values.firstName){
      errors.firstName = 'Required'; 
    }else if(values.firstName.length < 2){
      errors.firstName = 'Must be at least 2 characters.';
    }
    else if(values.firstName.length > 15){
      errors.firstName = 'Must be 15 characters or less.';
    }
    //lastName validation
    if(!values.lastName){
      errors.lastName = 'Required'; 
    }else if(values.lastName.length < 2){
      errors.lastName = 'Must be at least 2 characters.';
    }
    else if(values.lastName.length > 15){
      errors.lastName = 'Must be 15 characters or less.';
    }
    //validation for phoneNum
    const reg = /^\d+$/;
    //code will run if the phoneNumber has any letters in its field
    if(!reg.test(values.phoneNum)){
      errors.phoneNum = 'The phone number should contain only numbers.';
    }
    //email validation
    if(!values.email.includes('@')){
      errors.email = 'The email should contain a @';
    }
    return errors;
  };