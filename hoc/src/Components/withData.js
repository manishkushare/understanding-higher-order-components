import React from "react";
function withData(WrappedComponent,url) {
  return class EnhancedComponent extends React.Component {
    state = {
      data: null,
    };
    async componentDidMount() {
      try {
        let data = await fetch(url);
        if (data.ok) {
          data = await data.json();
          this.setState({ data });
        } else {
          data = await data.json();
          data = await Promise.reject(data);
          return data;
        }
      } catch (error) {
        console.log(error);
      }
    }
    render(){
        return <WrappedComponent data={this.state.data}  {...this.props}/>
    }
  };
}
export default withData;