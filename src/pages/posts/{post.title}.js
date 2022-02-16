import React from 'react';
import { graphql, Link } from 'gatsby';
import Navbar from '../../components/Navbar';

const PostPage = ({
  data: {
    post: { title, date, body }
  }
}) => {
  return (
    <main>
      <Navbar></Navbar>
      <h1>{title}</h1>
      <p>{date}</p>
      <p>{body}</p>
    </main>
  );
};

export const query = graphql`
  query($id: String) {
    post(id: { eq: $id }) {
      id
      title
      body
      date
    }
  }
`;

export default PostPage;