import UniversityData from './UniversityData'
import { useNavigate, Routes, Route } from "react-router-dom";
import MduCourses from '../mdu/MduCourse'
import MduBtechCourse from '../mdu/mdu-btech/MduBtechCourse';

interface ULProps{
  name: string;
  link: string;
}

const UniversitiesList: React.FC<ULProps> = ({ name, link }) => {
  let navigate = useNavigate();
  return (
    <button onClick={() => { navigate(`/${link}`) }}>{name}</button>
  )
}

const UniversityPage = () => {
  return (
    <>

      <h1>Select your University</h1>
      {UniversityData.map((university) => (
        <UniversitiesList name={university.name} link={university.link} />
      ))}

    {/* <Routes>
      <Route path="/" element={<UniversityPage />} />
      <Route path='/mdu' element={<MduCourses />} />
      <Route path="/mdu/btech" element={<MduBtechCourse/>} />
    </Routes> */}
    </>
  )

}

export default UniversityPage;