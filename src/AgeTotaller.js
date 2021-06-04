import React, { useState } from "react";
import AgeCounter from "./AgeCounter";

const AgeTotaller = () => {
  const [cats, setCats] = useState(["Tobi", "Dogba", "Catzo", "Whiskers"]);
  const [newCat, setNewCat] = useState("");
  const [totalAge, setTotalAge] = useState(0);

  function improved(el) {
    setTotalAge(totalAge + el);
  }

  function addName() {
    if (newCat.length > 2) {
      const overallCats = [...cats, newCat];
      setCats(overallCats);
      setNewCat;
    }
  }

  return (
    <div>
      <input
        type="text"
        value={newCat}
        onChange={(event) => setNewCat(event.target.value)}
      />
      <button onClick={addName}> new name please</button>

      <div className="AgeTotaller">
        <div className="cats">
          {cats.map((cat, index) => (
            <AgeCounter key={index} cat={cat} improved={improved} />
          ))}
          <h1>The Total Age is: {totalAge}</h1>
        </div>
      </div>
    </div>
  );
};

export default AgeTotaller;
