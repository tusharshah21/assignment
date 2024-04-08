import React from 'react'
import Tushar from "../assets/tushar.jpeg"

function Social() {
  return (
    <>
        <div>
        <div className="bg-[hsl(0,0%,8%)] min-h-screen flex justify-center items-center Figtree poppins-regular">
        <div className="cardo md:w-[26%] w-[89%] bg-[hsl(0,0%,12%)] rounded-xl px-6 lg:px-10">
            <img src={Tushar} alt="Tushar" className="w-[30%] lg:mt-12 rounded-full mx-auto mt-8 lg:my-8" />
            <div className="text-center text-white my-4 lg:my-8">
            <h1 className="inter-semibold text-2xl ">Tushar Kumar Shah</h1>
            <p className="inter-semibold text-[hsl(75,94%,57%)] lg:py-2">Mohali, India</p>
            <p className="inter-regular text-[14px] py-4 opacity-80">"Front-end developer and avid reader"</p>
            <button className="btn bg-[hsl(0,0%,20%)] hover:bg-[hsl(75,94%,57%)] text-md w-full py-3 my-2 inter-semibold rounded-lg hover:text-[hsl(0,0%,12%)]"><a href="https://github.com/tusharshah21">Github</a></button>
            <button className="btn bg-[hsl(0,0%,20%)] hover:bg-[hsl(75,94%,57%)] text-md w-full py-3 my-2 inter-semibold rounded-lg hover:text-[hsl(0,0%,12%)]"><a href="https://www.frontendmentor.io/profile/tusharshah21">Frontend Mentor</a></button>
            <button className="btn bg-[hsl(0,0%,20%)] hover:bg-[hsl(75,94%,57%)] text-md w-full py-3 my-2 inter-semibold rounded-lg hover:text-[hsl(0,0%,12%)]"><a href="https://www.linkedin.com/in/tushar21shah/">Linkedin</a></button>
            <button className="btn bg-[hsl(0,0%,20%)] hover:bg-[hsl(75,94%,57%)] text-md w-full py-3 my-2 inter-semibold rounded-lg hover:text-[hsl(0,0%,12%)]"><a href="https://twitter.com/Tushars46106674">Twitter</a></button>
            <button className="btn bg-[hsl(0,0%,20%)] hover:bg-[hsl(75,94%,57%)] text-md w-full py-3 my-2 inter-semibold rounded-lg hover:text-[hsl(0,0%,12%)]"><a href="https://www.instagram.com/shahtusharkumar/">Instagram</a></button>

            </div>
        </div>
        </div>
        </div>
    </>
  )
}

export default Social