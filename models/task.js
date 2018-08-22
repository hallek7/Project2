module.exports = function(sequelize, DataTypes) {
  var Task = sequelize.define("Task", {
    name: DataTypes.STRING,
    body: DataTypes.TEXT,
    task_date: DataTypes.DATE,
    task_email: DataTypes.STRING
  });
  return Task;
};
