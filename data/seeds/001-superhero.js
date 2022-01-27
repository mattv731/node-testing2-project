exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries and resets ids
    return knex('superheros')
      .truncate()
      .then(function() {
        return knex('superheros').insert([
          { hero: 'Captain America', alt_identity: 'Steve Rogers'},
          { hero: 'Iron Man', alt_identity: 'Tony Stark'},
          { hero: 'Thor', alt_identity: 'Thor God of Thunder'},
          { hero: 'Hulk', alt_identity: 'Bruce Banner'},
          { hero: 'Ant-Man', alt_identity: 'Scott Lang'},
          { hero: 'Spiderman', alt_identity: 'Peter Parker'}
        ]);
      });
  };
  