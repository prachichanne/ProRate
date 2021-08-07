import React, { useState } from 'react';
import axios from 'axios';
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import "../MyCSS.css";
import FilesUpload from "./FileUpload"

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
  const [cgpa, setCgpa] = useState();
  // const [file, setFile] = useState('');


 

  function handleSubmit(e){
    e.preventDefault();
	
    // const postData2 ={
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
     //file,
    };

   


    axios.post("http://localhost:8082/register",postData)
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
    
   

    alert("You have been registered successfully !!")
    
  }

return (

     <div className="form1">
       <h2 style={{textAlign:"center"}}>Instructor Registration</h2>
      <Form class="instructorform" onSubmit={handleSubmit}>
        {/* 
        <FormGroup>
        <div class="input-group">
        <span class="input-group-text">First and last name</span>
        <input type="text" aria-label="First name" class="form-control"/>
        <input type="text" aria-label="Last name" class="form-control"/>
        </div>
      </FormGroup> */}
        <br></br>
        <FormGroup>
          <h2>Personal Details</h2>

          <div class="row">
            <div class="col">
              <input
                type="text"
                class="form-control"
                placeholder="First name"
                aria-label="First name"
                name="firstname"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
              />
            </div>
            <div class="col">
              <input
                type="text"
                class="form-control"
                placeholder="Last name"
                aria-label="Last name"
                name="lastname"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
              />
            </div>
          </div>
        </FormGroup>
        <br></br>
        <FormGroup>
          <Label for="exampleNo">Phone Number</Label>
          <br></br>
          
          <Input
            type="tel"
            id="exampleName"
            placeholder="Enter Your Phone Number"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </FormGroup>
        <br></br>
        <FormGroup>
          Gender
          <div class="form-check form-check-inline">
            <input
            style={{marginLeft:"0.5px"}}
              class="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="Male"
              value="Male"
              onChange={(e) => setGender(e.target.value)}

            />
            <label class="form-check-label" for="inlineRadio1">
              Male
            </label>
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="Female"
              value="Female"
              onChange={(e) => setGender(e.target.value)}

            />
            <label class="form-check-label" for="inlineRadio2">
              Female
            </label>
          </div>
        </FormGroup>
        <br></br>
        <FormGroup>
          <Label for="exampleDate">Date Of Birth</Label>
          <Input
            type="date"
            name="date"
            id="exampleDate"
            placeholder="date placeholder"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
        </FormGroup>
        <br></br>
        <FormGroup>
          <Label for="exampleNo">Age</Label>
          <Input
            type="Number"
            name="age"
            id="Age"
            placeholder="Enter Your Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}

          />
        </FormGroup>
        <br></br>
        <FormGroup>
          <Label for="exampleAddress">Address</Label>
          <Input
            type="text"
            name="Address"
            value={Address}
            onChange={(e) => setAddress(e.target.value)}
            id="exampleAddress"
            placeholder="1234 Main St"
          />
        </FormGroup>
        <br></br>
        <FormGroup>
          <div class="col-md-6">
            <label for="inputCity" class="form-label">
              City
            </label>
            <input type="text" class="form-control" id="inputCity" name="city" value={city}   onChange={(e) => setCity(e.target.value)} />
          </div>
          <br></br>
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
           <br></br>
          <div class="col-md-2">
            <label for="inputZip" class="form-label">
              Pincode
            </label>
            <input type="text" class="form-control" id="inputZip" name="pincode" value={pincode}   onChange={(e) => setPincode(e.target.value[6])} />
          </div>
        </FormGroup>
        <hr></hr>
        <FormGroup>
          <h2>Account Details</h2>
          <Label for="exampleEmail">Email</Label>
          <Input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="exampleEmail"
            placeholder="Enter Your Email ID"
          />
        </FormGroup>
        <br></br>
        <FormGroup>
          <Label for="exampleus">Username</Label>
          <Input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            id="exampleName"
            placeholder="Enter Your Username"
          />
        </FormGroup>
        <br></br>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="examplePassword"
            placeholder="Enter Your Password"
          />
        </FormGroup>
        <br></br>
        {/* <FormGroup>
          <Label for="examplePassword">Confirm Password</Label>
          <Input
            type="password"
            name="password"
            id="examplePassword"
            placeholder="Enter Your Password again"
          />
        </FormGroup> */}
        <br></br>
        <hr></hr>
        <FormGroup>
          <h2>Education Details</h2>
          <br></br>
          <h5>Secondary School Details</h5>
          <Label for="exampleSelect">10th Board</Label>
          <div>
          <select  id="board_10" class="form-select" name="board_10" value={board_10}   onChange={(e) => setBoard_10(e.target.value)}>
          <option selected>Choose...</option>
            <option value="SSC">SSC (State Board)</option>
            <option value="CBSE">CBSE</option>
            <option value="ICSE">ICSC</option>
          </select>
          </div>
        </FormGroup>
        <br></br>
        <FormGroup>
          <Label for="exampleNo">10th Percentage</Label>
          <Input
            type="number"
            name="percent_10"
            value={percent_10}
            onChange={(e) => setPercent_10(e.target.value)}
            id="per"
            placeholder="Enter Your 10th Percentage"
          />
        </FormGroup>
        <br></br>
        <FormGroup>
          <h5>Higher Secondary School Details</h5>
          <Label for="exampleSelect">12th Stream</Label>
          <div>
          <select  id="stream_12" class="form-select" name="stream_12" value={stream_12}   onChange={(e) => setStream_12(e.target.value)}>
          <option selected>Choose...</option>
            <option value="Science">Science</option>
            <option value="Commerce">Commerce</option>
            <option value="Arts">Arts</option>
          </select>
          </div>
        </FormGroup>
        <br></br>
        <FormGroup>
          <Label for="exampleNo">12th Percentage</Label>
          <Input
            type="number"
            name="percent_12"
            value={percent_12}
            onChange={(e) => setPercent_12(e.target.value)}
            id="per"
            placeholder="Enter Your 12th Percentage"
          />
        </FormGroup>
        <br></br>
        <FormGroup>
          <h5>Graduation Details</h5>
          <Label for="exampleName">Course Name</Label>
          <Input
            type="text"
            name="graduation"
            value={graduation}
            onChange={(e) => setGraduation(e.target.value)}
            id="exampleName"
            placeholder="Enter Your Course Name"
          />
        </FormGroup>
        <br></br>
        <FormGroup>
          <Label for="exampleNo">Course CGPA</Label>
          <Input
            type="number"
            name="cgpa"
            value={cgpa}
            onChange={(e) => setCgpa(e.target.value)}
            id="per"
            placeholder="Enter Your CGPA"
          />
        </FormGroup>
        <br></br>

        
{/*            
         <FormGroup>
          <Label for="exampleFile">Final Semester Result</Label>
          <br></br>
          <Input type="file" name="file" id="exampleFile"  onChange={(e) => setFile(e.target.value[0])} />
          <FormText color="muted">
            Please Upload The File in PDF Format            
          </FormText>       
        </FormGroup>  */}

        {/* <br></br>
        <Button type="submit" style={{backgroundColor:"green"}} >Make Me Instructor</Button>
        <div></div> */}

      <FilesUpload />
      </Form>
      
     </div>
   
  );
};

 export default InstructorForm;