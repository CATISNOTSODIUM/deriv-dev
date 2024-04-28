const NavBar = () => {
    return (
        <div class="fixed top-32 left-0 right-0 z-50 flex ml-20 w-auto h-10">
            <div class="max-w-xl px-10 rounded-xl  z-50 flex items-center justify-center w-auto h-10 bg-secondaryBackground text-white">
                <div class="flex flex-row gap-10">
                    <div class="flex flex-row gap-5">
                        <svg class="w-5 h-5 text-gray-800 pt-1 dark:text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M7.75 4H19M7.75 4a2.25 2.25 0 0 1-4.5 0m4.5 0a2.25 2.25 0 0 0-4.5 0M1 4h2.25m13.5 6H19m-2.25 0a2.25 2.25 0 0 1-4.5 0m4.5 0a2.25 2.25 0 0 0-4.5 0M1 10h11.25m-4.5 6H19M7.75 16a2.25 2.25 0 0 1-4.5 0m4.5 0a2.25 2.25 0 0 0-4.5 0M1 16h2.25" />
                        </svg>
                        <div class="hover:text-primarySubTitle hover:font-bold">TRIG</div>
                        <div class="hover:text-primarySubTitle hover:font-bold">LN/EXP</div>
                        <div class="hover:text-primarySubTitle hover:font-bold">INV</div>
                    </div>
                    <div className="bg-[#2d2d2d]  w-1"></div>
                    <div class="flex flex-row gap-5">
                        <div class="hover:text-primarySubTitle hover:font-bold">30</div>
                        <div class="hover:text-primarySubTitle hover:font-bold">60</div>
                        <div class="hover:text-primarySubTitle hover:font-bold">120</div>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default NavBar;