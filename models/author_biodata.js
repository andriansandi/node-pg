'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Author_Biodata extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Author_Biodata.belongsTo(models.Author, { foreignKey: 'authorId'} )
    }
  };
  Author_Biodata.init({
    id: { 
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    homeAddress: DataTypes.STRING,
    workAddress: DataTypes.STRING,
    authorId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Author_Biodata',
  });
  return Author_Biodata;
};