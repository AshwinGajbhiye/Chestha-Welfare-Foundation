import facebookLogo from '../assets/facebook-svgrepo-com.svg';
import twitter from '../assets/twitter-svgrepo-com.svg'
import youtube from '../assets/youtube-168-svgrepo-com.svg'
import instagram from '../assets/instagram-svgrepo-com.svg'
import whatsapp from '../assets/whatsapp-svgrepo-com.svg'

function Footer() {
    return (
        <div>
            <div className="mt-10 min-h-[500px] bg-green-700 grid grid-cols-3 items-start pt-20 px-10">
                <div className="text-left">
                    <h1 className="font-bold text-2xl text-yellow-300 tracking-wide">Newsletter</h1>
                    <p className="text-white pb-5">Subscribe to our newsletter to get more information</p>
                    <input
                        type="text"
                        placeholder="Email"
                        className="rounded-xl bg-white h-10 w-90 p-2"
                    />
                    <br />
                    <button className="bg-yellow-300 mt-5 py-2 px-7 rounded-3xl tracking-wide">
                        Subscribe
                    </button>
                    <div className="flex mt-5 ">
                        <img src={facebookLogo} alt="Facebook Logo" className="w-10 h-10 cursor-pointer" />
                        <img src={twitter} alt="Twitter Logo" className="w-8 h-8 cursor-pointer mt-1.5 ml-1" />
                        <img src={youtube} alt="Twitter Logo" className="w-8 h-8 cursor-pointer mt-1.5 ml-1.5" />
                        <img src={instagram} alt="Twitter Logo" className="w-8 h-8 cursor-pointer mt-1.5 ml-2" />
                        <img src={whatsapp} alt="Twitter Logo" className="w-8 h-8 cursor-pointer mt-1.5 ml-2" />
                    </div>
                </div>
                <div className="col-span-1 flex justify-center pl-40">
                    <div>
                        <h1 className="font-bold text-2xl text-yellow-300 tracking-wide">Navigation</h1>
                        <ul className='flex flex-col text-white gap-4 mt-3 text'>
                            <a href="#">Home</a>
                            <a href="">Our Activities</a>
                            <a href="">Get Involved</a>
                            <a href="">About Us</a>
                            <a href="">Contact Us</a>
                        </ul>
                    </div>
                </div>
                <div className="col-span-1 flex justify-center ">
                    <div className='w-62'>
                        <h1 className="font-bold text-2xl text-yellow-300 tracking-wide">Address</h1>
                        <p className='text-white '>
                            18/110 Karamchari Nagar, PAC Road, Kanpur, Uttar Pradesh - 208007
                        </p>
                        <h1 className="font-bold text-2xl text-yellow-300 tracking-wide pt-4">Call us at</h1>
                        <p className='text-white'>+91-6387653090</p>
                    </div>
                </div>
                <div className='pl-16'>
                    <p className="border-b-[0.5px] w-[1200px] border-b-white"></p>
                </div>
                
            </div>
        </div>
    );
}

export default Footer;
