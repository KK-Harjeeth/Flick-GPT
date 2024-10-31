export const checkValidData = (email,password,name)=>{
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    const isNameValid = /^(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})$/.test(name)
    if(!isEmailValid){
        return "Email ID is invalid"
    }
    if(!isPasswordValid){
        return "Password is invalid"
    }
    if(!isNameValid){
        return "Name is invalid"
    }
    return null;
}