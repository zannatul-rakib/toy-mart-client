import img1 from '../../../assets/latest/img1.jpg'
import img2 from '../../../assets/latest/img9.jpg'
import img3 from '../../../assets/latest/img6.jpg'
import img4 from '../../../assets/latest/img3.jpg'
import img5 from '../../../assets/latest/img2.jpg'
import img6 from '../../../assets/latest/img5.jpg'


const Gallery = () => {
  return (
      <div className="lg:mx-20 pb-20 pt-10 mx-2">
          <div className="text-center mb-10">
              <h2 className="text-primary text-xl lg:text-3xl font-semibold lg:font-bold mb-2">Popular Toys</h2>
              <p>Our Popular for kids review. they loves it.</p>
          </div>
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3  gap-4">
        <div>
          <img
            className="h-[250px] max-w-full rounded-lg object-cover"
            src={img1}
            alt=""
          />
        </div>
        <div>
          <img
            className="h-[250px] max-w-full rounded-lg object-cover"
            src={img2}
            alt=""
          />
        </div>
        <div>
          <img
            className="h-[250px] max-w-full rounded-lg object-cover"
            src={img3}
            alt=""
          />
        </div>
        <div>
          <img
            className="h-[250px] max-w-full rounded-lg object-cover"
            src={img4}
            alt=""
          />
        </div>
        <div>
          <img
            className="h-[250px] max-w-full rounded-lg object-cover"
            src={img5}
            alt=""
          />
        </div>
        <div>
          <img
            className="h-[250px] max-w-full rounded-lg object-cover"
            src={img6}
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
