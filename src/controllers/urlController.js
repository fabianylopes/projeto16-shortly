import { nanoid } from 'nanoid';

import db from '../db.js';
import { urlsRepository } from '../repositories/urlsRepository.js';

export async function setUrl(req, res){
    const { id } = res.locals.user;
    const { url } = req.body;

    const shortenUrl = nanoid(8);

    await urlsRepository.createShortenUrl(url, shortenUrl, id)

    res.status(201).send({
        shortenUrl
    })
}

export async function getUrl(req, res){
    const { shortUrl } = req.params;
  
    const result = await urlsRepository.getShortUrl(shortUrl)
    if (result.rowCount === 0) {
      return res.sendStatus(404)
    }
  
    const [url] = result.rows;
    await urlsRepository.countUrlVisit(url.id);
  
    delete url.visitCount;
    delete url.userId;
  
    res.send(url)
}

export async function deleteUrl(req, res){
    const userId = res.locals.user.id;
    const { id } = req.params;

    try {
        const result = await db.query(`
            SELECT * FROM urls WHERE id=$1 AND "userId"=$2
        `, [id, userId]);

        if (result.rowCount === 0) {
            return res.sendStatus(401)
        }

        await db.query(`
            DELETE FROM urls WHERE id=$1
        `, [id])

        res.sendStatus(204);
        
    } catch (error) {
        res.status(500).send(error);
    }
}