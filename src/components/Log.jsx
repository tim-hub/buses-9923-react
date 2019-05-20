import React from "react";

function SingleLog(props){
  return (
    <div>{props.log.message} <br/></div>
  )
}

function Log(props){
  const renderLogs= (logs) =>{
    const logs_html = []
    logs.forEach(element => {
      logs_html.push(<SingleLog log= {element}/>);
    });
    return logs_html;
  }

  return (
    <div className="Log">
    <h4>Logs</h4>
    {renderLogs(props.logs)}
    </div>
  )
}
export default Log;