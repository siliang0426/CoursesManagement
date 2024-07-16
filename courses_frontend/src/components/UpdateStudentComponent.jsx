import React, { useEffect, useState } from 'react';
import { useNavigate, useParams} from 'react-router-dom';
import StudentService from '../services/StudentService';
import StudentForm from './StudentForm';

function UpdateStudentComponent() {
    const navigate = useNavigate();
    const {id} = useParams();
    let [student,setStudent] = useState({firstName:"",lastName:"",emailId:""});

    useEffect(() => {
        StudentService.getStudentById(id).then(res => {
            const data = res.data;
            setStudent({
                firstName: data.firstName,
                lastName: data.lastName,
                emailId: data.emailId
            });
            console.log(student);
        }).catch(err => {
            console.error("Error fetching student data: ", err);
        });
    }, [id]);



    const handleFormSubmit=(student)=>{

        //updated then go back to listing
        StudentService.put(id,student).then(res =>{
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
                title="Update Student"
                initialValues={student}
                onSubmit={handleFormSubmit}
                // inputChangeHandlers={inputChangeHandlers}
            />
        );
}


export default UpdateStudentComponent;