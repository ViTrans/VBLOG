import { Button } from "components/button";
import { db } from "firebase-app/firebase-config";
import {
  addDoc,
  collection,
  onSnapshot,
  serverTimestamp,
} from "firebase/firestore";
import PostCommentItem from "module/post/PostCommentItem";
import React from "react";
import { useEffect } from "react";
import styled from "styled-components";
const PostCommentStyles = styled.div`
  .post-comment {
    max-width: 1000px;
    margin: 100px auto;
    &__heading {
      margin-bottom: 2rem;
      font-weight: 600;
    }
    &__form {
      margin-bottom: 2rem;
      form {
        .form-group {
          textarea {
            width: 100%;
            height: 200px;
            border: 1px solid #ccc;
            border-radius: 8px;
            padding: 1rem;
            resize: none;
          }
        }
      }
    }
    &__list {
      .post-comment__item {
        display: flex;
        align-items: flex-start;
        margin-bottom: 2rem;
        border-radius: 8px;
        &:last-child {
          margin-bottom: 0;
        }
        &__avatar {
          margin-right: 1rem;
          width: 52px;
          height: 52px;
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 100rem;
          }
        }
        &__content {
          padding: 1rem;
          background-color: ${(props) => props.theme.grayF3};
          border-radius: 8px;
          box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
          flex: 1;
          &__info {
            display: flex;
            align-items: center;
            margin-bottom: 1rem;
            &__name {
              font-weight: 600;
              margin-right: 1rem;
            }
            &__date {
              color: #999;
            }
          }
          &__text {
            p {
              color: #333;
            }
          }
        }
      }
    }
  }
  .btn {
    display: block;
    margin-left: auto;
    &--primary {
      background-color: ${(props) => props.theme.primary};
      color: #fff;
      padding: 1rem 2rem;
      border-radius: 8px;
      border: none;
      cursor: pointer;
      transition: all 0.3s;
      &:hover {
        background-color: ${(props) => props.theme.primary};
        color: #fff;
        opacity: 0.8;
      }
    }
    &-action {
      border: none;
      color: ${(props) => props.theme.black};
      transform: translate(-50%, 50%);
    }
  }
  @media screen and (max-width: 1023.98px) {
    .post-comment {
      &__form {
        form {
          .form-group {
            textarea {
              height: 100px;
            }
          }
        }
      }
    }
    &__list {
      .post-comment__item {
        &__avatar {
          max-width: 40px;
          margin-right: 1rem;
        }
      }
    }
    .btn {
      &--primary {
        padding: 15px 20px;
      }
    }
  }
`;

const PostComment = ({ postId, user }) => {
  const [comment, setComment] = React.useState("");
  const [comments, setComments] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  useEffect(() => {
    const docRef = collection(db, "posts", postId, "comments");
    onSnapshot(docRef, (snapshot) => {
      const comments = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setComments(comments);
    });
  }, [postId]);
  const sendComment = async (e) => {
    e.preventDefault();
    setLoading(true);
    const commentTosend = comment;
    setComment("");
    await addDoc(collection(db, "posts", postId, "comments"), {
      comment: commentTosend,
      username: user.fullname,
      avatar: user.avatar,
      userId: user.uid,
      timestamp: serverTimestamp(),
    });
    setLoading(false);
  };

  return (
    <PostCommentStyles>
      <div className="post-comment">
        <div className="post-comment__heading">
          <h3 className="heading">Bình luận</h3>
        </div>
        <div className="post-comment__form">
          <form>
            <div className="form-group">
              <textarea
                placeholder="Nhập bình luận của bạn"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              ></textarea>
            </div>
            <div className="form-group">
              <Button
                type="submit"
                onClick={sendComment}
                className="btn btn--primary"
                isLoading={loading}
                disabled={!comment.trim()}
              >
                Gửi bình luận
              </Button>
            </div>
          </form>
        </div>
        {comments.length > 0 && (
          <div className="post-comment__list">
            {comments.map((comment) => (
              <PostCommentItem
                key={comment.id}
                comment={comment}
                user={user}
                postId={postId}
              ></PostCommentItem>
            ))}
          </div>
        )}
      </div>
    </PostCommentStyles>
  );
};

export default PostComment;
