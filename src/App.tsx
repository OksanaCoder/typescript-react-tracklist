import React from 'react'
import './App.css'
import Header from './components/Header2'
import { Container, Row, Col } from 'react-bootstrap'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import DetailComponent from './components/DetailComponent'
import Albums from './components/Albums'
// import { HeaderProps } from '../types/types'
import 'bootstrap/dist/css/bootstrap.min.css';





class App extends React.Component {



    //  componentDidMount () {
    //   fetch("https://deezerdevs-deezer.p.rapidapi.com/search"+ "?q="+ searchString , {
    //     "method": "GET",
    //     "headers": {
    //         "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
    //         "x-rapidapi-key": "8275c582bamshd83a3179dd00459p19f0b2jsn94c889368579"
    //     }
    // })
    //   .then((response) => response.json())
    //   .then((responseObject) =>
    //     this.setState({ searchedMovies: responseObject.Search })
    //   );
    //  }

render () {
 
  return (
    <Router>
      <div className="App">
         
        <Header title="Your tracklist for Anytime" />
         <Route  path='/albums' exact render={(props) => <Albums />} />
          <Route
            path="/album/:id"
            exact
            render={(props) => <DetailComponent {...props} data={['one', 'two']} />}
          />
  
      </div>
    </Router>
  )
}
  
}

export default App
