import Avatar from "../assets/avatar.jpg";
export default function AboutMe() {
  return (
    <div className="bg-white">
      <div className="relative isolate px-6 lg:px-8 h-full">
        {/* Background blur top */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          {/* Background gradient */}
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>

        {/* Main content */}
        <div className="mx-auto max-w-2xl h-full justify-center items-center text-center">
          <img
            src={Avatar}
            alt="Avatar"
            className="w-90 h-auto object-cover rounded-lg align-middle mx-auto"
          />
          <h1 className="mt-6 text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
            Welcome to my profile
          </h1>
          <p className="mt-6 text-lg font-medium text-gray-600 sm:text-xl px-4">
            I am a Full Stack Developer with comprehensive expertise in both
            frontend and backend development, capable of delivering end-to-end
            web solutions with efficiency and precision.
          </p>
          <div className="mt-8 flex items-center justify-center gap-x-6">
            <a
              href="/skills"
              className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
            >
              View more
            </a>
            <a
              href="/contact"
              className="text-sm font-semibold text-gray-900 hover:underline"
            >
              Contact with me <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        {/* Background blur bottom */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>
    </div>
  );
}
