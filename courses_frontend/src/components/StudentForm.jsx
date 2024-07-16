import React, {useEffect, useState} from 'react'

const StudentForm = ({title, initialValues, onSubmit}) =>{
    const [firstName, setFirstName] = useState(initialValues.firstName||"");
    const [lastName, setLastName] = useState(initialValues.lastName||"");
    const [emailId, setEmailId] = useState(initialValues.emailId|| "");


    useEffect(() => {
        setFirstName(initialValues.firstName || "");
        setLastName(initialValues.lastName || "");
        setEmailId(initialValues.emailId || "");
    }, [initialValues]);

    const handleFirstNameChange=(e)=>{
        setFirstName(e.target.value);
        // inputChangeHandlers.handleFirstNameChange(e.target.value);
    }
    const handleLastNameChange=(e)=>{
        setLastName(e.target.value);
        // inputChangeHandlers.handleLastNameChange(e.target.value);
    }
    const handleEmailIdChange=(e)=>{
        setEmailId(e.target.value);
        // inputChangeHandlers.handleEmailIdChange(e.target.value);
    }

    const handleFormSubmit = (e)=>{
        e.preventDefault();
        onSubmit({firstName:firstName,lastName:lastName,emailId:emailId});

        setFirstName("");
        setLastName("");
        setEmailId("");
    }

    return(
            <div>
                <br></br>
                <div className='container'>
                    <div className='row'>
                        <div className='card col-md-6 offset-md-3 offset-md-3'>
                            <br/>
                            <h3 className='text-center'>{title}</h3>
                            <div className='card-body'>
                                <form onSubmit={handleFormSubmit}>
                                    <div className='form-group'>
                                        <label>First Name:</label>
                                        <input placeholder="First Name" name="firstName" className='form-control'
                                            value={firstName} onChange={handleFirstNameChange}/>
                                    </div>
                                    <div className='form-group'>
                                        <label>Last Name:</label>
                                        <input placeholder="Last Name" name="lastName" className='form-control'
                                            value={lastName} onChange={handleLastNameChange}/>
                                    </div>
                                    <div className='form-group'>
                                        <label>Email ID:</label>
                                        <input placeholder="Email ID" name="emailId" className='form-control'
                                            value={emailId} onChange={handleEmailIdChange}/>
                                    </div>
                                    <br/>
                                    <button className='btn btn-success' type='submit'>Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}
export default StudentForm