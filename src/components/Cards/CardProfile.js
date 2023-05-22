import React from "react";

// components

export default function CardProfile() {
  return (
    <>
      <div className="relative flex flex-col w-full min-w-0 mt-16 mb-6 break-words bg-white rounded-lg shadow-xl">
        <div className="px-6">
          <div className="flex flex-wrap justify-center">
            <div className="flex justify-center w-full px-4">
              <div className="relative">
                <img
                  alt="..."
                  src={require("assets/img/team-2-800x800.jpg")}
                  className="absolute h-auto -m-16 -ml-20 align-middle border-none rounded-full shadow-xl lg:-ml-16 max-w-150-px"
                />
              </div>
            </div>
            <div className="w-full px-4 mt-20 text-center">
              <div className="flex justify-center py-4 pt-8 lg:pt-4">
                <div className="p-3 mr-4 text-center">
                  <span className="block text-xl font-bold tracking-wide uppercase text-blueGray-600">
                    22
                  </span>
                  <span className="text-sm text-blueGray-400">Friends</span>
                </div>
                <div className="p-3 mr-4 text-center">
                  <span className="block text-xl font-bold tracking-wide uppercase text-blueGray-600">
                    10
                  </span>
                  <span className="text-sm text-blueGray-400">Photos</span>
                </div>
                <div className="p-3 text-center lg:mr-4">
                  <span className="block text-xl font-bold tracking-wide uppercase text-blueGray-600">
                    89
                  </span>
                  <span className="text-sm text-blueGray-400">Comments</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 text-center">
            <h3 className="mb-2 text-xl font-semibold leading-normal text-blueGray-700">
              Jenna Stones
            </h3>
            <div className="mt-0 mb-2 text-sm font-bold leading-normal uppercase text-blueGray-400">
              <i className="mr-2 text-lg fas fa-map-marker-alt text-blueGray-400"></i>{" "}
              Los Angeles, California
            </div>
            <div className="mt-10 mb-2 text-blueGray-600">
              <i className="mr-2 text-lg fas fa-briefcase text-blueGray-400"></i>
              Solution Manager - Creative Tim Officer
            </div>
            <div className="mb-2 text-blueGray-600">
              <i className="mr-2 text-lg fas fa-university text-blueGray-400"></i>
              University of Computer Science
            </div>
          </div>
          <div className="py-10 mt-10 text-center border-t border-blueGray-200">
            <div className="flex flex-wrap justify-center">
              <div className="w-full px-4 lg:w-9/12">
                <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                  An artist of considerable range, Jenna the name taken by
                  Melbourne-raised, Brooklyn-based Nick Murphy writes, performs
                  and records all of his own music, giving it a warm, intimate
                  feel with a solid groove structure. An artist of considerable
                  range.
                </p>
                <a
                  href="#pablo"
                  className="font-normal text-sky-500"
                  onClick={(e) => e.preventDefault()}
                >
                  Show more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
