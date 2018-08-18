module.exports = function(sequelize, DataTypes) {
  var Task = sequelize.define("Task", {
    name: DataTypes.STRING,
    body: DataTypes.TEXT,
    task_date: DataTypes.DATE
  });
  return Task;
};
