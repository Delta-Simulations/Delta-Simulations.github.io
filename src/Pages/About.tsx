import { useState } from 'react'
import { NumberStats } from '../components/numberIncrease'
import { AboutStatsProvider } from '../components/aboutStatsProvider'
// import { AboutBioProvider } from '../components/aboutBioProvider'

interface GallerySectionProps {
  title: string
  subtitle?: string
  images: string[]
}

interface AircraftGallerySectionProps {
  title: string
  subtitle?: string
  description?: string
  images: string[]
}

export const AircraftGallerySection = ({
  title,
  subtitle,
  description,
  images,
}: AircraftGallerySectionProps) => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">

      {/* LEFT — Aircraft Info */}
      <div className="lg:sticky lg:top-24 flex flex-col gap-4">
        <h3 className="text-3xl font-semibold text-yellow-500">
          {title}
        </h3>

        {subtitle && (
          <p className="text-sm uppercase tracking-wide text-orange-400">
            {subtitle}
          </p>
        )}

        {description && (
          <p className="text-slate-300 leading-relaxed">
            {description}
          </p>
        )}
      </div>

      {/* RIGHT — Image Grid */}
      <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`${title} ${index + 1}`}
            loading="lazy"
            className="w-full aspect-video object-cover rounded-xl
                       border border-white/10
                       transition-all duration-200
                       hover:scale-[1.5] hover:border-yellow-500/40"
          />
        ))}
      </div>

    </section>
  )
}
interface ZoomableImageProps {
  src: string
  alt: string
}

export const ZoomableImage = ({ src, alt }: ZoomableImageProps) => {
  const [isZoomed, setIsZoomed] = useState(false)

  return (
    <>
      {/* Grid Image */}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="w-full aspect-video object-cover rounded-xl
                   border border-white/10
                   transition-all duration-200 cursor-pointer
                   hover:scale-[1.03] hover:border-yellow-500/40"
        onClick={() => setIsZoomed(true)}
      />

      {/* Fullscreen Overlay */}
      {isZoomed && (
        <div
          className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center"
          onClick={() => setIsZoomed(false)} // clicking outside closes
        >
          <img
            src={src}
            alt={alt}
            className="max-w-[90vw] max-h-[90vh] rounded-xl shadow-2xl
                       transform transition-transform duration-300 scale-100 cursor-auto"
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking image
          />
        </div>
      )}
    </>
  )
}

export const GallerySection = ({ title, subtitle, images }: GallerySectionProps) => {
  return (
    <section className="flex flex-col gap-6">
      {/* Header */}
      <div className="text-center">
        <h3 className="text-2xl md:text-3xl font-semibold text-white 
                       bg-gradient-to-r from-orange-500 to-orange-800 
                       rounded-xl py-2 px-4 inline-block">
          {title}
        </h3>
        {subtitle && (
          <p className="mt-2 text-sm text-slate-400">{subtitle}</p>
        )}
      </div>

{/* RIGHT — Image Grid */}
<div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
  {images.map((src, index) => (
    <ZoomableImage key={index} src={src} alt={`${title} ${index + 1}`} />
  ))}
</div>
    </section>
  )
}


export const About = () => {
  const startDate = new Date('2020-10-01')
  const now = new Date()

  const yearsOfDevelopment = Math.floor(
    (now.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24 * 365.25)
  )

  return (
    <div className="flex flex-col items-center justify-start gap-6 p-5">
      {/* Stats */}
<AboutStatsProvider
  downloads={
    <NumberStats
      totalDownloads={1.1}
      subtext="M+"
      decimals={1}
      animationDuration={2500}
    />
  }
  yearsOfDevelopment={
    <NumberStats
      totalDownloads={yearsOfDevelopment}
      subtext="+"
      decimals={0}
      animationDuration={1500}
    />
  }
  contributors={
    <NumberStats
      totalDownloads={30}
      subtext="+"
      decimals={0}
      animationDuration={1500}
    />
  }
/>

      {/* Projects & Gallery */}
      <div className="w-5/6 flex flex-col gap-6">

        {/* About / Projects */}
        <div className="h-fit bg-black/70 p-8 rounded-3xl border-2 border-yellow-500/20 flex flex-col md:flex-row gap-10">
          <div className="flex flex-col gap-4">
            <div className="text-3xl text-yellow-500">Our Projects</div>
            <div className="text-slate-300">
              We are currently developing a C-17, UH-60M, and KC-46 in collaboration with Lunar Simulations for Microsoft Flight Simulator.
              We are dedicated to creating highly detailed, accessible addons for flight simulation.
              Our development team is spread globally, united through our shared love for aviation.
              We work directly with talented Subject Matter Experts to ensure our work is accurate,
              and are not afraid to push the boundaries of what is possible.
            </div>
          </div>
        </div>

        {/* Aircraft Gallery Sections */}
        <div className="h-fit bg-black/70 p-8 rounded-3xl border-2 border-yellow-500/20 flex flex-col gap-24">
          <AircraftGallerySection
            title="C-17A Globemaster III"
            subtitle="In development since 2021"
            description="A highly detailed military transport aircraft developed in collaboration with subject matter experts to accurately replicate real-world operations."
            images={[
              '/C171.png',
              '/C172.png',
              '/C173.png',
              '/C174.png',
            ]}
          />

          <AircraftGallerySection
            title="KC-46A Pegasus"
            subtitle="With Lunar Simulations — since 2023"
            description="A modern aerial refueling tanker designed for realism, accessibility, and high-fidelity simulation."
            images={[
              '/kc461.png',
              '/kc462.png',
              '/kc463.png',
              '/kc464.png',
            ]}
          />

          <AircraftGallerySection
            title="UH-60M Black Hawk"
            subtitle="In development since 2021"
            description="A utility helicopter focused on accurate systems modeling and immersive flight dynamics."
            images={[
              '/H601.png',
              '/H602.png',
              '/H603.png',
            ]}
          />
        </div>

      </div>
    </div>
  )
}
