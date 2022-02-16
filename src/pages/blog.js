import React from 'react';
import Layout from "../components/layout"
import SEO from "../components/seo"
import Navbar from "../components/Navbar"
import { useStaticQuery, graphql, Link } from 'gatsby';


const Blog = () => {

  const {
    allPost: { nodes }
  } = useStaticQuery(graphql`
    query {
      allPost {
        nodes {
          title
          gatsbyPath(filePath: "/posts/{post.title}")
        }
      }
    }
  `);

  return (
    <Layout>
        <SEO title="Phil's Portfolio" />
        <h1>You can write your own blogs!</h1>
        <ul>
          {nodes.map((node, index) => {
            const { title, gatsbyPath } = node;
            return (
              <li key={index}>
                <Link to={gatsbyPath}>{title}</Link>
              </li>
            );
          })}
        </ul>
    </Layout>
  );
};
  
export default Blog;