import React, {useState} from 'react'

export default function AgeCounter(props) {
    const [addYear, setAddYear] = useState(0)



    function ageCalculated(el) {
        setAddYear(addYear + el)
        props.update(el)

    }
    return (
        <div>
            
          <h3>{addYear}</h3>
         <button onClick={() => ageCalculated}>adds year</button>   
         <button onClick={() => ageCalculated()}>new life</button>   
        </div>
    )
}


