import React from 'react'

interface Props{
    yearName: string;
    year: number;
    setYear: React.Dispatch<React.SetStateAction<number>>;
}

const YearComponent: React.FC<Props> = ({yearName, year, setYear}) => {
  return (
    <div>
        <button onClick={()=>setYear(year)}>{yearName}</button>
    </div>
  )
}

export default YearComponent
