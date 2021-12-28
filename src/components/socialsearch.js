import fb from "../img/fb.png";
import insta from "../img/inst.png";
import twit from "../img/twitter.png";
import search from "../img/search.png";

function Socialsearch() {
  return (
    <div>
      <ul className="d-inline-block">
        <li>
          <a href="www.facebook.com">
            <img src={fb} alt="Facebook logo" />
          </a>
        </li>
        <li>
          <a href="www.instagram.com">
            <img src={insta} alt="Instagram logo" />
          </a>
        </li>
        <li>
          <a href="www.twitter.com">
            <img src={twit} alt="Twitter logo" />
          </a>
        </li>
        <li>
          <button id="search">
            <img src={search} alt="Search icon" />
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Socialsearch;
