import React, {useState} from 'react';
// I am destructuring useState right here

const UserInfoForm = (props) => {

    const [firstname, setfirstname] = useState(""); //the useState('') is the initial value of name, so you can change it to anything really
    
    //we are deconstructing right here, can name this anything like banana then setbanana. Set anything is what updates the data. 
    
    const [lastname, setlastname] = useState(""); 

    const [email, setemail] = useState("");

    const [password, setpassword] = useState("");

    const [confirmpassword, setconfirmpassword] = useState("");


    const [popup, setpopup] = useState(false);


  

    const handleSubmit = (e) => {
        e.preventDefault();
        // e must be in the parameter so it can be used
        // this prevents the default behavior of js, this will cause nothing to happen, for now this is what we want
        // can add and alert pop up here
        alert("You have submitted a form");
        setpopup(true);
    }

    const firstnamevalid = (firstname) => {
        if(firstname.length <= 2){
            return false;
        }
        return true;
    }
    const lastnamevalid = (lastname) => {
        if(lastname.length <= 2){
            return false;
        }
        return true;
    }

    const emailvalid = (email) => {
        if(email.length <= 5){
            return false;
        }
        return true;
    }

    const passwordvalid = (password) => {
        if(password.length <= 8){
            return false;
        }
        return true;
    }

    const confirmpasswordvalid = (confirmpassword) => {
        if(confirmpassword == password){
            return true;
        }
        return false;
    }

    return (
        // since we are not using life cycle from class comp, we dont need render, just return
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>First Name: </label>
                    <input
                        type="text"
                        value={firstname} 
                        onChange={(e) => setfirstname(e.target.value)}
                    />
                    {firstnamevalid(firstname) ? "" : <p>Your first name must be longer than 2 characters</p>}
                </div>
                <div className="form-group">
                    <label>Last Name: </label>
                    <input
                        type="text"
                        value={lastname} 
                        onChange={(e) => setlastname(e.target.value)}
                    />
                    {lastnamevalid(lastname) ? "" : <p>Your last name must be longer than 2 characters</p>}
                </div>
                <div className="form-group">
                    <label>Email: </label>
                    <input
                        type="text"
                        value={email} 
                        onChange={(e) => setemail(e.target.value)}
                    />
                    {emailvalid(email) ? "" : <p>Your email must be longer than 5 characters</p>}
                </div>
                <div className="form-group">
                    <label>Password: </label>
                    <input
                        type="text"
                        value={password} 
                        onChange={(e) => setpassword(e.target.value)}
                    />
                    {passwordvalid(password) ? "" : <p>Your password must be longer than 8 characters</p>}
                </div>
                <div className="form-group">
                    <label>Confirm Password: </label>
                    <input
                        type="text"
                        value={confirmpassword} 
                        onChange={(e) => setconfirmpassword(e.target.value)}
                    />
                    {confirmpasswordvalid(confirmpassword) ? "" : <p>Your passwords must match</p>}
                </div>
                <input type="submit" value="Make Account" />
            </form>
            {
                popup ?
            <div>
                <p>{firstname}</p>
                <p>{lastname}</p>
                <p>{email}</p>
                <p>{password}</p>
                <p>{confirmpassword}</p>
            </div> : null
            }
        </div>
    );
}

export default UserInfoForm;
{/* Dont do annonymous functions because it can make things confusing, giving name to sandwich form is good practice */}

{/* at value={firstname}, we have made the input read the value of the state variable */}

{/* At onChange={(e) => setfirstname(e.target.value)}, onChange is an event listener, and we are making an annonymous function here, e is event and the events target is whatever element value that the event is happening to */}

{/* <p>{firstname}</p>, this is to show the input straight onto the html, super easy right? */}

// e is the synthetic event

// the pop ip is added in the shown on the rendered area but must be made at the top
