import "./works.scss";

export default function Works() {

  const data = [
    {
      id: "1",
      icon:"./assets/mobile.png",
      title: "Web Design",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, corrupti et? Dolorum voluptas, placeat dignissimos porro nobis ut incidunt eius corrupti consectetur iste nihil eum repellat recusandae consequatur odio sequi.",
      img: "https://yi-files.s3.eu-west-1.amazonaws.com/products/1189000/1189396/1982618-full.jpg"
    }
  ];

  return (
    <div className="works" id="works">
      <div className="slider">
        <div className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <div className="imgContainer">
                  <img src="assets/mobile.png" alt="" />
                </div>
                <h2>Title</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat saepe pariatur, praesentium sed voluptates, numquam amet, culpa fugit assumenda nulla dignissimos error magni eius explicabo incidunt nostrum et. Architecto, enim.</p>
                <span>Projects</span>
              </div>
            </div>
            <div className="right">
              <img src="https://yi-files.s3.eu-west-1.amazonaws.com/products/1189000/1189396/1982618-full.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <img src="assets/arrow.png" className="arrow left" alt="" />
      <img src="assets/arrow.png" className="arrow right" alt="" />
    </div>
  );
}
