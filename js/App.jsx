import React from 'react'

// processors
import ErrorFence from './processors/ErrorFence';

// components
import Debugger from './components/Debugger';

// data
var data = require('./data/data.json');
var debug = false;

// application {{{
export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      message:      'hello'
    };
    this.Main = DisplayMain;
  }
  render(){
    return (
      <this.Main {...this.state} data={data}/>
    );
  }
}
// }}}
// displays {{{
const DisplayMain = (props) => {
  return (
    <ErrorFence>
    <div className="hello-world">
      {props.message},  {props.data.name}!
      <Debugger debug={debug} {...props}/>
    </div>
    </ErrorFence>
  );
}
// }}}
