module.exports = (sequelize, DataTypes) => {
    const TreasureHunt = sequelize.define('TreasureHunt', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        question: DataTypes.STRING
    }, {
        timestamps: false,
        tableName: 'treasure_hunt'
    });

    TreasureHunt.associate = models => {
        TreasureHunt.belongsTo(models.Stands, {
            foreignKey: {
                name: 'stand_id',
                allowNull: false
            }
        });
    };

    return TreasureHunt;
};
