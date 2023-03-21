import React,{useState} from 'react'
import CourseName from '../../components/CourseName';
import YearComponent from '../../components/YearComponent';
import BtechYearData from './BtechYearData';


const MduBtechCourse: React.FC = () => {

    const[year, setYear]= useState(1);

    console.log(year)

    return (
        <>
            <h1>MDU BTech Course</h1>
            {BtechYearData.map((ele) => {
                return(
                <YearComponent key={ele.yearNo} yearName={ele.yearName} year={ele.yearNo} setYear={setYear} />
                )
            })}

            <h1>Subjects</h1>
            {BtechYearData[year-1].subjects.map((ele)=>{
                return(
                    <CourseName key={ele.subShortName} courseName={ele.subShortName} courseLink={ele.link} />
                )
            })}

            
        </>
    )
}

export default MduBtechCourse

