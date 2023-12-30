import "./App.css";
import Logo from "./assets/logo.svg";
import ill from "./assets/illustration-working.svg";
import { useState } from "react";
import detailed from './assets/icon-detailed-records.svg'
import icon from './assets/icon-brand-recognition.svg'
import brand from './assets/icon-brand-recognition.svg'

function App() {
  const [inputUrl, setInputUrl] = useState("");
  const [shortenedUrl, setShortenedUrl] = useState("");

  const handleShortenUrl = async () => {
    const url = "https://url-shortener23.p.rapidapi.com/shorten";
    const options: RequestInit = {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": "246fee82d5msh167d9373396c39bp141440jsna527eca5afe4",
        "X-RapidAPI-Host": "url-shortener23.p.rapidapi.com",
      },
      body: JSON.stringify({
        url: inputUrl,
      }),
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      const shortUrl = result.short_url; // Assuming the API response has a "short_url" property
      setShortenedUrl(shortUrl);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className="container">
        <div className="nav">
          <div className="left">
            <img src={Logo} alt="" />
            <ul>
              <li>Features</li>
              <li>Pricing</li>
              <li>Resources</li>
            </ul>
          </div>
          <div className="right">
            <ul>
              <li>
                <button>Login</button>
              </li>
              <li>
                <button className="signUp">Sign Up</button>
              </li>
            </ul>
          </div>
        </div>
        <div className="land">
          <div className="ld-1">
            <h1>More than just shorter links</h1>
            <p>
              Build your brand’s recognition and get detailed insights on how
              your links are performing.
            </p>
          </div>
          <div className="ld-2">
            <img src={ill} alt="" />
          </div>
        </div>
        <div className="Form">
         <div className="gj">
         <div className="fr">
            <input
              type="text"
              value={inputUrl}
              placeholder="Shorten URL"
              onChange={(e) => setInputUrl(e.target.value)}
            />
            <button onClick={handleShortenUrl}>Shorten URL</button>
          </div>
          {shortenedUrl && (
            <div className="result">
              <a href={shortenedUrl} target="_blank" rel="noopener noreferrer">
                {shortenedUrl}
              </a>
            </div>
          )}
         </div>
        </div>
        <div className="text">
            <div className="container">
              <h2>Advanced Statistics</h2>
              <p>
                Track how your links are performing across the web with our
                advanced statistics dashboard.
              </p>
            </div>
          </div>
          <div className="Cards">
          <div className="container">
              <div className="card">
                <div className="img">
                  <img
                    src={brand}
                    alt=""
                    aria-hidden="true"
                  />
                </div>
                <div className="ctext">
                  <h3>Brand Recognition</h3>
                  <p>
                    Boost your brand recognition with each click. Generic links
                    don’t mean a thing. Branded links help instil confidence in
                    your content.
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="img">
                  <img
                    src={detailed}
                    alt=""
                    aria-hidden="true"
                  />
                </div>
                <div className="ctext">
                  <h3>Detailed Records</h3>
                  <p>
                    Gain insights into who is clicking your links. Knowing when
                    and where people engage with your content helps inform
                    better decisions.
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="img">
                  <img
                    src={icon}
                    alt=""
                    aria-hidden="true"
                  />
                </div>
                <div className="ctext">
                  <h3>Fully Customizable</h3>
                  <p>
                    Improve brand awareness and content discoverability through
                    customizable links, supercharging audience engagement.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="boostSec">
          <div className="container">
            <h2>Boost your links today</h2>
            <button className="getStartedBtn">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;