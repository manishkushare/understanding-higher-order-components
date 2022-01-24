import React from "react";
class Counter extends React.Component{
    constructor(props){
        super();
        this.state={
            count :0
        }
    }
    incrementCounter= ()=> {
        this.setState(prevState=> {
            return {
                count : prevState.count+1
            }
        })
    }
    render(){
        return <div>
            {
                this.props.render(this.state.count,this.incrementCounter)
            }
        </div>
    }
}
export default Counter;