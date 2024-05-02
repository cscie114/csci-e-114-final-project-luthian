import * as React from 'react';
import PropTypes from 'prop-types';

import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Header from '../components/Header';
import Post from '../components/Post';

function AllPostsPage({ data }) {
  return (
    <Layout pageTitle="All Posts">
      <span>
        <h2 className="mb-3 text-xl inline-block">All the Posts</h2>
        <div className="flex flex-row flex-wrap">
          {data.allPosts.nodes
            .filter((post) => post.author)
            .map((post) => <Post key={post.id} post={post} tags={data.allTags.nodes} categories={data.allCategories.nodes} />)}
        </div>
      </span>
    </Layout>
  );
}

export const pageQuery = graphql`
  query AllPostsQuery {
    allPosts {
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
