import React,  { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateLoan, updateMortgage } from '../../ducks/reducer.js'

class StepFour extends Component {

    render(){
        const { updateLoan, updateMortgage } = this.props;
        return(
            <div className="parent-div">
                    <div className="vert-align"> 

                    <button className="cancel_button">Cancel</button>

                    <p>Step 4</p>                   

                    <p>Loan Amount</p> <br /><br/>
                    <input onChange={ (e) => updateLoan( e.target.value ) } />
                    <p>Monthly Mortgage</p> <br />
                    <input onChange={ (e) => updateMortgage( e.target.value ) } />                  
                        
                    <Link to="/stepThree"><button className="margin-btn"> Previous Step</button></Link>
                    <Link to="/stepFive"><button className="margin-btn"> Next Step</button></Link>
                </div>
            </div>
        )
    }
}

function mapStateToProps( state ){
    const { updateLoan, updateMortgage } = state;
    return {
        loan,
        mortgage
    };
}

export default connect(mapStateToProps, { updateLoan, updateMortgage })(StepFour);