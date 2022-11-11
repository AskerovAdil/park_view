<template>
    <div v-if="false" class="w-full max-w-full px-3 text-center flex-0">
  <h3 class="mt-12">Build Your Profile</h3>
  <h5 class="font-normal dark:text-white text-slate-400">This information will let us know more about you.</h5>
  <div multisteps-form class="mb-12">
    <div class="flex flex-wrap -mx-3">
      <div class="w-full max-w-full px-3 mx-auto my-12 flex-0 lg:w-8/12">
        <div class="grid grid-cols-3">
          <button aria-controls="about" type="button" class="before:w-3.4 before:h-3.4 before:rounded-circle before:scale-120 rounded-0 -indent-330 relative m-0 cursor-pointer border-none bg-transparent px-1.5 pb-0.5 pt-5 text-slate-700 outline-none transition-all ease-linear before:absolute before:top-0 before:left-1/2 before:z-30 before:box-border before:block before:-translate-x-1/2 before:border-2 before:border-solid before:border-current before:bg-current before:transition-all before:ease-linear before:content-[''] sm:indent-0" title="About"><span class="text-slate-400">About</span></button>
          <button aria-controls="account" type="button" class="before:w-3.4 before:h-3.4 before:rounded-circle after:top-1.25 rounded-0 -indent-330 relative m-0 cursor-pointer border-none bg-transparent px-1.5 pb-0.5 pt-5 text-slate-100 outline-none transition-all ease-linear before:absolute before:top-0 before:left-1/2 before:z-30 before:box-border before:block before:-translate-x-1/2 before:border-2 before:border-solid before:border-current before:bg-white before:transition-all before:ease-linear before:content-[''] after:absolute after:left-[calc(-50%-13px/2)] after:z-10 after:block after:h-0.5 after:w-full after:bg-current after:transition-all after:ease-linear after:content-[''] sm:indent-0" title="Account">Account</button>
          <button aria-controls="address" type="button" class="before:w-3.4 before:h-3.4 before:rounded-circle after:top-1.25 rounded-0 -indent-330 relative m-0 cursor-pointer border-none bg-transparent px-1.5 pb-0.5 pt-5 text-slate-100 outline-none transition-all ease-linear before:absolute before:top-0 before:left-1/2 before:z-30 before:box-border before:block before:-translate-x-1/2 before:border-2 before:border-solid before:border-current before:bg-white before:transition-all before:ease-linear before:content-[''] after:absolute after:left-[calc(-50%-13px/2)] after:z-10 after:block after:h-0.5 after:w-full after:bg-current after:transition-all after:ease-linear after:content-[''] sm:indent-0" title="Address">Address</button>
        </div>
      </div>
    </div>
    <div class="flex flex-wrap -mx-3">
      <div class="w-full max-w-full px-3 m-auto flex-0 lg:w-8/12">
        <form class="relative mb-32">
          
          <div active form="about" class="absolute top-0 left-0 flex flex-col visible w-full h-auto min-w-0 p-4 break-words bg-white border-0 opacity-100 dark:bg-gray-950 dark:shadow-soft-dark-xl shadow-soft-xl rounded-2xl bg-clip-border">
            
            <div class="flex flex-wrap -mx-3 text-center">
              <div class="w-10/12 max-w-full px-3 mx-auto flex-0">
                <h5 class="font-normal dark:text-white">Let's start with the basic information</h5>
                <p>Let us know your name and email address. Use an address you don't mind other users contacting you at</p>
              </div>
            </div>
            <div>
              <div class="flex flex-wrap mt-4 -mx-3">
                <div class="w-full max-w-full px-3 flex-0 sm:w-4/12">
                  <div class="relative inline-flex items-center justify-center text-white transition-all duration-200 w-28 h-28 text-base ease-soft-in-out rounded-xl">
                    <img class="w-full rounded-lg" src="@/assets/img/team-2.jpg" alt="Image placeholder" />
                    <a href="javascript:;" class="inline-block w-6 h-6 p-1.2 right-0 bottom-0 absolute -mb-2 -mr-2 font-bold text-center uppercase align-middle transition-all bg-gradient-to-tl from-gray-400 to-gray-100 text-slate-800 border-0 border-transparent border-solid rounded-lg cursor-pointer leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 active:opacity-85">
                      <i class="top-0 fa fa-pen text-3xs"></i>
                    </a>
 
                  </div>
                </div>
                <div class="w-full max-w-full px-3 mt-6 text-left flex-0 sm:w-8/12 sm:mt-0">
                  <label class="mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80" for="First Name">First Name</label>
                  <input type="text" name="First Name" placeholder="Eg. Michael" class="mb-4 focus:shadow-soft-primary-outline dark:bg-gray-950 dark:placeholder:text-white/80 dark:text-white/80 text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none" />
                  <label class="mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80" for="Last Name">Last Name</label>
                  <input type="text" name="Last Name" placeholder="Eg. Tomson" class="mb-4 focus:shadow-soft-primary-outline dark:bg-gray-950 dark:placeholder:text-white/80 dark:text-white/80 text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none" />
                  <label class="mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80" for="Email Address">Email Address</label>
                  <input type="email" name="Email Address" placeholder="Eg. soft@dashboard.com" class="focus:shadow-soft-primary-outline dark:bg-gray-950 dark:placeholder:text-white/80 dark:text-white/80 text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none" />
                </div>
              </div>
              <div class="flex mt-6">
                <button type="button" aria-controls="account" next-form-btn href="javascript:;" class="inline-block px-6 py-3 mb-0 ml-auto font-bold text-right text-white uppercase align-middle transition-all border-0 rounded-lg cursor-pointer hover:scale-102 active:opacity-85 hover:shadow-soft-xs dark:bg-gradient-to-tl dark:from-slate-850 dark:to-gray-850 bg-gradient-to-tl from-gray-900 to-slate-800 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25">Next</button>
              </div>
            </div>
          </div>
          
          <div form="account" class="absolute top-0 left-0 flex flex-col invisible w-full h-0 min-w-0 p-4 break-words bg-white border-0 opacity-0 dark:bg-gray-950 dark:shadow-soft-dark-xl shadow-soft-xl rounded-2xl bg-clip-border">
            
            <div class="flex flex-wrap -mx-3 text-center">
              <div class="w-10/12 max-w-full px-3 mx-auto flex-0">
                <h5 class="font-normal dark:text-white">What are you doing? (checkboxes)</h5>
                <p>Give us more details about you. What do you enjoy doing in your spare time?</p>
              </div>
            </div>
          
            <div>
              <div class="flex flex-wrap mt-6 -mx-3">
                <div class="w-full max-w-full px-3 ml-auto sm:flex-0 sm:w-3/12 shrink-0">
                  <input id="design" type="checkbox" class="absolute pointer-events-none peer clip-rect-0">
                  <label checkbox-color-label for="design" class="inline-block px-16 py-12 mb-4 ml-1 font-bold text-center uppercase align-middle transition-all bg-transparent border-2 border-solid rounded-lg shadow-none cursor-pointer group peer-checked:bg-slate-400 hover:scale-102 leading-pro text-xs ease-soft-in tracking-tight-soft active:opacity-85 active:shadow-soft-xs border-slate-400 text-slate-400 hover:border-slate-400 hover:bg-transparent hover:opacity-75 active:border-slate-400 active:bg-slate-400 active:text-white">
                    <svg class="text-slate-700" width="20px" height="20px" viewBox="0 0 40 40" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                      <title>settings</title>
                      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g transform="translate(-2020.000000, -442.000000)" fill="#FFFFFF" fill-rule="nonzero">
                          <g transform="translate(1716.000000, 291.000000)">
                            <g transform="translate(304.000000, 151.000000)">
                              <polygon checkbox-color class="fill-slate-800" opacity="0.596981957" points="18.0883333 15.7316667 11.1783333 8.82166667 13.3333333 6.66666667 6.66666667 0 0 6.66666667 6.66666667 13.3333333 8.82166667 11.1783333 15.315 17.6716667"></polygon>
                              <path checkbox-color class="fill-slate-800" d="M31.5666667,23.2333333 C31.0516667,23.2933333 30.53,23.3333333 30,23.3333333 C29.4916667,23.3333333 28.9866667,23.3033333 28.48,23.245 L22.4116667,30.7433333 L29.9416667,38.2733333 C32.2433333,40.575 35.9733333,40.575 38.275,38.2733333 L38.275,38.2733333 C40.5766667,35.9716667 40.5766667,32.2416667 38.275,29.94 L31.5666667,23.2333333 Z" opacity="0.596981957"></path>
                              <path checkbox-color class="fill-slate-800" d="M33.785,11.285 L28.715,6.215 L34.0616667,0.868333333 C32.82,0.315 31.4483333,0 30,0 C24.4766667,0 20,4.47666667 20,10 C20,10.99 20.1483333,11.9433333 20.4166667,12.8466667 L2.435,27.3966667 C0.95,28.7083333 0.0633333333,30.595 0.00333333333,32.5733333 C-0.0583333333,34.5533333 0.71,36.4916667 2.11,37.89 C3.47,39.2516667 5.27833333,40 7.20166667,40 C9.26666667,40 11.2366667,39.1133333 12.6033333,37.565 L27.1533333,19.5833333 C28.0566667,19.8516667 29.01,20 30,20 C35.5233333,20 40,15.5233333 40,10 C40,8.55166667 39.685,7.18 39.1316667,5.93666667 L33.785,11.285 Z"></path>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </label>
                  <h6 class="select-none dark:text-white">Design</h6>
                </div>
                <div class="w-full max-w-full px-3 sm:flex-0 sm:w-3/12 shrink-0">
                  <input id="code" type="checkbox" class="absolute pointer-events-none peer clip-rect-0">
                  <label checkbox-color-label for="code" class="inline-block px-16 py-12 mb-4 ml-1 font-bold text-center uppercase align-middle transition-all bg-transparent border-2 border-solid rounded-lg shadow-none cursor-pointer group peer-checked:bg-slate-400 hover:scale-102 leading-pro text-xs ease-soft-in tracking-tight-soft active:opacity-85 active:shadow-soft-xs border-slate-400 text-slate-400 hover:border-slate-400 hover:bg-transparent hover:opacity-75 active:border-slate-400 active:bg-slate-400 active:text-white">
                    <svg class="text-slate-700" width="20px" height="20px" viewBox="0 0 42 42" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                      <title>box-3d-50</title>
                      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g transform="translate(-2319.000000, -291.000000)" fill="#FFFFFF" fill-rule="nonzero">
                          <g transform="translate(1716.000000, 291.000000)">
                            <g transform="translate(603.000000, 0.000000)">
                              <path checkbox-color class="fill-slate-800" d="M22.7597136,19.3090182 L38.8987031,11.2395234 C39.3926816,10.9925342 39.592906,10.3918611 39.3459167,9.89788265 C39.249157,9.70436312 39.0922432,9.5474453 38.8987261,9.45068056 L20.2741875,0.1378125 L20.2741875,0.1378125 C19.905375,-0.04725 19.469625,-0.04725 19.0995,0.1378125 L3.1011696,8.13815822 C2.60720568,8.38517662 2.40701679,8.98586148 2.6540352,9.4798254 C2.75080129,9.67332903 2.90771305,9.83023153 3.10122239,9.9269862 L21.8652864,19.3090182 C22.1468139,19.4497819 22.4781861,19.4497819 22.7597136,19.3090182 Z"></path>
                              <path checkbox-color class="fill-slate-800" d="M23.625,22.429159 L23.625,39.8805372 C23.625,40.4328219 24.0727153,40.8805372 24.625,40.8805372 C24.7802551,40.8805372 24.9333778,40.8443874 25.0722402,40.7749511 L41.2741875,32.673375 L41.2741875,32.673375 C41.719125,32.4515625 42,31.9974375 42,31.5 L42,14.241659 C42,13.6893742 41.5522847,13.241659 41,13.241659 C40.8447549,13.241659 40.6916418,13.2778041 40.5527864,13.3472318 L24.1777864,21.5347318 C23.8390024,21.7041238 23.625,22.0503869 23.625,22.429159 Z" opacity="0.7"></path>
                              <path checkbox-color class="fill-slate-800" d="M20.4472136,21.5347318 L1.4472136,12.0347318 C0.953235098,11.7877425 0.352562058,11.9879669 0.105572809,12.4819454 C0.0361450918,12.6208008 6.47121774e-16,12.7739139 0,12.929159 L0,30.1875 L0,30.1875 C0,30.6849375 0.280875,31.1390625 0.7258125,31.3621875 L19.5528096,40.7750766 C20.0467945,41.0220531 20.6474623,40.8218132 20.8944388,40.3278283 C20.963859,40.1889789 21,40.0358742 21,39.8806379 L21,22.429159 C21,22.0503869 20.7859976,21.7041238 20.4472136,21.5347318 Z" opacity="0.7"></path>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </label>
                  <h6 class="select-none dark:text-white">Code</h6>
                </div>
                <div class="w-full max-w-full px-3 mr-auto sm:flex-0 sm:w-3/12 shrink-0">
                  <input id="develop" type="checkbox" class="absolute pointer-events-none peer clip-rect-0">
                  <label checkbox-color-label for="develop" class="inline-block px-16 py-12 mb-4 ml-1 font-bold text-center uppercase align-middle transition-all bg-transparent border-2 border-solid rounded-lg shadow-none cursor-pointer group peer-checked:bg-slate-400 hover:scale-102 leading-pro text-xs ease-soft-in tracking-tight-soft active:opacity-85 active:shadow-soft-xs border-slate-400 text-slate-400 hover:border-slate-400 hover:bg-transparent hover:opacity-75 active:border-slate-400 active:bg-slate-400 active:text-white">
                    <svg class="text-slate-700" width="20px" height="20px" viewBox="0 0 40 40" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                      <title>spaceship</title>
                      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g transform="translate(-1720.000000, -592.000000)" fill="#FFFFFF" fill-rule="nonzero">
                          <g transform="translate(1716.000000, 291.000000)">
                            <g transform="translate(4.000000, 301.000000)">
                              <path checkbox-color class="fill-slate-800" d="M39.3,0.706666667 C38.9660984,0.370464027 38.5048767,0.192278529 38.0316667,0.216666667 C14.6516667,1.43666667 6.015,22.2633333 5.93166667,22.4733333 C5.68236407,23.0926189 5.82664679,23.8009159 6.29833333,24.2733333 L15.7266667,33.7016667 C16.2013871,34.1756798 16.9140329,34.3188658 17.535,34.065 C17.7433333,33.98 38.4583333,25.2466667 39.7816667,1.97666667 C39.8087196,1.50414529 39.6335979,1.04240574 39.3,0.706666667 Z M25.69,19.0233333 C24.7367525,19.9768687 23.3029475,20.2622391 22.0572426,19.7463614 C20.8115377,19.2304837 19.9992882,18.0149658 19.9992882,16.6666667 C19.9992882,15.3183676 20.8115377,14.1028496 22.0572426,13.5869719 C23.3029475,13.0710943 24.7367525,13.3564646 25.69,14.31 C26.9912731,15.6116662 26.9912731,17.7216672 25.69,19.0233333 L25.69,19.0233333 Z"></path>
                              <path checkbox-color class="fill-slate-800" d="M1.855,31.4066667 C3.05106558,30.2024182 4.79973884,29.7296005 6.43969145,30.1670277 C8.07964407,30.6044549 9.36054508,31.8853559 9.7979723,33.5253085 C10.2353995,35.1652612 9.76258177,36.9139344 8.55833333,38.11 C6.70666667,39.9616667 0,40 0,40 C0,40 0,33.2566667 1.855,31.4066667 Z"></path>
                              <path checkbox-color class="fill-slate-800" d="M17.2616667,3.90166667 C12.4943643,3.07192755 7.62174065,4.61673894 4.20333333,8.04166667 C3.31200265,8.94126033 2.53706177,9.94913142 1.89666667,11.0416667 C1.5109569,11.6966059 1.61721591,12.5295394 2.155,13.0666667 L5.47,16.3833333 C8.55036617,11.4946947 12.5559074,7.25476565 17.2616667,3.90166667 L17.2616667,3.90166667 Z" opacity="0.598539807"></path>
                              <path checkbox-color class="fill-slate-800" d="M36.0983333,22.7383333 C36.9280725,27.5056357 35.3832611,32.3782594 31.9583333,35.7966667 C31.0587397,36.6879974 30.0508686,37.4629382 28.9583333,38.1033333 C28.3033941,38.4890431 27.4704606,38.3827841 26.9333333,37.845 L23.6166667,34.53 C28.5053053,31.4496338 32.7452344,27.4440926 36.0983333,22.7383333 L36.0983333,22.7383333 Z" opacity="0.598539807"></path>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </label>
                  <h6 class="select-none dark:text-white">Develop</h6>
                </div>
              </div>
              <div class="flex mt-6">
                <button type="button" aria-controls="about" prev-form-btn href="javascript:;" class="inline-block px-6 py-3 mb-0 font-bold text-right uppercase align-middle transition-all border-0 rounded-lg cursor-pointer hover:scale-102 active:opacity-85 hover:shadow-soft-xs bg-gradient-to-tl from-gray-400 to-gray-100 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 text-slate-800">Prev</button>
                <button type="button" aria-controls="address" next-form-btn href="javascript:;" class="inline-block px-6 py-3 mb-0 ml-auto font-bold text-right text-white uppercase align-middle transition-all border-0 rounded-lg cursor-pointer hover:scale-102 active:opacity-85 hover:shadow-soft-xs dark:bg-gradient-to-tl dark:from-slate-850 dark:to-gray-850 bg-gradient-to-tl from-gray-900 to-slate-800 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25">Next</button>
              </div>
            </div>
          </div>
 
          <div form="address" class="absolute top-0 left-0 flex flex-col invisible w-full h-0 min-w-0 p-4 break-words bg-white border-0 opacity-0 dark:bg-gray-950 dark:shadow-soft-dark-xl shadow-soft-xl rounded-2xl bg-clip-border">
          
            <div class="flex flex-wrap -mx-3 text-center">
              <div class="w-10/12 max-w-full px-3 mx-auto flex-0">
                <h5 class="font-normal dark:text-white">Are you living in a nice area?</h5>
                <p>One thing I love about the later sunsets is the chance to go for a walk through the neighborhood woods before dinner</p>
              </div>
            </div>
 
            <div>
              <div class="flex flex-wrap -mx-3 text-left">
                <div class="w-full max-w-full px-3 mt-4 ml-auto flex-0 md:w-8/12">
                  <label class="mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80" for="Street Name">Street Name</label>
                  <input type="text" name="Street Name" placeholder="Eg. Soft" class="focus:shadow-soft-primary-outline dark:bg-gray-950 dark:placeholder:text-white/80 dark:text-white/80 text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none" />
                </div>
                <div class="w-full max-w-full px-3 mt-4 ml-auto flex-0 md:w-4/12">
                  <label class="mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80" for="Street No">Street No</label>
                  <input type="number" name="Street No" min="01" placeholder="Eg 221" class="focus:shadow-soft-primary-outline dark:bg-gray-950 dark:placeholder:text-white/80 dark:text-white/80 text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none" />
                </div>
                <div class="w-full max-w-full px-3 mt-4 ml-auto flex-0 md:w-7/12">
                  <label class="mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80" for="City">City</label>
                  <input type="text" name="City" placeholder="Eg Tokyo" class="focus:shadow-soft-primary-outline dark:bg-gray-950 dark:placeholder:text-white/80 dark:text-white/80 text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none" />
                </div>
                <div class="w-full max-w-full px-3 mt-4 ml-auto flex-0 md:w-5/12">
                  <label class="mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80" for="Country">Country</label>
                  <select choice class="focus:shadow-soft-primary-outline dark:bg-gray-950 dark:placeholder:text-white/80 dark:text-white/80 text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none" name="choices-country" id="choices-country">
                    <option value="Argentina">Argentina</option>
                    <option value="Albania">Albania</option>
                    <option value="Algeria">Algeria</option>
                    <option value="Andorra">Andorra</option>
                    <option value="Angola">Angola</option>
                    <option value="Brasil">Brasil</option>
                  </select>
                </div>
              </div>
              <div class="flex flex-wrap -mx-3">
              <div class="flex w-full max-w-full px-3 mt-6 flex-0">
                <button type="button" aria-controls="account" prev-form-btn href="javascript:;" class="inline-block px-6 py-3 mb-0 font-bold text-right uppercase align-middle transition-all border-0 rounded-lg cursor-pointer hover:scale-102 active:opacity-85 hover:shadow-soft-xs bg-gradient-to-tl from-gray-400 to-gray-100 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 text-slate-800">Prev</button>
                <button type="button" send-form-btn href="javascript:;" class="inline-block px-6 py-3 mb-0 ml-auto font-bold text-right text-white uppercase align-middle transition-all border-0 rounded-lg cursor-pointer hover:scale-102 active:opacity-85 hover:shadow-soft-xs dark:bg-gradient-to-tl dark:from-slate-850 dark:to-gray-850 bg-gradient-to-tl from-gray-900 to-slate-800 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25">Send</button>
              </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
    <section v-if="true" class=" py-20 relative overflow-hidden text-white ">
        <div class="z-20 max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">    
            <div class="container grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
                    <div class="lg:col-span-2 m-auto">
                        <div @click="upload" id="empty-cover-art" class="mx-auto hover:scale-105 hover:cursor-pointer transition  rounded-lg sm:w-full md:w-48 md:h-48 py-16 text-center  md:border-solid md:border-2 md:border-gray-600">
                            <input  @change="FileInputChange" type="file" accept="image/jpeg, image/gif, image/png" id="upload-file" style="display:none">
                            <svg class="text-black mx-auto feather feather-image" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                                <circle cx="8.5" cy="8.5" r="1.5"></circle>
                                <polyline points="21 15 16 10 5 21"></polyline>
                            </svg>
                            <div class="my-auto py-4 text-black">
                                Загрузить фото
                            </div>
                        </div>
                        <div v-if="this.Files?.length >0" class="relative p-8 bg-white rounded-lg shadow-lg mt-10">
  
                            <div v-for="(el, index) in this.Files" :key="index">
                                <div class="relative">
                                    <img @click="DeleteFile(index)" class="absolute right-0 hover:scale-105 z-20 h-6" src="@/components/Resourse/img/minus-sign.png"/>
                                    <div class="">
                                        <div class="w-64 h-full p-1 md:p-2">
                                            <img :src="getSrc(el)" alt="gallery" class="block object-cover object-center rounded-lg">
                                        </div>
                                    </div>
                                </div>
       
                            </div>
                        </div>                        
                    </div>

                    <div class="p-8 bg-white rounded-lg shadow-lg lg:p-12 lg:col-span-3">
                        <form @submit.prevent = "OnSubmit" class="space-y-4 text-gray-800">
                            <div v-if="isSuccess > 400" class="bg-red-100 border border-red-400 text-red-700 px-4 py-1 rounded-lg relative" role="alert">
                                <strong class="font-bold">Ошибка! </strong>
                                <span class="block sm:inline">Что-то пошло не так!</span>
                                <span @click="AlertClose" class="absolute top-0 bottom-0 right-0 px-4 py-1">
                                    <svg class="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
                                </span>
                            </div>
                            <div @click="AlertClose" v-if="isSuccess > 200 && isSuccess < 220" class="bg-green-200 border border-green-400 text-green-700 px-4 py-1 rounded-lg relative" role="alert">
                                <strong class="font-bold">Успешно! </strong>
                                <span class="block sm:inline">Новость добавлена!</span>
                                <span class="absolute top-0 bottom-0 right-0 px-4 py-1">
                                    <svg class="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
                                </span>
                            </div>     
                            <div class="form-group grid grid-cols-2">
                                <div>
                                    <label class="sr-only" for="name">Имя</label>
                                    <input v-model="User.FirstName" class="w-full p-3 text-sm border rounded-lg" placeholder="Имя" type="text" id="name" />
                                </div>
                                <div>
                                    <label class="sr-only" for="name">Фамилия</label>
                                    <input v-model="User.LastName" class="w-full p-3 text-sm border rounded-lg" placeholder="Фамилия" type="text" id="name" />
                                </div>
                            </div>
                            <div>
                                <label class="sr-only" for="name">Отчество</label>
                                <input v-model="User.MiddleName" class="w-full p-3 text-sm border rounded-lg" placeholder="Отчество" type="text" id="name" />
                            </div>
                            <div>
                                <label class="sr-only" for="name">Курс</label>
                                <input v-model="User.Course" class="w-full p-3 text-sm border rounded-lg" placeholder="Курс" type="Number" id="name" />
                            </div>
                            <div>
                                <label class="sr-only" for="name">Telegram</label>
                                <input v-model="User.Telegram" class="w-full p-3 text-sm border rounded-lg" placeholder="Телеграм" type="text" id="name" />
                            </div>
                            <div>
                                <label class="sr-only" for="name">Email</label>
                                <input v-model="User.Email" class="w-full p-3 text-sm border rounded-lg" placeholder="Электронная почта" type="text" id="name" />
                            </div>
                            <div>
                                <label class="sr-only" for="name">PhoneNumber</label>
                                <input v-model="User.PhoneNumber" class="w-full p-3 text-sm border rounded-lg" placeholder="Номер телефона" type="text" id="name" />
                            </div>
                            
                            <div>
                                <label class="sr-only" for="message">Навыки</label>
                                <textarea v-model="User.Skills"
                                class="w-full p-3 text-sm border rounded-lg"
                                placeholder="О себе"
                                rows="8"
                                id="message"
                                ></textarea>
                            </div>
                            <div>
                                <label class="sr-only" for="name">Пароль</label>
                                <input v-model="User.Password" class="w-full p-3 text-sm border rounded-lg" placeholder="Пароль" type="password" id="name" />
                            </div>
                            <div>
                                <label class="sr-only" for="name">Пароль</label>
                                <input v-model="User.Password" class="w-full p-3 text-sm border rounded-lg" placeholder="Подтвердите пароль" type="password" id="name" />
                            </div>
                            <div class="mt-4">
                                <button
                                type="submit"
                                class="inline-flex items-center justify-center w-full px-5 py-3 text-white bg-black rounded-lg sm:w-auto"
                                >
                                <span class="font-medium"> Создать </span>

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="w-5 h-5 ml-3"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                                </button>
                            </div>
                        </form>
                    </div>
            </div>
        </div>    
    </section>
</template>

<script>
import FormPhotoMixins from '@/components/mixins/FormPhoto.js'
    export default {
        mixins:[FormPhotoMixins],
        data(){
            return{
                User:Object,
                isSuccess:0,


            }
        },

        methods: {
            async OnSubmit(){
                var myHeaders = new Headers();
                myHeaders.append("Content-Type", "application/json");
                
                await this.SendPhoto();
                //console.log(this.UploadedFile)
                var raw = JSON.stringify({
                    "username": "string",
                    "firstName": this.User.FirstName,
                    "lastName": this.User.LastName,
                    "middleName": this.User.MiddleName,
                    "email": this.User.Email,
                    "telegram": this.User.Telegram,
                    "password":this.User.Password,
                    "skills": this.User.Skills,
                    "photo":this.UploadedFile[0]
                    // "course": this.User.Course,
                    // "phoneNumber": this.User.PhoneNumber,
                });
                var requestOptions = {
                    method: 'POST',
                    headers: myHeaders,
                    body: raw,
                    redirect: 'follow'
                };
                
                fetch("https://pp.ftf.tsu.ru/api/Auth/Register", requestOptions)
                    .then((response) =>  {
                        console.log(response.status)
                        if(response.status >= 200 && response.status <220)
                        {
                            response.json().then(
                                res => {
                                    localStorage.token = res.value.token
                                    localStorage.user = JSON.stringify(res.value)
                                }
                            )
                            window.location.href = 'https://pp.ftf.tsu.ru/Users/Index';
                        }
                        
                    })
                    .catch(error => console.log('error', error));
                console.log(localStorage.Token)
            },

            async SendPhoto(){
                console.log("sendPhoto")
                var formdata = new FormData();
                Array.from(this.Files).forEach(item=>  
                {   
                    console.log(item.name); 
                        formdata.append("UploadedFiles", item, 'Project/' + item.name);
                    }
                );
                console.log(formdata.getAll('UploadedFiles'))
                console.log("sendPhoto")

                var myHeaders = new Headers();
                //myHeaders.append("Content-Type", "application/json");

                var requestOptions = {
                    method: 'POST',
                    headers: myHeaders,
                    body: formdata,
                    redirect: 'follow'
                };
                await fetch("https://pp.ftf.tsu.ru/api/Files", requestOptions)
                    .then(response => response.text())
                    .then(result => this.UploadedFile = JSON.parse(result) )
                    .catch(error => console.log('error', error));
                    console.log(this.UploadedFile)  
                    

            },
            


        },
    }
</script>