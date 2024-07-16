import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import ListStudentsComponent from './components/ListStudentsComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateStudentComponent from './components/CreateStudentComponent';
import UpdateStudentComponent from './components/UpdateStudentComponent';

function App() {
  return (
    <div>
      <HeaderComponent />
      <Router>
        <div className='container'>
            <Routes>
              <Route path = "/" exact element={<ListStudentsComponent />}> </Route>
              <Route path = "/add-student" element={<CreateStudentComponent />}> </Route>
              <Route path = "/update-student/:id" element={<UpdateStudentComponent />}> </Route>
              <Route path = "/students" element={<ListStudentsComponent />}> </Route>
            </Routes>
          </div>
        <FooterComponent/>
      </Router>
    </div>
  );
}

export default App;
