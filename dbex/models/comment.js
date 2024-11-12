const Sequelize = require('sequelize');

class Comment extends Sequelize.Model {
    static initiate(sequelize) {
        Comment.init({
            // 컬럼이름
            comment: {
                type: Sequelize.STRING(100),
                allowNull: false,
            },
            created_at: {
                type: Sequelize.DATE,
                allowNull: true,
                defaultValue: Sequelize.NOW
            }
        },{
            // 테이블 설정
            sequelize,
            timestamps: false,
            underscored: false,
            modelName: 'Comment',
            tableName: 'Comments',
            paranoid: false,
            charset: 'utf8mb4',
            collate: 'utf8mb4_general_ci'
        });
    }
    static associate(db) {
        db.Comment.belongsTo(db.User, {foreignKey:'commenter', targetKey:'id'})
    }
}

module.exports = Comment;