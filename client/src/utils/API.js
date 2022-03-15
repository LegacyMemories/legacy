import axios from "axios";

const myRoutes = {

  //==============PROFILE ROUTES====================
  // Gets all profiles from database
  getProfiles: function() {
    return axios.get("/api/profile");
  },

  // Saves profile to database
  saveProfile: function(profileData) {
    console.log("in save profile");
    console.log(profileData);
    return axios.post("/api/profile", profileData);
  },

  // Updates profile in database
  updateProfile: function(id, profileData) {
    console.log("id = ", id);
    console.log("data = ", profileData);
    return axios.put("/api/profile/" + id, profileData);
  },

  // Delete a profile in database
  deleteProfile: function(id) {
    return axios.delete("/api/profile/" + id);
  },

  // Delete all profiles in database
  deleteAllProfiles: function() {
    return axios.delete("/api/profile");
  },

  getProfileInfo: function(id) {
    console.log("id = ", id)
    return axios.post("/api/editprofile/" + id);
  }
};

export default myRoutes;