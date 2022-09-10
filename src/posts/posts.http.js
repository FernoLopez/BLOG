const postControllers = require("./posts.controllers");

const getAll = (req, res) => {
  const data = postControllers.getAllPosts();
  res.status(200).json({ items: data.length, posts: data });
};

const getById = (req, res) => {
  const id = req.params.id;
  const data = postControllers.getPostById(id);

  if (data) {
    res.status(200).json(data);
  } else {
    res.status(404).json({ message: `El post con el id ${id} no existe` });
  }
};

const create = (req, res) => {
  const data = req.body;
  if (!data) {
    return res.status(400).json({ message: "Missing Data" });
  } else if (
        !data.id|| //obligatorio y unico
        !data.title ||
        !data.content ||
        !data.header_image ||
        !data.user_id ||//Aqui hara referencia al usuario de tu userDB
        !data.published
  ) {
    return res.status(400).json({
      message: "All fields must be completed",
      fields: {
        id: "uuid",
	      title: "string",
	      content:"string",
	      header_image: "url_to_img",
	      user_id: "uuid",//Aqui hara referencia al usuario de tu userDB
	      published: true
      },
    });
  } else {
    const response = postControllers.createPost(data);
    return res
      .status(201)
      .json({
        message: `Post created successfully with id: ${response.id}`,
        post: response,
      });
  }
  }

const remove = (req, res) => {
  const id = req.params.id;
  const data = postControllers.deletePost(id);

  if (data) {
    return res.status(204).json({ message: `Deleted post with id: ${id}` });
  } else {
    return res.status(400).json({ message: "Invalid ID" });
  }
};

const edit = (req, res) => {
  const id = req.params.id;
  const data = req.body;
  if (!Object.keys(data).length) {
    return res.status(400).json({ message: "Missing Data" });
  } else if (
        !data.title,
        !data.content,
        !data.header_image,
        !data.published
  ) {
    return res.status(400).json({
      message: "All fields must be completed",
      fields: {
        title: "string",
        content:"string",
        header_image: "url_to_img",
        published: true
      },
    });
  } else {
    const response = postControllers.editPost(id, data)
    return res.status(200).json({
      message: 'Post edited succesfully',
      post: response
    })
  }
};

const editUserPost = (req, res) => {
  const id = req.user.id;
  const data = req.body;
  if (!Object.keys(data).length) {
    return res.status(400).json({ message: "Missing Data" });
  } else if (
        !data.title,
        !data.content,
        !data.header_image,
        !data.published
  ) {
    return res.status(400).json({
      message: "All fields must be completed",
      fields: {
        title: "string",
        content:"string",
        header_image: "url_to_img",
        published: true
      },
    });
  } else {
    const response = postControllers.editPost(id, data)
    return res.status(200).json({
      message: 'Post edited succesfully',
      post: response
    })
  }
};

const getUserPostById = (req, res) => {
  const id = req.user.id;
  const data = postControllers.getPostById(id);

  if (data) {
    res.status(200).json(data);
  } else {
    res.status(404).json({ message: `El post con el id ${id} no existe` });
  }
};

const removeUserPost = (req, res) => {
  const id = req.user.id;
  const data = postControllers.deletePost(id);

  if (data) {
    return res.status(204).json({ message: `Deleted post with id: ${id}` });
  } else {
    return res.status(400).json({ message: "Invalid ID" });
  }
};

const getMyPost = (req, res) => {
        const userID = req.user.id
        const data = postControllers.getUserPost(userID)
        return res.status(200).json(data)
} 

module.exports = {
  getAll,
  getById,
  create,
  remove,
  edit,
  editUserPost,
  getMyPost,
  removeUserPost,
  getUserPostById
};