import React, { useState, useEffect } from "react";
import {
  Row,
  Col,
  Card,
  Pagination,
  Button,
  ToggleButton,
  ButtonGroup,
} from "react-bootstrap";
import { API_URL, API_KEY, IMG_URL } from "../../Config.js";
import { BsHeart, BsHeartFill } from "react-icons/bs";
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
              const imgurl = IMG_URL + "w500" + m.backdrop_path;

              return (
                <div key={i}>
                  <Col>
                    <Card>
                      <div>
                        <Card.Img variant="top" src={imgurl} />
                        <Card.Body>
                          <Card.Title>{m.original_title}</Card.Title>
                          <Card.Text>
                            {m.overview.substr(0, 100) + "..."}
                          </Card.Text>
                          <FavBtn />
                        </Card.Body>
                      </div>
                    </Card>
                  </Col>
                </div>
              );
            })}
        </Row>
        <Pagination className="mt-4 justify-content-center">
          <Pagination.Prev
            onClick={() => {
              if (activePage == paginate[0] && activePage != 1) {
                setPaginate((p) => p.map((i) => i - 4));
              }
              if (activePage !== 1) {
                setActive((p) => p - 1);
              }
            }}
          />
          <Pagination.Item
            active={activePage === 1}
            onClick={() => setActive(1)}
          >
            {1}
          </Pagination.Item>
          <Pagination.Ellipsis disabled />

          {paginate.map((p) => {
            return (
              <Pagination.Item
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
            active={activePage === 500}
            onClick={() => setActive(500)}
          >
            {500}
          </Pagination.Item>
          <Pagination.Next
            onClick={() => {
              if (
                activePage == paginate[paginate.length - 1] &&
                activePage != 500
              ) {
                setPaginate((p) => p.map((i) => i + 4));
              }
              if (activePage !== 500) {
                setActive((p) => p + 1);
              }
            }}
          />
        </Pagination>
      </div>
    </>
  );
}

export default LandingPage;
