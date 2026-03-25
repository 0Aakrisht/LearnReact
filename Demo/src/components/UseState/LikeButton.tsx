import { useState } from "react";

const LikeButton = () => {
  const [liked, setLiked] = useState<boolean>(false);

  function toggleLike() {
    setLiked((prevLike) => !prevLike);
  }
  return (
    <>
      <button onClick={toggleLike}>{liked ? "liked" : "disliked"}</button>
    </>
  );
};
export default LikeButton;
