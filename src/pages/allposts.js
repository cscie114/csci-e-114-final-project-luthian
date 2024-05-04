import * as React from 'react';
import PropTypes from 'prop-types';

import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Header from '../components/Header';
import Post from '../components/Post';
import CheckboxSet from '../components/CheckboxSet';

function AllPostsPage({ data }) {
  const [ingredientsFilter, setIngredientsFilter] = React.useState([]);
  const [typeFilter, setTypeFilter] = React.useState([]);

  function filterPosts() {
    return data.allPosts.nodes
      .filter(post => post.author)
      .filter(post => {
        if (ingredientsFilter.length === 0) return true;
        return post.tags.some(tag => ingredientsFilter.includes(tag));
      })
      .filter(post => {
        if (typeFilter.length === 0) return true;
        return post.categories.some(category => typeFilter.includes(category));
      });
  }
  return (
    <Layout pageTitle="All Posts">
      <div className="grid grid-cols-6 gap-3">
        <div>
          <div className="text-center">Filters</div>
          <hr />
          <CheckboxSet
            checkboxes={data.allTags.nodes.map(tag => ({
              description: tag.description,
              value: tag.tagId,
              label: tag.name,
            }))}
            callback={ingredientsFilter => {
              setIngredientsFilter(ingredientsFilter);
            }}
            title={'Ingredients'}
          />
          <hr />
          <CheckboxSet
            checkboxes={data.allCategories.nodes.map(category => ({
              value: category.categoryId,
              description: category.description,
              label: category.name,
            }))}
            callback={typeFilter => {
              setTypeFilter(typeFilter);
            }}
            title={'Types'}
          />
        </div>
        <div className="col-span-5">
          {filterPosts().length !== 0 && (
            <h2 data-testid="subtitle" className="mb-3 text-xl w-full text-center">{`${
              filterPosts().length
            } Posts match your filters`}</h2>
          )}
          <div className="flex flex-row flex-wrap h-full" data-testid="posts">
            {filterPosts().length === 0 ? (
              <div className="text-3xl text-gray-400 self-center text-center w-full">No posts match filters</div>
            ) : (
              filterPosts().map(post => (
                <Post key={post.id} post={post} tags={data.allTags.nodes} categories={data.allCategories.nodes} />
              ))
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query AllPostsQuery {
    allPosts(filter: { status: { eq: "publish" } }, sort: { date: ASC }) {
      nodes {
        author
        categories
        id
        tags
        title {
          rendered
        }
        excerpt {
          rendered
        }
        date(formatString: "MMMM DD, YYYY h:MM A")
        postId
        images {
          altText
          caption
          url
        }
      }
      totalCount
    }
    allCategories {
      nodes {
        categoryId
        id
        name
        description
      }
    }
    allTags {
      nodes {
        tagId
        id
        description
        name
      }
    }
  }
`;

export default AllPostsPage;

AllPostsPage.propTypes = {
  data: PropTypes.object,
};

export function Head() {
  return <Header title="All Posts" />;
}
