<template>
<main class="relative h-full max-h-screen transition-all duration-200 ease-in-out xl:ml-68 rounded-xl ps">

<nav navbar-main="" class="relative flex flex-wrap items-center justify-between px-0 py-2 mx-6 transition-all ease-in shadow-none duration-250 rounded-2xl lg:flex-nowrap lg:justify-start" navbar-scroll="false">
<div class="flex items-center justify-between w-full px-4 py-1 mx-auto flex-wrap-inherit">
<nav>

<ol class="flex flex-wrap pt-1 mr-12 bg-transparent rounded-lg sm:mr-16">
<li class="text-sm leading-normal breadcrumb-item">
<a class="text-white" href="javascript:;">
<i class="leading-none ni ni-box-2"></i>
</a>
</li>
<li class="text-sm pl-2 leading-normal before:float-left before:pr-2 before:text-white before:content-['/']">
<a class="text-white opacity-50" href="javascript:;">Pages</a>
</li>
<li class="text-sm pl-2 capitalize leading-normal text-white before:float-left before:pr-2 before:text-white before:content-['/']" aria-current="page">Default</li>
</ol>
<h6 class="mb-0 font-bold text-white capitalize">Default</h6>
</nav>
<div class="flex items-center">
<a mini-sidenav-burger="" href="javascript:;" class="hidden p-0 text-sm text-white transition-all ease-nav-brand xl:block" aria-expanded="false">
<div class="w-4.5 overflow-hidden">
<i class="ease mb-0.75 relative block h-0.5 translate-x-[5px] rounded-sm bg-white transition-all"></i>
<i class="ease mb-0.75 relative block h-0.5 rounded-sm bg-white transition-all"></i>
<i class="ease relative block h-0.5 translate-x-[5px] rounded-sm bg-white transition-all"></i>
</div>
</a>
</div>
<div class="flex items-center mt-2 grow sm:mt-0 sm:mr-6 md:mr-0 lg:flex lg:basis-auto" id="navbar">
<div class="flex items-center md:ml-auto md:pr-4">
<div class="relative flex flex-wrap items-stretch w-full transition-all rounded-lg ease">
<span class="text-sm ease leading-5.6 absolute z-50 -ml-px flex h-full items-center whitespace-nowrap rounded-lg rounded-tr-none rounded-br-none border border-r-0 border-transparent bg-transparent py-2 px-2.5 text-center font-normal text-slate-500 transition-all">
<i class="fas fa-search" aria-hidden="true"></i>
</span>
<input type="text" class="pl-9 text-sm focus:shadow-primary-outline dark:bg-slate-850 dark:placeholder:text-white/80 dark:text-white/80 ease w-1/100 leading-5.6 relative -ml-px block min-w-0 flex-auto rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 pr-3 text-gray-700 transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none focus:transition-shadow" placeholder="Type here...">
</div>
</div>
<ul class="flex flex-row justify-end pl-0 mb-0 list-none md-max:w-full">


<li class="flex items-center">
<a href="../../../pages/authentication/signin/illustration.html" class="block px-0 py-2 text-sm font-semibold text-white transition-all ease-nav-brand">
<i class="fa fa-user sm:mr-1" aria-hidden="true"></i>
<span class="hidden sm:inline">Sign In</span>
</a>
</li>
<li class="flex items-center pl-4 xl:hidden">
<a sidenav-trigger="" class="block p-0 text-sm text-white transition-all ease-nav-brand" href="javascript:;" aria-expanded="false">
<div class="w-4.5 overflow-hidden">
<i class="ease mb-0.75 relative block h-0.5 rounded-sm bg-white transition-all"></i>
<i class="ease mb-0.75 relative block h-0.5 rounded-sm bg-white transition-all"></i>
<i class="ease relative block h-0.5 rounded-sm bg-white transition-all"></i>
</div>
</a>
</li>
<li class="flex items-center px-4">
<a href="javascript:;" class="p-0 text-sm text-white transition-all ease-nav-brand">
<i fixed-plugin-button-nav="" class="cursor-pointer fa fa-cog" aria-hidden="true"></i>

</a>
</li>

<li class="relative flex items-center pr-2">
<p class="hidden transform-dropdown-show"></p>
<a dropdown-trigger="" href="javascript:;" class="block p-0 text-sm text-white transition-all ease-nav-brand" aria-expanded="false">
<i class="cursor-pointer fa fa-bell" aria-hidden="true"></i>
</a>
<ul dropdown-menu="" class="text-sm transform-dropdown before:font-awesome before:leading-default before:duration-350 before:ease lg:shadow-3xl duration-250 min-w-44 before:sm:right-7 before:text-5.5 dark:bg-slate-850 pointer-events-none absolute right-0 top-0 z-50 origin-top list-none rounded-lg border-0 border-solid border-transparent bg-white bg-clip-padding px-2 py-4 text-left text-slate-500 opacity-0 transition-all before:absolute before:right-2 before:left-auto before:top-0 before:z-50 before:inline-block before:font-normal before:text-white before:antialiased before:transition-all before:content-['\f0d8'] sm:-mr-6 lg:absolute lg:right-0 lg:left-auto lg:mt-2 lg:block lg:cursor-pointer">

<li class="relative mb-2">
<a class="group ease py-1.2 clear-both block w-full whitespace-nowrap rounded-lg bg-transparent px-4 duration-300 hover:bg-gray-200 hover:text-slate-700 dark:hover:bg-gray-200/80 lg:transition-colors" href="javascript:;">
<div class="flex py-1">
<div class="my-auto">
<img src="../../../assets/img/team-2.jpg" class="inline-flex items-center justify-center mr-4 text-sm text-white h-9 w-9 max-w-none rounded-xl">
</div>
<div class="flex flex-col justify-center">
<h6 class="mb-1 text-sm font-normal leading-normal group-hover:text-slate-700 dark:text-white"><span class="font-semibold">New message</span> from Laur</h6>
<p class="mb-0 text-xs leading-tight text-slate-400 group-hover:text-slate-700 dark:text-white dark:opacity-80">
<i class="mr-1 fa fa-clock" aria-hidden="true"></i>
13 minutes ago
</p>
</div>
</div>
</a>
</li>
<li class="relative mb-2">
<a class="group ease py-1.2 clear-both block w-full whitespace-nowrap rounded-lg px-4 transition-colors duration-300 hover:bg-gray-200 hover:text-slate-700 dark:hover:bg-gray-200/80" href="javascript:;">
<div class="flex py-1">
<div class="my-auto">
<img src="../../../assets/img/small-logos/logo-spotify.svg" class="inline-flex items-center justify-center mr-4 text-sm text-white bg-gradient-to-tl from-zinc-800 to-zinc-700 dark:bg-gradient-to-tl dark:from-slate-750 dark:to-gray-850 h-9 w-9 max-w-none rounded-xl">
</div>
<div class="flex flex-col justify-center">
<h6 class="mb-1 text-sm font-normal leading-normal group-hover:text-slate-700 dark:text-white"><span class="font-semibold">New album</span> by Travis Scott</h6>
<p class="mb-0 text-xs leading-tight text-slate-400 group-hover:text-slate-700 dark:text-white dark:opacity-80">
<i class="mr-1 fa fa-clock" aria-hidden="true"></i>
1 day
</p>
</div>
</div>
</a>
</li>
<li class="relative">
<a class="group ease py-1.2 clear-both block w-full whitespace-nowrap rounded-lg px-4 transition-colors duration-300 hover:bg-gray-200 hover:text-slate-700 dark:hover:bg-gray-200/80" href="javascript:;">
<div class="flex py-1">
<div class="inline-flex items-center justify-center my-auto mr-4 text-sm text-white transition-all duration-200 ease-nav-brand bg-gradient-to-tl from-slate-600 to-slate-300 h-9 w-9 rounded-xl">
<svg width="12px" height="12px" viewBox="0 0 43 36" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<title>credit-card</title>
<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
<g transform="translate(-2169.000000, -745.000000)" fill="#FFFFFF" fill-rule="nonzero">
<g transform="translate(1716.000000, 291.000000)">
<g transform="translate(453.000000, 454.000000)">
<path class="color-background" d="M43,10.7482083 L43,3.58333333 C43,1.60354167 41.3964583,0 39.4166667,0 L3.58333333,0 C1.60354167,0 0,1.60354167 0,3.58333333 L0,10.7482083 L43,10.7482083 Z" opacity="0.593633743"></path>
<path class="color-background" d="M0,16.125 L0,32.25 C0,34.2297917 1.60354167,35.8333333 3.58333333,35.8333333 L39.4166667,35.8333333 C41.3964583,35.8333333 43,34.2297917 43,32.25 L43,16.125 L0,16.125 Z M19.7083333,26.875 L7.16666667,26.875 L7.16666667,23.2916667 L19.7083333,23.2916667 L19.7083333,26.875 Z M35.8333333,26.875 L28.6666667,26.875 L28.6666667,23.2916667 L35.8333333,23.2916667 L35.8333333,26.875 Z"></path>
</g>
</g>
 </g>
</g>
</svg>
</div>
<div class="flex flex-col justify-center">
<h6 class="mb-1 text-sm font-normal leading-normal group-hover:text-slate-700 dark:text-white">Payment successfully completed</h6>
<p class="mb-0 text-xs leading-tight text-slate-400 group-hover:text-slate-700 dark:text-white dark:opacity-80">
<i class="mr-1 fa fa-clock" aria-hidden="true"></i>
2 days
</p>
</div>
</div>
</a>
</li>
</ul>
</li>
</ul>
</div>
</div>
</nav>
<div class="w-full p-6 mx-auto">
<div class="flex flex-wrap -mx-3">
<div class="w-full max-w-full px-3 flex-0">
<div multisteps-form="" class="mb-12">
<div class="flex flex-wrap px-4 -mx-3">
<div class="w-full max-w-full p-6 mx-auto my-6 bg-white dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl flex-0 lg:w-8/12">
<div class="grid grid-cols-4">
<button aria-controls="user" type="button" class="before:w-3.4 before:h-3.4 before:rounded-circle before:scale-120 rounded-0 -indent-330 relative m-0 cursor-pointer border-none bg-transparent px-1.5 pb-0.5 pt-5 text-slate-700 outline-none transition-all ease-linear before:absolute before:top-0 before:left-1/2 before:z-30 before:box-border before:block before:-translate-x-1/2 before:border-2 before:border-solid before:border-current before:bg-current before:transition-all before:ease-linear before:content-[''] sm:indent-0" title="User Info"><span class="text-slate-400">User Info</span></button>
<button aria-controls="address" type="button" class="before:w-3.4 before:h-3.4 before:rounded-circle after:top-1.25 rounded-0 -indent-330 relative m-0 cursor-pointer border-none bg-transparent px-1.5 pb-0.5 pt-5 outline-none transition-all ease-linear before:absolute before:top-0 before:left-1/2 before:z-30 before:box-border before:block before:-translate-x-1/2 before:border-2 before:border-solid before:border-current before:transition-all before:ease-linear before:content-[''] after:absolute after:left-[calc(-50%-13px/2)] after:z-10 after:block after:h-0.5 after:w-full after:bg-current after:transition-all after:ease-linear after:content-[''] sm:indent-0 before:bg-white text-slate-100" title="Address">Address</button>
<button aria-controls="socials" type="button" class="before:w-3.4 before:h-3.4 before:rounded-circle after:top-1.25 rounded-0 -indent-330 relative m-0 cursor-pointer border-none bg-transparent px-1.5 pb-0.5 pt-5 outline-none transition-all ease-linear before:absolute before:top-0 before:left-1/2 before:z-30 before:box-border before:block before:-translate-x-1/2 before:border-2 before:border-solid before:border-current before:transition-all before:ease-linear before:content-[''] after:absolute after:left-[calc(-50%-13px/2)] after:z-10 after:block after:h-0.5 after:w-full after:bg-current after:transition-all after:ease-linear after:content-[''] sm:indent-0 before:bg-white text-slate-100" title="Socials">Socials</button>
<button aria-controls="profile" type="button" class="before:w-3.4 before:h-3.4 before:rounded-circle after:top-1.25 rounded-0 -indent-330 relative m-0 cursor-pointer border-none bg-transparent px-1.5 pb-0.5 pt-5 outline-none transition-all ease-linear before:absolute before:top-0 before:left-1/2 before:z-30 before:box-border before:block before:-translate-x-1/2 before:border-2 before:border-solid before:border-current before:transition-all before:ease-linear before:content-[''] after:absolute after:left-[calc(-50%-13px/2)] after:z-10 after:block after:h-0.5 after:w-full after:bg-current after:transition-all after:ease-linear after:content-[''] sm:indent-0 before:bg-white text-slate-100" title="Profile">Profile</button>
</div>
</div>
</div>
<div class="flex flex-wrap -mx-3">
<div class="w-full max-w-full px-3 m-auto flex-0 lg:w-8/12">
<form class="relative mb-32" style="height: 408px;">
<div form="user" class="absolute top-0 left-0 flex flex-col w-full min-w-0 p-4 break-words bg-white border-0 shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border h-auto opacity-100 visible" active="">
<h5 class="mb-0 font-bold dark:text-white">About me</h5>
<p class="mb-0 text-sm leading-normal">Mandatory informations</p>
<div>
<div class="flex flex-wrap mt-4 -mx-3">
<div class="w-full max-w-full px-3 flex-0 sm:w-6/12">
<label class="mb-2 ml-1 text-xs font-bold text-slate-700 dark:text-white/80" for="First Name">First Name</label>
<input type="text" name="First Name" placeholder="eg. Michael" class="focus:shadow-primary-outline dark:bg-slate-850 dark:placeholder:text-white/80 dark:text-white/80 text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none">
</div>
<div class="w-full max-w-full px-3 mt-4 flex-0 sm:mt-0 sm:w-6/12">
<label class="mb-2 ml-1 text-xs font-bold text-slate-700 dark:text-white/80" for="Last Name">Last Name</label>
<input type="text" name="Last Name" placeholder="eg. Prior" class="focus:shadow-primary-outline dark:bg-slate-850 dark:placeholder:text-white/80 dark:text-white/80 text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none">
</div>
</div>
<div class="flex flex-wrap mt-4 -mx-3">
<div class="w-full max-w-full px-3 flex-0 sm:w-6/12">
<label class="mb-2 ml-1 text-xs font-bold text-slate-700 dark:text-white/80" for="Company">Company</label>
<input type="text" name="Company" placeholder="eg. Creative Tim" class="focus:shadow-primary-outline dark:bg-slate-850 dark:placeholder:text-white/80 dark:text-white/80 text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none">
</div>
<div class="w-full max-w-full px-3 mt-4 flex-0 sm:mt-0 sm:w-6/12">
<label class="mb-2 ml-1 text-xs font-bold text-slate-700 dark:text-white/80" for="Email Address">Email Address</label>
<input type="email" name="Email Address" placeholder="eg. soft@dashboard.com" class="focus:shadow-primary-outline dark:bg-slate-850 dark:placeholder:text-white/80 dark:text-white/80 text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none">
</div>
</div>
<div class="flex flex-wrap mt-4 -mx-3">
<div class="w-full max-w-full px-3 flex-0 sm:w-6/12">
<label class="mb-2 ml-1 text-xs font-bold text-slate-700 dark:text-white/80" for="Password">Password</label>
<input type="password" name="Password" placeholder="******" class="focus:shadow-primary-outline dark:bg-slate-850 dark:placeholder:text-white/80 dark:text-white/80 text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none">
</div>
<div class="w-full max-w-full px-3 mt-4 flex-0 sm:mt-0 sm:w-6/12">
<label class="mb-2 ml-1 text-xs font-bold text-slate-700 dark:text-white/80" for="Repeat Password">Repeat Password</label>
<input type="password" name="Repeat Password" placeholder="******" class="focus:shadow-primary-outline dark:bg-slate-850 dark:placeholder:text-white/80 dark:text-white/80 text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none">
</div>
</div>
<div class="flex mt-6">
<button type="button" aria-controls="address" next-form-btn="" href="javascript:;" class="inline-block px-6 py-3 mb-0 ml-auto text-xs font-bold text-right text-white uppercase align-middle transition-all ease-in border-0 rounded-lg shadow-md cursor-pointer hover:-translate-y-px active:opacity-85 hover:shadow-xs dark:bg-gradient-to-tl dark:from-slate-750 dark:to-gray-850 bg-gradient-to-tl from-zinc-800 to-zinc-700 leading-pro tracking-tight-rem bg-150 bg-x-25">Next</button>
</div>
</div>
</div>
<div form="address" class="absolute top-0 left-0 flex flex-col w-full min-w-0 p-4 break-words bg-white border-0 shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border h-0 opacity-0 invisible">
<h5 class="font-bold dark:text-white">Address</h5>
<div>
<div class="flex flex-wrap mt-4 -mx-3">
<div class="w-full max-w-full px-3 flex-0">
<label class="mb-2 ml-1 text-xs font-bold text-slate-700 dark:text-white/80" for="Address 1">Address 1</label>
<input type="text" name="Address 1" placeholder="eg. Street 111" class="focus:shadow-primary-outline dark:bg-slate-850 dark:placeholder:text-white/80 dark:text-white/80 text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none">
</div>
</div>
<div class="flex flex-wrap mt-4 -mx-3">
<div class="w-full max-w-full px-3 flex-0">
<label class="mb-2 ml-1 text-xs font-bold text-slate-700 dark:text-white/80" for="Address 2">Address 2</label>
<input type="text" name="Address 2" placeholder="eg. Street 221" class="focus:shadow-primary-outline dark:bg-slate-850 dark:placeholder:text-white/80 dark:text-white/80 text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none">
</div>
</div>
<div class="flex flex-wrap mt-4 -mx-3">
<div class="w-full max-w-full px-3 flex-0 sm:w-6/12">
<label class="mb-2 ml-1 text-xs font-bold text-slate-700 dark:text-white/80" for="City">City</label>
<input type="text" name="City" placeholder="eg. Tokyo" class="focus:shadow-primary-outline dark:bg-slate-850 dark:placeholder:text-white/80 dark:text-white/80 text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none">
</div>
<div class="w-6/12 max-w-full px-3 mt-4 flex-0 sm:mt-0 sm:w-3/12">
<label class="mb-2 ml-1 text-xs font-bold text-slate-700 dark:text-white/80" for="State">State</label>
<div class="choices" data-type="select-one" tabindex="0" role="combobox" aria-autocomplete="list" aria-haspopup="true" aria-expanded="false"><div class="choices__inner"><select choices-select="" choice="" name="State" class="focus:shadow-primary-outline dark:bg-slate-850 dark:placeholder:text-white/80 dark:text-white/80 text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none choices__input" hidden="" tabindex="-1" data-choice="active"><option value="...">...</option></select><div class="choices__list choices__list--single"><div class="choices__item choices__item--selectable" data-item="" data-id="1" data-value="..." data-custom-properties="null" aria-selected="true">...</div></div></div><div class="choices__list choices__list--dropdown" aria-expanded="false"><input type="text" class="choices__input choices__input--cloned" autocomplete="off" autocapitalize="off" spellcheck="false" role="textbox" aria-autocomplete="list" aria-label="false" placeholder=""><div class="choices__list" role="listbox"><div id="choices--State-j9-item-choice-1" class="choices__item choices__item--choice is-selected choices__item--selectable is-highlighted" role="option" data-choice="" data-id="1" data-value="..." data-select-text="Press to select" data-choice-selectable="" aria-selected="true">...</div><div id="choices--State-j9-item-choice-2" class="choices__item choices__item--choice choices__item--selectable" role="option" data-choice="" data-id="2" data-value="1" data-select-text="Press to select" data-choice-selectable="">State 1</div><div id="choices--State-j9-item-choice-3" class="choices__item choices__item--choice choices__item--selectable" role="option" data-choice="" data-id="3" data-value="2" data-select-text="Press to select" data-choice-selectable="">State 2</div></div></div></div>
</div>
<div class="w-6/12 max-w-full px-3 mt-4 flex-0 sm:mt-0 sm:w-3/12">
<label class="mb-2 ml-1 text-xs font-bold text-slate-700 dark:text-white/80" for="Zip">Zip</label>
<input type="text" name="Zip" placeholder="7 letters" class="focus:shadow-primary-outline dark:bg-slate-850 dark:placeholder:text-white/80 dark:text-white/80 text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none">
</div>
</div>
<div class="flex mt-6">
<button type="button" aria-controls="user" prev-form-btn="" href="javascript:;" class="inline-block px-6 py-3 mb-0 text-xs font-bold text-right uppercase align-middle transition-all ease-in border-0 rounded-lg shadow-md cursor-pointer hover:-translate-y-px active:opacity-85 hover:shadow-xs bg-gradient-to-tl from-gray-400 to-gray-100 leading-pro tracking-tight-rem bg-150 bg-x-25 text-slate-800">Prev</button>
<button type="button" aria-controls="socials" next-form-btn="" href="javascript:;" class="inline-block px-6 py-3 mb-0 ml-auto text-xs font-bold text-right text-white uppercase align-middle transition-all ease-in border-0 rounded-lg shadow-md cursor-pointer hover:-translate-y-px active:opacity-85 hover:shadow-xs dark:bg-gradient-to-tl dark:from-slate-750 dark:to-gray-850 bg-gradient-to-tl from-zinc-800 to-zinc-700 leading-pro tracking-tight-rem bg-150 bg-x-25">Next</button>
</div>
</div>
</div>
<div form="socials" class="absolute top-0 left-0 flex flex-col w-full min-w-0 p-4 break-words bg-white border-0 shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border h-0 opacity-0 invisible">
<h5 class="font-bold dark:text-white">Socials</h5>
<div>
<div class="flex flex-wrap mt-4 -mx-3">
<div class="w-full max-w-full px-3 flex-0">
<label class="mb-2 ml-1 text-xs font-bold text-slate-700 dark:text-white/80" for="Twitter Handle">Twitter Handle</label>
<input type="text" name="Twitter Handle" placeholder="@soft" class="focus:shadow-primary-outline dark:bg-slate-850 dark:placeholder:text-white/80 dark:text-white/80 text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none">
</div>
</div>
<div class="flex flex-wrap mt-4 -mx-3">
<div class="w-full max-w-full px-3 flex-0">
<label class="mb-2 ml-1 text-xs font-bold text-slate-700 dark:text-white/80" for="Facebook Account">Facebook Account</label>
<input type="text" name="Facebook Account" placeholder="https://..." class="focus:shadow-primary-outline dark:bg-slate-850 dark:placeholder:text-white/80 dark:text-white/80 text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none">
</div>
</div>
<div class="flex flex-wrap mt-4 -mx-3">
<div class="w-full max-w-full px-3 flex-0">
<label class="mb-2 ml-1 text-xs font-bold text-slate-700 dark:text-white/80" for="Instagram Account">Instagram Account</label>
<input type="text" name="Instagram Account" placeholder="https://..." class="focus:shadow-primary-outline dark:bg-slate-850 dark:placeholder:text-white/80 dark:text-white/80 text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none">
</div>
</div>
<div class="flex mt-6">
<button type="button" aria-controls="address" prev-form-btn="" href="javascript:;" class="inline-block px-6 py-3 mb-0 text-xs font-bold text-right uppercase align-middle transition-all ease-in border-0 rounded-lg shadow-md cursor-pointer hover:-translate-y-px active:opacity-85 hover:shadow-xs bg-gradient-to-tl from-gray-400 to-gray-100 leading-pro tracking-tight-rem bg-150 bg-x-25 text-slate-800">Prev</button>
<button type="button" aria-controls="profile" next-form-btn="" href="javascript:;" class="inline-block px-6 py-3 mb-0 ml-auto text-xs font-bold text-right text-white uppercase align-middle transition-all ease-in border-0 rounded-lg shadow-md cursor-pointer hover:-translate-y-px active:opacity-85 hover:shadow-xs dark:bg-gradient-to-tl dark:from-slate-750 dark:to-gray-850 bg-gradient-to-tl from-zinc-800 to-zinc-700 leading-pro tracking-tight-rem bg-150 bg-x-25">Next</button>
</div>
</div>
</div>
<div form="profile" class="absolute top-0 left-0 flex flex-col w-full min-w-0 p-4 break-words bg-white border-0 shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border h-0 opacity-0 invisible">
<h5 class="font-bold dark:text-white">Profile</h5>
<div>
<div class="flex flex-wrap mt-4 -mx-3">
<div class="w-full max-w-full px-3 flex-0">
<label class="mb-2 ml-1 text-xs font-bold text-slate-700 dark:text-white/80" for="Public Email">Public Email</label>
<input type="text" name="Public Email" placeholder="Use an address you don't use frequently." class="focus:shadow-primary-outline dark:bg-slate-850 dark:placeholder:text-white/80 dark:text-white/80 text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none">
</div>

 
<div class="w-full max-w-full px-3 mt-4 flex-0">
<label class="mb-2 ml-1 text-xs font-bold text-slate-700 dark:text-white/80" for="Bio">Bio</label>
<textarea name="Bio" rows="5" placeholder="Say a few words about who you are or what you're working on." class="focus:shadow-primary-outline dark:bg-slate-850 dark:placeholder:text-white/80 dark:text-white/80 min-h-unset text-sm leading-5.6 ease block h-auto w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"></textarea>
</div>
</div>
<div class="flex mt-6">
<button type="button" aria-controls="socials" prev-form-btn="" href="javascript:;" class="inline-block px-6 py-3 mb-0 text-xs font-bold text-right uppercase align-middle transition-all ease-in border-0 rounded-lg shadow-md cursor-pointer hover:-translate-y-px active:opacity-85 hover:shadow-xs bg-gradient-to-tl from-gray-400 to-gray-100 leading-pro tracking-tight-rem bg-150 bg-x-25 text-slate-800">Prev</button>
<button type="button" send-form-btn="" href="javascript:;" class="inline-block px-6 py-3 mb-0 ml-auto text-xs font-bold text-right text-white uppercase align-middle transition-all ease-in border-0 rounded-lg shadow-md cursor-pointer hover:-translate-y-px active:opacity-85 hover:shadow-xs dark:bg-gradient-to-tl dark:from-slate-750 dark:to-gray-850 bg-gradient-to-tl from-zinc-800 to-zinc-700 leading-pro tracking-tight-rem bg-150 bg-x-25">Send</button>
</div>
</div>
</div>
</form>
</div>
</div>
</div>
</div>
</div>
<footer class="pt-4">
<div class="w-full px-6 mx-auto">
<div class="flex flex-wrap items-center -mx-3 lg:justify-between">
<div class="w-full max-w-full px-3 mt-0 mb-6 shrink-0 lg:mb-0 lg:w-1/2 lg:flex-none">
<div class="text-sm leading-normal text-center copyright text-slate-500 lg:text-left">
©
2022,
made with <i class="fa fa-heart" aria-hidden="true"></i> by
<a href="https://www.creative-tim.com" class="font-semibold text-slate-700 dark:text-white" target="_blank">Creative Tim</a>
for a better web.
</div>
</div>
<div class="w-full max-w-full px-3 mt-0 shrink-0 lg:w-1/2 lg:flex-none">
<ul class="flex flex-wrap justify-center pl-0 mb-0 list-none lg:justify-end">
<li class="nav-item">
<a href="https://www.creative-tim.com" class="block px-4 pt-0 pb-1 text-sm font-normal transition-colors ease-in-out text-slate-500" target="_blank">Creative Tim</a>
</li>
<li class="nav-item">
<a href="https://www.creative-tim.com/presentation" class="block px-4 pt-0 pb-1 text-sm font-normal transition-colors ease-in-out text-slate-500" target="_blank">About Us</a>
</li>
<li class="nav-item">
<a href="https://creative-tim.com/blog" class="block px-4 pt-0 pb-1 text-sm font-normal transition-colors ease-in-out text-slate-500" target="_blank">Blog</a>
</li>
<li class="nav-item">
<a href="https://www.creative-tim.com/license" class="block px-4 pt-0 pb-1 pr-0 text-sm font-normal transition-colors ease-in-out text-slate-500" target="_blank">License</a>
</li>
</ul>
</div>
</div>
</div>
</footer>
</div>
<div class="ps__rail-x" style="left: 0px; bottom: 0px;"><div class="ps__thumb-x" tabindex="0" style="left: 0px; width: 0px;"></div></div><div class="ps__rail-y" style="top: 0px; height: 487px; right: 0px;"><div class="ps__thumb-y" tabindex="0" style="top: 0px; height: 0px;"></div></div></main>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>