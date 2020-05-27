module.exports = (sequelize, type) => {
    return sequelize.define('freelance', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        text: type.STRING
    })
}