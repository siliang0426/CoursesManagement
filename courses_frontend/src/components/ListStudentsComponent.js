import React, { useState, useEffect } from 'react';
import StudentService from '../services/StudentService';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';

Modal.setAppElement('#root');

function ListStudentsComponent() {
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedStudentId, setSelectedStudentId] = useState(null);

  const fetchStudents = () => {
    StudentService.getStudents().then((res) => {
      setStudents(res.data);
    });
  };

  useEffect(() => {
    fetchStudents();
  }, []); // Empty dependency array to fetch students only once on component mount

  const addStudent = () => {
    navigate('/add-student');
  };
  const updateStudent = (id) =>{
    navigate(`/update-student/${id}`);
  }

  const openModal = (id) =>{
    setSelectedStudentId(id);
    setModalIsOpen(true);
  }
  const closeModal = () =>{
    setSelectedStudentId(null);
    setModalIsOpen(false);
  }


  const deleteStudent = (id) =>{
    StudentService.deleteStudents(id).then((res)=>{
      setStudents(students.filter(student => student.id !== id));
      closeModal();
    }
    ).catch((error)=>{
      console.log("error",error);
    });
    
  }
  const customStyles = {
    content: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      transform: 'translate(-50%, -50%)',
      width: '400px',
      padding: '20px',
    },
    overlay: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.75)',
      zIndex: 1000, // Ensuring the modal is on top
    }
  };

  return (
    
    <div>
      <div className='container' style={{justifyContent:"center"}}>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
        >
          <p>Are you sure you want to delete this student?</p>
          <button onClick={()=>deleteStudent(selectedStudentId)} className='btn btn-danger'>Yes</button>
          <button onClick={closeModal} className='btn btn-secondary' style={{marginLeft:"10px"}}>No</button>
        </Modal>
      </div>
        <h2 className='text-center'>Student List</h2>
        <div className = "row">
            <div className="col-md-3 p-0">
            <button className="btn btn-primary" onClick={addStudent}> Add Student</button>
            </div>
        </div>
            <br/>

      <div className='row'>

        <table className='table table-striped table-bordered'>

          <thead>
            <tr>
              <th> Student First Name</th>
              <th> Student Last Name</th>
              <th> Student Email Id</th>
              <th> Actions</th>
            </tr>
          </thead>

          <tbody>
            {students.map(student => (
              <tr key={student.id}>
                <td>{student.firstName}</td>
                <td>{student.lastName}</td>
                <td>{student.emailId}</td>
                <td>
                    <button onClick={()=> updateStudent(student.id)} className='btn btn-info'>Update</button>
                    <button style={{marginLeft:"15px"}} onClick={()=> openModal(student.id)} className='btn btn-danger'>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      
    </div>
  );
}

export default ListStudentsComponent;
