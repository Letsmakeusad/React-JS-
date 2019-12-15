import React from 'react';
import Post from '../Posts/Post/Post';
import service from '../../services/post-service';
import userService from '../../services/user-service';

 


export default class Detail extends React.Component {
  
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
      
    });
  }

 
  render() {
     const {post} = this.state;
     const {user} = this.state;
     
     if(post && user){
      return <div>
      <div className="Post">
      {post.map((post)  =>
          <Post key={post._id} imageUrl="/logo192.png" imageAlt="alt" author={post.author.username} authorId={post.author._id} userId={user._id} postId={post._id}>{post.description}</Post>
      )
      }
 
    </div>
      <a href="/posts">Back</a>
    </div>;
     }
     else{
       return <div className="not-found"> Log-in to read the full post :) <img id="logo" src="/rip.png" alt="my-app-logo" /></div>
     }
  }
}