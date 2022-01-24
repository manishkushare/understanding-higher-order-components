# What is HOC ? 
SO, HOC is a componenet/function which accepts a Component called as "WrappedComponent" and returns EnhancedComponent
By doing that , we can share repeating logic with different Components.

# why do we need HOC when we can lift up state
Lift up state may also work, but what happens in lift up state, we lift up state to the parent componenet and thus children components can share the state.

But, what if components which required same logic are scattered, means, they don't have parent-child relation wrt component/strudcture, at that time, we can use HOC

Also, it's always a good appraoch to have state as close to a required component.

# One common mistake to be taken care while using HOC
When we pass on some props to the "xyz" component from the App.js and that component is using HOC,
at that time, we cannot get props directly to the xyz component , we get it to the HOC componnet and from their we have to pass that prop to the xyz component

