import React from 'react';
import './App.css';

import { withGhibli } from './GhibliProvider';

const Film = (props) => {
    // console.log(props)
    let { id } = props.match.params
    const card =  props.filmsArray.find(film => {
        return film.id === id
    })

    return (
        <div >
            { card ? 
                <div id='filmInfo'>
                    <h1>{card.title}</h1>
                    <h3 style={{color: 'rgba(102, 51, 153, 1)'}}>{card.director}</h3>
                    <br/>
                    <h2>{card.description}</h2>
                </div>
            : "no info yet" 
            }
        </div>
    );
};

export default withGhibli(Film);

// flip card

// { card ? 
//     <div className='card middle'>
//         <div className='front'>
//             <img src='http://www.socwall.com/images/wallpapers/32-1600x1200.jpg' alt='card' />
//         </div>
//         <div className='back'>
//             <div className='back-content middle'>
//                 <h1>{card.title}</h1>
//                 <h3 style={{color: 'rgba(102, 51, 153, 1)'}}>{card.director}</h3>
//                 <br/>
//                 <h2>{card.description}</h2>
//             </div>    
//         </div>
//     </div>
// : "no info yet" 
// }


// Toggling
// import React from 'react';
// import './App.css';

// import { withGhibli } from './GhibliProvider';

// class Film extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             toggled: false
//         }
//     }

//     toggle = () => {
//         this.setState(prevState => ({
//             toggled: !prevState.toggled
//         }))
//     }

//     render() {
//         console.log(this.state)
//         let { id } = this.props.match.params;
//         const card =  this.props.filmsArray.find(film => {
//             return film.id === id
//         });
        
//         const styles = {
//             textDecoration: this.state.toggled ? 'line-through' : 'none'
//         }
        
//         return (
//             <div >
//                 { card ? 
//                     <div id='filmInfo'>
//                         <input type='checkbox' onChange={this.toggle} />
//                         <h1 style={styles}>{card.title}</h1>
//                         <h3 style={{color: 'rgba(102, 51, 153, 1)'}}>{card.director}</h3>
//                         <br/>
//                         <h2>{card.description}</h2>
//                     </div>
//                 : "no info yet" 
//                 }
//             </div>
//         );
//     }
// };

// export default withGhibli(Film);

