const EleventyFetch = require('@11ty/eleventy-fetch');
require('dotenv').config();

// starter code to create graphql objects from an array of JSON assets

exports.sourceNodes = async ({ actions, createContentDigest, createNodeId }) => {
  const { createNode } = actions;

  // YOUR CODE HERE TO FETCH YOUR DATA, SAY FROM A REST API
  const apiKey = process.env.NPS_API_KEY;
  const params = new URLSearchParams({ limit: 1000, start: 0 });
  const url = `https://developer.nps.gov/api/v1/parks?${params.toString()}`;

  /* This returns a promise */
  const parkList = await EleventyFetch(url, {
    duration: '1d', // Save for 1 day. They probably don't make a new park more frequently than that!
    type: 'json', // We’ll parse JSON for you
    directory: '.eleventy_cache',
    fetchOptions: {
      headers: {
        // Pretend to be the Safari browser from macOS Mojave 10.14.6
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1.2 Safari/605.1.15',
        'X-Api-Key': apiKey,
      },
    },
  });

  // loop through data and create Gatsby nodes

  parkList.data.forEach(park =>
    createNode({
      ...park,
      id: createNodeId(park.parkCode), // pass a unique identifier here: [movie.id] for example
      parent: null,
      children: [],
      internal: {
        type: 'Parks', // name of collection in graphql schema
        contentDigest: createContentDigest(park),
      },
    })
  );
};
