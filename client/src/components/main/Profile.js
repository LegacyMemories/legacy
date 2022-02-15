import React from "react";
import API from "../../utils/API";
//import {useHistory} from "react-router-dom";

function Profile() {

  var picURLInput="";

  // setup references to fields on page
  let firstName = React.createRef();
  let middleName = React.createRef();
  let lastName = React.createRef();
  let nameSuffix = React.createRef();
  let address = React.createRef();
  let address2 = React.createRef();
  let city = React.createRef();
  let state = React.createRef();
  let zipCode = React.createRef();
//  let phone = React.createRef();
//  let securityQuestion = React.createRef();
//  let securityAnswer = React.createRef();
  let birthplaceCity = React.createRef();
  let birthplaceState = React.createRef();
  let birthDate = React.createRef();
//  let history = useHistory();

// function to upload profile photo to Cloudinary using their widget
function showWidget() {

    window.cloudinary.openUploadWidget({
      cloudName: process.env.REACT_APP_CLOUD_NAME,
      uploadPreset: process.env.REACT_APP_UPLOAD_PRESET,
      sources: [
        "local"
      ],
      googleApiKey: "<image_search_google_api_key>",
      showAdvancedOptions: true,
      cropping: true,
      multiple: false,
      defaultSource: "local",
      styles: {
        palette: {
          window: "#F5F5F5",
          sourceBg: "#438945",
          windowBorder: "#F7F4E9",
          tabIcon: "#438945",
          inactiveTabIcon: "#E8D5BB",
          menuIcons: "#B59B4D",
          link: "#F7F4E9",
          action: "#F7F4E9",
          inProgress: "#99cccc",
          complete: "#78b3b4",
          error: "#F5F5F5",
          textDark: "#1B1918",
          textLight: "#695A5A"
        },
        fonts: {
          default: null,
          "'Kalam', cursive": {
            url: "https://fonts.googleapis.com/css?family=Kalam",
            active: true
          }
        }
      }
    },
    (error, result) => {
      if (!error) {
        if (result.event === "success") {
          // save the returned URL link for uploaded photo to store in db
          picURLInput = result.info.url;
        };
      };
    })
  }

  // function to handle submit button
  function handleSubmitBtnClick(e) {
    e.preventDefault();
    const profileData = 
    {
//      _id: stateStore._id,
      firstName: firstName.current.value,
      middleName: middleName.current.value,
      lastName: lastName.current.value,
      nameSuffix: nameSuffix.current.value,
      currentAddress: {
        address: address.current.value,
        address2: address2.current.value,
        city: city.current.value,
        state: state.current.value,
        zipCode: zipCode.current.value,
      },
      birthInfo: {
        birthplaceCity: birthplaceCity.current.value,
        birthplaceState: birthplaceState.current.value,
        birthDate: birthDate.current.value,
      },
      profilePhoto: picURLInput

//      phone: phone.current.value,
//      securityQuestion: securityQuestion.current.value,
//      securityAnswer: securityQuestion.current.value,
    }    
//    console.log("help = ", regData.help_volunteer);
    console.log(profileData);
    API.saveProfile(profileData)
      .then(res => {
//        history.push("/LandingPage");
console.log('success');
      })
      .catch(err => console.log(err));
  } 

  return (
    <div className="container is-fluid">

        <div className="container">
          
        <h1 className="title">Profile Form</h1>
          <div className="row">
            <div className="col-md-6 col-md-offset-3">

              <h4 className="title is-4">Fill in profile below</h4>
              <form className="signup">
                <div id="registrationDiv">
                  <div className="field is-grouped">
                    <div className="control is-expanded">
                      <div className="form-group">
                        <label className="label" htmlFor="firstName">First Name</label>
                        <input className="input form-control" ref={firstName} type="input" id="first-name" placeholder="First Name" required></input>
                      </div>
                    </div>

                    <div className="control is-expanded">
                      <div className="form-group">
                        <label className="label" htmlFor="middleName">Middle Name</label>
                        <input className="input form-control" ref={middleName} type="input" id="middle-name" placeholder="Middle Name"></input>
                      </div>
                    </div>

                    <div className="control is-expanded">
                      <div className="form-group">
                        <label className="label" htmlFor="lastName">Last Name</label>
                        <input className="input form-control" ref={lastName} type="input" id="last-name" placeholder="Last Name" required></input>
                      </div>
                    </div>
                  </div>

                  <div className="control is-expanded">
                      <div className="form-group">
                        <label className="label" htmlFor="nameSuffix">Suffix</label>
                        <input className="input form-control" ref={nameSuffix} type="input" id="suffix-name" placeholder="Suffix"></input>
                      </div>
                  </div>
                  
                  <div className="field">
                    <div className="form-group">
                      <label className="label" htmlFor="address">Address</label>
                      <input className="input form-control" ref={address} type="input" id="street" placeholder="Street" required></input>
                    </div>
                  </div>

                  <div className="field">
                    <div className="form-group">
                      <label className="label" htmlFor="address2">Address2</label>
                      <input className="input form-control" ref={address2} type="input" id="street2" placeholder="Street2" required></input>
                    </div>
                  </div>

                  <div className="field">
                    <div className="field is-grouped">
                      <div className="control is-expanded">
                        <div className="form-group">
                          <label className="label" htmlFor="city">City</label>
                          <input className="input form-control" ref={city} type="input" id="city" placeholder="City" required></input>
                        </div>
                      </div>

                      <div className="control is-expanded">
                        <div className="form-group">
                          <label className="label" htmlFor="state">State</label>
                          <input className="input form-control" ref={state} type="input" id="state" placeholder="State" maxLength="2" size="2" required></input>
                        </div>
                      </div>

                      <div className="control is-expanded">
                        <div className="form-group">
                          <label className="label" htmlFor="zip">Zip</label>
                          <input className="input form-control" ref={zipCode} type="input" id="zip" placeholder="Zip" maxLength="5" size="5" required></input>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="control is-expanded">
                    <div className="form-group">
                      <label className="label" htmlFor="birthplaceCity">Birth Place City</label>
                      <input className="input form-control" ref={birthplaceCity} type="input" id="birthplaceCity" placeholder="Birthplace City"></input>
                    </div>
                  </div>

                  <div className="control is-expanded">
                    <div className="form-group">
                      <label className="label" htmlFor="birthplaceState">Birthplace State</label>
                      <input className="input form-control" ref={birthplaceState} type="input" id="birthplaceState" placeholder="Birthplace State"></input>
                    </div>
                  </div>

                  <div className="control">
                    <div className="field form-group">
                      <label className="label" htmlFor="birthplaceDate">Birth Date</label>
                      <input className="input" ref={birthDate} type="date" id="birthplaceDate" name="birthplaceDate"></input>
                    </div>
                  </div>

                    <div className="form-group">
                      <div>
                        <br/>
                        <button className="control button button-ikr is-primary" type="button" id="upload_widget" onClick={showWidget}>Upload Profile Photo</button>
                      </div>
                      <br/>
                    </div>
            <br/>
            <br/>
            <button id="signup" type="submit" className="control button button-ikr is-primary" onClick={handleSubmitBtnClick}>Submit Profile</button>
          </div>
        </form>
      <br/>
     </div>
    </div>
   </div>

 </div>
  
  );
}

export default Profile;