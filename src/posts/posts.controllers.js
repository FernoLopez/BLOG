const uuid = require('uuid');
const userID = require('../users/users.controllers')
/* const crypt = require('../utils/crypt') */


const postDB = [
    {
        "id": "26d2732c-60dd-4caf-9746-21fc980e4021",
        "title": "Software testers",
        "content":"Report: 97% of software testing pros are using automation",
        "header_image": "url_to_img",
        "user_id": "74cd6011-7e76-4d6d-b25b-1d6e4182ec2f",//Aqui hara referencia al usuario de tu userDB
        "published": true
    }
]

let nextId = 0

const getAllPosts = () => {
    return postDB
    //? select * from users;
}

const getPostById = (userID) => {
    const data = postDB.filter(post => post.user_id === userID)
    return data[0]
    //? select * from users where id = ${id};
}

const createPost = (data) => {
    const newPost = {
        id: uuid.v4(), //obligatorio y unico
        title: data.title,
        content: data.content,
        header_image: data.header_image,
        user_id: userID.user_id,//Aqui hara referencia al usuario de tu userDB
        published: true
    }
    postDB.push(newPost);
    nextId++

    return newPost;
}

const editPost = (id, data) => {
    const index = postDB.findIndex((post) => post.id === id);
    if (index !== -1) {
      postDB[index] = {
        id: id,
        title: data.title,
        content: data.content,
        header_image: data.header_image,
        user_id: postDB[index].user_id,//Aqui hara referencia al usuario de tu userDB
        published: true
      };
      return postDB[index];
    } else {
      return createPost(data);
    }
    }

    const deletePost = (id) => {
        const index = postDB.findIndex(post => post.user_id === id)
        if (index !== -1) {
          postDB.splice(index, 1)
          return true
        } else {
          return false
        } 
      }

      const getUserPost = (userID) =>  {
        const data = postDB.filter(post => post.user_id === userID)
        return data
      }

      module.exports = {
        createPost,
        getAllPosts,
        getPostById,
        editPost,
        deletePost,
        getUserPost
      }