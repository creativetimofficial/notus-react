/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function Index() {
  return (
    <>
      <IndexNavbar fixed />
      <section className="relative flex items-center h-screen pt-16 header max-h-860-px">
        <div className="container flex flex-wrap items-center mx-auto">
          <div className="w-full px-4 md:w-8/12 lg:w-6/12 xl:w-6/12">
            <div className="pt-32 sm:pt-0">
              <h2 className="text-4xl font-semibold text-blueGray-600">
                Notus React - A beautiful extension for Tailwind CSS.
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                Notus React is Free and Open Source. It does not change any of
                the CSS from{" "}
                <a
                  href="https://tailwindcss.com/?ref=creativetim"
                  className="text-blueGray-600"
                  target="_blank"
                >
                  Tailwind CSS
                </a>
                . It features multiple HTML elements and it comes with dynamic
                components for ReactJS, Vue and Angular.
              </p>
              <div className="mt-12">
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/react/overview/notus?ref=nr-index"
                  target="_blank"
                  className="px-6 py-4 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none get-started focus:outline-none bg-sky-500 active:bg-sky-600 hover:shadow-lg"
                >
                  Get started
                </a>
                <a
                  href="https://github.com/creativetimofficial/notus-react?ref=nr-index"
                  className="px-6 py-4 mb-1 ml-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none github-star focus:outline-none bg-blueGray-700 active:bg-blueGray-600 hover:shadow-lg"
                  target="_blank"
                >
                  Github Star
                </a>
              </div>
            </div>
          </div>
        </div>

        <img
          className="absolute top-0 right-0 w-10/12 pt-16 -mt-48 b-auto sm:w-6/12 sm:mt-0 max-h-860px"
          src={require("assets/img/pattern_react.png")}
          alt="..."
        />
      </section>

      <section className="relative pb-40 mt-48 md:mt-40 bg-blueGray-100">
        <div
          className="absolute top-0 left-0 right-0 bottom-auto w-full h-20 -mt-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="fill-current text-blueGray-100"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="w-10/12 px-12 ml-auto mr-auto -mt-32 md:w-6/12 lg:w-4/12 md:px-4">
              <div className="relative flex flex-col w-full min-w-0 mb-6 break-words bg-white rounded-lg shadow-lg bg-sky-500">
                <img
                  alt="..."
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
                  className="w-full align-middle rounded-t-lg"
                />
                <blockquote className="relative p-8 mb-4">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    className="absolute left-0 block w-full h-95-px -top-94-px"
                  >
                    <polygon
                      points="-30,95 583,95 583,65"
                      className="fill-current text-sky-500"
                    ></polygon>
                  </svg>
                  <h4 className="text-xl font-bold text-white">
                    Great for your awesome project
                  </h4>
                  <p className="mt-2 font-light text-white text-md">
                    Putting together a page has never been easier than matching
                    together pre-made components. From landing pages
                    presentation to login areas, you can easily customise and
                    built your pages.
                  </p>
                </blockquote>
              </div>
            </div>

            <div className="w-full px-4 md:w-6/12">
              <div className="flex flex-wrap">
                <div className="w-full px-4 md:w-6/12">
                  <div className="relative flex flex-col mt-4">
                    <div className="flex-auto px-4 py-5">
                      <div className="inline-flex items-center justify-center w-12 h-12 p-3 mb-5 text-center bg-white rounded-full shadow-lg text-blueGray-500">
                        <i className="fas fa-sitemap"></i>
                      </div>
                      <h6 className="mb-1 text-xl font-semibold">
                        CSS Components
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                        Notus React comes with a huge number of Fully Coded CSS
                        components.
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="flex-auto px-4 py-5">
                      <div className="inline-flex items-center justify-center w-12 h-12 p-3 mb-5 text-center bg-white rounded-full shadow-lg text-blueGray-500">
                        <i className="fas fa-drafting-compass"></i>
                      </div>
                      <h6 className="mb-1 text-xl font-semibold">
                        JavaScript Components
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                        We also feature many dynamic components for React,
                        NextJS, Vue and Angular.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full px-4 md:w-6/12">
                  <div className="relative flex flex-col min-w-0 mt-4">
                    <div className="flex-auto px-4 py-5">
                      <div className="inline-flex items-center justify-center w-12 h-12 p-3 mb-5 text-center bg-white rounded-full shadow-lg text-blueGray-500">
                        <i className="fas fa-newspaper"></i>
                      </div>
                      <h6 className="mb-1 text-xl font-semibold">Pages</h6>
                      <p className="mb-4 text-blueGray-500">
                        This extension also comes with 3 sample pages. They are
                        fully coded so you can start working instantly.
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="flex-auto px-4 py-5">
                      <div className="inline-flex items-center justify-center w-12 h-12 p-3 mb-5 text-center bg-white rounded-full shadow-lg text-blueGray-500">
                        <i className="fas fa-file-alt"></i>
                      </div>
                      <h6 className="mb-1 text-xl font-semibold">
                        Documentation
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                        Built by developers for developers. You will love how
                        easy is to to work with Notus React.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container pb-20 mx-auto overflow-hidden">
          <div className="flex flex-wrap items-center">
            <div className="w-full px-12 mt-48 ml-auto mr-auto md:w-4/12 md:px-4">
              <div className="inline-flex items-center justify-center w-16 h-16 p-3 mb-6 text-center bg-white rounded-full shadow-lg text-blueGray-500">
                <i className="text-xl fas fa-sitemap"></i>
              </div>
              <h3 className="mb-2 text-3xl font-semibold leading-normal">
                CSS Components
              </h3>
              <p className="mt-4 mb-4 text-lg font-light leading-relaxed text-blueGray-600">
                Every element that you need in a product comes built in as a
                component. All components fit perfectly with each other and can
                have different colours.
              </p>
              <div className="block pb-6">
                <span className="inline-block px-2 py-1 mt-2 mr-2 text-xs font-semibold uppercase bg-white rounded-full text-blueGray-500 last:mr-0">
                  Buttons
                </span>
                <span className="inline-block px-2 py-1 mt-2 mr-2 text-xs font-semibold uppercase bg-white rounded-full text-blueGray-500 last:mr-0">
                  Inputs
                </span>
                <span className="inline-block px-2 py-1 mt-2 mr-2 text-xs font-semibold uppercase bg-white rounded-full text-blueGray-500 last:mr-0">
                  Labels
                </span>
                <span className="inline-block px-2 py-1 mt-2 mr-2 text-xs font-semibold uppercase bg-white rounded-full text-blueGray-500 last:mr-0">
                  Menus
                </span>
                <span className="inline-block px-2 py-1 mt-2 mr-2 text-xs font-semibold uppercase bg-white rounded-full text-blueGray-500 last:mr-0">
                  Navbars
                </span>
                <span className="inline-block px-2 py-1 mt-2 mr-2 text-xs font-semibold uppercase bg-white rounded-full text-blueGray-500 last:mr-0">
                  Pagination
                </span>
                <span className="inline-block px-2 py-1 mt-2 mr-2 text-xs font-semibold uppercase bg-white rounded-full text-blueGray-500 last:mr-0">
                  Progressbars
                </span>
                <span className="inline-block px-2 py-1 mt-2 mr-2 text-xs font-semibold uppercase bg-white rounded-full text-blueGray-500 last:mr-0">
                  Typography
                </span>
              </div>
              <a
                href="https://www.creative-tim.com/learning-lab/tailwind/react/alerts/notus?ref=nr-index"
                target="_blank"
                className="font-bold transition-all duration-150 ease-linear text-blueGray-700 hover:text-blueGray-500"
              >
                View All{" "}
                <i className="ml-1 leading-relaxed fa fa-angle-double-right"></i>
              </a>
            </div>

            <div className="w-full px-4 mt-32 ml-auto mr-auto md:w-5/12">
              <div className="relative flex flex-col w-full min-w-0 mt-48 mb-6 md:mt-0">
                <img
                  alt="..."
                  src={require("assets/img/component-btn.png")}
                  className="absolute w-full align-middle rounded shadow-lg max-w-100-px z-3 left-145-px -top-29-px"
                />
                <img
                  alt="..."
                  src={require("assets/img/component-profile-card.png")}
                  className="absolute w-full align-middle rounded-lg shadow-lg -top-160-px left-260-px max-w-210-px"
                />
                <img
                  alt="..."
                  src={require("assets/img/component-info-card.png")}
                  className="absolute w-full align-middle rounded-lg shadow-lg max-w-180-px -top-225-px left-40-px z-2"
                />
                <img
                  alt="..."
                  src={require("assets/img/component-info-2.png")}
                  className="absolute w-full align-middle rounded-lg shadow-2xl max-w-200-px -left-50-px top-25-px"
                />
                <img
                  alt="..."
                  src={require("assets/img/component-menu.png")}
                  className="absolute w-full align-middle rounded shadow-lg max-w-580-px -left-20-px top-210-px"
                />
                <img
                  alt="..."
                  src={require("assets/img/component-btn-pink.png")}
                  className="absolute w-full align-middle rounded shadow-xl max-w-120-px left-195-px top-95-px"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center pt-32">
            <div className="w-full px-4 mt-32 ml-auto mr-auto md:w-6/12">
              <div className="relative flex flex-wrap justify-center">
                <div className="w-full px-4 my-4 lg:w-6/12">
                  <a
                    href="https://www.creative-tim.com/learning-lab/tailwind/svelte/alerts/notus?ref=vtw-index"
                    target="_blank"
                  >
                    <div className="p-8 text-center bg-red-600 rounded-lg shadow-lg">
                      <img
                        alt="..."
                        className="w-16 max-w-full p-2 mx-auto bg-white rounded-full shadow-md"
                        src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/svelte.jpg"
                      />
                      <p className="mt-4 text-lg font-semibold text-white">
                        Svelte
                      </p>
                    </div>
                  </a>
                  <a
                    href="https://www.creative-tim.com/learning-lab/tailwind/react/alerts/notus?ref=vtw-index"
                    target="_blank"
                  >
                    <div className="p-8 mt-8 text-center rounded-lg shadow-lg bg-sky-500">
                      <img
                        alt="..."
                        className="w-16 max-w-full p-2 mx-auto bg-white rounded-full shadow-md"
                        src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/react.jpg"
                      />
                      <p className="mt-4 text-lg font-semibold text-white">
                        ReactJS
                      </p>
                    </div>
                  </a>
                  <a
                    href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/alerts/notus?ref=vtw-index"
                    target="_blank"
                  >
                    <div className="p-8 mt-8 text-center rounded-lg shadow-lg bg-blueGray-700">
                      <img
                        alt="..."
                        className="w-16 max-w-full p-2 mx-auto bg-white rounded-full shadow-md"
                        src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/nextjs.jpg"
                      />
                      <p className="mt-4 text-lg font-semibold text-white">
                        NextJS
                      </p>
                    </div>
                  </a>
                </div>
                <div className="w-full px-4 my-4 lg:w-6/12 lg:mt-16">
                  <a
                    href="https://www.creative-tim.com/learning-lab/tailwind/js/alerts/notus?ref=vtw-index"
                    target="_blank"
                  >
                    <div className="p-8 text-center bg-yellow-500 rounded-lg shadow-lg">
                      <img
                        alt="..."
                        className="w-16 max-w-full p-2 mx-auto bg-white rounded-full shadow-md"
                        src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/js.png"
                      />
                      <p className="mt-4 text-lg font-semibold text-white">
                        JavaScript
                      </p>
                    </div>
                  </a>
                  <a
                    href="https://www.creative-tim.com/learning-lab/tailwind/angular/alerts/notus?ref=vtw-index"
                    target="_blank"
                  >
                    <div className="p-8 mt-8 text-center bg-red-700 rounded-lg shadow-lg">
                      <img
                        alt="..."
                        className="w-16 max-w-full p-2 mx-auto bg-white rounded-full shadow-md"
                        src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/angular.jpg"
                      />
                      <p className="mt-4 text-lg font-semibold text-white">
                        Angular
                      </p>
                    </div>
                  </a>
                  <a
                    href="https://www.creative-tim.com/learning-lab/tailwind/vue/alerts/notus?ref=vtw-index"
                    target="_blank"
                  >
                    <div className="p-8 mt-8 text-center rounded-lg shadow-lg bg-emerald-500">
                      <img
                        alt="..."
                        className="w-16 max-w-full p-2 mx-auto bg-white rounded-full shadow-md"
                        src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/vue.jpg"
                      />
                      <p className="mt-4 text-lg font-semibold text-white">
                        Vue.js
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="w-full px-12 mt-48 ml-auto mr-auto md:w-4/12 md:px-4">
              <div className="inline-flex items-center justify-center w-16 h-16 p-3 mb-6 text-center bg-white rounded-full shadow-lg text-blueGray-500">
                <i className="text-xl fas fa-drafting-compass"></i>
              </div>
              <h3 className="mb-2 text-3xl font-semibold leading-normal">
                Javascript Components
              </h3>
              <p className="mt-4 mb-4 text-lg font-light leading-relaxed text-blueGray-600">
                In order to create a great User Experience some components
                require JavaScript. In this way you can manipulate the elements
                on the page and give more options to your users.
              </p>
              <p className="mt-4 mb-4 text-lg font-light leading-relaxed text-blueGray-600">
                We created a set of Components that are dynamic and come to help
                you.
              </p>
              <div className="block pb-6">
                <span className="inline-block px-2 py-1 mt-2 mr-2 text-xs font-semibold uppercase bg-white rounded-full text-blueGray-500 last:mr-0">
                  Alerts
                </span>
                <span className="inline-block px-2 py-1 mt-2 mr-2 text-xs font-semibold uppercase bg-white rounded-full text-blueGray-500 last:mr-0">
                  Dropdowns
                </span>
                <span className="inline-block px-2 py-1 mt-2 mr-2 text-xs font-semibold uppercase bg-white rounded-full text-blueGray-500 last:mr-0">
                  Menus
                </span>
                <span className="inline-block px-2 py-1 mt-2 mr-2 text-xs font-semibold uppercase bg-white rounded-full text-blueGray-500 last:mr-0">
                  Modals
                </span>
                <span className="inline-block px-2 py-1 mt-2 mr-2 text-xs font-semibold uppercase bg-white rounded-full text-blueGray-500 last:mr-0">
                  Navbars
                </span>
                <span className="inline-block px-2 py-1 mt-2 mr-2 text-xs font-semibold uppercase bg-white rounded-full text-blueGray-500 last:mr-0">
                  Popovers
                </span>
                <span className="inline-block px-2 py-1 mt-2 mr-2 text-xs font-semibold uppercase bg-white rounded-full text-blueGray-500 last:mr-0">
                  Tabs
                </span>
                <span className="inline-block px-2 py-1 mt-2 mr-2 text-xs font-semibold uppercase bg-white rounded-full text-blueGray-500 last:mr-0">
                  Tooltips
                </span>
              </div>
              <a
                href="https://www.creative-tim.com/learning-lab/tailwind/react/alerts/notus?ref=nr-index"
                target="_blank"
                className="font-bold transition-all duration-150 ease-linear text-blueGray-700 hover:text-blueGray-500"
              >
                View all{" "}
                <i className="ml-1 leading-relaxed fa fa-angle-double-right"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="container px-4 pt-48 pb-32 mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="w-full px-12 ml-auto md:w-5/12 md:px-4">
              <div className="md:pr-12">
                <div className="inline-flex items-center justify-center w-16 h-16 p-3 mb-6 text-center bg-white rounded-full shadow-lg text-blueGray-500">
                  <i className="text-xl fas fa-file-alt"></i>
                </div>
                <h3 className="text-3xl font-semibold">
                  Complex Documentation
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                  This extension comes a lot of fully coded examples that help
                  you get started faster. You can adjust the colors and also the
                  programming language. You can change the text and images and
                  you're good to go.
                </p>
                <ul className="mt-6 list-none">
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="inline-block px-2 py-1 mr-3 text-xs font-semibold uppercase rounded-full text-blueGray-500 bg-blueGray-50">
                          <i className="fas fa-fingerprint"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                          Built by Developers for Developers
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="inline-block px-2 py-1 mr-3 text-xs font-semibold uppercase rounded-full text-blueGray-500 bg-blueGray-50">
                          <i className="fab fa-html5"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                          Carefully crafted code for Components
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="inline-block px-2 py-1 mr-3 text-xs font-semibold uppercase rounded-full text-blueGray-500 bg-blueGray-50">
                          <i className="far fa-paper-plane"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                          Dynamic Javascript Components
                        </h4>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full px-4 pt-24 mr-auto md:w-6/12 md:pt-0">
              <img
                alt="..."
                className="max-w-full rounded-lg shadow-xl"
                style={{
                  transform:
                    "scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)",
                }}
                src={require("assets/img/documentation.png")}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center mt-24 text-center">
          <div className="w-full px-12 md:w-6/12 md:px-4">
            <h2 className="text-4xl font-semibold">Beautiful Example Pages</h2>
            <p className="mt-4 mb-4 text-lg leading-relaxed text-blueGray-500">
              Notus React is a completly new product built using our past
              experience in web templates. Take the examples we made for you and
              start playing with them.
            </p>
          </div>
        </div>
      </section>

      <section className="relative block z-1 bg-blueGray-600">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center">
            <div className="w-full px-4 -mt-24 lg:w-12/12">
              <div className="flex flex-wrap">
                <div className="w-full px-4 lg:w-4/12">
                  <h5 className="pb-4 text-xl font-semibold text-center">
                    Login Page
                  </h5>
                  <Link to="/auth/login">
                    <div className="relative flex flex-col w-full min-w-0 mb-6 break-words transition-all duration-150 ease-linear bg-white rounded-lg shadow-lg hover:-mt-4">
                      <img
                        alt="..."
                        className="h-auto max-w-full align-middle border-none rounded-lg"
                        src={require("assets/img/login.jpg")}
                      />
                    </div>
                  </Link>
                </div>

                <div className="w-full px-4 lg:w-4/12">
                  <h5 className="pb-4 text-xl font-semibold text-center">
                    Profile Page
                  </h5>
                  <Link to="/profile">
                    <div className="relative flex flex-col w-full min-w-0 mb-6 break-words transition-all duration-150 ease-linear bg-white rounded-lg shadow-lg hover:-mt-4">
                      <img
                        alt="..."
                        className="h-auto max-w-full align-middle border-none rounded-lg"
                        src={require("assets/img/profile.jpg")}
                      />
                    </div>
                  </Link>
                </div>

                <div className="w-full px-4 lg:w-4/12">
                  <h5 className="pb-4 text-xl font-semibold text-center">
                    Landing Page
                  </h5>
                  <Link to="/landing">
                    <div className="relative flex flex-col w-full min-w-0 mb-6 break-words transition-all duration-150 ease-linear bg-white rounded-lg shadow-lg hover:-mt-4">
                      <img
                        alt="..."
                        className="h-auto max-w-full align-middle border-none rounded-lg"
                        src={require("assets/img/landing.jpg")}
                      />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 overflow-hidden bg-blueGray-600">
        <div className="container pb-64 mx-auto">
          <div className="flex flex-wrap justify-center">
            <div className="w-full px-12 ml-auto mr-auto md:w-5/12 md:px-4 md:mt-64">
              <div className="inline-flex items-center justify-center w-16 h-16 p-3 mb-6 text-center bg-white rounded-full shadow-lg text-blueGray-500">
                <i className="text-xl fas fa-code-branch"></i>
              </div>
              <h3 className="mb-2 text-3xl font-semibold leading-normal text-white">
                Open Source
              </h3>
              <p className="mt-4 mb-4 text-lg font-light leading-relaxed text-blueGray-400">
                Since{" "}
                <a
                  href="https://tailwindcss.com/?ref=creativetim"
                  className="text-blueGray-300"
                  target="_blank"
                >
                  Tailwind CSS
                </a>{" "}
                is an open source project we wanted to continue this movement
                too. You can give this version a try to feel the design and also
                test the quality of the code!
              </p>
              <p className="mt-0 mb-4 text-lg font-light leading-relaxed text-blueGray-400">
                Get it free on Github and please help us spread the news with a
                Star!
              </p>
              <a
                href="https://github.com/creativetimofficial/notus-react?ref=nr-index"
                target="_blank"
                className="inline-block px-6 py-4 mt-4 mb-1 mr-1 text-sm font-bold text-white uppercase rounded shadow outline-none github-star focus:outline-none bg-blueGray-700 active:bg-blueGray-600 hover:shadow-lg"
              >
                Github Star
              </a>
            </div>

            <div className="relative w-full px-4 mt-32 ml-auto mr-auto md:w-4/12">
              <i className="absolute left-auto fab fa-github text-blueGray-700 -top-150-px -right-100 opacity-80 text-55"></i>
            </div>
          </div>
        </div>
      </section>

      <section className="relative pt-32 pb-16 bg-blueGray-200">
        <div
          className="absolute top-0 left-0 right-0 bottom-auto w-full h-20 -mt-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="fill-current text-blueGray-200"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>

        <div className="container mx-auto">
          <div className="relative z-10 flex flex-wrap justify-center px-12 py-16 -mt-64 bg-white rounded-lg shadow-xl">
            <div className="w-full text-center lg:w-8/12">
              <p className="text-4xl text-center">
                <span role="img" aria-label="love">
                  😍
                </span>
              </p>
              <h3 className="text-3xl font-semibold">
                Do you love this Starter Kit?
              </h3>
              <p className="mt-4 mb-4 text-lg leading-relaxed text-blueGray-500">
                Cause if you do, it can be yours now. Hit the buttons below to
                navigate to get the Free version for your next project. Build a
                new web app or give an old project a new look!
              </p>
              <div className="flex flex-col mt-10 sm:block">
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/react/overview/notus?ref=nr-index"
                  target="_blank"
                  className="px-6 py-4 mb-2 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none get-started focus:outline-none bg-sky-500 active:bg-sky-600 hover:shadow-lg"
                >
                  Get started
                </a>
                <a
                  href="https://github.com/creativetimofficial/notus-react?ref=nr-index"
                  target="_blank"
                  className="px-6 py-4 mb-1 mr-1 text-sm font-bold text-white uppercase rounded shadow outline-none github-star sm:ml-1 focus:outline-none bg-blueGray-700 active:bg-blueGray-600 hover:shadow-lg"
                >
                  <i className="mr-1 text-lg fab fa-github"></i>
                  <span>Help With a Star</span>
                </a>
              </div>
              <div className="mt-16 text-center"></div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
