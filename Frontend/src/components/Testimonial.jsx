import { useState } from "react";

function Testimonial() {
    return <div>
        <div className="text-center py-5">
            <h1 className="text-5xl">Testimonials</h1>
        </div>
        <div className="flex">
            <TestCard />
            <TestCard />
            <TestCard />
        </div>
    </div>
}

export default Testimonial;

function TestCard() {

    const [showText , setShowText] = useState(false);

    function toggleText(){
        setShowText(!showText);
    }

    return <div>
        <div class="flex w-full p-4 max-w-md flex-col rounded-lg bg-white shadow-sm border border-slate-200 my-6 ml-6">
            <div class="flex items-center gap-4 text-slate-800">
                <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80" alt="Tania Andrew" class="relative inline-block h-[58px] w-[58px] !rounded-full  object-cover object-center" />
                <div class="flex w-full flex-col">
                    <div class="flex items-center justify-between">
                        <h5 class="text-xl font-semibold text-slate-800">
                            Tania Andrew
                        </h5>
                    </div>
                    <p class="text-xs uppercase font-bold text-slate-500 mt-0.5">
                        Designer @ Google
                    </p>
                </div>
            </div>
            <div class={`p-3 mt-6 border-t border-slate-100 text-center max-h-60 ${
                    showText
                        ? "overflow-y-auto"
                        : "overflow-hidden"
                }`}>
                <p class="text-base text-slate-600 font-light ">
                    &quot;I found solution to all my design needs from Creative Tim. I use
                    them as a freelancer in my hobby projects for fun! And its really
                    affordable, very humble guys !!!  excepturi accusamus consequatur nulla aliquid quas ad, hic blanditiis.&quot;
                </p>
            </div>
            <div className="flex justify-center mt-4">
                <button onClick={toggleText} className=" text-green-600 px-6 py-2 leading-normal rounded-lg hover:shadow-md font-light">
                    {showText ? "SHOW LESS" : "...READ MORE"}
                </button>
            </div>
        </div>
    </div>
}