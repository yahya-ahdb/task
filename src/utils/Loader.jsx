import React from "react";
import { BallTriangle } from "react-loader-spinner";

function Loader() {
  return (
    <div style={{ position: "fixed", zIndex:5, background: "#0000009c" ,width:"100vw", height:"100vh" , display:"flex", justifyContent:"center", alignItems:"center" }}>
      <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="#4fa94d"
        ariaLabel="ball-triangle-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
}

export default Loader;
