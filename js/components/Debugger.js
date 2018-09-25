import React from 'react';

const Debugger = (props) => {
  if (props.debug) {
    return (
      <div id="debugger">
        <pre>{JSON.stringify(props,null,2)}</pre>
      </div>
    );
  } else {
    return ("");
  }
}
export default Debugger;
