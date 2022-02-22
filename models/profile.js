const mongoose = require("mongoose");
const Schema = mongoose.Schema;
mongoose.promise = Promise;

const profileSchema = new Schema (
  [
    { 
      firstName: { type: String },
      middleName: { type: String },
      lastName: { type: String },
      nameSuffix: { type: String },
//      email: { type: String },
//      birthdate: { type: Date },
      currentAddress: {
        address: { type: String },
        address2: { type: String },
        city: { type: String },
        state: { type: String },
        zipCode: { type: String }
      },
      profilePhoto: { type: String },
      birthInfo: {
        birthplaceCity: { type: String },
        birthplaceState: { type: String },
        birthDate: { type: Date },
      },
//      hobbies: [
//        { type: String }
//      ],
//      phone: { type: String },
//      password: {
//        type: String,
//        required: true
//      },
//      securityQuestion: { type: String },
//      securityAnswer: { type: String },
    }
  ]
);

const Profile = mongoose.model("Profile", profileSchema);

module.exports = Profile;