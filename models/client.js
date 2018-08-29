module.exports = function(sequelize, DataTypes) {
  var client = sequelize.define("client", {
    email: {
      type: DataTypes.STRING,
      // AllowNull is a flag that restricts an from being entered if it doesn't
      // have a text value
      allowNull: true
    },
    passkey: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    
    project_name:{
      type: DataTypes.STRING,
    },

    task_body:{
      type:DataTypes.STRING,
    }, 

    task_date: {
      type:DataTypes.DATE,
    }

  });
  return client;
};
