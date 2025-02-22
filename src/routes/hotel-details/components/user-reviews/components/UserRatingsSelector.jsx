import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';

const UserRatingsSelector = ({
  userRating,
  handleRating,
  isEmpty,
  userReview,
  handleReviewSubmit,
  handleUserReviewChange,
}) => {
  return (
    <div
      className={`${
        isEmpty ? 'w-full' : 'w-2/5'
      } pl-4 border-l flex flex-col items-center justify-center`}
    >
      <div className="text-lg font-semibold text-gray-700">Your Rating</div>
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <FontAwesomeIcon
            key={star}
            icon={star <= userRating ? fasStar : farStar}
            className={`cursor-pointer mx-1 text-2xl ${
              star <= userRating ? 'text-yellow-400' : 'text-gray-400'
            }`}
            onClick={() => handleRating(star)}
          />
        ))}
      </div>
      <textarea
        rows={3}
        className="w-full border my-2"
        value={userReview}
        onChange={(e) => handleUserReviewChange(e.target.value)}
      />
      <button
        className="bg-brand hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline my-2 w-full"
        onClick={handleReviewSubmit}
      >
        Submit
      </button>
    </div>
  );
};

export default UserRatingsSelector;
