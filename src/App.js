
import React from 'react';
import Welcome from "./eg1";
function App(){
  return(
    <div>
        <Welcome name="Alice"/>
        <Welcome name="Bob"/>
        <Welcome name="Charlie"/>
    </div>
  );
}
export default App;

// 2]
// import React from 'react';
// import ListItems from './eg2';

// function App() {
//   const fruits = ["Cherry","apple","mango"];
//   return(
//     <div>
//  <ListItems items={fruits} />
//  </div>
//  );
// }
// export default App;

// 3]
// import React from 'react';
// import Button from './eg3';

// function App() {
//   const handleClick = (label) => {
//     console.log(`Button clicked:${label}`);
//   };

//   return (
//     <div>
//       <Button label="Click Me" onClick={() => handleClick('Click Me')} />
//     </div>
//   );
// }

// export default App;

// 4]
// import React from 'react';
// import Toggle from './eg4';

// function App() {
//   return (
//     <div>
//       <h2>Toggle Example</h2>
//       <Toggle />
//     </div>
//   );
// }

// export default App;

// //5]
// import React from 'react';
// import ProfileCard from './eg5';

// function App() {
//   return (
//     <div>
//       <h2>User Profiles</h2>
//       <ProfileCard
//         name="Lady"
//         email="lady@example.com"
//         avatarUrl="https://randomuser.me/api/portraits/women/44.jpg"
//       />
//     </div>
//   );
// }

// export default App;

// 6]
// import React from 'react';
// import Counter from './eg6';

// function App() {
//   return (
//     <div>
//       <h2>Counter Example</h2>
//       <Counter />
//     </div>
//   );
// }

// export default App;

// 7]
// import React from 'react';
// import Card from './eg7';

// function App() {
//   return (
//     <div>
//       <Card>
//         <h3>This is inside the Card</h3>
//         <p>Nested content using children prop.</p>
//       </Card>
//     </div>
//   );
// }
// 
// export default App;

// 8]
// import React from 'react';
// import StatusIndicator from './eg8';

// function App() {
//   return (
//     <div>
//       <h2>User Status</h2>
//       <StatusIndicator isOnline={true} />
//       <StatusIndicator isOnline={false} />
//     </div>
//   );
// }

// export default App;

// // 9]
// import React from 'react';
// import ClickLogger from './eg9';

// function App() {
//   const logMessage = () => {
//     console.log('Button clicked from child component!');
//   };

//   return (
//     <div>
//       <ClickLogger logMessage={logMessage} />
//     </div>
//   );
// }

// export default App;

// //10]
// import React from 'react';
// import FormComponent from './eg10';

// function App() {
//   return (
//     <div>
//       <h2>Form Example</h2>
//       <FormComponent />
//     </div>
//   );
// }

// export default App;

// 11]
// import React from 'react';
// import Tabs from './eg11';

// function App() {
//   return (
//     <div>
//       <h2>Tabs Example</h2>
//       <Tabs />
//     </div>
//   );
// }

// export default App;

// 12]
// import React from 'react';
// import ProductsList from './eg12';

// function App() {
//   const products = [
//     { id: 1, name: 'Laptop' },
//     { id: 2, name: 'Phone' },
//   ];

//   return (
//     <div>
//       <h2>Products</h2>
//       <ProductsList products={products} />
//     </div>
//   );
// }

// export default App;

// 13]
// import React from 'react';
// import ThemeToggle from './eg13';

// function App() {
//   return (
//     <div>
//       <ThemeToggle />
//     </div>
//   );
// }

// export default App;

// 14]
// import React from 'react';
// import Quiz from './eg14';

// function App() {
//   return (
//     <div>
//       <h2>Quiz App</h2>
//       <Quiz />
//     </div>
//   );
// }

// export default App;

// 15]
// import React from 'react';
// import ProductComponent from './eg15';

// function App() {
//   const product = { id: 1, name: 'Headphones' };
//   return (
//     <div>
//       <ProductComponent product={product} />
//     </div>
//   );
// }

// export default App;