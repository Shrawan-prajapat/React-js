import React, { createContext, useState } from 'react'

const Countercontext = createContext();

const Counter = ({ children }) => {
  const [no, setNo] = useState(0);

  const increment = () => {
    setNo(() => no + 1);

  }
  const decrement = ()=>{
    setNo(()=> no-1);
  }
}
return(
  <Countercontext.Provider value={no}>
    {children}
  </Countercontext.Provider>
)

export {Countercontext,Counter}


















































// import React, { createContext, useState } from 'react';

// // Create the context
// const Countercontext = createContext();

// // Create the Counter provider component
// const Counter = ({ children }) => {
//   const [no, setNo] = useState(0);

//   // Increment function
//   const increment = () => {
//     setNo((prevNo) => prevNo + 1); // Use prevNo to ensure correct state update
//   };

//   // Decrement function
//   const decrement = () => {
//     setNo((prevNo) => prevNo - 1); // Use prevNo to ensure correct state update
//   };

//   // Return the Provider with value as an object containing the state and functions
//   return (
//     <Countercontext.Provider value={{ no, increment, decrement }}>
//       {children}
//     </Countercontext.Provider>
//   );
// };

// export { Countercontext, Counter };
