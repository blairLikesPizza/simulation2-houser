import React,  { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateAddressOne, updateAddressTwo, updateAddressThree, updateAddressFour } from '../../ducks/reducer.js'

class StepTwo extends Component {
    render(){
        const { updateAddressOne, updateAddressTwo, updateAddressThree, updateAddressFour } = this.props;
        return(
            <div className="parent-div">
                <div className="vert-align">  

                    <button className="cancel_button">Cancel</button>

                    <p>Step 2</p>

                    <p>Address</p> <br /><br/>                
                    <input type="text" onChange={ (e) => updateAddressOne(e.target.value) } />
                    <p>City</p> <br /><br/> 
                    <input type="text" onChange={ (e) => updateAddressTwo(e.target.value) }/>
                    <p>State</p>
                    <input type="text" onChange={ (e) => updateAddressThree(e.target.value) }/>
                    <p>Zip</p> <br /><br/>
                    <input type="text" onChange={ (e) => updateAddressFour(e.target.value) }/>
                
                    <Link to="/stepOne"><button className="margin-btn"> Previous Step</button></Link>
                    <Link to="/stepThree"><button className="margin-btn"> Next Step</button></Link>
                    
                </div>
            </div>
        )
    }
}

function mapStateToProps( state ){
    const { addressOne, addressTwo, addressThree, addressFour } = state;

    return {
        addressOne,
        addressTwo,
        addressThree,
        addressFour
    };
}

export default connect(mapStateToProps, { updateAddressOne, updateAddressTwo, updateAddressThree, updateAddressFour })(StepTwo);