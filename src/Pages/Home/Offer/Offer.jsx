import Image1 from '../../../assets/offer/offer1.webp'
import Image2 from '../../../assets/offer/offer2.webp'
import Image3 from '../../../assets/offer/offer3.webp'
import Image4 from '../../../assets/offer/offer4.webp'
import Image5 from '../../../assets/offer/offer5.webp'

const Offer = () => {
    return (
        <div className='lg:mx-20 mx-2 my-20'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-center'>
                <div className='space-y-16'>
                    <img src={Image1} alt="" />
                    <img src={Image2} alt="" />
                </div>
                <div>
                <img src={Image3} alt="" />
                </div>
                <div className='space-y-16'>
                <img src={Image4} alt="" />
                <img src={Image5} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Offer;