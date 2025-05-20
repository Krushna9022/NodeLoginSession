const userModel = require("../models/register.model");

class Register {
  async acceptuser(...user) {
    try {
      const msg = await userModel.RegisterUser(...user);
      return msg;
    } catch (err) {
      return err;
    }
  }
}

module.exports = new Register();
