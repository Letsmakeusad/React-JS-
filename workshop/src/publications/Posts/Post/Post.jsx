import React from 'react';
import './Post.css';
import Link from '../../../shared/Link/Link';


function Post({imageUrl, imageAlt, children, author, authorId, userId, postId}) {
  

  


  if(authorId === userId)
     {
      return <div className="Post">
      <img src={imageUrl} alt={imageAlt} />
      <p className="description">{children}</p>
      <div>
        <span>
          <small>Author:</small>
          {author}
        </span>
      </div>
       <div><Link to={`/edit-post/${postId}`}><button>Edit</button></Link></div>
        
      </div>;
      }
   else{
     
     return <div className="Post">
     <img src={imageUrl} alt={imageAlt} />
     <p className="description">{children}</p>
     <div>
       <span>
         <small>Author:</small>
         {author}
       </span>
       </div>    
     </div>;
   }
};

export default Post;