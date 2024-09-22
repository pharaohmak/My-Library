import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Price from "./ui/Price";
import Ratings from "./ui/Ratings";

const Book = ({ book }) => {
  const [img, setImg] = useState(null);
  const [imgError, setImgError] = useState(false);
  const mountedRef = useRef(true); // Initial state is true

  useEffect(() => {
    const image = new Image();
    image.src = book.url;

    image.onload = () => {
      if (mountedRef.current) {
        setTimeout(() => {
          setImg(image);
        }, 300); // Delay added to show skeleton effect
      }
    };

    image.onerror = () => {
      if (mountedRef.current) {
        setImgError(true);
      }
    };

    // Cleanup on component unmount
    return () => {
      mountedRef.current = false; // Set to false when component is unmounted
    };
  }, [book.url]);

  return (
    <div className="book">
      {imgError ? (
        <div className="error-message">Failed to load image</div>
      ) : !img ? (
        <>
          {/* Skeleton loading placeholders */}
          <div className="book__img--skeleton"></div>
          <div className="skeleton book__title--skeleton"></div>
          <div className="skeleton book__rating--skeleton"></div>
          <div className="skeleton book__price--skeleton"></div>
        </>
      ) : (
        <>
          {/* Once image is loaded, show book details */}
          <Link to={`/books/${book.id}`}>
            <figure className="book__img--wrapper">
              <img className="book__img" src={img.src} alt={book.title} />
            </figure>
          </Link>
          <div className="book__title">
            <Link to={`/books/${book.id}`} className="book__title--link">
              {book.title}
            </Link>
          </div>
          <Ratings rating={book.rating} />
          <Price
            originalPrice={book.originalPrice}
            salePrice={book.salePrice}
          />
        </>
      )}
    </div>
  );
};

export default Book;