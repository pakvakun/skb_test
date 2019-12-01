//main
import React from 'react';

//styles
import './styles/App.css';

//components
import Header from './components/header'
import Footer from './components/footer'
import Content from './components/content'

function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
