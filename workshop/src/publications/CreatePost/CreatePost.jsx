import React from 'react';
import Posts from '../Posts/Posts';
import postService from '../../services/post-service';
import './CreatePost.css';

const CreatePost = ({ history }) => {
  const textareaRef = React.useRef();
  
  const createPost = React.useCallback(() => {
    const value = textareaRef.current.value;
    postService.create({ description: value }).then(() => {
      history.push('/');
    });
  }, [textareaRef, history]);

  return <div className="CreatePost">
    <form>
      <textarea ref={textareaRef}></textarea>
      <button type="button" onClick={createPost}>Create Story</button>
    </form>
    
  </div>;
}

export default CreatePost;