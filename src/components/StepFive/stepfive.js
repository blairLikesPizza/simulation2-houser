import React,  { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateDesiredRent } from '../../ducks/reducer.js'

class StepFive extends Component {

    render(){
        const { updateDesiredRent } = this.props;
        return(
            <div className="parent-div">
                    <div className="vert-align"> 

                    <button className="cancel_button">Cancel</button>

                    <p>Step 5</p>                   

                    <p>Desired Rent</p> <br /><br/>
                    <input onChange={ (e) => updateDesiredRent( e.target.value ) } />
                                   
                        
                    <Link to="/stepFour"><button className="margin-btn"> Previous Step</button></Link>
                    <Link to="/listings"><button className="margin-btn"> Complete </button></Link>
                </div>
            </div>
        )
    }
}

function mapStateToProps( state ){
    const { updateDesiredRent } = state;
    return {
        desiredRent
    };
}

export default connect(mapStateToProps, { updateDesiredRent })(StepFive);