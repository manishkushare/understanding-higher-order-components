import React from "react"
// function withLog(Comp){
//     return class EnhancedComponent extends React.Component{
//         state={
//             count:99
//         }
//         render(){
//             return <div>
//                 {
//                     this.props.render()
//                 }
//             </div>
//         }
//     }
// }
function WithLog(props){
    return <h1>{props.render()}</h1>
}
export default WithLog;