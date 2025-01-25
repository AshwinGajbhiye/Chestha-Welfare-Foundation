
function Navbar() {
    return <div>
        <div class="flex p-10 bg-transparent font-[14px] ">
            <div class="w-14 flex-1 text-black pl-2">Logo</div>
            <div class="w-64 flex-2 text-black pt-2 pb-2 font-extrabold">
                <div className="flex justify-center space-x-8">
                    <button className="hover:text-green-600">Home</button>
                    <button className="hover:text-green-600">Our Activities </button>
                    <button className="hover:text-green-600">Get Involved</button>
                    <button className="hover:text-green-600">About Us</button>
                    <button className="hover:text-green-600">Contact Us</button>
                </div>
            </div>
            <div class="w-14 flex-1  text-white flex justify-end items-center pr-2">
                <button className="bg-green-700 rounded-3xl px-4 py-2 font-extrabold text-[14px] shadow-md">Donate Now</button>
            </div>

        </div>

    </div>
}

export default Navbar;