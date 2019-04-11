const db = require('../data/dbConfig'); //access to database
const Hobbits = require('../hobbits/hobbitsModel'); //access to model

describe('hobits model', () => {
  beforeEach(async () => {
    await db('hobbits').truncate();
  });
  describe('insert()', () => {
    it('should insert provided hobbit', async () => {
      await Hobbits.insert({ name: 'gaffer' });
      await Hobbits.insert({ name: 'aragorn' });
      await Hobbits.insert({ name: 'gandolf' });

      const hobbits = await db('hobbits');

      expect(hobbits).toHaveLength(3);
    });

    it('should insert provided hobbit', async () => {
      let hobbit = await Hobbits.insert({ name: 'gaffer' });
      expect(hobbit.name).toBe('gaffer');

      hobbit = await Hobbits.insert({ name: 'sam' });
      expect(hobbit.name).toBe('sam');
    });
  });
});
