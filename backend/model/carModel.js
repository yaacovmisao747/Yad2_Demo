const mongoose = require('mongoose')
const User = require('./userModel');


const userSchema = mongoose.Schema({
    userName: {
        type: String,
        required: [true, 'Please add a username']
    },
    userNumber: {
        type: String,
        required: [true, 'Please add your number']
    },
    userEmail: {
        type: String,
        lowercase: true,
        required: [true, 'Please add your email']
    },
})



const carSchema = mongoose.Schema({
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    user: userSchema ,

    avatar: {
        type: String
    },

    images: [String],

    name: {
        type: String,
        required: [true, 'Please add a car manufacturer/name']
    },
    model: {
        type: String,
        required: [true, 'Please add a car model']
    },
    info: {
        type: String,
        required: [true, 'Please add a info']
    },
    description: {
        type: String,
        required: [true, 'Please add a description']
    },
    price: {
        type: Number,
        required: [true, 'Please add a price']
    },
    hand: {
        type: Number,
        required: [true, 'Please add a number of hand']
    },
    year: {
        type: Number,
        required: [true, 'Please add a year']
    },
    engineSize: {
        type: Number,
        required: [true, 'Please add a description']
    },

    salesArea: {
        type: String,
        required: [true, 'Please add a description']
    },

    mileAge: {
        type: Number,
        required: [true, 'Please add a mileage']
    },
    engineType: {
        type: String,
        required: [true, 'Please add a engine type']
    },
    gearbox: {
        type: String,
        required: [true, 'Please add a gearbox']
    },
    color: {
        type: String,
        required: [true, 'Please add a color']
    },
    firstDay: {
        type: String,
        required: [true, 'Please add a first day on the road']
    },
    //  firstDay: {
    //     type: Date,
    //     required: [true, 'Please add a first day on the road'],
    //     get: (value) => value.toLocaleDateString('en-US', {
    //       timeZone: 'UTC'
    //     })
//   },
    
    lastDay: {
        type: String,
        required: [true, 'Please add date of next test']
    },
    currentOwnership: {
        type: String,
        required: [true, 'Please add a current ownership']
    },
    previousOwnership: {
        type: String,
        required: [true, 'Please add a previous ownership']
    },


    airConditioner: {
        type: Boolean,
        default: false
    },
    roofWindow: {
        type: Boolean,
        default: false
    },
    fourIntoTwo: {
        type: Boolean,
        default: false
    },
    stabilityControl: {
        type: Boolean,
        default: false
    },
    tirePressureSensors: {
        type: Boolean,
        default: false
    },
    identifyTrafficSign: {
        type: Boolean,
        default: false
    },
    abs: {
        type: Boolean,
        default: false
    },
    powerSteering: {
        type: Boolean,
        default: false
    },
    reverseCamera: {
        type: Boolean,
        default: false
    },
    pedestrianDetection: {
        type: Boolean,
        default: false
    },
    beltSensors: {
        type: Boolean,
        default: false
    },
    electricWindows: {
        type: Boolean,
        default: false
    },
    airBags: {
        type: Boolean,
        default: false
    },
    magnesiumWheels: {
        type: Boolean,
        default: false
    },
    auxiliaryBrakeSystem: {
        type: Boolean,
        default: false
    },
    automaticLightning: {
        type: Boolean,
        default: false
    },
    contamination: {
        type: Number,
        min: 1,
        max: 15
    }
},
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('Cardata', carSchema)




