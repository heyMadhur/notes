import React from 'react';
import './App.css';
import UniversityPage from './universities/UniversityPage'
import { useNavigate, Routes, Route } from "react-router-dom";
import MduCourses from './mdu/MduCourse';
import MduBtechCourse from './mdu/mdu-btech/MduBtechCourse';


const App: React.FC = () => {
  return (
    <>
      <Routes>
      
        <Route path="/" element={<UniversityPage />} />
        <Route path="/mdu" element={<MduCourses />} />
        <Route path="/mdu/btech" element={<MduBtechCourse />} />
      </Routes>
    </>
  );
}

export default App;
