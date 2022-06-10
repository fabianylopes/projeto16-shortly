import db from '../db.js';

async function createShortenUrl(url, shortUrl, id) {
  return db.query(`
    INSERT INTO urls(url, "shortUrl", "userId")
    VALUES ($1, $2, $3)
  `, [url, shortUrl, id])
}

async function getShortUrl(shortUrl) {
  return db.query(`
    SELECT * FROM urls WHERE "shortUrl"=$1
  `, [shortUrl])
}

async function countUrlVisit(urlId) {
  return db.query(`
    UPDATE urls
    SET "visitCount"="visitCount" + 1
    WHERE id=$1
  `, [urlId])
}

export const urlsRepository = { 
  createShortenUrl,
  getShortUrl,
  countUrlVisit
 }