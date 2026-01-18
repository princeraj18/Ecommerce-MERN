import userModel from "../models/userModel.js";
import validator from "validator"
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken"
const createToken= (id)=>{
    return jwt.sign({id},process.env.JWT_SECRET)
}







// route for user login
const loginUser = async(req,res)=>{
      try{
        const {email,password } = req.body;
        const user =await userModel.findOne({email});
        if (!user) {
          return res.json({success:false,message:"user doesn't exists"})
        }
        const isMatch = await bcrypt.compare(password,user.password);
        if(isMatch){
          const token = createToken(user._id)
          res.json({
            success:true ,
            token
          })
        }
        else{
          res.json({success:false , message:'invalid character'})
        }
      }
      catch(error){

      }



}

// route for user register

const registerUser = async (req, res) => {
  try {
    console.log(req.body); // 🔍 debug

    const { name, email, password } = req.body;

    // if (!name || !email || !password) {
    //   return res.json({
    //     success: false,
    //     message: "All fields are required"
    //   })
    // }

    const exists = await userModel.findOne({ email });
    if (exists) {
      return res.json({ success: false, message: "User already exists" })
    }

    if (!validator.isEmail(email)) {
      return res.json({ success: false, message: "Please enter a valid email" })
    }

    if (password.length < 8) {
      return res.json({ success: false, message: "Password must be at least 8 characters" })
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const newUser = new userModel({
      name,
      email,
      password: hashedPassword
    })

    const user = await newUser.save()
    const token = createToken(user._id)

    res.json({ success: true, token })

  } catch (error) {
    console.log(error)
    res.status(500).json({ success: false, message: error.message })
  }
}


// route for admin login


// const adminLogin=async(req,res)=>{
// try {
//   const {email,password} = req.body;
//   if(email===process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD ){
//     const token =jwt.sign( email + password ,process.env.JWT_SECRET );
//     res.json({success:true,token})
//   }
//   else{
//     res.json({success:false,message:"Invalid credentials"})

//   }
// } catch (error) {
//   console.log(error);
//   res.json({success:false,message:error.message})
  
  
// }
// }
const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    // console.log(email);
    

    if (
      email === process.env.ADMIN_EMAIL &&
      password === process.env.ADMIN_PASSWORD
    ) {
      const token = jwt.sign(email + password, process.env.JWT_SECRET);

      res.json({ success: true, token });
    } else {
      res.json({
        success: false,
        message: "Invalid Credentials",
      });
    }
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: error.message,
    });
  }
};
// const adminLogin = async (req, res) => {
//   try {
//     if (!req.body) {
//       return res.status(400).json({ success: false, message: "Missing request body" });
//     }
//     const { email, password } = req.body;
//     if (!email || !password) {
//       return res.status(400).json({ success: false, message: "Email and password required" });
//     }

//     if (
//       email === process.env.ADMIN_EMAIL &&
//       password === process.env.ADMIN_PASSWORD
//     ) {
//       const token = jwt.sign(email + password, process.env.JWT_SECRET);
//       return res.json({ success: true, token });
//     } else {
//       return res.json({ success: false, message: "Invalid Credentials" });
//     }
//   } catch (error) {
//     console.log(error);
//     return res.status(500).json({ success: false, message: error.message });
//   }
// };
export{
    loginUser,
    registerUser,
    adminLogin
}