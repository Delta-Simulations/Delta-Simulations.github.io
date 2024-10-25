export const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-start gap-6 p-5">
      {/* Google Form Embed */}
      <div className="w-full mb-10 items-justify" > {/* Increased margin-bottom for better spacing */}
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSd6fNlJSlfW11IjDmH92_N-WVoLioZqVFVqVzawav-OjljbAg/viewform?embedded=true"
          width="100%"
          height="370"
          title="Google Form"
        >
        </iframe>
      </div>

      {/* Email Us Section */}
      <div className="text-center">
        <p className="w-full font-semibold text-white text-2xl mb-4"> {/* Larger email header */}
          Prefer to contact us directly?
        </p>
        <button
          className="p-[3px] relative"
          onClick={() => {
            window.open('mailto:youremail@example.com', '_blank')
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
