import React from "react";
// import withLog from "./withLog";
function Test(props){
    return <h1 onClick={props.incrementCount}>Test {props.count}</h1>
}
export default  Test;