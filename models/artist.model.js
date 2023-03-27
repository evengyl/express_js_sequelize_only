const { DataTypes, Op } = require("sequelize")

module.exports = (sequelize) => {
    const Artist = sequelize.define("artist", {

        pseudo : {
            type : DataTypes.STRING(50),
            allowNull : false,
        },

        lastName : {
            type : DataTypes.STRING(50),
            allowNull : true,
            vaidate : {
                notEmpty : true
            }
        },

        firstName : {
            type : DataTypes.STRING(50),
            allowNull : true,
            vaidate : {
                notEmpty : true
            }
        },

        birthday : {
            type : DataTypes.DATE,
            allowNull : true
        },

        country : {
            type : DataTypes.STRING(50),
            allowNull : true,
        }

    },{
        indexes : [
            {
                name : "UK_Artist_Pseudo",
                unique : true,
                fields : ["pseudo"],
                where : {
                    pseudo : {
                        [Op.ne] : null
                    }
                }

            }
        ],
        tableName : "artist",
        timestamps : true,
        paranoid : true
    })
    // OP : https://sequelize.org/docs/v6/core-concepts/model-querying-basics/#operators

    return Artist
}