module.exports = (sequelize, DataTypes) => {
    const DigitalPasses = sequelize.define('DigitalPasses', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        qr_code: DataTypes.STRING
    }, {
        timestamps: false,
        tableName: 'digital_passes'
    })

    DigitalPasses.associate = models => {
        DigitalPasses.belongsTo(models.Visitor, {
            foreignKey: {
                name: 'visitor_id',
                allowNull: false
            }
        })
    }

    return DigitalPasses
}
