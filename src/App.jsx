
import './App.css'

import HomePage from './pages/HomePage'

function App() {
 

  return (
   <div className='bg-slate-300'>
<HomePage/>
   </div>
  )
}

export default App






// import React, { useState } from 'react';

// const Card = ({ id, isActive, toggleCard }) => (
//   <div
//     className={`p-6 rounded-lg shadow-md cursor-pointer transition-colors ${
//       isActive ? 'bg-blue-500 text-white' : 'bg-white text-black'
//     }`}
//     onClick={() => toggleCard(id)}
//   >
//     <h3 className="text-xl font-bold mb-2">Card {id + 1}</h3>
//     <p className="text-gray-600">This is a description of the card.</p>
//   </div>
// );

// const App = () => {
//   const [activeCards, setActiveCards] = useState([]);

//   const toggleCard = (id) => {
//     setActiveCards((prev) =>
//       prev.includes(id) ? prev.filter((card) => card !== id) : [...prev, id]
//     );
//   };
//   let arr = [0,1,2,3,4,5,6,7,8,9]

//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       <div className="container mx-auto">
//         <h1 className="text-4xl font-bold text-center mb-8">Responsive Card Layout</h1>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {arr.map((id,i) => (
//             <Card key={i} id={id} isActive={activeCards.includes(id)} toggleCard={toggleCard} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;
