import React from 'react';

const Debugger = (props) => {
  if (props.debug) {
    return (
      <div className="debugger">
        <pre><b>props</b>: {JSON.stringify(props,null,2)}</pre>
      </div>
    );
  } else { return (""); }
}
export default Debugger;
