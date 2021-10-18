import React, { Fragment, useEffect } from "react";
import {Link}  from "react-router-dom"
import { connect } from "react-redux";
import PostItem from "../posts/PostItem";
import { getPosts } from "../../actions/post";

const UserPosts = ({ user, getPosts, post: { posts } }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);
  return (
    <>
      {posts.filter((post) => post.name === user.name).length != 0 ? (
        <Fragment>
          <h1 className=" text-primary">Your Posts Till date-</h1>

          <div className="posts">
            {posts
              .filter((post) => post.name === user.name)
              .map((post) => (
                <PostItem key={post._id} post={post} />
              ))}
          </div>
        </Fragment>
      ) : (
        <Fragment>
          <h1 className=" text-primary">You haven't made any posts yet-</h1>
          <h3>Click here to make your first post</h3>
          <Link to="/posts" className="btn btn-primary my-1">
            Posts
          </Link>
        </Fragment>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  post: state.post,
});

export default connect(mapStateToProps, { getPosts })(UserPosts);
