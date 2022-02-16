import React from 'react';
import Layout from "../components/layout"
import SEO from "../components/seo"
import Navbar from "../components/Navbar"
import { useStaticQuery, graphql, Link } from 'gatsby';


const Blog = (props) => {
  const postList = props.data.allMarkdownRemark;
  // const {
  //   allPost: { nodes }
  // } = useStaticQuery(graphql`
  //   query {
  //     allPost {
  //       nodes {
  //         title
  //         gatsbyPath(filePath: "/posts/{post.title}")
  //       }
  //     }
  //   }
  // `);

  return (
    <Layout className="blog">
        <SEO title="Phil's Portfolio" />
        <h1>You can write your own blogs!</h1>
        {/* <ul>
          {nodes.map((node, index) => {
            const { title, gatsbyPath } = node;
            return (
              <li key={index}>
                <Link to={gatsbyPath}>{title}</Link>
              </li>
            );
          })}
        </ul> */}
        {postList.edges.map(({ node }, i) => (
        <Link to={node.fields.slug} key={i} className="blog-post-link" >
          <div className="post-list">
            <h1>{node.frontmatter.title}</h1>
            <span>{node.frontmatter.date}</span>
            <p>{node.excerpt}</p>
          </div>
        </Link>
      ))}
    </Layout>
  );
};
  
export default Blog;


export const listQuery = graphql`
  query ListQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          fields{
            slug
          }
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM Do YYYY")
            title
          }
        }
      }
    }
  }
`