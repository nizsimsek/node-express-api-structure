import {
    v4
} from 'uuid';

let users = [];

export const createUser = (req, res) => {
    const user = req.body;
    users.push({
        ...user,
        id: v4()
    });
    res.status(201).send({
        success: true,
        data: user
    });
}

export const getUsers = (req, res) => {
    res.status(200).send(users);
}

export const getUserById = (req, res) => {
    const user = users.find((user) => user.id === req.params.id)
    res.status(200).send({
        success: true,
        data: user
    })
}

export const updateUserById = (req, res) => {
    const {
        firstName,
        lastName,
        age
    } = req.body;

    const user = users.find((user) => user.id === req.params.id)

    if (firstName) user.firstName = firstName;
    if (lastName) user.lastName = lastName;
    if (age) user.age = age;

    res.send(`User with the id ${req.params.id} has been updated.`)
}

export const deleteUserById = (req, res) => {
    users = users.filter((user) => user.id !== req.params.id)

    res.status(200).send({
        success: true,
        data: users
    })
}