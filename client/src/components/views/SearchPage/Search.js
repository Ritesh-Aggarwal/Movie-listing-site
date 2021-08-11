import React, { useRef } from "react";
import { Form } from "react-bootstrap";
import { API_KEY, API_URL } from "../../Config.js";

var fetchingQuery;
function Search({ setSearches }) {
  const cq = useRef();

  function fetchQuery() {
    fetch(
      `${API_URL}search/multi?api_key=${API_KEY}&language=en-US&query=${encodeURIComponent(
        cq.current.value
      )}&page=1&include_adult=false`
    )
      .then((response) => response.json())
      .then((response) => {
        setSearches(response.results);
        // console.log(response.results);
        // console.log(cq.current.value);
      });
  }

  // function handleFocus() {
  //    fetchingQuery = setInterval(fetchQuery, 2000);
  // }

  function keypress(e) {
    // console.log(e.key);
    // console.log("cq:", cq.current.value);
    fetchQuery();
  }

  return (
    <div className="p-5 mx-auto">
      <Form>
        <Form.Group className="mb-3" controlId="query">
          <Form.Control
            type="text"
            ref={cq}
            placeholder="Search movie/tv-show/people"
            // onFocus={handleFocus}
            onKeyUp={keypress}
            onBlur={() => {
              // clearInterval(fetchingQuery);
              cq.current.value = "";
            }}
          />
        </Form.Group>
      </Form>
    </div>
  );
}

export default Search;
