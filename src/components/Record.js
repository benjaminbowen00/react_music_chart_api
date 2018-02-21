import React from 'react';


const Record = (props) => {

  return (<div className="record-div">
    <div className="image-div"><img src={props.image} alt="company logo"/></div>
    <h4 className="inline-block position">{props.position}</h4>
    <p className="inline-block artist">{props.artist}</p>
    {/* <p>{props.image}</p> */}

    <p className="title">{props.songTitle}</p>
      <br></br>
    <audio controls>
      <source src={props.audio} type="audio/mpeg" />
      Your browser does not support the audio tag.
    </audio>

    <br></br>
  </div>

)

}

export default Record;
