const db = require('../../data/dbConfig')

function get(){
    return db('superheros')
}

function getById(id){
    return db('superheros').where('hero_id', id).first()
}
module.exports = {
    get,
    getById
}