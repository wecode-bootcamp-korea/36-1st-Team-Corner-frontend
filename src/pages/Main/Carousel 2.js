const Carousel = () => {
  //key, imageURL, linkPath

  return (
    <div className="carousel">
      <button className="prevImage" />
      <div className="slidingImages">
        <div className="slidingBar" />
      </div>
      <button className="nextImage" />
    </div>
  );
};

export default Carousel;
