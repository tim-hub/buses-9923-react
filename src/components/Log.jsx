import React from "react";

function SingleLog(props){
  return (
    <div>{props.log.message} <br/></div>
  )
}

function Log(props){
  return (
    <div className="Log">
    <h4>Logs</h4>
    {props.logs.map((item, index)=>(<SingleLog log={item}/>)

    )}
    </div>
  )
}
export default Log;