module.exports = (sequelize, DataTypes) => {
    const Visitor = sequelize.define('Visitor', {
        first_name: DataTypes.STRING,
        last_name: DataTypes.STRING,
        email: DataTypes.STRING,
        created_at: DataTypes.DATE,
        updated_at: DataTypes.DATE
    }, {
        timestamps: false,
        tableName: 'visitor'
    });

    return Visitor;
};