import React from 'react'
import { useNavigate } from 'react-router'

interface CNProps{
  courseName: string;
  courseLink: string;
}

const CourseName: React.FC<CNProps> = ({courseName, courseLink}) => {
  const navigate= useNavigate();
  return (
    <div>
      <button onClick={()=>{navigate(`/${courseLink}`)}}>{courseName}</button>

    </div>
  )
}

export default CourseName
