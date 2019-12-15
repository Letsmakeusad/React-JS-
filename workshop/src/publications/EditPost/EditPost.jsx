import React from 'react';
import service from '../../services/post-service';
import userService from '../../services/user-service';
import EditPostForm from './EditPostForm';

 

export default class EditPost extends React.Component {
  
  state = {
    post: null,
    user: null,
  };
 
  componentDidMount() {
    
    const id = this.props.match.params.id; 
   
    userService.getUser().then(user => {
      this.setState({user});
       
    })

    service.load(id).then(post => {
      this.setState({post});
      console.log(this.state);
    });
  }

  render() {
     const {post} = this.state;
     
 
     if(post){
      return <div>
      <div className="Post">
      {post.map((post)  =>      
        <EditPostForm id={post._id} description={post.description}></EditPostForm>
      )
      }
 
    </div>
      <a href="/posts">Back</a>
    </div>;
     }
    else{
      return <div> KEK</div>
    }
  }
}