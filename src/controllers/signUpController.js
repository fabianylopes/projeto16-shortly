import bcrypt from 'bcrypt';
import { v4 as uuid } from 'uuid';

import db from '../db.js';

export async function SetSignUp(req, res){
    const { name, email, password } = req.body;

    try {

        await db.query(`
            INSERT INTO 
        `)
        

        res.sendStatus(201);  
    } catch (error) {
        res.status(500).send(error)
    }
}

/* const passwordHashed = bcrypt.hashSync(user.password, 10);

        await db.collection('customers').insertOne({
            ...customer,
            password: passwordHashed
        }); */