import React from 'react';
import Layout from '../components/layout';

function BlogPost(props) {

    // const post = props.data.markdownRemark;
    // const { title,date } = post.frontmatter;

    return (
        <Layout>
            <div>
            <h1>title</h1>
                test
            </div>
        </Layout>
    )
}

export default BlogPost


export const query = graphql`

query PostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
        html
        excerpt
        frontmatter {
            title
        }
    }
}`