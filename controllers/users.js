import { v4 as uuidv4 } from 'uuid';
let users =[]
export const getUser = (req, res) =>{
    res.send(users);
}

export const createUser = (req,res)=> {
    const user = req.body;
 
    users.push({ ...user, id: uuidv4()});
 
    res.send(`User with the name ${user.firstName} has been added to the database`)
 }
 


export const findUser = (req,res) =>{

    const{ id } = req.params;

    const founduser = users.find((user) => user.id === id);

    res.send(founduser)
}

export const deleteUser = (req,res) =>{
    const { id } = req.params

    users =users.filter((user) => user.id !== id);

    res.send(`User with the id ${id} has been deleted from the database`)
}

export const editUser =(req,res) => {
    const {id} =req.params;
    const {firstName, lastName, age} =req.body

    const updateduser = users.find((user) => user.id === id);

    if (firstName) updateduser.firstName = firstName;
    if (lastName) updateduser.lasttName = lastName;
    if (age) updateduser.age = age;
    

    res.send(` User with the id ${id} has been updated`)
}