import db from "../db.js";

export async function getUser(req, res){
    //const { user } = res.locals;

    try {

        const users = await db.query(`
            SELECT * FROM users
        `)

        res.send(users.rows);
    } catch (error) {
        res.status(500).send(error);
    }
}

export async function getUserById(req, res){
    const { id } = req.params;

    try {

        const result = await db.query(`
            SELECT users.*,
            SUM(urls."visitCount") as "visitCount"
            FROM users 
            LEFT JOIN urls ON urls."userId"=users.id
            WHERE users.id=$1
            GROUP BY users.id
        `, [id])

        if (result.rowCount === 0) {
            return res.sendStatus(404)
          }

        const urls = await db.query(`
            SELECT * FROM urls WHERE "userId"=$1
        `, [id]);

        const [user] = result.rows
    
        res.send({
            ...user,
            shortenedUrls: urls.rows 
        });
        
    } catch (error) {
        res.status(500).send(error);
    }
}