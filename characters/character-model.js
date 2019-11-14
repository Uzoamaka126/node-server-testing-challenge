const db = require('../database/db-config');

module.exports = {
  insert,
  update,
  remove,
  getAll,
  findById,
};

async function insert(character) {
  return null;
}

async function update(id, changes) {
  return null;
}

function remove(id) {
  return null;
}

function getAll() {
  return db('characters');
}

function findById(id) {
  return null;
}
