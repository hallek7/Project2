module.exports = function(sequelize, DataTypes) {
  var Task = sequelize.define("Task", {
    project_name: DataTypes.STRING,
    client_name: DataTypes.STRING,
    task: DataTypes.INTEGER,
    name: DataTypes.STRING,
    body: DataTypes.TEXT,
    task_date: DataTypes.DATE,
    task_email: DataTypes.STRING
  });
  return Task;
};
