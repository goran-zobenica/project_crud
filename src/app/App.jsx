import React from 'react';
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

const App = (props) => {
   return (
    <div className="container" >
      <div className="row">
        <div className="col mainCol">
          <Header/>
          <Main/>
          <Footer/>
        </div>
      </div>
    </div>
  )
}

export default App;
