module.exports = (sequelize, DataTypes) => {
    const TreasureHuntChoices = sequelize.define('TreasureHuntChoices', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        choice: DataTypes.STRING,
        is_correct: DataTypes.BOOLEAN
    }, {
        timestamps: false,
        tableName: 'treasure_hunt_choices'
    });

    TreasureHuntChoices.associate = models => {
        TreasureHuntChoices.belongsTo(models.TreasureHunt, {
            foreignKey: {
                name: 'hunt_id',
                allowNull: false
            }
        });
    };

    return TreasureHuntChoices;
};
