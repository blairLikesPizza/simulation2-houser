import React,  { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateImgURL } from '../../ducks/reducer.js'

class StepThree extends Component {
    render(){
        const { updateImgURL } = this.props;
        return(
            <div className="parent-div">
                <div className="vert-align">                    
                    
                    <button className="cancel_button">Cancel</button>

                    <p>Step 3</p>
                    
                    <p>Image URL</p>
                    <input type="text" onChange={ (e) => updateImgURL(e.target.value) } />
                    
                    <Link to="/stepTwo"><button className="margin-btn"> Previous Step</button></Link>
                    <Link to="/stepFour"><button className="margin-btn"> Next Step</button></Link>
                    
                </div>
            </div>
        )
    }
}

function mapStateToProps( state ){
    const { imgURL } = state;

    return {
        imgURL
    };
}

export default connect(mapStateToProps, { updateImgURL })(StepThree);