import { useState, useEffect, useRef } from "react";
import React from "react";
import './pop-up.css'
import axios from "axios";
import { useAuth } from "../../AuthProvider";


interface ModalProps {
  isOpen?: boolean;
  place_id?: string;
  setPopState: any;
  children: any;
}

export default function CommentPopUp(props:ModalProps){
  const auth = useAuth();
  const [comment, setComment] = useState<string>('');
  // rating stars
  const [rating, setRating] = useState<number | null>(null);
  const [hover, setHover] = useState(null);
  const [totalStars, setTotalStars] = useState(5);

  const writeNewComment = () => {
      const currentDate = new Date();
      const dateString = currentDate.getMonth()+1 + '-' + currentDate.getDate() + '-' + currentDate.getFullYear();
      axios.post("http://localhost:5000/saveditems", {
                  user_id: auth.user?.user_id,
                  place_id: props.place_id,
                  datew: dateString,
                  rate: totalStars,
                  comment: comment

              })
              .then(response => {
                  console.log(response.data);
              })
              .catch(error => {
                  console.error('Error:', error);
              });
    }
      
    return props.isOpen ? (
      <div className="popup">
        <div className="popup-inner">
          <i className="fa-solid fa-xmark close" onClick={() => props.setPopState(false)}></i>
          { props.children }
          <input
            type="textarea"
            className="comment-desc"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
    
          {[...Array(totalStars)].map((star, index) => {
            const currentRating = index + 1;
    
            return (
              <label key={index}>
                <input
                  type="radio"
                  name="rating"
                  value={currentRating}
                  onChange={() => setRating(currentRating)}
                />
                <span
                  className="star"
                  style={{
                    color:
                      currentRating <= (hover! || rating) ? "#ffc107" : "#e4e5e9",
                  }}
                  onMouseEnter={() =>
                    setRating(currentRating != null ? currentRating : null)
                  }
                  onMouseLeave={() => setHover(null)}
                >
                  &#9733;
                </span>
              </label>
            );
          })}
          <button className="post-comment" onClick={()=> { writeNewComment; props.setPopState(false)}}>
            Нэмэх
          </button>
        </div>
      </div>
    ) : "";
    
};
