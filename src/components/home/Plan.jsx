import React from "react";
import { Tab, Tabs, Nav } from "react-bootstrap";

const Plan = () => {
  return (
    <>
      <div className="container padding-equal">
        <div className="plan-d default-d">
          <div className="heading-d text-center mb-5">
            <span className="title">Pricing Plan</span>
            <h2 className="sub-heading">Choose your pricing policy</h2>
          </div>
          <div className="content-d">
            <Tabs
              defaultActiveKey="monthly"
              id="uncontrolled-tab-example"
              className="mb-3 border-0 d-flex justify-content-center align-items-center gap-1 mb-5"
            >
              <Tab eventKey="monthly" title="Monthly Plan">
                <div className="row m-0">
                  <div className="col-lg-6 col-12">
                    <div className="plan-card">
                      <div className="d-flex justify-content-beteen align-items-end mb-5">
                        <div className="">
                          <span className="default-btn mb-2 opacity-0">
                            Recommended
                          </span>
                          <h5>Free Plan</h5>
                          <p className="small-text">
                            For Small terms or office
                          </p>
                        </div>
                      </div>
                      <div className="mb-5">
                        <ul>
                          <li>
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M9.99996 0C4.48608 0 0 4.48548 0 9.99999C0 15.514 4.48608 20 9.99996 20C15.5138 20 20 15.514 20 9.99999C20 4.48548 15.5138 0 9.99996 0ZM15.575 6.66453L9.42112 13.5876C9.2696 13.7586 9.05846 13.8462 8.84571 13.8462C8.67691 13.8462 8.50731 13.7908 8.3654 13.6774L4.51916 10.6005C4.18761 10.3355 4.13384 9.85161 4.39921 9.51936C4.66426 9.1871 5.1488 9.13388 5.48035 9.39946L8.7561 12.0193L14.4249 5.64248C14.7066 5.32473 15.1934 5.29623 15.5107 5.57849C15.8284 5.8613 15.8573 6.34678 15.575 6.66453Z"
                                fill="#3FDBB1"
                              />
                            </svg>
                            <p>
                              Ultimate access to all course, exercises and
                              assessments
                            </p>
                          </li>
                          <li>
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M9.99996 0C4.48608 0 0 4.48548 0 9.99999C0 15.514 4.48608 20 9.99996 20C15.5138 20 20 15.514 20 9.99999C20 4.48548 15.5138 0 9.99996 0ZM15.575 6.66453L9.42112 13.5876C9.2696 13.7586 9.05846 13.8462 8.84571 13.8462C8.67691 13.8462 8.50731 13.7908 8.3654 13.6774L4.51916 10.6005C4.18761 10.3355 4.13384 9.85161 4.39921 9.51936C4.66426 9.1871 5.1488 9.13388 5.48035 9.39946L8.7561 12.0193L14.4249 5.64248C14.7066 5.32473 15.1934 5.29623 15.5107 5.57849C15.8284 5.8613 15.8573 6.34678 15.575 6.66453Z"
                                fill="#3FDBB1"
                              />
                            </svg>
                            <p>
                              Free acess for all kind of exercise corrections
                              with downloads.
                            </p>
                          </li>
                          <li>
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M9.99996 0C4.48608 0 0 4.48548 0 9.99999C0 15.514 4.48608 20 9.99996 20C15.5138 20 20 15.514 20 9.99999C20 4.48548 15.5138 0 9.99996 0ZM15.575 6.66453L9.42112 13.5876C9.2696 13.7586 9.05846 13.8462 8.84571 13.8462C8.67691 13.8462 8.50731 13.7908 8.3654 13.6774L4.51916 10.6005C4.18761 10.3355 4.13384 9.85161 4.39921 9.51936C4.66426 9.1871 5.1488 9.13388 5.48035 9.39946L8.7561 12.0193L14.4249 5.64248C14.7066 5.32473 15.1934 5.29623 15.5107 5.57849C15.8284 5.8613 15.8573 6.34678 15.575 6.66453Z"
                                fill="#3FDBB1"
                              />
                            </svg>
                            <p>
                              Total assessment corrections with free download
                              access system
                            </p>
                          </li>
                          <li>
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g clip-path="url(#clip0_1_510)">
                                <path
                                  d="M10.0008 0C4.47816 0 0.00100708 4.47722 0.00100708 9.9999C0.00100708 15.5224 4.4781 20 10.0007 20C15.5233 20 20.0009 15.5224 20.0009 9.9999C20.0009 4.47722 15.5234 0 10.0008 0ZM13.7731 13.8113C13.3738 14.2102 12.727 14.2102 12.3281 13.8113L10.0526 11.5358L7.6736 13.9149C7.27454 14.3138 6.62767 14.3138 6.22881 13.9149C5.82955 13.5155 5.82955 12.8688 6.22881 12.4695L8.60766 10.0907L6.39274 7.87592C5.99381 7.47653 5.99381 6.82986 6.39274 6.43074C6.79181 6.03167 7.4388 6.03167 7.83793 6.43074L10.0527 8.64551L12.1641 6.534C12.5631 6.13507 13.2103 6.13494 13.6091 6.534C14.0083 6.9334 14.0083 7.58046 13.6091 7.97919L11.4979 10.0906L13.7732 12.366C14.1721 12.7649 14.1723 13.4121 13.7731 13.8113Z"
                                  fill="#CED7E1"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_1_510">
                                  <rect width="20" height="20" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>

                            <p>
                              Unlimited download of courses on the mobile app
                              contents
                            </p>
                          </li>
                          <li>
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g clip-path="url(#clip0_1_510)">
                                <path
                                  d="M10.0008 0C4.47816 0 0.00100708 4.47722 0.00100708 9.9999C0.00100708 15.5224 4.4781 20 10.0007 20C15.5233 20 20.0009 15.5224 20.0009 9.9999C20.0009 4.47722 15.5234 0 10.0008 0ZM13.7731 13.8113C13.3738 14.2102 12.727 14.2102 12.3281 13.8113L10.0526 11.5358L7.6736 13.9149C7.27454 14.3138 6.62767 14.3138 6.22881 13.9149C5.82955 13.5155 5.82955 12.8688 6.22881 12.4695L8.60766 10.0907L6.39274 7.87592C5.99381 7.47653 5.99381 6.82986 6.39274 6.43074C6.79181 6.03167 7.4388 6.03167 7.83793 6.43074L10.0527 8.64551L12.1641 6.534C12.5631 6.13507 13.2103 6.13494 13.6091 6.534C14.0083 6.9334 14.0083 7.58046 13.6091 7.97919L11.4979 10.0906L13.7732 12.366C14.1721 12.7649 14.1723 13.4121 13.7731 13.8113Z"
                                  fill="#CED7E1"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_1_510">
                                  <rect width="20" height="20" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>

                            <p>
                              Download and print courses and exercises in PDF
                            </p>
                          </li>
                        </ul>
                      </div>
                      <div className="text-center">
                        <button className="default-btn primary-btn mb-5">
                          Strat free trail
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6 col-12">
                    <div className="plan-card">
                      <div className="d-flex justify-content-between align-items-end mb-5">
                        <div className="">
                          <span className="default-btn mb-2">Recommended</span>
                          <h5>Premiun</h5>
                          <p className="small-text m-0">
                            For Startup enterprise
                          </p>
                        </div>
                        <div>
                          <p className="small-text m-0">Starting From</p>
                          <span className="price">49.00/mo</span>
                        </div>
                      </div>
                      <div className="mb-5">
                        <ul>
                          <li>
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M9.99996 0C4.48608 0 0 4.48548 0 9.99999C0 15.514 4.48608 20 9.99996 20C15.5138 20 20 15.514 20 9.99999C20 4.48548 15.5138 0 9.99996 0ZM15.575 6.66453L9.42112 13.5876C9.2696 13.7586 9.05846 13.8462 8.84571 13.8462C8.67691 13.8462 8.50731 13.7908 8.3654 13.6774L4.51916 10.6005C4.18761 10.3355 4.13384 9.85161 4.39921 9.51936C4.66426 9.1871 5.1488 9.13388 5.48035 9.39946L8.7561 12.0193L14.4249 5.64248C14.7066 5.32473 15.1934 5.29623 15.5107 5.57849C15.8284 5.8613 15.8573 6.34678 15.575 6.66453Z"
                                fill="#3FDBB1"
                              />
                            </svg>
                            <p>
                              Ultimate access to all course, exercises and
                              assessments
                            </p>
                          </li>
                          <li>
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M9.99996 0C4.48608 0 0 4.48548 0 9.99999C0 15.514 4.48608 20 9.99996 20C15.5138 20 20 15.514 20 9.99999C20 4.48548 15.5138 0 9.99996 0ZM15.575 6.66453L9.42112 13.5876C9.2696 13.7586 9.05846 13.8462 8.84571 13.8462C8.67691 13.8462 8.50731 13.7908 8.3654 13.6774L4.51916 10.6005C4.18761 10.3355 4.13384 9.85161 4.39921 9.51936C4.66426 9.1871 5.1488 9.13388 5.48035 9.39946L8.7561 12.0193L14.4249 5.64248C14.7066 5.32473 15.1934 5.29623 15.5107 5.57849C15.8284 5.8613 15.8573 6.34678 15.575 6.66453Z"
                                fill="#3FDBB1"
                              />
                            </svg>
                            <p>
                              Free acess for all kind of exercise corrections
                              with downloads.
                            </p>
                          </li>
                          <li>
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M9.99996 0C4.48608 0 0 4.48548 0 9.99999C0 15.514 4.48608 20 9.99996 20C15.5138 20 20 15.514 20 9.99999C20 4.48548 15.5138 0 9.99996 0ZM15.575 6.66453L9.42112 13.5876C9.2696 13.7586 9.05846 13.8462 8.84571 13.8462C8.67691 13.8462 8.50731 13.7908 8.3654 13.6774L4.51916 10.6005C4.18761 10.3355 4.13384 9.85161 4.39921 9.51936C4.66426 9.1871 5.1488 9.13388 5.48035 9.39946L8.7561 12.0193L14.4249 5.64248C14.7066 5.32473 15.1934 5.29623 15.5107 5.57849C15.8284 5.8613 15.8573 6.34678 15.575 6.66453Z"
                                fill="#3FDBB1"
                              />
                            </svg>
                            <p>
                              Total assessment corrections with free download
                              access system
                            </p>
                          </li>
                          <li>
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M9.99996 0C4.48608 0 0 4.48548 0 9.99999C0 15.514 4.48608 20 9.99996 20C15.5138 20 20 15.514 20 9.99999C20 4.48548 15.5138 0 9.99996 0ZM15.575 6.66453L9.42112 13.5876C9.2696 13.7586 9.05846 13.8462 8.84571 13.8462C8.67691 13.8462 8.50731 13.7908 8.3654 13.6774L4.51916 10.6005C4.18761 10.3355 4.13384 9.85161 4.39921 9.51936C4.66426 9.1871 5.1488 9.13388 5.48035 9.39946L8.7561 12.0193L14.4249 5.64248C14.7066 5.32473 15.1934 5.29623 15.5107 5.57849C15.8284 5.8613 15.8573 6.34678 15.575 6.66453Z"
                                fill="#3FDBB1"
                              />
                            </svg>
                            <p>
                              Unlimited download of courses on the mobile app
                              contents
                            </p>
                          </li>
                          <li>
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M9.99996 0C4.48608 0 0 4.48548 0 9.99999C0 15.514 4.48608 20 9.99996 20C15.5138 20 20 15.514 20 9.99999C20 4.48548 15.5138 0 9.99996 0ZM15.575 6.66453L9.42112 13.5876C9.2696 13.7586 9.05846 13.8462 8.84571 13.8462C8.67691 13.8462 8.50731 13.7908 8.3654 13.6774L4.51916 10.6005C4.18761 10.3355 4.13384 9.85161 4.39921 9.51936C4.66426 9.1871 5.1488 9.13388 5.48035 9.39946L8.7561 12.0193L14.4249 5.64248C14.7066 5.32473 15.1934 5.29623 15.5107 5.57849C15.8284 5.8613 15.8573 6.34678 15.575 6.66453Z"
                                fill="#3FDBB1"
                              />
                            </svg>
                            <p>
                              Download and print courses and exercises in PDF
                            </p>
                          </li>
                        </ul>
                      </div>
                      <div className="text-center">
                        <button className="default-btn primary-btn mb-5">
                          Subscribe Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </Tab>
              <Tab eventKey="annual" title="Annual Plan">
                <div className="row m-0">
                  <div className="col-lg-6 col-12">
                    <div className="plan-card">
                      <div className="d-flex justify-content-beteen align-items-end mb-5">
                        <div className="">
                          <span className="default-btn mb-2 opacity-0">
                            Recommended
                          </span>
                          <h5>Free Plan</h5>
                          <p className="small-text">
                            For Small terms or office
                          </p>
                        </div>
                      </div>
                      <div className="mb-5">
                        <ul className="p-0">
                          <li>
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M9.99996 0C4.48608 0 0 4.48548 0 9.99999C0 15.514 4.48608 20 9.99996 20C15.5138 20 20 15.514 20 9.99999C20 4.48548 15.5138 0 9.99996 0ZM15.575 6.66453L9.42112 13.5876C9.2696 13.7586 9.05846 13.8462 8.84571 13.8462C8.67691 13.8462 8.50731 13.7908 8.3654 13.6774L4.51916 10.6005C4.18761 10.3355 4.13384 9.85161 4.39921 9.51936C4.66426 9.1871 5.1488 9.13388 5.48035 9.39946L8.7561 12.0193L14.4249 5.64248C14.7066 5.32473 15.1934 5.29623 15.5107 5.57849C15.8284 5.8613 15.8573 6.34678 15.575 6.66453Z"
                                fill="#3FDBB1"
                              />
                            </svg>
                            <p>
                              Ultimate access to all course, exercises and
                              assessments
                            </p>
                          </li>
                          <li>
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M9.99996 0C4.48608 0 0 4.48548 0 9.99999C0 15.514 4.48608 20 9.99996 20C15.5138 20 20 15.514 20 9.99999C20 4.48548 15.5138 0 9.99996 0ZM15.575 6.66453L9.42112 13.5876C9.2696 13.7586 9.05846 13.8462 8.84571 13.8462C8.67691 13.8462 8.50731 13.7908 8.3654 13.6774L4.51916 10.6005C4.18761 10.3355 4.13384 9.85161 4.39921 9.51936C4.66426 9.1871 5.1488 9.13388 5.48035 9.39946L8.7561 12.0193L14.4249 5.64248C14.7066 5.32473 15.1934 5.29623 15.5107 5.57849C15.8284 5.8613 15.8573 6.34678 15.575 6.66453Z"
                                fill="#3FDBB1"
                              />
                            </svg>
                            <p>
                              Free acess for all kind of exercise corrections
                              with downloads.
                            </p>
                          </li>
                          <li>
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M9.99996 0C4.48608 0 0 4.48548 0 9.99999C0 15.514 4.48608 20 9.99996 20C15.5138 20 20 15.514 20 9.99999C20 4.48548 15.5138 0 9.99996 0ZM15.575 6.66453L9.42112 13.5876C9.2696 13.7586 9.05846 13.8462 8.84571 13.8462C8.67691 13.8462 8.50731 13.7908 8.3654 13.6774L4.51916 10.6005C4.18761 10.3355 4.13384 9.85161 4.39921 9.51936C4.66426 9.1871 5.1488 9.13388 5.48035 9.39946L8.7561 12.0193L14.4249 5.64248C14.7066 5.32473 15.1934 5.29623 15.5107 5.57849C15.8284 5.8613 15.8573 6.34678 15.575 6.66453Z"
                                fill="#3FDBB1"
                              />
                            </svg>
                            <p>
                              Total assessment corrections with free download
                              access system
                            </p>
                          </li>
                          <li>
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g clip-path="url(#clip0_1_510)">
                                <path
                                  d="M10.0008 0C4.47816 0 0.00100708 4.47722 0.00100708 9.9999C0.00100708 15.5224 4.4781 20 10.0007 20C15.5233 20 20.0009 15.5224 20.0009 9.9999C20.0009 4.47722 15.5234 0 10.0008 0ZM13.7731 13.8113C13.3738 14.2102 12.727 14.2102 12.3281 13.8113L10.0526 11.5358L7.6736 13.9149C7.27454 14.3138 6.62767 14.3138 6.22881 13.9149C5.82955 13.5155 5.82955 12.8688 6.22881 12.4695L8.60766 10.0907L6.39274 7.87592C5.99381 7.47653 5.99381 6.82986 6.39274 6.43074C6.79181 6.03167 7.4388 6.03167 7.83793 6.43074L10.0527 8.64551L12.1641 6.534C12.5631 6.13507 13.2103 6.13494 13.6091 6.534C14.0083 6.9334 14.0083 7.58046 13.6091 7.97919L11.4979 10.0906L13.7732 12.366C14.1721 12.7649 14.1723 13.4121 13.7731 13.8113Z"
                                  fill="#CED7E1"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_1_510">
                                  <rect width="20" height="20" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>

                            <p>
                              Unlimited download of courses on the mobile app
                              contents
                            </p>
                          </li>
                          <li>
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g clip-path="url(#clip0_1_510)">
                                <path
                                  d="M10.0008 0C4.47816 0 0.00100708 4.47722 0.00100708 9.9999C0.00100708 15.5224 4.4781 20 10.0007 20C15.5233 20 20.0009 15.5224 20.0009 9.9999C20.0009 4.47722 15.5234 0 10.0008 0ZM13.7731 13.8113C13.3738 14.2102 12.727 14.2102 12.3281 13.8113L10.0526 11.5358L7.6736 13.9149C7.27454 14.3138 6.62767 14.3138 6.22881 13.9149C5.82955 13.5155 5.82955 12.8688 6.22881 12.4695L8.60766 10.0907L6.39274 7.87592C5.99381 7.47653 5.99381 6.82986 6.39274 6.43074C6.79181 6.03167 7.4388 6.03167 7.83793 6.43074L10.0527 8.64551L12.1641 6.534C12.5631 6.13507 13.2103 6.13494 13.6091 6.534C14.0083 6.9334 14.0083 7.58046 13.6091 7.97919L11.4979 10.0906L13.7732 12.366C14.1721 12.7649 14.1723 13.4121 13.7731 13.8113Z"
                                  fill="#CED7E1"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_1_510">
                                  <rect width="20" height="20" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>

                            <p>
                              Download and print courses and exercises in PDF
                            </p>
                          </li>
                        </ul>
                      </div>
                      <div className="text-center">
                        <button className="default-btn primary-btn mb-5">
                          Strat free trail
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6 col-12">
                    <div className="plan-card">
                      <div className="d-flex justify-content-between align-items-end mb-5">
                        <div className="">
                          <span className="default-btn mb-2">Recommended</span>
                          <h5>Premiun</h5>
                          <p className="small-text m-0">
                            For Startup enterprise
                          </p>
                        </div>
                        <div>
                          <p className="small-text m-0">Starting From</p>
                          <span className="price">499.00/year</span>
                        </div>
                      </div>
                      <div className="mb-5">
                        <ul className="p-0">
                          <li>
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M9.99996 0C4.48608 0 0 4.48548 0 9.99999C0 15.514 4.48608 20 9.99996 20C15.5138 20 20 15.514 20 9.99999C20 4.48548 15.5138 0 9.99996 0ZM15.575 6.66453L9.42112 13.5876C9.2696 13.7586 9.05846 13.8462 8.84571 13.8462C8.67691 13.8462 8.50731 13.7908 8.3654 13.6774L4.51916 10.6005C4.18761 10.3355 4.13384 9.85161 4.39921 9.51936C4.66426 9.1871 5.1488 9.13388 5.48035 9.39946L8.7561 12.0193L14.4249 5.64248C14.7066 5.32473 15.1934 5.29623 15.5107 5.57849C15.8284 5.8613 15.8573 6.34678 15.575 6.66453Z"
                                fill="#3FDBB1"
                              />
                            </svg>
                            <p>
                              Ultimate access to all course, exercises and
                              assessments
                            </p>
                          </li>
                          <li>
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M9.99996 0C4.48608 0 0 4.48548 0 9.99999C0 15.514 4.48608 20 9.99996 20C15.5138 20 20 15.514 20 9.99999C20 4.48548 15.5138 0 9.99996 0ZM15.575 6.66453L9.42112 13.5876C9.2696 13.7586 9.05846 13.8462 8.84571 13.8462C8.67691 13.8462 8.50731 13.7908 8.3654 13.6774L4.51916 10.6005C4.18761 10.3355 4.13384 9.85161 4.39921 9.51936C4.66426 9.1871 5.1488 9.13388 5.48035 9.39946L8.7561 12.0193L14.4249 5.64248C14.7066 5.32473 15.1934 5.29623 15.5107 5.57849C15.8284 5.8613 15.8573 6.34678 15.575 6.66453Z"
                                fill="#3FDBB1"
                              />
                            </svg>
                            <p>
                              Free acess for all kind of exercise corrections
                              with downloads.
                            </p>
                          </li>
                          <li>
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M9.99996 0C4.48608 0 0 4.48548 0 9.99999C0 15.514 4.48608 20 9.99996 20C15.5138 20 20 15.514 20 9.99999C20 4.48548 15.5138 0 9.99996 0ZM15.575 6.66453L9.42112 13.5876C9.2696 13.7586 9.05846 13.8462 8.84571 13.8462C8.67691 13.8462 8.50731 13.7908 8.3654 13.6774L4.51916 10.6005C4.18761 10.3355 4.13384 9.85161 4.39921 9.51936C4.66426 9.1871 5.1488 9.13388 5.48035 9.39946L8.7561 12.0193L14.4249 5.64248C14.7066 5.32473 15.1934 5.29623 15.5107 5.57849C15.8284 5.8613 15.8573 6.34678 15.575 6.66453Z"
                                fill="#3FDBB1"
                              />
                            </svg>
                            <p>
                              Total assessment corrections with free download
                              access system
                            </p>
                          </li>
                          <li>
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M9.99996 0C4.48608 0 0 4.48548 0 9.99999C0 15.514 4.48608 20 9.99996 20C15.5138 20 20 15.514 20 9.99999C20 4.48548 15.5138 0 9.99996 0ZM15.575 6.66453L9.42112 13.5876C9.2696 13.7586 9.05846 13.8462 8.84571 13.8462C8.67691 13.8462 8.50731 13.7908 8.3654 13.6774L4.51916 10.6005C4.18761 10.3355 4.13384 9.85161 4.39921 9.51936C4.66426 9.1871 5.1488 9.13388 5.48035 9.39946L8.7561 12.0193L14.4249 5.64248C14.7066 5.32473 15.1934 5.29623 15.5107 5.57849C15.8284 5.8613 15.8573 6.34678 15.575 6.66453Z"
                                fill="#3FDBB1"
                              />
                            </svg>
                            <p>
                              Unlimited download of courses on the mobile app
                              contents
                            </p>
                          </li>
                          <li>
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M9.99996 0C4.48608 0 0 4.48548 0 9.99999C0 15.514 4.48608 20 9.99996 20C15.5138 20 20 15.514 20 9.99999C20 4.48548 15.5138 0 9.99996 0ZM15.575 6.66453L9.42112 13.5876C9.2696 13.7586 9.05846 13.8462 8.84571 13.8462C8.67691 13.8462 8.50731 13.7908 8.3654 13.6774L4.51916 10.6005C4.18761 10.3355 4.13384 9.85161 4.39921 9.51936C4.66426 9.1871 5.1488 9.13388 5.48035 9.39946L8.7561 12.0193L14.4249 5.64248C14.7066 5.32473 15.1934 5.29623 15.5107 5.57849C15.8284 5.8613 15.8573 6.34678 15.575 6.66453Z"
                                fill="#3FDBB1"
                              />
                            </svg>
                            <p>
                              Download and print courses and exercises in PDF
                            </p>
                          </li>
                        </ul>
                      </div>
                      <div className="text-center">
                        <button className="default-btn primary-btn mb-5">
                          Subscribe Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
};

export default Plan;
