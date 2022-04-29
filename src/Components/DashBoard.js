import React, { Component } from 'react'
import axios from 'axios';
export default class getallcomment extends Component {

  state = {
    comments: []
  }

  componentDidMount() {
    axios.get(`http://localhost:4000/comment/`)
      .then(res => {
        const comments = res.data;
        this.setState({ comments });
      })
  }

  render() {
    return (

      <div class="getreview">
        <h2>Reviews</h2>
      <ul>
        <div class="table1">
        <table >
        <tr>
                        <th>Name</th>
                        <th>Review</th>
                        <th>Stars</th>
                      </tr>
        </table>
        </div>
        {
          this.state.comments
            .map(comments =>
              <table >
                      <tr>
                        {/* <th>Name</th>
                        <th>Review</th>
                        <th>Stars</th> */}
                      </tr>
                      <tr>
                        <td key={comments.id}>{comments.name}</td>
                        <td key={comments.id}>{comments.review}</td>
                        <td key={comments.id}>{comments.stars}</td>
                      </tr>
                      {/* <tr>
                        <td key={comments.id}>{comments.review}</td>
                       
                      </tr>
                      <tr>
                        <td key={comments.id}>{comments.stars}</td>
                       
                      </tr> */}
                  </table>
              // <li key={comments.id}>{comments.review}**{comments.name}</li>
            )
        }
      </ul>
      </div>
    )
  }
}
