const jwt = require('jsonwebtoken');
const bcrypt = require("bcryptjs");
const User = require("../models/user");

const addEmployee = async (req, res, next) => {
  try {
    console.log(req.body);
    const { name, email, phone, password, empId } = req.body;
    if (!name || !email || !phone || !password || !empId) {
      res.status(400);
      throw new Error("please add all the fields");
    }

    const userExists = await User.findOne({ email });

    if (userExists) {
      res.status(400);
      throw new Error("user already exists");
    }

    const salt = await bcrypt.genSalt(10);
    req.body.password = await bcrypt.hash(password, salt);

    const user = await User.create(req.body);

    if (user) {
      res.status(201).json({
        id: user.id,
        name: user.name,
        email: user.email,
        empId: user.empId,
      });
    } else {
      res.status(400);
      throw new Error("Invalid user data");
    }
  } catch (error) {
    res.status(400);
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const { phone, password } = req.body;

    const user = await User.findOne({ phone });

    if (user && (await bcrypt.compare(password, user.password))) {
      if (user.isAdmin) {
        res.json({
          _id: user._id,
          name:user.name,
          email: user.email,
          isAdmin: user.isAdmin,
          token: generateToKen(user._id),
        });
      } else {
        res.json({
          _id: user._id, 
          name:user.name,
          email: user.email,
          token: generateToKen(user._id),
        });
      }
    } else {
      res.status(400).send("Invalid credentials");
    }
  } catch (error) {
    res.status(400);
    next(error);
  }
};

const getAllUsers=async (req,res,next)=>{
  try{
    let userData =await User.find({});
    res.json(userData)
  }catch(error){
    res.status(400);
    next(error);
  }
}

//Generate JWT
const generateToKen = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: 60,
  });
};

module.exports = {
  addEmployee,
  login,
  getAllUsers
};
