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
        hours={<NumberStats totalDownloads={2000} subtext="+" animationDuration={20} />}

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
              <img src="https://media.discordapp.net/attachments/891052579369410570/1282143337108869131/image.png?ex=671ce7c8&is=671b9648&hm=0b54902c0cf8f4e921fa0343248fc7021093682a5807366e2f26476fee152237&=&format=webp&quality=lossless&width=1100&height=644" alt="DevImage" className="w-full rounded-lg" />
              <img src="https://media.discordapp.net/attachments/890470074794803230/1284329141172178974/image.png?ex=671cf278&is=671ba0f8&hm=e41f586862b8b19d2c7fdc2605d309bfc6c997872629a08a14c640cdd5435786&=&format=webp&quality=lossless&width=2160&height=798" alt="DevImage" className="w-full rounded-lg" />
              <img src="https://media.discordapp.net/attachments/890470074794803230/1253780453476012125/image.png?ex=671d368a&is=671be50a&hm=1f5fa0cd8be32212546ecfce6678307e4298e637c938362b9a2f6ae0a0b95fd7&=&format=webp&quality=lossless&width=2160&height=816" alt="DevImage" className="w-full rounded-lg" />
              <img src="https://media.discordapp.net/attachments/890470074794803230/1205056658464837642/image.png?ex=671c9df8&is=671b4c78&hm=4633e7bef8dcdf37d11197513c908fef3a964b8e3f980be78f7a9a621c4f3d7e&=&format=webp&quality=lossless&width=2160&height=842" alt="DevImage" className="w-full rounded-lg" />

              <div className="text-3xl text-white text-center w-full bg-gradient-to-r from-orange-500 to-orange-800 rounded-md">KC-46A Pegaus with Lunar Simulations -  Since 2023</div>

              <img src="https://media.discordapp.net/attachments/1282145711332397098/1296561052770631721/image.png?ex=671c9f53&is=671b4dd3&hm=1f4939e240c92c9a0360cc512cb5353bdbd277a0a56dffb8f7c2c2b7e9a7adef&=&format=webp&quality=lossless&width=2160&height=992" alt="DevImage" className="w-full rounded-lg" />
              <img src="https://media.discordapp.net/attachments/1282145711332397098/1296561055786602648/kc46_x_c17.png?ex=671c9f54&is=671b4dd4&hm=195d0f5e90cf4f010cde679a63210f162e41005aecaaa1da8065ad76b47a856b&=&format=webp&quality=lossless&width=2160&height=900" alt="DevImage" className="w-full rounded-lg" />
              <img src="https://media.discordapp.net/attachments/1282145711332397098/1296561055132028999/20241016223003_1.png?ex=671c9f54&is=671b4dd4&hm=6fb7faed25a7104d5a8a18b29d0148fa204596f521263671896da582906145bd&=&format=webp&quality=lossless&width=2008&height=1170" alt="DevImage" className="w-full rounded-lg" />
              <img src="https://media.discordapp.net/attachments/1226669655347822723/1293501305527992383/image.png?ex=671cb277&is=671b60f7&hm=f5d94a6b690bdfe8af04f6c498bc09d686e03c867bb54ff57835ce495efa9323&=&format=webp&quality=lossless&width=2160&height=882" alt="DevImage" className="w-full rounded-lg" />
              <div className="text-3xl text-white text-center w-full bg-gradient-to-r from-orange-500 to-orange-800 rounded-md">UH-60M Blackhawk  -  Since 2021</div>

              <img src="https://media.discordapp.net/attachments/942666181268086784/1180429995286466640/60WOutside.png?ex=671cac9a&is=671b5b1a&hm=9a8785f9a0bee97f4fd39bd5adf77584d89a4becbe9c33e37df3ea6d0eb7428e&=&format=webp&quality=lossless&width=2078&height=1168" alt="DevImage" className="w-full rounded-lg" />
              <img src="https://media.discordapp.net/attachments/970339086483226704/1269888957370339420/image.png?ex=671d2600&is=671bd480&hm=35c215709a660e007727c476a41c2c50b36201d2a37403cece4186ac99351c51&=&format=webp&quality=lossless&width=2160&height=984" alt="DevImage" className="w-full rounded-lg" />
              <img src="https://media.discordapp.net/attachments/890470074794803230/1162233029125746698/Microsoft_Flight_Simulator_2023-10-12_8_37_23_PM.png?ex=671d0d1b&is=671bbb9b&hm=eaeae5a1437832a3828e461bd901be92df6513c8eb47eab80f8b8ffdb5513573&=&format=webp&quality=lossless&width=2160&height=900" alt="DevImage" className="w-full rounded-lg" />

            </div>



          </div>



        </div>


      </div>
    </div>
  )
}
