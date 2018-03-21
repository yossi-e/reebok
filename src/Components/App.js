import React, { Component } from 'react';
import Header from './Header';
import Title from './Title';
import Desc from './Desc';
import Flowplayer from './services/Flowplayer';
import Carousel from './Carousel';
import StoreHeader from './StoreHeader';
import CityList from './CityList';
import Footer from './Footer';
class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <Title />
        <Desc />
        <Flowplayer />
        <Carousel />
        <StoreHeader />
        <CityList />
        <Footer />
      </div>
    );
  }
}

export default App;