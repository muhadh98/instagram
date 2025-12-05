import React, { useState, useEffect } from "react";

import { FaHeart, FaComment, FaShare } from 'react-icons/fa';

function Feed() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:9000/posts")
            .then(res => res.json())
            .then(data => setPosts(data))
            .catch(err => console.log(err));
    }, []);

    if (posts.length === 0) return <div className="text-center mt-5">Loading...</div>;

    return (
        <div className="container mt-4">
            {posts.map(post => (
                <div className="card mb-4" key={post.id} style={{ maxWidth: "500px", margin: "auto" }}>

                    {/* Post Header */}
                    <div className="card-header d-flex align-items-center">
                        <img
                            src={post.profilePic}
                            alt={post.username}
                            className="rounded-circle me-2"
                            style={{ width: "40px", height: "40px", objectFit: "cover" }}
                        />
                        <strong>{post.username}</strong>
                    </div>

                    {/* Post Image */}
                    <img
                        src={post.imageUrl}
                        className="card-img-top"
                        alt="Post"
                        style={{ objectFit: "cover", width: "100%", maxHeight: "500px" }}
                    />

                    {/* Action Icons */}
                    <div className="card-body py-2 d-flex align-items-center">
                        <FaHeart className="me-3" style={{ cursor: "pointer", color: "red" }} />
                        <FaComment className="me-3" style={{ cursor: "pointer" }} />
                        <FaShare className="me-3" style={{ cursor: "pointer" }} />
                    </div>

                    {/* Likes & Caption */}
                    <div className="card-body pt-0">
                        <p className="fw-bold mb-1">❤️ {post.likes} likes</p>
                        <p><strong>{post.username}</strong> {post.caption}</p>

                        {/* Comments preview (2 latest comments) */}
                        {/* {post.comments && post.comments.length > 0 && (
                            <div>
                                {post.comments.slice(0, 2).map(comment => (
                                    <p key={comment.id} className="mb-0">
                                        <strong>{comment.username}</strong> {comment.text}
                                    </p>
                                ))}
                                {post.comments.length > 2 && <p className="text-muted">View all {post.comments.length} comments</p>}
                            </div>
                        )} */}

                        {/* Timestamp */}
                        <p className="text-muted small mt-2">{new Date(post.createdAt).toLocaleDateString()}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Feed;
