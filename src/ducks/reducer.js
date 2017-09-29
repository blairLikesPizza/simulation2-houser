const initialState = {
    recommendedRent: 0,
    name: '',
    description: '',
    addressOne: '',
    addressTwo: '',
    addressThree: '',
    addressFour: '',
    imgURL: '',
    loan: 0,
    mortgage: 0,
    desiredRent: 0,
    listings: [],
    username: '',
    password: '',
    newName: '',
    newPassword: ''
}

const UPDATE_RECOMMENDED_RENT = "UPDATE_RECOMMENDED_RENT";
const UPDATE_NAME = "UPDATE_NAME";
const UPDATE_DESCRIPTION = "UPDATE_DESCRIPTION";
const UPDATE_ADDRESS_ONE = "UPDATE_ADDRESS_ONE";
const UPDATE_ADDRESS_TWO = "UPDATE_ADDRESS_TWO";
const UPDATE_ADDRESS_THREE = "UPDATE_ADDRESS_THREE";
const UPDATE_ADDRESS_FOUR = "UPDATE_ADDRESS_FOUR";
const UPDATE_IMG_URL = "UPDATE_IMG_URL";
const UPDATE_LOAN = "UPDATE_LOAN";
const UPDATE_MORTGAGE = "UPDATE_MORTGAGE";
const UPDATE_DESIRED_RENT = "UPDATE_DESIRED_RENT";
const UPDATE_LISTINGS = "UPDATE_LISTINGS";
const UPDATE_USERNAME = "UPDATE_USERNAME";
const UPDATE_PASSWORD = "UPDATE_PASSWORD";
const UPDATE_NEW_NAME = "UPDATE_NEW_NAME";
const UPDATE_NEW_PASSWORD = "UPDATE_NEW_PASSWORD";

function reducer(state = initialState, action){
    switch(action.type){
        case UPDATE_RECOMMENDED_RENT: 
            return Object.assign({}, state, { recommendedRent: action.payload })
        case UPDATE_NAME: 
            return Object.assign({}, state, { name: action.payload })
        case UPDATE_DESCRIPTION: 
            return Object.assign({}, state, { description: action.payload })
        case UPDATE_ADDRESS_ONE: 
            return Object.assign({}, state, { addressOne: action.payload })
        case UPDATE_ADDRESS_TWO: 
            return Object.assign({}, state, { addressTwo: action.payload })
        case UPDATE_ADDRESS_THREE: 
            return Object.assign({}, state, { addressThree: action.payload })
        case UPDATE_ADDRESS_FOUR: 
            return Object.assign({}, state, { addressFour: action.payload })
        case UPDATE_IMG_URL: 
            return Object.assign({}, state, { imgURL: action.payload })
        case UPDATE_LOAN: 
            return Object.assign({}, state, { loan: action.payload })
        case UPDATE_MORTGAGE: 
            return Object.assign({}, state, { mortgage: action.payload })
        case UPDATE_DESIRED_RENT: 
            return Object.assign({}, state, { desiredRent: action.payload })
        case UPDATE_LISTINGS: 
            return Object.assign({}, state, { listings: action.payload })
        case UPDATE_USERNAME: 
            return Object.assign({}, state, { username: action.payload })
        case UPDATE_PASSWORD: 
            return Object.assign({}, state, { password: action.payload })
        case UPDATE_NEW_NAME: 
            return Object.assign({}, state, { newName: action.payload })
        case UPDATE_NEW_PASSWORD: 
            return Object.assign({}, state, { newPassword: action.payload })
    }
}

export function updateRecommendedRent(recommendedRent) {
    return {
        type: UPDATE_RECOMMENDED_RENT,
        payload: recommendedRent
    }
}

export function updateName(name) {
    return {
        type: UPDATE_NAME,
        payload: name
    }
}

export function updateDescription(description) {
    return {
        type: UPDATE_DESCRIPTION,
        payload: description
    }
}

export function updateAddressOne(addressOne) {
    return {
        type: UPDATE_ADDRESS_ONE,
        payload: addressOne
    }
}

export function updateAddressTwo(addressTwo) {
    return {
        type: UPDATE_ADDRESS_TWO,
        payload: addressTwo
    }
}

export function updateAddressThree(addressThree) {
    return {
        type: UPDATE_ADDRESS_THREE,
        payload: addressThree
    }
}

export function updateAddressFour(addressFour) {
    return {
        type: UPDATE_ADDRESS_FOUR,
        payload: addressFour
    }
}

export function updateImgURL(imgURL) {
    return {
        type: UPDATE_IMG_URL,
        payload: imgURL
    }
}

export function updateLoan(loan) {
    return {
        type: UPDATE_LOAN,
        payload: loan 
    }
}

export function updateMortgage(mortgage) {
    return {
        type: UPDATE_MORTGAGE,
        payload: mortgage
    }
}

export function updateDesiredRent(desiredRent) {
    return {
        type: UPDATE_DESIRED_RENT,
        payload: desiredRent
    }
}

export function updateListings(listings) {
    return {
        type: UPDATE_LISTINGS,
        payload: listings
    }
}

export function loginName( username ){
    return {
        type: UPDATE_USERNAME,
        payload: username
    }
}

export function loginPassword( password ){
    return {
        type: UPDATE_PASSWORD,
        payload: password
    }
}

export function registerName( newName ){
    return {
        type: UPDATE_NEW_NAME,
        payload: newName
    }
}

export function registerPassword( newPassword ){
    return {
        type: UPDATE_NEW_PASSWORD,
        payload: newPassword
    }
}


export default reducer;