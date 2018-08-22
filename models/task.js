module.exports = function(sequelize, DataTypes) {
  var Task = sequelize.define("Task", {
    project_name: DataTypes.STRING,
    client_name: DataTypes.STRING,
    task: DataTypes.INTEGER
  });
  return Task;
};

module.exports = function(sequelize, DataTypes) {
  var client = sequelize.define("client", {
    email: {
      type:DataTypes.STRING,
      // AllowNull is a flag that restricts a todo from being entered if it doesn't
      // have a text value
      allowNull: false
    },
    passkey: {
      type:DataTypes.INTEGER,
      allowNull: false
    }
  });
  return client;
};
