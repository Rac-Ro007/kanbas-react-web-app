import React, { useState } from "react";

function EncodingParametersInURLs() {
  const [a, setA] = useState(34);
  const [b, setB] = useState(23);
  return (
    <div>
      <h3>Encoding Parameters In URLs</h3>
      <h4>Calculator</h4>
      <input className="form-control m-2" type="number" value={a}
        onChange={(e) => setA(e.target.valueAsNumber)}/>
      <input className="form-control m-2" type="number"
        onChange={(e) => setB(e.target.valueAsNumber)} value={b}/>
      <h3>Path Parameters</h3>
      <a className="btn btn-primary m-2" href={`http://localhost:4000/a5/add/${a}/${b}`}>
        Add {a} + {b}
      </a>
      <a className="btn btn-danger m-2" href={`http://localhost:4000/a5/subtract/${a}/${b}`}>
        Substract {a} - {b}
      </a>
      <a className="btn btn-success m-2" href={`http://localhost:4000/a5/multiply/${a}/${b}`}>
        Multiply {a} * {b}
      </a>
      <a className="btn btn-warning m-2" href={`http://localhost:4000/a5/divide/${a}/${b}`}>
        Divide {a} / {b}
      </a>

      <h3>Query Parameters</h3>
      <a className="btn btn-primary m-2"
        href={`http://localhost:4000/a5/calculator?operation=add&a=${a}&b=${b}`}>
        Add {a} + {b}
      </a>
      <a className="btn btn-danger m-2"
        href={`http://localhost:4000/a5/calculator?operation=subtract&a=${a}&b=${b}`}>
        Substract {a} - {b}
      </a>
      <a className="btn btn-success m-2"
        href={`http://localhost:4000/a5/calculator?operation=multiply&a=${a}&b=${b}`}>
        Multiply {a} * {b}
      </a>
      <a className="btn btn-warning m-2"
        href={`http://localhost:4000/a5/calculator?operation=divide&a=${a}&b=${b}`}>
        Divide {a} / {b}
      </a>
    </div>
  );
}

export default EncodingParametersInURLs;