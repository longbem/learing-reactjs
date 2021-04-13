import React, { useState, useEffect } from "react";

const logoHeader =
  "https://www.creativefabrica.com/wp-content/uploads/2020/03/08/Auto-service-car-repair-automotive-logo-Graphics-3403838-1-1-580x348.jpg";

function InfoHeader(props) {
  const [state, setState] = useState("");

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <div>
      {/* logo */}
      <div>
        <a href="#">
          <img src={logoHeader} className="logoHeader" width="7%" height="5%" />
        </a>
      </div>
      <div>
        {/* phone and email */}
        <div>
          <div>
            <img />
          </div>
        </div>
        {/* time */}
        <div></div>
        {/* button call service */}
        <div></div>
      </div>
    </div>
  );
}

export { InfoHeader };
