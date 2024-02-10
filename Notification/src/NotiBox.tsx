import { useState } from "react"

export default function NotiBox() {
    const [appearNoti, setAppearNoti] = useState(false);
    console.log(appearNoti);
    return (
        <div className="relative">
            <div className=" transition z-10 absolute right-0 top-0 bg-[#0C0E41] p-3 rounded-full text-white cursor-pointer translate-x-1/2 -translate-y-1/2 hover:scale-110" onClick={() => { setAppearNoti(!appearNoti) }}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                </svg>
            </div>
            <div className={`w-[452px] bg-white p-10 rounded-md shadow-md select-none transition-all ${appearNoti ? "opacity-1 translate-y-0" : "opacity-0 translate-y-5"} `}>
                <h1 className="text-[#0C0E41] text-2xl font-semibold ">You have a 1 new message</h1>
                <div className="flex mt-6">
                    <div className="bg-[#FFE9F2] items-center p-4 text-[#C83974] rounded-md ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                        </svg>
                    </div>
                    <div className="ml-4 flex flex-col justify-center">
                        <h2 className="font-medium text-lg text-[#0C0E41]">Feb 10</h2>
                        <p className="font-base text-lg text-[#0C0E41]">Happy new year!</p>
                    </div>
                </div>
                <div className="text-center space-x-4 mt-7">
                    <button className="border-[2px] border-[#158ABB] rounded-full text-[#158ABB] py-2 px-4 font-semibold">Twitter</button>
                    <button className="border-[2px] border-[#205195] rounded-full text-[#205195] py-2 px-4 font-semibold">Facebook</button>
                </div>
            </div>
        </div>
    )
}
