import { func } from "prop-types";

const postService = {
  load: function (id, limit) {
    return fetch(`http://localhost:9999/api/origami${id ? `/${id}` : ''}${limit ? `?limit=${limit}` : ''}`).then(res => res.json());
  },
  create: function(data) {
    return fetch(`http://localhost:9999/api/origami/`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data),
      credentials: 'include'
    }).then(res => res.json());
  },
  delete: function(data){
    return fetch(`http://localhost:9999/api/origami/${data.id}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data),
      credentials: 'include'
    }).then(res => res.json());
  },
  update: function(data) {
    console.log(data);
    return fetch(`http://localhost:9999/api/origami/${data.id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data),
      credentials: 'include'
    }).then(res => res.json());
  },
 
};

export default postService;