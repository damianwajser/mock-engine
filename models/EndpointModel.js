module.exports = (sequelize, type) => {
    return sequelize.define('endpoint', {
        id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        path: {
          type: type.STRING,
          allowNull: false

        },
        response: type.JSON,
        status: type.INTEGER,
        method: type.STRING
    })
}
