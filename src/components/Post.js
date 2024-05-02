import * as React from 'react';
import PropTypes from 'prop-types';
import * as postStyles from './post.module.css';

function findMatches(list, allElements, key = 'id') {
  if (!list || !allElements) return ['None'];
  return list.map((item) => allElements.find((el) => el[key] === item).name);
}

function Post({ post, tags, categories }) {
  return (
    <section>
      <div className="text-center">
        <p className={postStyles.largeLineHeight}>
          <span className="text-xl font-semibold" dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
        </p>
      </div>
      <ul className={postStyles.tileGrid}>
        {post.images.map((image) => (
          <li className={postStyles.postTile} key={image.url}>
            <figure>
              <img className={postStyles.postImage} src={image.url} alt={image.altText} />
              <figcaption>
                <span dangerouslySetInnerHTML={{ __html: image.caption }} />
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
      <div className="text-left ml-8">
        <span className={postStyles.desc} dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
        {' '}
      </div>
      <div className="text-left ml-8 text-sm text-gray-500">
        <p>
          Ingredients:&nbsp;
          {findMatches(post.tags, tags, 'tagId').join(', ')}
        </p>
        <p>
          Type:&nbsp;
          {findMatches(post.categories, categories, 'categoryId').join(', ')}
        </p>
        <p>
          Date:&nbsp;
          {post.date}
        </p>
      </div>
    </section>
  );
}

Post.propTypes = {
  post: PropTypes.object,
  tags: PropTypes.object,
  categories: PropTypes.object,
};

export default Post;