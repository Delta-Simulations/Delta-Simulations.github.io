// import { useRef, useState, useEffect } from 'react'
import { NumberStats } from '../components/numberIncrease'
import { AboutStatsProvider } from '../components/aboutStatsProvider'
// import { AboutBioProvider } from '../components/aboutBioProvider'

export const About = () => {
  return (
    <div className="flex flex-col items-center justify-start gap-6 p-5">
      <AboutStatsProvider
        downloads={<NumberStats totalDownloads={400} subtext="K+" animationDuration={20} />}
        yearsOfDevelopment={<NumberStats totalDownloads={3} subtext="+" animationDuration={20} />}
        contributors={<NumberStats totalDownloads={25} subtext="+" animationDuration={20} />}

      />
      <div className=" w-5/6 flex flex-col gap-6">
        {/*<AboutBioProvider
          name="C-17"
          bio="Lorem ipsum dolor sit amet consectetur adipisicing elit. A dignissimos aliquam provident, illo modi dolore accusantium officiis minima dolores ipsa placeat eligendi dicta repellat soluta debitis perferendis beatae eaque. Quaerat."
          image="/delta.png"
        />*/}
        <div className="h-fit bg-black/70 p-8 rounded-3xl  border-2 border-yellow-500/20 flex items-center gap-10 flex-row">
          <div className="flex items-center gap-10">
            <div className="text-3xl text-yellow-500">Our Projects</div>

            <div className="w-full text-slate-300">
              We are currently developing a C-17, UH-60M, and KC-46 in collaboration with Lunar Simulations for Microsoft Flight Simulator.
              We are dedicated to creating highly detailed, accessible addons for flight simulation.
              Our development team is spread globally, united through our shared love for aviation.
              We work directly with talented Subject Matter Experts to ensure our work is accurate, 
              and are not afraid to push the boundaries of what is possible.

            </div>


          </div>



        </div>
        <div className="h-fit bg-black/70 p-8 rounded-3xl  border-2 border-yellow-500/20 flex items-center gap-10 flex-row">
          <div className="flex items-center gap-10">
            <div className="text-3xl text-yellow-500">Gallery</div>

            <div className="flex flex-wrap gap-4 justify-center w-full">
              {/* <div className="w-full h-1 my-1 bg-gradient-to-r from-orange-500 to-orange-800" /> */}

              <div className="text-3xl text-white text-center w-full my-1 bg-gradient-to-r from-orange-500 to-orange-800 rounded-md">C-17A Globemaster III  -  Since 2021</div>
              <img src="/C171.png" alt="DevImage" className="w-full rounded-lg" />
              <img src="/C172.png" alt="DevImage" className="w-full rounded-lg" />
              <img src="/C173.png" alt="DevImage" className="w-full rounded-lg" />
              <img src="/C174.png" alt="DevImage" className="w-full rounded-lg" />

              <div className="text-3xl text-white text-center w-full bg-gradient-to-r from-orange-500 to-orange-800 rounded-md">KC-46A Pegaus with Lunar Simulations -  Since 2023</div>

              <img src="/kc461.png" alt="DevImage" className="w-full rounded-lg" />
              <img src="/kc462.png" alt="DevImage" className="w-full rounded-lg" />
              <img src="/kc463.png" alt="DevImage" className="w-full rounded-lg" />
              <img src="/kc464.png" alt="DevImage" className="w-full rounded-lg" />
              <div className="text-3xl text-white text-center w-full bg-gradient-to-r from-orange-500 to-orange-800 rounded-md">UH-60M Blackhawk  -  Since 2021</div>

              <img src="/H601.png" alt="DevImage" className="w-full rounded-lg" />
              <img src="/H602.png" alt="DevImage" className="w-full rounded-lg" />
              <img src="/H603.png" alt="DevImage" className="w-full rounded-lg" />

            </div>



          </div>



        </div>


      </div>
    </div>
  )
}
