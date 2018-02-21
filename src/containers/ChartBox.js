import React, {Component} from 'react';
import ChartList from '../components/ChartList.js';

class ChartBox extends Component {


  constructor(){
    super();
    this.state = {
      records: []
    }
  }

  componentDidMount(){
    const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json';
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.addEventListener('load', ()=> {
      if(xhr.status !==200) {return};
      const jsonString = xhr.responseText;
      const data = JSON.parse(jsonString);
      this.setState({
        records: data.feed.entry
      })
    })
    xhr.send();
  }



  render(){
    return (
      // this.state.isLoading ? <div>loading</div> :  <ChartList records={this.state.records}/>
      <ChartList records={this.state.records}/>

    )
  }

}


export default ChartBox;
