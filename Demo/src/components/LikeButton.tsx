import { useState } from "react";

const LikeButton = () => {
    // Boolean state: true = liked, false = not liked
    const [liked, setLiked] = useState<boolean>(false);

    // Toggle function
    const toggleLike = () => {
        setLiked(prevLiked => !prevLiked); // flips true ↔ false
    };

    return (
        <>
            <button onClick={toggleLike}>
                {liked ? "❤️" : "Like 🤍"}
            </button>
        </>
    );
};

export default LikeButton;
