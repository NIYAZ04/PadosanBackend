const mongoose= require(`mongoose`)
const {Schema} = mongoose

const userSchema = new Schema({
    name:String,
    email:{
        type:String,
        unique:true,
        lowercase: true,


    },
    password:{
        type:String,
        required: true,

    }
})

const UnserModel= mongoose.model('User',userSchema)
module.exports=UnserModel;

