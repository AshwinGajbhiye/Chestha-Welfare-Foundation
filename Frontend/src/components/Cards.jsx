import { useState } from "react";

function Cards() {
    return <div>
        <div className="text-center pb-5">
            <h1 className="text-5xl">What do we do ?</h1>
            <p className="tracking-widest text-gray-500">We owe to humanity, and so do humans</p>
        </div>
        <div className="flex">
            <Card title={"title"} des={"description"} />
            <Card title={"title"} des={"description"} />
            <Card title={"title"} des={"description"} />
            <Card title={"title"} des={"description"} />
            
        </div>
    </div>
}

function Card({title,des}) {
    const [scrollActive, setScrollActive] = useState(false);

    const toggleScroll = () => {
        setScrollActive(!scrollActive);
    };
    return <div>
        <div class="relative w-80 bg-white shadow-sm border border-slate-200 rounded-lg px-3 pb-6 ml-8 my-5">
            <div class="flex justify-center mb-4 mt-5">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10 text-purple-500">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z" />
                </svg>
            </div>

            <div class="flex justify-center mb-3">
                <h5 class="text-slate-800 text-2xl font-semibold">
                    {title}
                </h5>
            </div>
            <div class={`p-3 mt-5 border-t border-slate-100 text-center max-h-60 ${
                    scrollActive
                        ? "overflow-y-auto [&::-webkit-scrollbar-thumb]:rounded-xl [&::-webkit-scrollbar-thumb]:bg-slate-300 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:rounded-xl [&::-webkit-scrollbar-track]:bg-slate-100"
                        : "overflow-hidden"
                }`}>
                <p class="block text-slate-600 leading-normal font-light mb-4 max-w-lg">
                    {des}
                </p> <br />
                <p class="block text-slate-600 leading-normal font-light mb-4 max-w-lg">
                    Still more content to keep the scroll active. Let's make sure the scrollbar styling is correct. Apple's scrollbar style is subtle, with a thin, sleek design. Scroll down for more! Keep adding more content to ensure the scroll is working.
                    More text to fill the space, as we continue to check how scroll behaves.
                </p>
            </div>
            <div className="mt-4">
                <button
                    onClick={toggleScroll}
                    className=" text-green-600 px-6 py-2 leading-normal rounded-lg hover:shadow-md font-light"
                >
                    {scrollActive ? "SHOW LESS" : "...READ MORE"}
                </button>
            </div>
        </div>
    </div>
}

export default Cards;