const db = require('../data/db-config');

const getAllClasses = async () => {
    const rows = await db('classes as c')
        .leftJoin()
}

module.exports = {
    getAllClasses
};