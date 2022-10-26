import {v4 as uuidV4} from "uuid"

let users = [
    {
        firstName : "Narendra",
        lastName: "test",
        userName:  "Narendra123",
        gender : "male",
        emailId:"Narendra123@mail.com",
        mobileNo:"9638527412",  
        id: uuidV4()
    },
    {
        firstName : "Selva",
        lastName: "test",
        userName:  "Selva123",
        gender : "male",
        emailId:"Selva@mail.com",
        mobileNo:"9638527412",
        id: uuidV4()
    },
    {
        firstName : "mani",
        lastName: "test",
        userName:  "mani",
        gender : "male",
        emailId:"mani@mail.com",
        mobileNo:"9638527412",
        id: uuidV4()
    }
]


export const getUsers = function(req, res) {
    res.json(users)
}

export const createUser = function(req, res) {
    const { firstName,
        lastName,
        userName,
        gender,
        emailId,
        mobileNo } = req.body

    users.push({
        firstName,
        lastName,
        userName,
        gender,
        emailId,
        mobileNo,
        id: uuidV4()
    })

    res.json(users)
}

export const getOneUser = function(req, res) {
    const userId = req.params.id
    
    const user = users.find(function(user) {
        return user.id === userId
    })

    res.json(user)
}

export const deleteUser = function(req, res) {
    const userId = req.params.id

    users = users.filter(function(user){
        return user.id !== userId
    })

    res.json(users)
}

export const updateUser = function(req, res) {
    const userId = req.params.id
    const { firstName,
        lastName,
        userName,
        gender,
        emailId,
        mobileNo } = req.body

    users = users.map(function(user) {
        if(user.id === userId) {
            return {
                firstName,
                lastName,
                userName,
                gender,
                emailId,
                mobileNo,
                id: user.id
            }
        }

        return user
    })

    res.json(users)
}