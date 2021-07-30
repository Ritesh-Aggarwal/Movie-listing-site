import React, { useEffect, useState } from "react";
import { Card, Col, Pagination, Row } from "react-bootstrap";
import { BsFillStarFill } from "react-icons/bs";
import { API_KEY, API_URL, IMG_URL } from "../../Config.js";
import FavBtn from "./FavBtn";
function LandingPage() {
  const [Movies, setMovies] = useState([]);
  const [activePage, setActive] = useState(1);
  const [paginate, setPaginate] = useState([2, 3, 4, 5]);

  useEffect(() => {
    fetch(
      `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${activePage}`
    )
      .then((response) => response.json())
      .then((response) => {
        setMovies(response.results);
      });
  }, [activePage]);

  return (
    <>
      <h3 className="px-5 mb-4">Popular movies</h3>
      <div className="px-5 ">
        <Row lg={5} md={4} className="g-4 ">
          {Movies &&
            Movies.map((m, i) => {
              const imgurl = IMG_URL + "w500" + m.poster_path;

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
                              {m.vote_average}
                            </span>
                          </div>
                          <div className="align-self-end"></div>
                        </Card.Body>
                        <Card.Text className="p-2  align-self-center w-100">
                          <div className="d-flex justify-content-between align-items-start">
                            <div className="mx-auto">{m.original_title}</div>

                            <FavBtn
                              movieInfo={m}
                              movieId={m.id}
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
        <Pagination className="mt-4 justify-content-center">
          <Pagination.Prev
            disabled={activePage == 1}
            onClick={() => {
              if (activePage == paginate[0]) {
                setPaginate((p) => p.map((i) => i - 4));
              }
              setActive((p) => p - 1);
              document.body.scrollTop = 0;
              document.documentElement.scrollTop = 0;
            }}
          />
          <Pagination.Item
            active={activePage === 1}
            activeLabel=""
            onClick={() => {
              setActive(1);
              document.body.scrollTop = 0;
              document.documentElement.scrollTop = 0;
            }}
          >
            {1}
          </Pagination.Item>
          <Pagination.Ellipsis disabled />

          {paginate.map((p, i) => {
            return (
              <Pagination.Item
                key={i}
                activeLabel=""
                active={p == activePage}
                onClick={(e) => {
                  setActive(e.target.innerText);
                  document.body.scrollTop = 0;
                  document.documentElement.scrollTop = 0;
                }}
              >
                {p}
              </Pagination.Item>
            );
          })}
          <Pagination.Ellipsis disabled />
          <Pagination.Item
            activeLabel=""
            active={activePage === 500}
            onClick={() => {
              setActive(500);
              document.body.scrollTop = 0;
              document.documentElement.scrollTop = 0;
            }}
          >
            {500}
          </Pagination.Item>
          <Pagination.Next
            disabled={activePage == 500}
            onClick={() => {
              if (activePage == paginate[paginate.length - 1]) {
                setPaginate((p) => p.map((i) => i + 4));
              }
              setActive((p) => p + 1);
              document.body.scrollTop = 0;
              document.documentElement.scrollTop = 0;
            }}
          />
        </Pagination>
      </div>
    </>
  );
}

export default LandingPage;
