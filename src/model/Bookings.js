import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
movie:{
    type:mongoose.Types.ObjectId,
    ref:"Movie",
    required: true,
},
date:{
    type:Date,
    required: true,
},
seatNumber:{
    type:Number,
    required: true,

},
user:
    {   type: mongoose.Types.ObjectId,
        ref : "User", 
        required : true, 
    }


});

bookingSchema.index({ seatNumber: 1, date: 1, movie: 1 }, { unique: true }); // combination of seat number, date and movie cannot repeate in this way. 

export default mongoose.model("Booking",bookingSchema);
