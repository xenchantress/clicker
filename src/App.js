// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//     <ul>
//       <li>
//         <Link to="/products">Products</Link>
//       </li>
//       <li>Checkout</li>
//       </ul>
//     </div>
//   );
// }

// export default App;


// import React, { useState } from 'react';
// import Clicker from './Clicker';
// import './styles.css';

// function App() {
//   const [score, setScore] = useState(0);

//   const handleButtonClick = () => {
//     setScore(score + 1);
//     setScore(newScore);
//   ;

//   return (
//     <div>
//       <h1>Clicker Game</h1>
//       <p>Score: {score}</p>
//       <Clicker onClick={handleButtonClick} />
//     </div>
//   );
// }



// function App() {
//   const [score, setScore] = useState(0);

//   const handleButtonClick = () => {
//     const newScore = score + 1;
//     setScore(newScore);

//     if (newScore % 10 === 0) {
//       setShowPopup(true);
//       setTimeout(() => {
//         setShowPopup(false);
//       }, 3000);

//     }
//   };

//   return (
//     <div className="container">
//       <h1 className="game-title">Clicker Game</h1>
//       <p>Score: {score}</p>
//       <Clicker onClick={handleButtonClick} />
//       <div className={`popup ${showPopup ? 'show' : ''}`}>
//         <p>Congratulations! You've reached {score} points!</p>
//         </div>
//     </div>
//   );
// }

// export default App;

// import React, { useState } from 'react';
// import Clicker from './Clicker';
// import './styles.css';

// function App() {
//   const [score, setScore] = useState(0);

//   const handleButtonClick = () => {
//     const newScore = score + 1;
//     setScore(newScore);

//     if (newScore % 10 === 0) {
//       window.alert(`Congratulations! You've reached ${newScore} points!`);
//     }
//   };

//   return (
//     <div className="container">
//       <h1 className="game-title">Clicker Game</h1>
//       <p>Score: {score}</p>
//       <Clicker onClick={handleButtonClick} />
//     </div>
//   );
// }

// export default App;

import React, { useState } from 'react';
import Clicker from './Clicker';
import './styles.css';

function App() {
  const [score, setScore] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  const handleButtonClick = () => {
    const newScore = score + 1;
    setScore(newScore);

    if (newScore % 10 === 0) {
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
      }, 3000);
    }
  };

  return (
    <div className="container">
      <h1 className="game-title">Clicker Game</h1>
      <p>Score: {score}</p>
      <Clicker onClick={handleButtonClick} />
      <div className={`popup ${showPopup ? 'show' : ''}`}>
        <p>Congratulations! You've reached {score} points!</p>
      </div>
    </div>
  );
}

export default App;


