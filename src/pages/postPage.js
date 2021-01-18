import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/postsActions";
import { Post } from "../components/Post";

const PostPage = ({ dispatch, loading, posts, hasErrors }) => {
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  console.log("post>", posts);

  const renderPost = () => {
    if (loading) return <p>loading...</p>;
    if (hasErrors) return <p>Something went wrong..</p>;
    return posts.map((post) => <Post key={post.id} post={post} />);
  };

  return (
    <div>
      <h1>Posts page</h1>
      {renderPost()}
    </div>
  );
};

// map redux state to react state

const mapStateToProps = (state) => ({
  loading: state.posts.loading,
  posts: state.posts.posts,
  hasErrors: state.posts.hasErrors,
});

export default connect(mapStateToProps)(PostPage);
