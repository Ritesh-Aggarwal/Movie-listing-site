import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { axios } from "axios";

function FavBtn() {
  const [checked, setChecked] = useState(false);

  //   useEffect(() => {
  //     axios.post("/api/favourite");
  //   });

  return (
    <div>
      <Button
        className="fav-btn"
        onClick={() => {
          setChecked((p) => !p);
        }}
      >
        {checked ? <BsHeartFill style={{ color: "#F44336" }} /> : <BsHeart />}
      </Button>
    </div>
  );
}

export default FavBtn;
