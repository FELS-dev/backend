module.exports = (sequelize, DataTypes) => {
    const CvSubmissions = sequelize.define('CvSubmissions', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        cv_file: DataTypes.STRING,
        submitted_at: DataTypes.DATE
    }, {
        timestamps: false,
        tableName: 'cv_submissions'
    })

    CvSubmissions.associate = models => {
        CvSubmissions.belongsTo(models.Visitor, {
            foreignKey: {
                name: 'visitor_id',
                allowNull: false
            }
        })
        CvSubmissions.belongsTo(models.Stands, {
            foreignKey: {
                name: 'stand_id',
                allowNull: false
            }
        })
    }

    return CvSubmissions
}
