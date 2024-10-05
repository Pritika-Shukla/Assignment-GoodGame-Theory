import React, { useState, useEffect } from "react";
import { Bookmark, BookmarkCheck } from "lucide-react";
import LoadingSkeleton from "./LoadingSkeleton";
import SavedQuotes from "./SavedQuotes ";

const Card = () => {
  const [quote, setQuote] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [savedQuotes, setSavedQuotes] = useState([]);

  const fetchQuote = () => {
    setLoading(true);
    setError(null);
    setIsBookmarked(false);

    setTimeout(() => {
      fetch("https://ron-swanson-quotes.herokuapp.com/v2/quotes")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          setQuote(data[0]);
          setLoading(false);
        })
        .catch(() => {
          setError("Error fetching quote");
          setLoading(false);
        });
    }, 1000);
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  const toggleBookmark = () => {
    if (!isBookmarked) {
      setSavedQuotes((prevQuotes) => [...prevQuotes, quote]);
    }
    setIsBookmarked(!isBookmarked);
  };

  return (
    <div>
      <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-sm m-auto mt-[20vh]">
        {loading ? (
          <LoadingSkeleton />
        ) : error ? (
          <p className="text-red-600 mb-6">{error}</p>
        ) : (
          <>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Ron Swanson Quotes</h2>
            </div>
            <p className="text-gray-600 mb-6">{quote}</p>
            <div className="flex justify-between items-center">
              <div
                className="text-2xl font-bold hover:cursor-pointer focus:outline-none"
                onClick={toggleBookmark}
              >
                {isBookmarked ? (
                  <BookmarkCheck className="text-black" />
                ) : (
                  <Bookmark className="text-gray-600 focus:text-black" />
                )}
              </div>
              <button
                onClick={fetchQuote}
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                disabled={loading}
              >
                Next
              </button>
            </div>
          </>
        )}
      </div>

      <SavedQuotes savedQuotes={savedQuotes} />
    </div>
  );
};

export default Card;
