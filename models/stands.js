module.exports = (sequelize, DataTypes) => {
    const Stands = sequelize.define('Stands', {
        name: DataTypes.STRING,
        description: DataTypes.STRING,
        location_x: DataTypes.FLOAT,
        location_y: DataTypes.FLOAT,
        qr_code: DataTypes.STRING
    }, {
        timestamps: false,
        tableName: 'stands'
    });

    return Stands;
};
