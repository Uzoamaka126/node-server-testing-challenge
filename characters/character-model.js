const db = require('../database/db-config');

module.exports = {
  insert,
  update,
  remove,
  getAll,
  findById,
};

function getAll() {
  return db('characters');
}

async function insert(character) {
  const [id] = await db('characters').insert(character);

  return findById(id)
}
async function update(id, changes) {
  return null;
}

async function remove(id) {
  await db('characters')
  
  return findById(id)
    .delete()
}

function findById(id) {
  return db('characters')
        .where({ id })
        .first();
}
