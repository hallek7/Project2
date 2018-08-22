module.exports = function(sequelize, DataTypes) {
  var Task = sequelize.define("Task", {
<<<<<<< HEAD
    project_name: DataTypes.STRING,
    client_name: DataTypes.STRING,
    task: DataTypes.INTEGER
=======
    name: DataTypes.STRING,
    body: DataTypes.TEXT,
    task_date: DataTypes.DATE,
    task_email: DataTypes.STRING
>>>>>>> b1e2d78e85b8dce05d259ce4715707a9190b2c35
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
