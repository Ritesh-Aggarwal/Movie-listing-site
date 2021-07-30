import React, { useState, useEffect } from "react";
import axios from "axios";
import { Col, Row, Card } from "react-bootstrap";
import FavBtn from "../LandingPage/FavBtn";
import { BsFillStarFill } from "react-icons/bs";
import { IMG_URL } from "../../Config.js";

function FavouritePage() {
  const [Favourites, setFavourites] = useState([]);

  function fetchFavourites() {
    axios
      .post("/api/favourite/getFavouriteMovies", {
        userFrom: localStorage.getItem("userId"),
      })
      .then((response) => {
        if (response.data.success) {
          setFavourites(response.data.favourites);
          console.log(response.data.favourites);
        } else {
          alert("Something went wrong...");
        }
      });
  }

  useEffect(() => {
    fetchFavourites();
  }, []);

  return (
    <div>
      <h3 className="px-5 mb-4">Your Favourites</h3>
      <div className="px-5 ">
        <Row lg={5} md={4} className="g-4 ">
          {Favourites &&
            Favourites.map((m, i) => {
              const imgurl = IMG_URL + "w500" + m.movieImage;

              return (
                <div key={i}>
                  <Col>
                    <Card
                      style={{
                        boxShadow:
                          "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
                      }}
                    >
                      <div className="d-flex flex-column">
                        <Card.Body
                          variant="top"
                          className="d-flex flex-column justify-content-between"
                          style={{
                            backgroundImage: `url(${imgurl})`,
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            height: "320px",
                          }}
                        >
                          <div
                            className="px-2 d-flex align-items-center"
                            style={{
                              background: "#22A1B1",
                              width: "max-content",
                              borderRadius: "5px",
                            }}
                          >
                            <BsFillStarFill style={{ color: "yellow" }} />

                            <span className="px-1" style={{ color: "white" }}>
                              {m.movieRating}
                            </span>
                          </div>
                          <div className="align-self-end"></div>
                        </Card.Body>
                        <Card.Text className="p-2  align-self-center w-100">
                          <div
                            className="d-flex justify-content-between align-items-start"
                            onClick={fetchFavourites}
                          >
                            <div className="mx-auto">{m.movieTitle}</div>

                            <FavBtn
                              movieInfo={{
                                movieId: m.movieId,
                                movieTitle: m.movieTitle,
                                movieImage: m.movieImage,
                                movieRating: m.movieRating,
                              }}
                              movieId={m.movieId}
                              userFrom={localStorage.getItem("userId")}
                            />
                          </div>
                        </Card.Text>
                      </div>
                    </Card>
                  </Col>
                </div>
              );
            })}
        </Row>
      </div>
    </div>
  );
}

export default FavouritePage;
