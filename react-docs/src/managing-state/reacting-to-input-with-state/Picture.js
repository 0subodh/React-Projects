import { useState } from "react";
import "./Picture.css";

export default function Picture() {
  const [isPicActive, setIsPicActive] = useState(false);

  let divClass = "background";
  let imgClass = "picture";

  if (isPicActive) {
    imgClass += " picture--active";
  } else {
    divClass += " background--active";
  }

  return (
    <div onClick={() => setIsPicActive(false)} className={divClass}>
      <img
        className={imgClass}
        alt="Rainbow houses in Kampung Pelangi, Indonesia"
        src="https://i.imgur.com/5qwVYb1.jpeg"
        onClick={(e) => {
          e.stopPropagation();
          setIsPicActive(true);
        }}
      />
    </div>
  );
}

/*
export default function Picture() {
  return (
    <div className="background background--active">
      <img
        className="picture"
        alt="Rainbow houses in Kampung Pelangi, Indonesia"
        src="https://i.imgur.com/5qwVYb1.jpeg"
      />
    </div>
  );
}
*/
