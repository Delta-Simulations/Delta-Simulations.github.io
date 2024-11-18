export const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-start gap-20 p-5">
      <div className="text-center">
        <p className="w-full font-semibold text-white text-2xl mb-4"> {/* Larger email header */}
        Submit an application to join the team or assist us as an SME
        </p>
        <button
          className="p-[3px] relative"
          onClick={() => {
            window.open('https://forms.gle/7yb7KDQXphNtU13e9', '_blank')
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-800 rounded-lg" />
          <div className="px-8 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">
            Apply now
          </div>
        </button>
      </div>
      {/* Email Us Section */}
      <div className="text-center">
        <p className="w-full font-semibold text-white text-2xl mb-4"> {/* Larger email header */}
          Prefer to contact us directly?
        </p>
        <button
          className="p-[3px] relative"
          onClick={() => {
            window.open('mailto:inquiries@deltasimulations.ca', '_blank')
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-800 rounded-lg" />
          <div className="px-8 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">
            Email Us
          </div>
        </button>
      </div>
    </div>
  )
}
