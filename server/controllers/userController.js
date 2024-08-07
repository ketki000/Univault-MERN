const UserModel = require("../models/Users");

const getAllUsers = async (req, res) => {
  console.log("Inside api");
  UserModel.find()
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
};

const createUser = async (req, res) => {
  try{
    console.log("inside createuser");
    const { name, email, city, address, username, phone } = req.body;
    //creating new instance object of received data
    const newUser = new UserModel({
      name,
      email,
      city,
      address,
      username,
      phone,
    });
    console.log(newUser);
    //save user to database
    await newUser.save();
    console.log('User created:', newUser);
    res.status(201).json({ message: 'User created successfully', user: newUser });
  }
  catch(error){
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { getAllUsers, createUser };
