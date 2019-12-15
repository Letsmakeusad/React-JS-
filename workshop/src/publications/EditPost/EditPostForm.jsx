import React from 'react';
import Posts from '../Posts/Posts';
import postService from '../../services/post-service';
import './EditPostForm.css';
import Link from '../../shared/Link/Link';

const EditPostForm = ({id, description, children, history}) => {
  const textareaRef = React.useRef();
  console.log(id);
  console.log(description);
 
  const updatePost = React.useCallback(() => {
    const value = textareaRef.current.value;
    postService.update({id: id, description: value});
  }, [textareaRef]);

  const deletePost = React.useCallback(() => {
    const value = textareaRef.current.value;
    postService.delete({id: id, description: value});
  }, [textareaRef]);
   
  return <div className="CreatePost">
    <form>
      <textarea ref={textareaRef}>{description}</textarea>
      <p className="description">{children}</p>
    <Link to="/"><button type="button" renderAs="button" onClick={updatePost}><span>Update Story</span></button></Link>
    <button type="button" onClick={deletePost}>Delete Story</button>
    <Link to="/">
         <button renderAs="button">
         <span>Login</span>
          </button>
          </Link>
    </form>
    
  </div>;
}

export default EditPostForm;