import { db } from "firebase-app/firebase-config";
import { deleteDoc, doc } from "firebase/firestore";
import React from "react";
import Moment from "react-moment";

const PostCommentItem = (props) => {
  const { comment, user, postId } = props;
  // delete comment firebase
  const handleDeleteComment = async (id) => {
    const confirm = window.confirm("Are you sure to delete this comment?");
    if (confirm && user.uid === comment?.userId) {
      try {
        await deleteDoc(doc(db, "posts", postId, "comments", id));
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <div className="post-comment__item">
      <div className="post-comment__item__avatar">
        <img src={comment.avatar} alt="" />
      </div>
      <div className="post-comment__item__content relative mb-5">
        <div className="post-comment__item__content__info">
          <h4 className="post-comment__item__content__info__name">
            {comment.username}
          </h4>
          <span className="post-comment__item__content__info__date">
            <Moment className="text-sm" fromNow>
              {comment.timestamp?.toDate()}
            </Moment>
          </span>
        </div>
        <div className="post-comment__item__content__text flex flex-col gap-y-5">
          <p>{comment.comment}</p>
          <div className="post-comment__action absolute right-0 top-[100%] z-10">
            {user?.uid === comment?.userId && (
              <button
                className="btn-action"
                onClick={() => handleDeleteComment(comment.id)}
              >
                Xóa
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCommentItem;
