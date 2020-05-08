import React, { useState } from 'react';

import Layout from './components/Layout'
import LandingPage from './containers/LandingPage'
import PopUp from './components/PopUp'

function App() {

  const [showPopUp, setShowPopUp] = useState(false)

  const togglePopUp = () => {
      const currValue = showPopUp
      setShowPopUp(!currValue)
  }

  return (
    <Layout clicked={togglePopUp}>
      <LandingPage clicked={togglePopUp}/>
      {
        showPopUp ?
            <PopUp clicked={togglePopUp}/>
            :
            null
      }
    </Layout>
  );
}

export default App;
