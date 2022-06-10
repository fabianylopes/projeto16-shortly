CREATE TABLE "users" (
  "id" SERIAL PRIMARY KEY,
  "name" TEXT NOT NULL,
  "email" TEXT NOT NULL UNIQUE,
  "password" TEXT NOT NULL
);

CREATE TABLE "urls" (
  "id" SERIAL PRIMARY KEY,
  "url" TEXT NOT NULL,
  "userId" INTEGER NOT NULL REFERENCES users(id),
  "shortUrl" TEXT NOT NULL UNIQUE,
	"visitCount" INTEGER NOT NULL DEFAULT '0'
);

CREATE TABLE "sessions" (
   "id" SERIAL PRIMARY KEY,
   "token" TEXT NOT NULL UNIQUE,
   "userId" INTEGER NOT NULL REFERENCES users(id)
);
