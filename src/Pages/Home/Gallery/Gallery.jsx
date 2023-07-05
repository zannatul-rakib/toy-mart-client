const Gallery = () => {
  return (
      <div className="lg:mx-20 pb-20 pt-10 mx-2">
          <div className="text-center mb-10">
              <h2 className="text-primary text-xl lg:text-3xl font-semibold lg:font-bold mb-2">Popular Toy</h2>
              <p>Our Popular for kids review. they loves it.</p>
          </div>
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3  gap-4">
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg"
            alt=""
          />
        </div>
          </div>
          <div className="text-center mt-10">
              <button className="btn btn-primary">Show More</button>
          </div>
    </div>
  );
};

export default Gallery;
