import { useState } from "react"
import { InputBar } from "./InputBar"

export default function Form() {
    const [reviewScore, setReviewScore] = useState(0);
    return (
        <div className="bg-white w-[700px] p-16 rounded-lg select-none">
            <h1 className="text-3xl font-meri font-black">Overall rating</h1>
            <div className="flex flex-col gap-8">
                <div className="mt-4">
                    <div className="flex gap-2">
                        {[1, 2, 3, 4, 5].map(star => {
                            return (
                                <span key={star} onClick={() => { setReviewScore(star) }} className={`p-2 border-[2px] border-[#EEF2FF] rounded-[6px] ${star <= reviewScore ? "text-[#FFB444]" : "text-[#AEB3C5]"}  cursor-pointer`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-9 h-9 ${star <= reviewScore ? "fill-[#FFEC8A]" : "fill-none"}`}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                    </svg>
                                </span>
                            )
                        })}
                    </div>
                    <p className="text-sm font-popi font-normal mt-2">Click to rate</p>
                </div>
                <InputBar title="Review title" placeholder="Example: Easy to use" type="text" />
                <div>
                    <p className="text-base font-medium font-popi">Would you recommend this product to a friend?</p>
                    <input type="radio" id="yes" name="rcm" value="yes" className="mt-6 mr-2 cursor-pointer" />
                    <label htmlFor="yes" className="mr-6 cursor-pointer">Yes</label>
                    <input type="radio" id="no" name="rcm" value="no" className="mt-6 mr-2 cursor-pointer" />
                    <label htmlFor="no" className="cursor-pointer">No</label>
                </div>
                <InputBar title="Product review" placeholder="Example: Since I bought this a month ago, it has been used a lot. What I like best/what is worst about this product is ..." type="textarea" />
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-2">
                    <InputBar title="Nickname" placeholder="Example: bob27" type="text" />
                    <InputBar title="Email address (will not be published)" placeholder="Example: your@email.com" type="text" />
                </div>
                <div className="flex items-center">
                    <input type="checkbox" id="agree" className="mr-2 cursor-pointer" />
                    <label htmlFor="agree" className="text-base font-medium font-popi cursor-pointer">I accept the terms and conditions</label>
                </div>
                <p className="text-sm font-medium font-popi">You will be able to receive emails in connection with this review (eg if others comment on your review). All emails contain the option to unsubscribe. We can use the text and star rating from your review in other marketing.</p>
                <button className="bg-[#121633] text-white p-4 font-medium font-popi w-fit">Submit product review</button>
            </div>
        </div>
    )
}