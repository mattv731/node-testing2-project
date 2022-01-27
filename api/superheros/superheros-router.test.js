const request = require('supertest')
const server = require('../server')
const db = require('../../data/dbConfig')

beforeAll(async () => {
    await db.migrate.rollback()
    await db.migrate.latest()
})
beforeEach(async () => {
    await db.seed.run()
})
afterAll(async () => {
    await db.destroy()
})

describe('GET /api/superheros', () => {
    let res
    beforeEach(async () => {
        res = await request(server).get('/api/superheros')
    })
    test('returns status 200 OK', () => {
        expect(res.status).toBe(200)
    })
    test('returns an array of supers', () => {
        expect(res.body.length).toBe(6)
    })
    test('returns iron man as the second object in the array', () => {
        expect(res.body[1].hero).toBe('Iron Man')
    })
    test('returns an object of Ant-Man', () => {
        expect(res.body[4]).toMatchObject({hero_id: 5, hero: 'Ant-Man', alt_identity: 'Scott Lang'})
    })
    test('returns Bruce Banner for Hulks alt_identity', () => {
        expect(res.body[3].alt_identity).toBe('Bruce Banner')
    })
})

describe('GET /api/superheros/:id', () => {
    let spiderman, thor
    beforeEach(async () => {
        spiderman = await request(server).get('/api/superheros/6')
        thor = await request(server).get('/api/superheros/3')
    })
    test('returns a 200 OK', () => {
        expect(spiderman.status).toBe(200)
    })
    test('returns spiderman', () => {
        expect(spiderman.body.hero).toBe('Spiderman')
    })
    test('returns the Thor object', () => {
        expect(thor.body).toMatchObject({hero_id: 3, hero: 'Thor', alt_identity: 'Thor God of Thunder'})
    })
})