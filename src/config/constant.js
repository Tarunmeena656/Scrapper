require('dotenv').config()
// mongodb connection url 
MongoDB_URI = process.env.Mongo_db;

//Redis connection host and port
Redis_host = process.env.redis_host
Redis_port = process.env.redis_port





module.exports = { MongoDB_URI, Redis_host, Redis_port }