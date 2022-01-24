import React from "react";
import withData from "./withData";
// class Followings extends React.Component {
//   constructor(props) {
//     super();
//     this.state = {
//       data: null,
//     };
//   }
//   async componentDidMount() {
//     try {
//       let data = await fetch("http://api.github.com/users/getify/following");
//       if (data.ok) {
//         data = await data.json();
//         this.setState({ data });
//       } else {
//         data = await data.json();
//         data = await Promise.reject(data);
//         return data;
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   }
//   render() {
//     const data = this.state.data;
//     if(!data){
//         return <h2>Loading.....</h2>
//     }
//     return (
//       <ul>
//         {data.map((follower) => {
//           return <li key={follower.id}>{follower.login}</li>;
//         })}
//       </ul>
//     );
//   }
// }
function Followings(props){
    const data = props.data;
    if(!data){
        return <h2>Loading.....</h2>
    }
    return (
      <ul>
        {data.map((follower) => {
          return <li key={follower.id}>{follower.login}</li>;
        })}
      </ul>
    );
}
export default withData( Followings,"http://api.github.com/users/getify/following");
