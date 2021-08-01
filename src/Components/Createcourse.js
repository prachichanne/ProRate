import React from 'react';
import ReactDOM from 'react-dom';

class Createcourse  extends React.Component{
    constructor(props){
        super(props);
        this.state={
            course:{
            Id:'',
            cName:'',
            durationOfCourse:'',
            syllabusDetail:''
            }
        };
    }
    changeHandler=(e)=>{
        this.setState{{Id:e.target.value}};
    }
    onCreateCourse=()=>{
        console.log(this.state.Id)
    }

    render(){
        return(
            <>
                <div className="abc">
                <h2>Create new course.....</h2>
                <form>
                    <p>
                    <label>
                        Course Id :<input type ="text" name="Id" value={this.state.course.Id} onchange={this.changeHandler}></input>
                    </label>
                    </p>
                    <p>
                    <label>
                        Course name :<input type ="text" name="cName" value={this.state.course.cName} onchange={this.changeHandler}></input>
                    </label>
                    </p>
                    <p>
                    <label>
                        Duration of course :<input type ="text" name="durationOfCourse" value={this.state.course.durationOfCourse} onchange={this.changeHandler}></input>
                    </label>
                    </p>
                    <p>
                    <label>
                        Syllabus Detail :<input type ="text" name="syllabusDetail" value={this.state.course.syllabusDetail} onchange={this.changeHandler}></input>
                    </label>
                    </p>
                </form>
                <button onClick={this.onCreateCourse}>Create</button>
                </div>
            </>
        )
}

const element=<CourseComponenet></CourseComponenet>

ReactDOM.render(element,document.getElementById("root"));