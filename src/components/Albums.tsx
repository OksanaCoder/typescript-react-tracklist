import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { HeaderProps } from '../types/types'

interface AlbumState {
    data?: [],
    searchedMovies?: []
  }

class  Albums extends  React.Component<AlbumState> {

    state: AlbumState = {
        data :  [],
        searchedMovies: []
      }
      componentDidMount () {
       fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=ac/dc",  {
         "method": "GET",
         "headers": {
             "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
             "x-rapidapi-key": "8275c582bamshd83a3179dd00459p19f0b2jsn94c889368579"
         }
     })
       .then((response) => response.json())
       .then((responseObject) =>
         this.setState({ searchedMovies: responseObject.data })
       );
      
      }
    render() {
        console.log(this.state.searchedMovies)
        return (
            <>
               {/* <Container>
               <Row>
       
                 <Col lg='3'>
                 
                 </Col>
              
               </Row>
             </Container> */}
            
               </>
           )
    }
   
}

export default Albums