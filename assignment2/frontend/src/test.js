// import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import './App.css';
// import Navbar from './components/Navbar';
// import Home from './components/Home';
// import About from './components/About'
// import Card from './components/Card'


// class App extends Component {
//     state = {
//     cardArray: [
//       {artistName: "Pablo Picasso", pieceName: "Les Demoiselles d'Avignon", pieceLink: "https://render.fineartamerica.com/images/rendered/default/flat/tapestry/images-medium-5/les-demoiselles-d-avignon-pablo-picasso.jpg?&targetx=0&targety=-84&imagewidth=930&imageheight=962&modelwidth=930&modelheight=794&backgroundcolor=E0A693&orientation=1&producttype=tapestry-88-104"},
//       {artistName: "Pablo Picasso", pieceName: "Les Demoiselles d'Avignon", pieceLink: "https://render.fineartamerica.com/images/rendered/default/flat/tapestry/images-medium-5/les-demoiselles-d-avignon-pablo-picasso.jpg?&targetx=0&targety=-84&imagewidth=930&imageheight=962&modelwidth=930&modelheight=794&backgroundcolor=E0A693&orientation=1&producttype=tapestry-88-104"}
//     ]
//   }
//   state = {
//     post: {
//       name: "",
//       description: ""
//     },
//     jobs: []

//   };

//   handleChange = e => {
//     const { name, value } = e.target;

//     this.setState(prevState => ({
//       post: { ...prevState.post, [name]: value }
//     }));
//   };

//   handleSubmit = e => {
//     e.preventDefault();

//     this.setState(prevState => ({
//       jobs: [...prevState.jobs, prevState.post],
//       post: { name: "", description: "" }
//     }));
//   };

//   render() {
//     return (
//       <div className="App">
//             <Router>
//        <div className='App'>
//          <Navbar />   
//            <div className='container'>
//              <Switch>
//                <Route exact path='/' component={Home} /> 
//                <Route exact path='/about' component={About} />
//              </Switch>
//           </div>
        
//        </div>
//      </Router>
//   }
// }

// export default App;


// // class App extends Component {
// //   // constructor() {
// //   //   super();
// //   //   this.postID = 0; 

// //   //   this.state = {
// //   //     cardArray: [
// //   //     ],
// //   //     Body: "",
// //   //     id: ""
// //   //   }
// //   // }

// //   state = {
// //     card: {
// //       name: "",
// //       description: ""
// //     },
// //     jobs: []
// //   };

// //   handleChange = e => {
// //     const { name, value } = e.target;

// //     this.setState(prevState => ({
// //       post: { ...prevState.post, [name]: value }
// //     }));
// //   };

// //   handleSubmit = e => {
// //     e.preventDefault();

// //     this.setState(prevState => ({
// //       jobs: [...prevState.jobs, prevState.post],
// //       post: { name: "", description: "" }
// //     }));
// //   };

// //   // state = {
// //   //   cardArray: [
// //   //     {artistName: "Pablo Picasso", pieceName: "Les Demoiselles d'Avignon", pieceLink: "https://render.fineartamerica.com/images/rendered/default/flat/tapestry/images-medium-5/les-demoiselles-d-avignon-pablo-picasso.jpg?&targetx=0&targety=-84&imagewidth=930&imageheight=962&modelwidth=930&modelheight=794&backgroundcolor=E0A693&orientation=1&producttype=tapestry-88-104"},
// //   //     {artistName: "Pablo Picasso", pieceName: "Les Demoiselles d'Avignon", pieceLink: "https://render.fineartamerica.com/images/rendered/default/flat/tapestry/images-medium-5/les-demoiselles-d-avignon-pablo-picasso.jpg?&targetx=0&targety=-84&imagewidth=930&imageheight=962&modelwidth=930&modelheight=794&backgroundcolor=E0A693&orientation=1&producttype=tapestry-88-104"}
// //   //   ]
// //   // }
// //   // deletes card based on the index being passed in 
// //   // by creating a temp and then setting that cardArray to temp
// //   // deleteEvent = (index)=> {
// //   //   const tempCardArray = Object.assign([], this.state.cardArray);
// //   //   tempCardArray.splice(index, 1);
// //   //   this.setState({
// //   //     cardArray: tempCardArray
// //   //   })
// //   // }

// //   // setCard = (e)=> {
// //   //   this.setState({
// //   //     Body: element.target.value
// //   //   })
// //   // }

// //   // addCard = ()=> {
// //   //   this.postID = this.postID + 1
// //   //   const tempCardArray = Object.assign([], this.state.cardArray)
// //   //   tempCardArray.push({
// //   //     id: this.postID, 
// //   //     body: this.state.Body
// //   //   })
// //   //   this.setState({
// //   //     cardArray: tempCardArray
// //   //   })
// //   // }

// //   render() {
// //     return (
// //       <Router>
// //       <div className='App'>
// //         <Navbar />   
// //           <div className='container'>
// //             <Switch>
// //               <Route exact path='/' component={Home} /> 
// //               <Route exact path='/about' component={About} />
// //             </Switch>
// //          </div>
        
// //       </div>
// //     </Router>
// //     );
// //   }
// // }
// // export default App;



// // <ul>
// // {
// //   this.state.cardArray.map((card, index) => {
// //     return(
// //       <Card
// //         key = {index}
// //         artistName = {card.artistName}
// //         pieceName = {card.pieceName}
// //         pieceLink = {card.pieceLink}
// //         delete = {this.deleteEvent.bind(this, index)}
// //       />
// //     )
// //   })
// // }
// // </ul>