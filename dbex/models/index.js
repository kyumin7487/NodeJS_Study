const Sequelize = require("sequelize");

const env = process.env.NODE_ENV || "development";
const config = require("../config/config.json")[env];

const User = require('./user')
const Comment = require('./comment')

const db = {};

const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
);

db.sequelize = sequelize;

db.User= User;
db.Comment = Comment;

db.User.initiate(sequelize);
db.Comment.initiate(sequelize);

db.User.associate(db);
db.Comment.associate(db);

module.exports = db;
