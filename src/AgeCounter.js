import React, {useState} from 'react'

export default function AgeCounter(props) {
    const [addYear, setAddYear] = useState(0)

    function ageCalculated(el) {
        setAddYear(addYear + el)
        props.improved(el)

    }

    const updatedAge = addYear < 9 ? "young" : "old";


    return (
        <div className={`AgeCounter ${updatedAge}`}>


          <h4>{props.cat}</h4>  
          <h3>{addYear}</h3>
         <button onClick={() => ageCalculated(1)}>adds year</button>   
         <button onClick={() => ageCalculated(-addYear)}>new life</button>   
        </div>
    )
}


