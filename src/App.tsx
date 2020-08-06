import React from 'react'
import './App.css'
import Header from './components/Header2'
import { Container, Row, Col, Navbar, Nav, Button, Form, FormControl } from 'react-bootstrap'
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
                
       <Container>         
        <Navbar bg="dark" variant="dark">
              <Navbar.Brand href="#home">Navbar</Navbar.Brand>
              <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
              </Nav>
              <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-info">Search</Button>
              </Form>
            </Navbar>
          </Container>   
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
