import aboutImg from '../assets/about-us-img.svg'

function About() {
    return <div>
        <div className="grid grid-col-6 gap-4 py-30">
            <div className="grid grid-cols-6 gap-4 items-center">
                {/* Left Section: Image */}
                <div className="col-start-1 col-end-3 pl-20">
                    <div className="w-xl">
                        <img src={aboutImg} alt="About-us img" />
                    </div>
                </div>

                {/* Right Section: Text */}
                <div className="col-start-4 col-end-7 pr-10 text-left">
                    <h1 className="pb-2 text-5xl space-x-4">
                        <span className="text-black pb-10">About Us</span>

                    </h1>
                    <p className="font-normal tracking-wider text-lg text-gray-500">
                        MEGHU – ‘Mission to Empower Global Humanitarian Upliftment’ is a unique platform that brings together different social causes and issues under a single umbrella. Our organization is dedicated to addressing a wide range of social challenges, from poverty and inequality to environmental sustainability and human rights.</p>
                    <br />
                        <p className="font-normal tracking-wider text-lg text-gray-500">We understand that each of these issues is complex and interrelated, and that tackling them requires a holistic approach. That's why we have created a single umbrella that allows us to bring together people, resources, and expertise from across different fields and disciplines.</p>
                    <br />
                        <p className="font-normal tracking-wider text-lg text-gray-500">Whether you are passionate about education, health, poverty, climate change, or any other social cause, you will find a place in our organization. We provide opportunities for volunteers, donors, and partners to get involved in a way that matches their interests and skills.
                        </p>
                    <br />
                       <p className="font-normal tracking-wider text-lg text-gray-500"> We believe that by working together, we can create a more just, sustainable, and equitable world. Join us today and become part of our community of change-makers who are committed to making a positive impact on the world.</p>                    
                </div>
            </div>
        </div>
    </div>
}

export default About;