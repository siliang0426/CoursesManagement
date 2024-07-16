import axios from "axios";

const STUDENT_API_BASE_URL = process.env.REACT_APP_STUDENT_API_URL

class StudentService{
    getStudents(){
        return axios.get(STUDENT_API_BASE_URL);
    }

    //get student by id
    getStudentById(id){
        return axios.get(`${STUDENT_API_BASE_URL}/${id}`);
    }

    //student create
    postStudents(student){
        return axios.post(STUDENT_API_BASE_URL,student);
    }

    //student update
    putStudents(student){
        return axios.put(STUDENT_API_BASE_URL,student);
    }

    //student delete by id
    deleteStudents(id) {
        return axios.delete(`${STUDENT_API_BASE_URL}/${id}`);
    }
}

export default new StudentService()