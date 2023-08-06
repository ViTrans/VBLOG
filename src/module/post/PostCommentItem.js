import { db } from "firebase-app/firebase-config";
import { deleteDoc, doc } from "firebase/firestore";
import React from "react";
import Moment from "react-moment";
import Swal from "sweetalert2";

const PostCommentItem = (props) => {
  const { comment, user } = props;
  // delete comment firebase
  const handleDeleteComment = async (id, userId) => {
    if (user.uid === userId) {
      try {
        Swal.fire({
          title: "Are you sure?",
          text: "You will not be able to recover this imaginary file!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Yes, delete it!",
          cancelButtonText: "No, keep it",
        }).then(async (result) => {
          if (result.isConfirmed) {
            await deleteDoc(doc(db, "comments", id));
            Swal.fire(
              "Deleted!",
              "Your imaginary file has been deleted.",
              "success"
            );
          } else if (result.dismiss === Swal.DismissReason.cancel) {
            Swal.fire("Cancelled", "Your imaginary file is safe :)", "error");
          }
        });
      } catch (error) {
        console.log(error);
      }
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You don't have permission to delete this comment",
      });
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
                onClick={() => handleDeleteComment(comment.id, user.uid)}
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
