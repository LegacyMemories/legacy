import React, {useState, useEffect} from "react";
import API from "../../utils/API";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "../main/main.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

function Profile() {
  var picURLInput="";
  let navigate = useNavigate();

  const {

    register,
    handleSubmit,
    setValue,
    setError,
    formState: { errors }
  } = useForm();

  // function to save the signup name to state
  function handleChange(event) {
    setSignup({
      ...signup, [event.target.name]: event.target.value
    })

  }

  const [signup, setSignup] = useState();

    // object for initial values of fields on page
    const initialValues = {
      firstName:"",
      middleName: "",
      lastName:"",
      suffix: "",
      address: "",
      address2: "",
      city: "",
      state: "",
      zipCode: "",
      birthplaceCity: "",
      birthplaceState: "",
      birthplaceDate: "",
      password: "",
      confirmPassword:"",
      email: "",
      securityQuestion:"",
      answer:"",
  
    };
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

  function onSubmit(data) {
    const profileData = 
    {
//      _id: stateStore._id,
      firstName: data.firstName,
      middleName: data.middleName,
      lastName: data.lastName,
      nameSuffix: data.suffix,
      currentAddress: {
        address: data.address,
        address2: data.address2,
        city: data.city,
        state: data.state,
        zipCode: data.zipCode,
      },
      birthInfo: {
        birthplaceCity: data.birthplaceCity,
        birthplaceState: data.birthplaceState,
        birthDate: data.birthDate,
      },
      profilePhoto: picURLInput,

//      phone: phone.current.value,
//      securityQuestion: securityQuestion.current.value,
//      securityAnswer: securityQuestion.current.value,
    }    

    console.log(profileData);
    API.saveProfile(profileData)
     .then(res => {
        navigate("/landingpage");
        console.log('success');
      })
      .catch(err => console.log(err));
  };

  return (
    <Container className="container is-fluid">
      <Container className="container">
        <h1 className="title">Profile Form</h1>
        <Row className="row">
          <Col md={12}>
            <h2 className="title">Fill in profile below</h2>
            <form className="signup" onSubmit={handleSubmit(onSubmit)}>
              <Row>
                <Col md={6}>
                  <label htmlFor="firstName">First Name</label>
                  <label className="requiredColor">*</label>
                  <input 
                    className="input form-control"
                    defaultValue={initialValues.firstName}
                    placeholder="First Name"
                    type="firstName" required
                    onChange={handleChange}
                    {...register("firstName")}
                  />

                  <label htmlFor="middleName">Middle Name</label>
                  <input className="input form-control" 
                    defaultValue={initialValues.middleName}
                    placeholder="Middle Name"
                    type="middleName"
                    onChange={handleChange}
                    {...register("middleName")}
                  />

                  <label htmlFor="LastName">Last Name</label><label className="requiredColor">*</label>
                  <input className="input form-control"
                    defaultValue={initialValues.lastName}
                    placeholder="Last Name"
                    type="lastName" required
                    onChange={handleChange}
                    {...register("lastName")}
                  />

                  <label htmlFor="suffix">Suffix</label>
                  <input 
                    className="input form-control"
                    defaultValue={initialValues.suffix}
                    placeholder="Suffix"
                    type="suffix"
                    onChange={handleChange}
                    {...register("suffix")}
                  />
               
                  <label htmlFor="address">Address</label><label className="requiredColor">*</label>
                  <input 
                    className="input form-control"
                    defaultValue={initialValues.address}
                    placeholder="Address"
                    type="address" required
                    onChange={handleChange}
                    {...register("address")}
                  />

                  <label htmlFor="address2">Address2</label>
                  <input 
                    className="input form-control"
                    defaultValue={initialValues.address2}
                    placeholder="Address2"
                    type="address"
                    onChange={handleChange}
                    {...register("address2")}
                  />

                  <label htmlFor="city">City</label><label className="requiredColor">*</label>
                    <input 
                      className="input form-control"
                      defaultValue={initialValues.city}
                      placeholder="City"
                      type="city" required
                      onChange={handleChange}
                      {...register("city")}
                    />

                    <label htmlFor="state">State</label><label className="requiredColor">*</label>
                    <br/>
                    <select className="select" required {...register("state", { required: true })}>
                      <option value="">Choose...</option>
                      <option value="AK">AK</option>
                      <option value="AL">AL</option>
                      <option value="AR">AR</option>
                      <option value="AZ">AZ</option>
                      <option value="CA">CA</option>
                      <option value="CO">CO</option>
                      <option value="CT">CT</option>
                      <option value="DC">DC</option>
                      <option value="DE">DE</option>
                      <option value="FL">FL</option>
                      <option value="GA">GA</option>
                      <option value="HI">HI</option>
                      <option value="IA">IA</option>
                      <option value="ID">ID</option>
                      <option value="IL">IL</option>
                      <option value="IN">IN</option>
                      <option value="KS">KS</option>
                      <option value="KY">KY</option>
                      <option value="LA">LA</option>
                      <option value="MA">MA</option>
                      <option value="MD">MD</option>
                      <option value="ME">ME</option>
                      <option value="MI">MI</option>
                      <option value="MN">MN</option>
                      <option value="MO">MO</option>
                      <option value="MS">MS</option>
                      <option value="MT">MT</option>
                      <option value="NC">NC</option>
                      <option value="ND">ND</option>
                      <option value="NE">NE</option>
                      <option value="NH">NH</option>
                      <option value="NJ">NJ</option>
                      <option value="NM">NM</option>
                      <option value="NV">NV</option>
                      <option value="NY">NY</option>
                      <option value="OH">OH</option>
                      <option value="OK">OK</option>
                      <option value="OR">OR</option>
                      <option value="PA">PA</option>
                      <option value="RI">RI</option>
                      <option value="SC">SC</option>
                      <option value="SD">SD</option>
                      <option value="TN">TN</option>
                      <option value="TX">TX</option>
                      <option value="UT">UT</option>
                      <option value="VA">VA</option>
                      <option value="VT">VT</option>
                      <option value="WA">WA</option>
                      <option value="WI">WI</option>
                      <option value="WV">WV</option>
                      <option value="WY">WY</option>
                    </select>

                    <br/>
                    <label htmlFor="zipCode">Zip Code</label><label className="requiredColor">*</label>
                    <input 
                      className="input form-control"
                      defaultValue={initialValues.zipCode}
                      placeholder="Zip Code"
                      type="zipCode" required
                      onChange={handleChange}
                      {...register("zipCode")}
                    /> 
                 </Col>
                 <Col md={6}>          
                    <label htmlFor="birthPlaceCity">Birthplace City</label>
                    <input 
                      className="input form-control"
                      defaultValue={initialValues.birthplaceCity}
                      placeholder="Birthplace City"
                      type="birthplaceCity"
                      onChange={handleChange}
                      {...register("birthplaceCity")}
                    />

                    <label htmlFor="birthplaceState">Birthplace State</label>
                    <br/>
                    <select className="select" required {...register("birthplaceState", { required: true })}>
                      <option value="">Choose...</option>
                      <option value="AK">AK</option>
                      <option value="AL">AL</option>
                      <option value="AR">AR</option>
                      <option value="AZ">AZ</option>
                      <option value="CA">CA</option>
                      <option value="CO">CO</option>
                      <option value="CT">CT</option>
                      <option value="DC">DC</option>
                      <option value="DE">DE</option>
                      <option value="FL">FL</option>
                      <option value="GA">GA</option>
                      <option value="HI">HI</option>
                      <option value="IA">IA</option>
                      <option value="ID">ID</option>
                      <option value="IL">IL</option>
                      <option value="IN">IN</option>
                      <option value="KS">KS</option>
                      <option value="KY">KY</option>
                      <option value="LA">LA</option>
                      <option value="MA">MA</option>
                      <option value="MD">MD</option>
                      <option value="ME">ME</option>
                      <option value="MI">MI</option>
                      <option value="MN">MN</option>
                      <option value="MO">MO</option>
                      <option value="MS">MS</option>
                      <option value="MT">MT</option>
                      <option value="NC">NC</option>
                      <option value="ND">ND</option>
                      <option value="NE">NE</option>
                      <option value="NH">NH</option>
                      <option value="NJ">NJ</option>
                      <option value="NM">NM</option>
                      <option value="NV">NV</option>
                      <option value="NY">NY</option>
                      <option value="OH">OH</option>
                      <option value="OK">OK</option>
                      <option value="OR">OR</option>
                      <option value="PA">PA</option>
                      <option value="RI">RI</option>
                      <option value="SC">SC</option>
                      <option value="SD">SD</option>
                      <option value="TN">TN</option>
                      <option value="TX">TX</option>
                      <option value="UT">UT</option>
                      <option value="VA">VA</option>
                      <option value="VT">VT</option>
                      <option value="WA">WA</option>
                      <option value="WI">WI</option>
                      <option value="WV">WV</option>
                      <option value="WY">WY</option>
                    </select>

                    <br/>                        
                    <label htmlFor="date">Birth Date</label>
                    <input 
                      className="input form-control"
                      defaultValue={initialValues.birthDate}
                      placeholder="Birth Date"
                      type="date"
                      onChange={handleChange}
                      {...register("birthDate")}
                    />
                    <p className="requiredColor"><label className="requiredColor">*</label> = required field</p>

                    <p>To upload a Profile picture:</p>
                    <ol>
                      <li>Click the Upload Profile Photo button.</li>
                      <li>Click Browse to select photo and then click Open button. (Alternatively, drag/drop photo into pop-up window.)</li>
                      <li>Crop the photo, if necessary, OR click Skip.</li>
                      <li>Photo is now captured and will be saved as part of your profile after clicking Submit button.</li>
                    </ol>
                    <div className="form-group">
                      <div>
                        <br/>
                        <Button type="button" variant="success" onClick={showWidget}>Upload Profile Photo</Button>
                      </div>
                      <br/>
                    </div>
                  </Col>
                </Row>
              <Row>
            <Col md="auto">
              <br/>
              <br/>
              <Button as="input" type="submit" variant="success" value="Submit Profile" />
            </Col>
          </Row>
        </form>
        <br/>
      </Col>
    </Row>
   </Container>
  </Container>  
  );
}

export default Profile;