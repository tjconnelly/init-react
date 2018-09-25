import React from 'react'

// APIConnect {{{
export const APIConnect = (DisplayComponent) =>
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data:       [],
        isLoading:  true,
        error:      null
      };
      this.execute = this.execute.bind(this);
    }
    execute(){
      var params = this.props.params;
      const datatag = params.datatag || 'data';
      const qstring = params.qstring || null;
      if (qstring !== null) {
        params.service = params.service+'?'+qstring;
        params.qstring = null;
      }

      this.setState({ isLoading: true });
      //console.log('APC execute: loading',params.service);
      fetch(params.service,{
        method:   params.method || 'GET',
        headers:  params.headers || undefined,
        body:     params.body || undefined,
      })
      .then(response => response.json())
      .then(
        (result) => {
          //console.log('received',datatag,result);
          this.setState({ [datatag]: result, isLoading: false })
        },
        (error) => {
          console.log('TRANSPORT ERROR',error,params);
          this.setState({ error, isLoading: false })
        }
      )
    }
    componentDidUpdate(prevProps,prevState){
      if(prevState.data.length != 0) {
        if (
          (prevProps.lastUpdate !== this.props.lastUpdate)||
          (prevState.data.length !== this.state.data.length)
          ){
          /*
          console.log('API componentDidUpdate',prevProps.current,this.props.current);
          console.log('API componentDidUpdate',prevProps.lastUpdate,this.props.lastUpdate);
          console.log('API componentDidUpdate',prevState.data,this.state.data);
          */
          this.execute()
        }
      }
    }
    componentDidMount(){
      this.execute();
    }
    render(){
      //console.log('APC render',this.props,this.state);
      //if (this.state.isLoading) {
      //  return <p>loading...</p>;
      //}
      //if (this.state.error) {
      //  return <p>{error.message}</p>;
      //}
      return (
        <DisplayComponent {...this.state} {...this.props} />
      );
    }
  }
// }}}
