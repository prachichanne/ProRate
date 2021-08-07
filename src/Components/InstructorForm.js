import React, { useState } from 'react';
import axios from 'axios';
import { Button, Label, Input, Col, Row, FormText } from "reactstrap";
import "../MyCSS.css";
import { Control, LocalForm, Errors } from 'react-redux-form';
import FilesUpload from "./FileUpload"

// const required = (val) => val && val.length;
// const maxLength = (len) => (val) => !(val) || (val.length <= len);
// const minLength = (len) => (val) => (val) && (val.length >= len);
// const isNumber =(val) => isNaN(Number(val));
// const valiEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,8}$/i.test(val);


function InstructorForm() {

  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [phone, setPhone] = useState('');
  const [gender, setGender] = useState('');
  const [dob, setDob] = useState('');
  const [age, setAge] = useState('');
  const [Address, setAddress] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [pincode, setPincode] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [board_10, setBoard_10] = useState('');
  const [percent_10, setPercent_10] = useState('');
  const [stream_12, setStream_12] = useState('');
  const [percent_12, setPercent_12] = useState('');
  const [graduation, setGraduation] = useState('');
  const [cgpa, setCgpa] = useState('');
const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val) && (val.length >= len);
const isNumber =(val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,8}$/i.test(val);

  //const [file, setFile] = useState('');

  function handleSubmit(values){
    // e.preventDefault();

    // const postData2 = {
    //   file,
    // }
   const postData = {
      firstname,
      lastname,
      phone,
      gender,
      dob,
      age,
      Address,
      state,
      city,
      pincode,
      email,
      username,
      password,
      board_10,
      percent_10,
      stream_12,
      percent_12,
      graduation,
      cgpa,
     // file,
    };

<<<<<<< HEAD
   


    axios.post("http://localhost:8082/register",postData)
=======
    axios.post("http://localhost:8082/tutor/create",postData)
>>>>>>> 00f811feeb7d264bbaec73a1a21462b5c0aedd70
    .then(response => {
        console.log(response);
    });

    // axios.post("http://localhost:8082/tutor/upload",postData2)
    // .then(response => {
    //     console.log(response);
    // });

    setFirstname("");
    setLastname("");
    setPhone("");
    setGender("");
    setDob("");
    setAge("");
    setAddress("");
    setState("");
    setCity("");
    setPincode("");
    setEmail("");
    setUsername("");
    setPassword("");
    setBoard_10("");
    setPercent_10("");
    setStream_12("");
    setPercent_12("");
    setGraduation("");
    setCgpa("");
    // setFile("");
   

<<<<<<< HEAD
    alert("You have been registered successfully !!")
    
=======
    alert("You have been registered as Instructor successfully !!")
>>>>>>> 00f811feeb7d264bbaec73a1a21462b5c0aedd70
  }

return (

     <div className="form1">
      <LocalForm class="instructorform" onSubmit={(values) => this.handleSubmit(values)}>
       
        <br></br>
        <Row class="form-group">
          <h2>Personal Details</h2>
          <div class="row">
            <div class="col">
              <Control.text
                model=".firstname"
                id="firstname"
                class="form-control"
                placeholder="First name"
                aria-label="First name"
                name="firstname"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
                validators={{
                  required, minLength: minLength(3), maxLength: maxLength(15)
                }}
              />
              <Errors
                  class="text-danger"
                  model=".firstname"
                  show="touched"
                  messages={{
                    required: 'Required Field!',
                    minLength: ' Must be greater than 2 characters',
                    maxLength: 'Must be 15 characters or less'
                  }} 
              />
            </div>
            <div class="col">
              <Control.text
                model=".lastname"
                id="lastname"
                class="form-control"
                placeholder="Last name"
                aria-label="Last name"
                name="lastname"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
                validators={{
                  required, minLength: minLength(3), maxLength: maxLength(15)
                }}
              />
                  <Errors
                  class="text-danger"
                  model=".lastname"
                  show="touched"
                  messages={{
                    required: 'Required Field!',
                    minLength: ' Must be greater than 2 characters',
                    maxLength: 'Must be 15 characters or less'
                  }} 
              />
            </div>
          </div>
        </Row>
        <br></br>
        <Row class="form-group">
          <Label for="exampleNo">Phone Number</Label>
          <Control.text
            model=".examplePhoneNumber"
            class="form-control"
            id="examplePhoneNumber"
            placeholder="Enter Your Phone Number"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            validators={{
              required, minLength: minLength(10), maxLength: maxLength(13), isNumber
            }}
          />
           <Errors
                  class="text-danger"
                  model=".examplePhoneNumber"
                  show="touched"
                  messages={{
                    required: 'Required Field!',
                    minLength: ' Must contain atleast 10 numbers',
                    maxLength: 'Must contain atmost 13 numbers',
                    isNumber: ' Must be a Number'
                  }} 
              />
               </Row>
        <br></br>
        <Row class="form-group">
          Gender :
          <div class="form-check form-check-inline">
            <Control.radio
              class="form-check-input"
              
              name="inlineRadioOptions"
              model=".Male"
              id="Male"
              value="Male"
              onChange={(e) => setGender(e.target.value)}

            />
            <label class="form-check-label" for="inlineRadio1">
              Male
            </label>
          </div>
          <div class="form-check form-check-inline">
            <Control.radio
              class="form-check-input"
              
              name="inlineRadioOptions"
              model=".Female"
              id="Female"
              value="Female"
              onChange={(e) => setGender(e.target.value)}

            />
            <label class="form-check-label" for="inlineRadio2">
              Female
            </label>
          </div>
          </Row>
        <br></br>
        <Row class="form-group">
          <Label for="exampleDate">Date Of Birth</Label>
          <Control.text
            type="date"
            name="date"
            model=".exampleDate"
            class="form-control"
            id="exampleDate"
            placeholder="date placeholder"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            validators={{
              required
            }}
          />
          <Errors
                  class="text-danger"
                  model=".exampleDate"
                  show="touched"
                  messages={{
                    required: 'Required Field!',
                    
                  }} 
              />
              </Row>
        <br></br>
        <Row class="form-group">
          <Label for="exampleNo">Age</Label>
          <Control.text
            type="Number"
            name="age"
            model=".Age"
            class="form-control"
            id="Age"
            placeholder="Enter Your Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            validators={{
              required, minLength: minLength(2), maxLength: maxLength(3), isNumber
            }}

          />
          <Errors
                  class="text-danger"
                  model=".Age"
                  show="touched"
                  messages={{
                    required: 'Required Field!',
                    minLength: ' Must be 2 digit number',
                    maxLength: 'Must not be greater than 3 digit number',
                    isNumber: ' Must be a Number'
                  }} 
              />
              </Row>
        <br></br>
        <Row class="form-group">
          <Label for="exampleAddress">Address</Label>
          <Control.text
            type="text"
            name="Address"
            model=".exampleAddress"
            class="form-control"
            id="exampleAddress"
            placeholder="1234 Main St"
            value={Address}
            onChange={(e) => setAddress(e.target.value)}
          />
               </Row>
        <br></br>
        <Row class="form-group">
          <div class="col-md-6">
            <label for="inputCity" class="form-label">
              City
            </label>
            <Control.text type="text" class="form-control" model=".inputCity" id="inputCity" name="city" value={city}   onChange={(e) => setCity(e.target.value)}
            validators={{
              required
            }}
              />
              <Errors
                  class="text-danger"
                  model=".inputCity"
                  show="touched"
                  messages={{
                    required: 'Required Field!',
                    
                  }} 
              />
          </div>
          <div class="col-md-4">
            <label for="inputState" class="form-label">
              State
            </label>
            <select id="state" class="form-select" name="state" value={state}   onChange={(e) => setState(e.target.value)}>
              <option selected>Choose...</option>
              <option value="Andhra Pradesh">Andhra Pradesh</option>
<option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
<option value="Arunachal Pradesh">Arunachal Pradesh</option>
<option value="Assam">Assam</option>
<option value="Bihar">Bihar</option>
<option value="Chandigarh">Chandigarh</option>
<option value="Chhattisgarh">Chhattisgarh</option>
<option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
<option value="Daman and Diu">Daman and Diu</option>
<option value="Delhi">Delhi</option>
<option value="Lakshadweep">Lakshadweep</option>
<option value="Puducherry">Puducherry</option>
<option value="Goa">Goa</option>
<option value="Gujarat">Gujarat</option>
<option value="Haryana">Haryana</option>
<option value="Himachal Pradesh">Himachal Pradesh</option>
<option value="Jammu and Kashmir">Jammu and Kashmir</option>
<option value="Jharkhand">Jharkhand</option>
<option value="Karnataka">Karnataka</option>
<option value="Kerala">Kerala</option>
<option value="Madhya Pradesh">Madhya Pradesh</option>
<option value="Maharashtra">Maharashtra</option>
<option value="Manipur">Manipur</option>
<option value="Meghalaya">Meghalaya</option>
<option value="Mizoram">Mizoram</option>
<option value="Nagaland">Nagaland</option>
<option value="Odisha">Odisha</option>
<option value="Punjab">Punjab</option>
<option value="Rajasthan">Rajasthan</option>
<option value="Sikkim">Sikkim</option>
<option value="Tamil Nadu">Tamil Nadu</option>
<option value="Telangana">Telangana</option>
<option value="Tripura">Tripura</option>
<option value="Uttar Pradesh">Uttar Pradesh</option>
<option value="Uttarakhand">Uttarakhand</option>
<option value="West Bengal">West Bengal</option>

            </select>
          </div>
          <div class="col-md-2">
            <label for="inputZip" class="form-label">
              Pincode
            </label>
            <Control.text type="text" class="form-control" model=".inputZip" id="inputZip" name="pincode" value={pincode}   onChange={(e) => setPincode(e.target.value[6])}  
            validators={{
              required, minLength: minLength(6), maxLength: maxLength(6), isNumber
            }}

          />
          <Errors
                  class="text-danger"
                  model=".inputZip"
                  show="touched"
                  messages={{
                    required: 'Required Field!',
                    minLength: ' Must contain atleast 6 numbers',
                    maxLength: 'Must contain atmost 6 numbers',
                    isNumber: ' Must be a Number'
                  }} 
              />
          </div>
          </Row>
        <hr></hr>
        <Row class="form-group">
          <h2>Account Details</h2>
          <Label for="exampleEmail">Email</Label>
          <Control.text
            type="email"
            name="email"
            model=".exampleEmail"
            class="form-control"
            id="exampleEmail"
            placeholder="Enter Your Email ID"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            validators={{
              required, validEmail
            }}

          />
          <Errors
                  class="text-danger"
                  model=".exampleEmail"
                  show="touched"
                  messages={{
                    required: 'Required Field!',
                    validEmail:'Invalid Email Address. Please Enter Valid Email address'
                  }} 
              />
               </Row>
        <br></br>
        <Row class="form-group">
          <Label for="exampleus">Username</Label>
          <Control.text
            type="text"
            name="username"
            model=".exampleName"
            class="form-control"
            id="exampleName"
            placeholder="Enter Your Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            validators={{
              required, minLength: minLength(4), maxLength: maxLength(18)
            }}

          />
          <Errors
                  class="text-danger"
                  model=".exampleName"
                  show="touched"
                  messages={{
                    required: 'Required Field!',
                    minLength: ' Must contain atleast 4 characters, numbers or symbols',
                    maxLength: 'Must contain atmost 16 characters, numbers or symbols',
                   
                  }} 
              />
              </Row>
        <br></br>
        <Row class="form-group">
          <Label for="examplePassword">Password</Label>
          <Control.text
            type="password"
            name="password"
            model=".examplePassword"
            class="form-control"
            id="examplePassword"
            placeholder="Enter Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            validators={{
              required, minLength: minLength(4), maxLength: maxLength(18)
            }}

          />
          <Errors
                  class="text-danger"
                  model=".examplePassword"
                  show="touched"
                  messages={{
                    required: 'Required Field!',
                    minLength: ' Must contain atleast 4 characters, numbers or symbols',
                    maxLength: 'Must contain atmost 16 characters, numbers or symbols',
                   
                  }} 
              />
               </Row>
        <br></br>
        {/*         <Row class="form-group">
          <Label for="examplePassword">Confirm Password</Label>
          <Control.text
            type="password"
            name="password"
            model=".examplecPassword"
            class="form-control"
            id="examplecPassword"
            placeholder="Enter Your Password again"
         validators={{
              required, minLength: minLength(4), maxLength: maxLength(18)
            }}

          />
          <Errors
                  class="text-danger"
                  model=".examplecPassword"
                  show="touched"
                  messages={{
                    required: 'Required Field!',
                    minLength: ' Must contain atleast 4 characters, numbers or symbols',
                    maxLength: 'Must contain atmost 16 characters, numbers or symbols',
                   
                  }} 
              />
               </Row> */}
        <br></br>
        <hr></hr>
        <Row class="form-group">
          <h2>Education Details</h2>
          <br></br>
          <h5>Secondary School Details</h5>
          <Label for="exampleSelect">10th Board</Label>
          <div>
          <select  id="board_10" class="form-select" name="board_10" value={board_10}   onChange={(e) => setBoard_10(e.target.value)}>
            <option value="SSC (State Board)">SSC (State Board)</option>
            <option value="CBSE">CBSE</option>
            <option value="ICSE">ICSC</option>
          </select>
          </div>
          </Row>
        <br></br>
        <Row class="form-group">
          <Label for="exampleNo">10th Percentage</Label>
          <Control.text
            type="number"
            name="percent_10"
            model=".pertenth"
            class="form-control"
            id="pertenth"
            placeholder="Enter Your 10th Percentage"
            value={percent_10}
            onChange={(e) => setPercent_10(e.target.value)}
            validators={{
              required, minLength: minLength(2), maxLength: maxLength(3), isNumber
            }}

          />
          <Errors
                  class="text-danger"
                  model=".pertenth"
                  show="touched"
                  messages={{
                    required: 'Required Field!',
                    minLength: ' Must be 2 digit number',
                    maxLength: 'Must be 2 or 3 digit number',
                    isNumber: 'Must be a number'
                  }} 
              />
               </Row>
        <br></br>
        <Row class="form-group">
          <h5>Higher Secondary School Details</h5>
          <Label for="exampleSelect">12th Stream</Label>
          <div>
          <select  id="stream_12" class="form-select" name="stream_12" value={stream_12}   onChange={(e) => setStream_12(e.target.value)}>
            <option value="Science">Science</option>
            <option value="Commerce">Commerce</option>
            <option value="Arts">Arts</option>
          </select>
          </div>
          </Row>
        <br></br>
        <Row class="form-group">
          <Label for="exampleNo">12th Percentage</Label>
          <Control.text
            type="number"
            name="percent_12"
            model=".pertwelve"
            class="form-control"
            id="pertwelve"
            placeholder="Enter Your 12th Percentage"
            value={percent_12}
            onChange={(e) => setPercent_12(e.target.value)}
            validators={{
              required, minLength: minLength(2), maxLength: maxLength(3), isNumber
            }}

          />
          <Errors
                  class="text-danger"
                  model=".pertwelve"
                  show="touched"
                  messages={{
                    required: 'Required Field!',
                    minLength: ' Must be 2 digit number',
                    maxLength: 'Must be 2 or 3 digit number',
                    isNumber: 'Must be a number'
                  }} 
              />
               </Row>
        <br></br>
        <Row class="form-group">
          <h5>Graduation Details</h5>
          <Label for="exampleName">Course Name</Label>
          <Control.text
            type="text"
            name="graduation"
            model=".exampleCourseName"
            class="form-control"
            id="exampleCourseName"
            placeholder="Enter Your Course Name"
            value={graduation}
            onChange={(e) => setGraduation(e.target.value)}
            validators={{
              required
            }}
          />
              <Errors
              class="text-danger"
              model=".exampleCourseName"
              show="touched"
              messages={{
                required: 'Required Field!'
                
              }} 
          />
               </Row>
        <br></br>
        <Row class="form-group">
          <Label for="exampleNo">Course CGPA</Label>
          <Control.text
            type="number"
            name="cgpa"
            model=".percgpa"
            class="form-control"
            id="percgpa"
            placeholder="Enter Your CGPA"
            value={cgpa}
            onChange={(e) => setCgpa(e.target.value)}
            validators={{
              required, minLength: minLength(3), maxLength: maxLength(6), isNumber
            }}

          />
          <Errors
                  class="text-danger"
                  model=".percgpa"
                  show="touched"
                  messages={{
                    required: 'Required Field!',
                    minLength: ' Must be in Point format',
                    maxLength: 'Must not be greater than 6 numbers',
                    isNumber: 'Must be a number'
                  }} 
              />
               </Row>
        <br></br>
           
         {/*         <Row class="form-group">
          <Label for="exampleFile">Final Semester Result</Label>
          <br></br>
          <Control.text type="file" name="file" model=".exampleFile" id="exampleFile" class="form-control" 
           validators={{
              required
            }}

          />
          <Errors
                  class="text-danger"
                  model=".exampleFile"
                  show="touched"
                  messages={{
                    required: 'Required Field!',
                    
                  }} 
              />
          <FormText color="muted">
            Please Upload The File in PDF Format
            
          </FormText>

          
               </Row>  */}

        <br></br>
        <Button type="submit" >Make Me Instructor</Button>
        <div></div>
      </LocalForm>
      
     </div>
   
  );
};

 export default InstructorForm;