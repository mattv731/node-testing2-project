const Super = require('./superheros-model')
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

describe('Super model tests', () => {
    let supers
    beforeEach(async () => {
        supers = await Super.get()
    })
    test('returns supers array', () => {
        expect(supers).toHaveLength(6)
    })
    test('supers[0] is steve rogers aka captain america', () => {
        expect(supers[0]).toMatchObject({hero_id: 1, hero: "Captain America", alt_identity: "Steve Rogers"})
    })
})