module.exports = function(sequelize, DataTypes) {
  var client = sequelize.define("client", {
    email: {
      type: DataTypes.STRING,
      // AllowNull is a flag that restricts an from being entered if it doesn't
      // have a text value
      allowNull: false
    },
    passkey: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    
    project_name:{
      type: DataTypes.STRING,
      allowNull: false
    },
    task: {
      type: DataTypes.INTEGER,
    },
    body:{
      type:DataTypes.TEXT,
    }, 
    task_date: {
      type:DataTypes.DATE,
    }

  });
  return client;
};
