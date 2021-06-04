import React, {useState} from "react";
import AgeCounter from "./AgeCounter";

const AgeTotaller = () => {
const [cats, setCats] = useState[("Tobi", "Dogba", "Catzo", "Whiskers")];
const [newCat, setNewCat] = useState("");
const [totalAge, setTotalAge] = useState(0);



  return (
    <div className="AgeTotaller">
      <div className="cats"></div>
      {cats.map((cat, index)=>(
        <AgeCounter key={index} cat={cat} update={update}/>
        
      ))}
    </div>
  );
};

export default AgeTotaller;
