import React from "react"
import ReactDOM from "react-dom/client";

const Heading =()=>{
    return (
    <div className="header">"I am starting the food-order app</div>
    )
};



const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<Heading />)
