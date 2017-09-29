import React,  { Component } from 'react';
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';
import { updateName, updateDescription } from '../../ducks/reducer.js'

class StepOne extends Component {
    render(){
        const { updateName, updateDescription } = this.props;

        return(
            <div className="parent-div">
                <div className="vert-align">

                    <button className="cancel_button">Cancel</button>

                    <p>Step 1</p> 

                    <p>Property Name</p> <br /><br/>
                    <input onChange={ (e) => updateName( e.target.value ) } />
                    <p>Property Description</p> <br />
                    <input onChange={ (e) => updateDescription( e.target.value ) } />

                    <Link to="/stepTwo"><button className="margin-btn"> Next Step</button></Link>
                </div>
            </div>
        )
    }
}

function mapStateToProps( state ){
    // const { name, description } = state;
    // console.log(name);
       console.log(state)
    return {
        state
    };
}

export default connect( mapStateToProps, { updateName, updateDescription } )(StepOne); 