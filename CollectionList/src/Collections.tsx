export default function Collections() {
    const TAGS: string[] = ["Profile", "New York", "Relaxing", "Person", "Fashion"];
    return (
        <div className="bg-[#EFF0F1] w-full shadow-md p-16">
            <h1 className="font-meri text-[32px] font-bold text-[#0E0E38]" >Popular Collections</h1>
            <div className="space-x-4 mt-6">
                {
                    TAGS.map(tag => {
                        return (
                            <a id={tag} className="p-2 text-[#0E0E38] font-medium font-popi bg-white rounded-md hover:opacity-80 cursor-pointer inline-block mb-4" >{tag}</a>
                        )
                    })
                }
            </div>
            <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                <div className="bg-white rounded-lg p-6 font-popi">
                    <img src="https://placewaifu.com/image/100" className="w-full aspect-video rounded-md" alt="" />
                    <div className="grid grid-cols-3 mt-4 gap-4">
                        <img src="https://placewaifu.com/image/200" className="rounded-md w-full aspect-video" alt="" />
                        <img src="https://placewaifu.com/image/300" className="rounded-md w-full aspect-video" alt="" />
                        <img src="https://placewaifu.com/image/400" className="rounded-md w-full aspect-video" alt="" />
                    </div>
                    <div className="flex justify-between mt-6">
                        <p className="text-2xl font-medium text-[#0E0E38]">People</p>
                        <div className="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                            </svg>
                            <p className="text-[#0E0E38] text-base font-medium ml-2">
                                144
                            </p>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-lg p-6 font-popi">
                    <img src="https://placewaifu.com/image/100" className="w-full aspect-video rounded-md" alt="" />
                    <div className="grid grid-cols-3 mt-4 gap-4">
                        <img src="https://placewaifu.com/image/200" className="rounded-md w-full aspect-video" alt="" />
                        <img src="https://placewaifu.com/image/300" className="rounded-md w-full aspect-video" alt="" />
                        <img src="https://placewaifu.com/image/400" className="rounded-md w-full aspect-video" alt="" />
                    </div>
                    <div className="flex justify-between mt-6">
                        <p className="text-2xl font-medium text-[#0E0E38]">People</p>
                        <div className="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                            </svg>
                            <p className="text-[#0E0E38] text-base font-medium ml-2">
                                144
                            </p>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-lg p-6 font-popi">
                    <img src="https://placewaifu.com/image/100" className="w-full aspect-video rounded-md" alt="" />
                    <div className="grid grid-cols-3 mt-4 gap-4">
                        <img src="https://placewaifu.com/image/200" className="rounded-md w-full aspect-video" alt="" />
                        <img src="https://placewaifu.com/image/300" className="rounded-md w-full aspect-video" alt="" />
                        <img src="https://placewaifu.com/image/400" className="rounded-md w-full aspect-video" alt="" />
                    </div>
                    <div className="flex justify-between mt-6">
                        <p className="text-2xl font-medium text-[#0E0E38]">People</p>
                        <div className="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                            </svg>
                            <p className="text-[#0E0E38] text-base font-medium ml-2">
                                144
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
