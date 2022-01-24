import Test from "./Test";
import Test2 from "./Test2";
import Followers from "./Followers";
import Followings from "./Followings";
import WithLog from "./withLog";
// import withLog from "./withLog";
import Counter from "./Counter";
function App() {
  return (
    <>
      <WithLog render={() => "Manish"} />
      <Counter
        render={(count, incrementCount) => {
          return <Test count={count} incrementCount={incrementCount} />;
        }}
      />
      <Counter
        render={(count, incrementCount) => {
          return <Test2 count={count} incrementCount={incrementCount} />;
        }}
      />
      {/* here below am passing name as props to followers, but if you try to find it directly to the Followers components,
      it won't show up, because, Followers is using HOC , hence first we have to go into that particular HOC componnet and 
      we have to spread remaining props {...this.props} while calling up WrappedComponent and then, it will get passed on to the 
      Followers Component and there we can access name props */}
      <Followers name="Manish" />
      <Followings />
    </>
  );
}

export default App;
