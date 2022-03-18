import "./portfolio.scss";

export default function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        <li className="active">Featured</li>
        <li>Web App</li>
        <li>Mobile App</li>
        <li>Design</li>
        <li>Branding</li>
      </ul>
      <div className="container">
        <div className="item">
          <img
            src="https://yi-files.s3.eu-west-1.amazonaws.com/products/1189000/1189396/1982618-full.jpg"
            alt=""
          />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img
            src="https://yi-files.s3.eu-west-1.amazonaws.com/products/1189000/1189396/1982618-full.jpg"
            alt=""
          />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img
            src="https://yi-files.s3.eu-west-1.amazonaws.com/products/1189000/1189396/1982618-full.jpg"
            alt=""
          />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img
            src="https://yi-files.s3.eu-west-1.amazonaws.com/products/1189000/1189396/1982618-full.jpg"
            alt=""
          />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img
            src="https://yi-files.s3.eu-west-1.amazonaws.com/products/1189000/1189396/1982618-full.jpg"
            alt=""
          />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img
            src="https://yi-files.s3.eu-west-1.amazonaws.com/products/1189000/1189396/1982618-full.jpg"
            alt=""
          />
          <h3>Banking App</h3>
        </div>
      </div>
    </div>
  );
}
