import img1 from '../../../assets/upcoming/upcoming1.jpg'
import img2 from '../../../assets/upcoming/upcoming2.jpg'
import img3 from '../../../assets/upcoming/upcoming3.jpg'
import img4 from '../../../assets/upcoming/upcoming4.jpg'
import img5 from '../../../assets/upcoming/upcoming5.jpg'
import img6 from '../../../assets/upcoming/upcoming6.jpg'


const UpcomingToys = () => {
    
    return (
        <div className="lg:mx-20 py-20 mx-2">
        <div className="text-center mb-10">
          <h2 className="text-primary text-xl lg:text-3xl font-semibold lg:font-bold mb-2">Upcoming Toys</h2>
          <p>You Love this toys. This toy is very beautiful</p>
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

export default UpcomingToys;