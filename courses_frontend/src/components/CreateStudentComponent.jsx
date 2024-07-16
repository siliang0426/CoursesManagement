import React from 'react';
import { useNavigate } from 'react-router-dom';
import StudentService from '../services/StudentService';
import StudentForm from './StudentForm';

function CreateStudentComponent() {
    const navigate = useNavigate();

    const handleFormSubmit=(student)=>{

        StudentService.postStudents(student).then(res =>{
            navigate("/students");
        });

        
    }

    const inputChangeHandlers = {
        handleFirstNameChange: (value) => { console.log("First Name Changed: ", value); },
        handleLastNameChange: (value) => { console.log("Last Name Changed: ", value); },
        handleEmailIdChange: (value) => { console.log("Email ID Changed: ", value);}
    };
        return (
            <StudentForm
                title="Add Student"
                initialValues={{firstName:"",lastName:"",emailId:""}}
                onSubmit={handleFormSubmit}
                // inputChangeHandlers={inputChangeHandlers}
            />
        );
}


export default CreateStudentComponent;