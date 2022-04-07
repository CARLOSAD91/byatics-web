import React, { useRef, useEffect } from "react";

const { tableau } = window;

function Tableau() {
  const ref = useRef(null);
  const url =
    "https://public.tableau.com/views/CULTIVOS_16486998334180/CULTIVOS";

  function initViz() {
    new tableau.Viz(ref.current, url);
  }

  useEffect(() => {
    initViz();
  }, []);
  return (
    <div>
      <h1>Tableau</h1>
      <div ref={ref}></div>
    </div>
  );
}

export default Tableau;
