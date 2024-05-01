require('dotenv').config();

// starter code to create graphql objects from an array of JSON assets

exports.sourceNodes = async ({ actions, createContentDigest, createNodeId }) => {
  const { createNode } = actions;

  // YOUR CODE HERE TO FETCH YOUR DATA, SAY FROM A REST API
  const username = process.env.WORDPRESS_AUTH_USERNAME;
  const appPassword = process.env.WORDPRESS_AUTH_PASSWORD;
  const postsUrl = `${process.env.WORDPRESS_API_URL}posts`;
  const tagsUrl = `${process.env.WORDPRESS_API_URL}tags`;
  const categoriesUrl = `${process.env.WORDPRESS_API_URL}categories`;
  const auth = 'Basic ' + Buffer.from(`${username}:${appPassword}`).toString('base64');

  try {
    // Get all the tags
    let response = await fetch(tagsUrl, {
      headers: {
        Authorization: auth,
        'Content-Type': 'application/json',
      },
    });
    const tags = await response.json();

    // Get all the categories
    response = await fetch(categoriesUrl, {
      headers: {
        Authorization: auth,
        'Content-Type': 'application/json',
      },
    });
    const categories = await response.json();

    response = await fetch(postsUrl, {
      headers: {
        Authorization: auth,
        'Content-Type': 'application/json',
      },
    });
    const posts = await response.json();

    // Now get the images for each post and add them to the post object
    const promiseList = posts.map(async post => {
      const mediaUrl = `${process.env.WORDPRESS_API_URL}media?parent=${post.id}`;
      const resp = await fetch(mediaUrl, {
        headers: {
          Authorization: auth,
          'Content-Type': 'application/json',
        },
      });
      const media = await resp.json();
      const images = media.map(image => ({
        url: image.source_url,
        altText: image.alt_text,
        caption: image.caption.rendered,
      }));
      // console.log(images);
      return {...post, images: images}
    });

    const postList = await Promise.all(promiseList);
    console.log(postList.length, 'posts found');

    // loop through data and create Gatsby nodes
    postList.forEach(post =>
      // console.log('post', post.id) ||
      createNode({
        ...post,
        postId: post.id,
        id: createNodeId(`post-${post.id}`), // pass a unique identifier here: [movie.id] for example
        parent: null,
        children: [],
        internal: {
          type: 'Posts', // name of collection in graphql schema
          contentDigest: createContentDigest(post),
        },
      })
    );
    tags.forEach(tag =>
      // console.log('tag', tag.id) ||
      createNode({
        ...tag,
        tagId: tag.id,
        id: createNodeId(`tag-${tag.id}`), // pass a unique identifier here: [movie.id] for example
        parent: null,
        children: [],
        internal: {
          type: 'Tags', // name of collection in graphql schema
          contentDigest: createContentDigest(tag),
        },
      })
    );
    categories.forEach(category =>
      // console.log('cat', category.id) ||
      createNode({
        ...category,
        categoryId: category.id,
        id: createNodeId(`category-${category.id}`), // pass a unique identifier here: [movie.id] for example
        parent: null,
        children: [],
        internal: {
          type: 'Categories', // name of collection in graphql schema
          contentDigest: createContentDigest(category),
        },
      })
    );
  } catch (error) {
    console.error(error);
  }
};
