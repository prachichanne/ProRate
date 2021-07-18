import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import "../MyCSS.css";

const FormInst = (props) => {
  return (
    <div className="form1">
      <Form class="instructorform">
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
              />
            </div>
            <div class="col">
              <input
                type="text"
                class="form-control"
                placeholder="Last name"
                aria-label="Last name"
              />
            </div>
          </div>
        </FormGroup>
        <br></br>
        <FormGroup>
          <Label for="exampleNo">Phone Number</Label>
          <Input
            type="tel"
            name="phoneno"
            id="exampleName"
            placeholder="Enter Your Phone Number"
          />
        </FormGroup>
        <br></br>
        <FormGroup>
          Gender :{" "}
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio1"
              value="option1"
            />
            <label class="form-check-label" for="inlineRadio1">
              {" "}
              Male
            </label>
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio2"
              value="option2"
            />
            <label class="form-check-label" for="inlineRadio2">
              Female
            </label>
          </div>
        </FormGroup>
        <br></br>
        <FormGroup>
          <Label for="exampleDate">Date</Label>
          <Input
            type="date"
            name="date"
            id="exampleDate"
            placeholder="date placeholder"
          />
        </FormGroup>
        <br></br>
        <FormGroup>
          <Label for="exampleNo">Age</Label>
          <Input
            type="Number"
            name="ageno"
            id="Age"
            placeholder="Enter Your Age"
          />
        </FormGroup>
        <br></br>
        <FormGroup>
          <Label for="exampleAddress">Address</Label>
          <Input
            type="text"
            name="address"
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
            <input type="text" class="form-control" id="inputCity" />
          </div>
          <div class="col-md-4">
            <label for="inputState" class="form-label">
              State
            </label>
            <select id="inputState" class="form-select">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>
          <div class="col-md-2">
            <label for="inputZip" class="form-label">
              Pincode
            </label>
            <input type="tel" class="form-control" id="inputZip" />
          </div>
        </FormGroup>
        <hr></hr>
        <FormGroup>
          <h2>Account Details</h2>
          <Label for="exampleEmail">Email</Label>
          <Input
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="Enter Your Email ID"
          />
        </FormGroup>
        <br></br>
        <FormGroup>
          <Label for="exampleus">Username</Label>
          <Input
            type="text"
            name="Username"
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
            id="examplePassword"
            placeholder="Enter Your Password"
          />
        </FormGroup>
        <br></br>
        <FormGroup>
          <Label for="examplePassword">Confirm Password</Label>
          <Input
            type="password"
            name="password"
            id="examplePassword"
            placeholder="Enter Your Password again"
          />
        </FormGroup>
        <br></br>
        <hr></hr>
        <FormGroup>
          <h2>Education Details</h2>
          <br></br>
          <h5>Secondary School Details</h5>
          <Label for="exampleSelect">10th Board</Label>
          <Input type="select" name="select" id="exampleSelect">
            <option>SSC (State Board)</option>
            <option>CBSE</option>
            <option>ICSC</option>
          </Input>
        </FormGroup>
        <br></br>
        <FormGroup>
          <Label for="exampleNo">10th Percentage</Label>
          <Input
            type="number"
            name="tenthpercentage"
            id="per"
            placeholder="Enter Your 10th Percentage"
          />
        </FormGroup>
        <br></br>
        <FormGroup>
          <h5>Higher Secondary School Details</h5>
          <Label for="exampleSelect">12th Stream</Label>
          <Input type="select" name="select" id="exampleSelect">
            <option>Science</option>
            <option>Commerce</option>
            <option>Arts</option>
          </Input>
        </FormGroup>
        <br></br>
        <FormGroup>
          <Label for="exampleNo">12th Percentage</Label>
          <Input
            type="number"
            name="twelvepercentage"
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
            name="Last Name"
            id="exampleName"
            placeholder="Enter Your Course Name"
          />
        </FormGroup>
        <br></br>
        <FormGroup>
          <Label for="exampleNo">Course CGPA</Label>
          <Input
            type="number"
            name="twelvepercentage"
            id="per"
            placeholder="Enter Your CGPA"
          />
        </FormGroup>
        <br></br>
        {/*    <FormGroup>
             <Label for="exampleText">Text Area</Label>
             <Input type="textarea" name="text" id="exampleText" />
            </FormGroup> */}
        <FormGroup>
          <Label for="exampleFile">Final Semester Result</Label>
          <br></br>
          <Input type="file" name="file" id="exampleFile" />
          <FormText color="muted">
            Please Upload The File in PDF Format
          </FormText>
        </FormGroup>
        <br></br>
        <Button>Make Me Instructor</Button>
      </Form>
    </div>
  );
};

export default FormInst;
