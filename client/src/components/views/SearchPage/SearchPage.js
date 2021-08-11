import React, { useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { BsFillStarFill } from "react-icons/bs";
import { IMG_URL } from "../../Config.js";
import FavBtn from "../LandingPage/FavBtn";
import Search from "./Search";

function SearchPage() {
  const [Movies, setSearches] = useState([]);
  return (
    <div>
      <Search setSearches={setSearches} />
      <h3 className="px-5 mb-4">Search Results</h3>
      <div className="px-5 ">
        <Row lg={5} md={4} className="g-4 ">
          {Movies ? (
            Movies.map((m, i) => {
              const imgurl = IMG_URL + "w500";

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
                            backgroundImage: `url(${
                              imgurl + (m.poster_path || m.profile_path)
                            }),url("http://placehold.it/350x350")`,
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
                            {m.media_type !== "person" ? (
                              <BsFillStarFill style={{ color: "yellow" }} />
                            ) : null}

                            <span className="px-1" style={{ color: "white" }}>
                              {m.vote_average ||
                                m.known_for_department ||
                                "N-A"}
                            </span>
                          </div>
                          <div className="align-self-end"></div>
                        </Card.Body>
                        <Card.Text className="p-2  align-self-center w-100">
                          <div className="d-flex justify-content-between align-items-start">
                            <div className="mx-auto">
                              {m.original_title || m.name}
                            </div>

                            {m.media_type === "movie" && (
                              <FavBtn
                                movieInfo={m}
                                movieId={m.id}
                                userFrom={localStorage.getItem("userId")}
                              />
                            )}
                          </div>
                        </Card.Text>
                      </div>
                    </Card>
                  </Col>
                </div>
              );
            })
          ) : (
            <Col>
              <div>"Start typing in search bar to see results"</div>
            </Col>
          )}
        </Row>
      </div>
    </div>
  );
}

export default SearchPage;
