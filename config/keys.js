// if(process.env.NODE_ENV==='production'){
//     module.exports = require('./prod')
// }else{
//     module.exports = require('./dev')
// }

module.exports = {
    MONGOURI: 'mongodb://Radesh:Radesh#007@cluster0-shard-00-00-i5y6q.mongodb.net:27017,cluster0-shard-00-01-i5y6q.mongodb.net:27017,cluster0-shard-00-02-i5y6q.mongodb.net:27017/instagram?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority',
    JWT_SECRET: process.env.JWT_SEC,
    SENDGRID_API: process.env.SENDGRID_API,
    EMAIL: process.env.EMAIL
}