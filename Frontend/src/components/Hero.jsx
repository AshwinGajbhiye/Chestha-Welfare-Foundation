import feedImg from '../assets/feed-homeless.svg'

function Hero(){
    return <div>
        <div className="grid grid-col-6 gap-4">
            <div className="col-start-1 col-end-4 pl-12 text-left">
                <h1 className="pt-36 pb-2 text-5xl space-x-4"> <span className="text-black">Feed</span><span className="text-green-500">Homeless</span></h1>
                <p className="font-normal tracking-wider text-lg text-gray-500">Your generous donation of ₹ 1500 can provide 
                    a Child Care Kit, containing essential items
                    to support a child's well-being and development.
                    Help us create a safe and nurturing environment
                    for children in need. Together, we can give them 
                    a brighter future and the tools they need to thrive.
                </p>
                <button className="bg-green-700 mt-4 rounded-3xl text-white px-10 py-2 font-extrabold text-base shadow-md">
                    Donate
                </button>
            </div>
            <div className="col-start-4 col-end-6">
                <div className="w-2xl">
                    <img src={feedImg}  />
                </div>
            </div>
        </div>
    </div>
}

export default Hero;