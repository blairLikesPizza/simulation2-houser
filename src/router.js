import React from 'react';
import StepOne from './components/StepOne/stepone.js';
import StepTwo from './components/StepTwo/steptwo.js';
import StepThree from './components/StepThree/stepthree.js';
import StepFour from './components/StepFour/stepfour.js';
import StepFive from './components/StepFive/stepfive.js';
import Login from './components/Login/Login.js'
import Listings from './components/Listings/Listings.js'



import { HashRouter as Router, Route } from 'react-router-dom';



export default(

            <Router>
                <div>
                <Route component={StepOne} exact path='/stepOne'/>
                <Route component={StepTwo} path='/stepTwo'/> 
                <Route component={StepThree} path='/stepThree'/> 
                <Route component={StepFour} path='/stepFour'/>
                <Route component={StepFive} path='/stepFive'/>
                <Route component={Login} path='/login' />
                <Route component={Listings} path='/listings' />
                
                </div>
            </Router>
)