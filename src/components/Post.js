import * as React from 'react';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import PropTypes from 'prop-types';
import * as postStyles from './post.module.css';

function findMatches(list, allElements, key = 'id') {
  if (!list || !allElements) return ['None'];
  return list.map(item => allElements.find(el => el[key] === item).name);
}

function Post({ post, tags, categories }) {
  return (
    <section>
      <div className="text-center">
        <p className={postStyles.largeLineHeight}>
          <span
            data-testid="title"
            className="text-xl font-semibold"
            dangerouslySetInnerHTML={{ __html: post.title.rendered }}
          />
        </p>
      </div>
      <ul className={postStyles.tileGrid}>
        {post.images.map((image, index) => (
          <li className={postStyles.postTile} key={image.url}>
            <figure>
              <GatsbyImage data-testid="image" className={postStyles.postImage} image={getImage(post.localImages[index].childImageSharp)} alt={image.altText} />
              <figcaption>
                <span data-testid="caption" dangerouslySetInnerHTML={{ __html: image.caption }} />
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
      <div className="text-left ml-8">
        <span
          data-testid="excerpt"
          className={postStyles.desc}
          dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
        />{' '}
      </div>
      <div className="text-left ml-8 text-sm text-gray-500">
        <p data-testid="tags">
          Ingredients:&nbsp;
          {findMatches(post.tags, tags, 'tagId').join(', ')}
        </p>
        <p data-testid="categories">
          Type:&nbsp;
          {findMatches(post.categories, categories, 'categoryId').join(', ')}
        </p>
        <p data-testid="date">
          Date:&nbsp;
          {post.date}
        </p>
      </div>
    </section>
  );
}

Post.propTypes = {
  post: PropTypes.object,
  tags: PropTypes.array,
  categories: PropTypes.array,
};

export default Post;
