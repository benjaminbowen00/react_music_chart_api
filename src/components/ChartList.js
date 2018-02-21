import React, {Component} from 'react';
import Record from './Record.js';

// const ChartList = (props) => {
//   // const recordsArray = props.records;
//   console.log("props", props);
//   if(this.props.records.length > 0){
//   const recordNodes = this.props.records.map((record, index) => {
//     return (
//       <Record key={index} songTitle={record["im:name"]["label"]}>
//
//       </Record>
//     )
//   })}
//   else {const recordNodes = []}
//   // console.log("records array", recordsArray);
//   // console.log(props.records.feed);
//   return (
//     <div>
//     {/* {recordNodes} */}
//   </div>
//   )
// }

class ChartList extends Component {

  render(){
    const recordNodes = this.props.records.map((record, index) => {
      return (
        <Record key={index} songTitle={record["im:name"]["label"]} artist={record["im:artist"]["label"]} image={record["im:image"][0]["label"]} audio={record["link"][1]["attributes"]["href"]} position={index + 1}>
        </Record>
      )
    })
    console.log(recordNodes);
    return (
      <div>
        {recordNodes}
      </div>
    )

  }



}

export default ChartList;
