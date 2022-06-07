import bcrypt from 'bcrypt';

import db from '../db.js';

export async function setSignUp(req, res){
    const { name, email, password } = req.body;

    try {
        const passwordHashed = bcrypt.hashSync(password, 10);

        await db.query(`
            INSERT INTO users (name, email, password)
            VALUES $1, $2, $3
        `, [name, email, passwordHashed])

        res.sendStatus(201);  
    } catch (error) {
        res.status(500).send(error)
    }
}

export async function setSignIn(req, res){
    const { email, password } = req.body;

    try {
        const { rows: users } = await db.query(`
            SELECT * FROM users WHERE email=$1
        `, [email]);

        const [user] = users
        if (!user) {
            return res.sendStatus(401);
        }

        const rightPassword = bcrypt.compareSync(password, user.password);
        if(rightPassword){
            const token = uuid();

            db.query(`
                INSERT INTO sessions (token, "userId")
                VALUES ($1, $2)
            `, [token, user.id])
            
            return res.status(200).send(token);
        }

    } catch (error) {
        res.status(500).send(error);
    }
}
