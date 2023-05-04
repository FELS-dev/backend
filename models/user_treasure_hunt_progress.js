module.exports = (sequelize, DataTypes) => {
    const UserTreasureHuntProgress = sequelize.define('UserTreasureHuntProgress', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        is_completed: DataTypes.BOOLEAN
    }, {
        timestamps: false,
        tableName: 'user_treasure_hunt_progress',
        primaryKey: 'progress_id'
    });

    UserTreasureHuntProgress.associate = models => {
        UserTreasureHuntProgress.belongsTo(models.Visitor, {
            foreignKey: {
                name: 'visitor_id',
                allowNull: false
            }
        });
        UserTreasureHuntProgress.belongsTo(models.TreasureHunt, {
            foreignKey: {
                name: 'hunt_id',
                allowNull: false
            }
        });
        UserTreasureHuntProgress.belongsTo(models.TreasureHuntChoices, {
            foreignKey: {
                name: 'choice_id',
                allowNull: true
            }
        });
    };

    return UserTreasureHuntProgress;
};
