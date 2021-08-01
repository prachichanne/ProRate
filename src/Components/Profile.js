import React from 'react'
 

const Profile = ()=>{
    return(
        <div>
            <div>
                <div>
                    <img style={{width:"160px",height:"160px",borderRadius:"80px"}}
                    src="https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg"
                    />
                </div>
                <div>
                    <h4>Ramesh Varma</h4>
                    <h4>rameshv@gamil.com</h4>
                    <h4>10th marks:80%</h4>
                    <h4>12th marks:70%</h4>
                    <h4>Graduation cgpa:8.6</h4>
                    <h4>Address:Pune- 412039</h4>
                </div>
                    <Button>Create Course</Button>
            </div>
        </div>
    )
}

export default Profile