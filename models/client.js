module.exports = function(sequelize, DataTypes) {
  var client = sequelize.define("client", {
    email: {
      type: DataTypes.STRING,
      // AllowNull is a flag that restricts an email from being entered if it doesn't
      // have a text value
      allowNull: false
    },
    passkey: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });
  return client;
};
