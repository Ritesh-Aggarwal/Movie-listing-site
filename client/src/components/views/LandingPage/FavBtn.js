import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import axios from "axios";

function FavBtn({ userFrom, movieInfo, movieId }) {
  const [Favourite, setFavourite] = useState(false);

  let variables = {
    userFrom: userFrom,
    movieId: movieId,
    movieTitle: movieInfo.original_title,
    movieImage: movieInfo.poster_path,
    movieRating: movieInfo.vote_average,
  };

  axios.post("/api/favourite/favourited", variables).then((response) => {
    if (response.data.success) {
      setFavourite(response.data.favourited);
    } else {
      alert("Failed to get data");
    }
  });

  function onClickFavourite() {
    if (Favourite) {
      axios
        .post("/api/favourite/removeFromFavorite", variables)
        .then((response) => {
          if (response.data.success) {
            console.log("removed from favourites");
            setFavourite(!response.data.success);
          } else {
            alert("Something went wrong...");
          }
        });
    } else {
      axios.post("/api/favourite/addToFavorite", variables).then((response) => {
        if (response.data.success) {
          console.log("added to favourites");
          setFavourite(response.data.success);
        } else {
          alert("Something went wrong...");
        }
      });
    }
  }

  return (
    <div>
      <Button
        className="fav-btn"
        style={{ fontSize: "inherit" }}
        onClick={onClickFavourite}
      >
        {Favourite ? <BsHeartFill style={{ color: "#F44336" }} /> : <BsHeart />}
      </Button>
    </div>
  );
}

export default FavBtn;
