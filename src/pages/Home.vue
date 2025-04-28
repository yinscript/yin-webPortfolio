<template>
    <!-- upper gradient -->
    <div data-aos="zoom-in" class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
        <div class="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-[#2781FF] to-[#0ACF83] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
    </div>

    <!-- Hero Section -->
    <div data-aos="fade-up" class="relative mt-[-40px] mb-10 overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/examples/squared-bg-element.svg')] dark:before:bg-[url('https://preline.co/assets/svg/examples-dark/squared-bg-element.svg')] before:bg-no-repeat before:bg-top before:size-full before:-z-1 before:transform before:-translate-x-1/2">
        <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-5 pb-10">
            <!-- End Announcement Banner -->

            <img src="../assets/memoji.png" alt="" class="mx-auto w-20 h-20 sm:w-30 sm:h-30 mb-[-30px]">

            <!-- Title -->
            <div class="mt-5 max-w-xl text-center mx-auto">
                <h1 class="block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-neutral-200">
                    Hi, I'm Yin. Welcome to my web portfolio!
                </h1>
            </div>
            <!-- End Title -->

            <div class="mt-5 max-w-3xl text-center mx-auto">
                <p class="text-lg text-gray-600 dark:text-neutral-400"> I'm an Information Technology student with a
                    passion for software development, particularly in UI/UX
                    and front-end development.</p>
            </div>

            <!-- Buttons -->
            <div class="mt-8 gap-3 flex justify-center">
                <a class="inline-flex justify-center items-center gap-x-3 text-center bg-linear-to-tl from-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600 border border-transparent text-white text-sm font-medium rounded-md focus:outline-hidden focus:from-violet-600 focus:to-blue-600 py-3 px-4"
                    href="#projects">
                    See Projects
                    <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                        viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round">
                        <path d="m9 18 6-6-6-6" />
                    </svg>
                </a>
                <router-link
                    class="relative group p-2 ps-3 inline-flex items-center gap-x-2 text-sm font-mono rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                    to="/terminal" target="_blank">
                    View Terminal Portfolio
                </router-link>
            </div>
            <!-- End Buttons -->
        </div>
    </div>
    <!-- End Hero -->

    <!-- projects section -->
    <section id="projects">
        <div class="container mx-auto px-6 my-20 text-gray-300">
            <h1 class="text-3xl md:text-4xl font-serif text-center p-10 mb-5">Projects</h1>

            <!-- Line Divider -->
            <div data-aos="fade-down" class="line-divider mb-40">
                <div class="animate-on-scroll line md:block">
                    <div class=" w-0.5 h-60 bg-gray-300 mx-auto rounded-full mb-2"></div>
                </div>

                <div class="x-svg flex items-center justify-center mb-20">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>
            </div>
            <!-- End of Line Divider -->

            <!-- Project 1: TodoList -->
            <div data-aos="fade-up"
                class="grid grid-cols-2 gap-3 max-w-5xl mt-10 mx-auto coding inverse-toggle text-gray-300 text-sm font-mono subpixel-antialiased border-0 leading-normal overflow-hidden h-full">
                <!-- Left Column: Text -->
                <div class="flex flex-col justify-start">
                    <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold">TodoList</h2>
                    <p class="text-gray-300 text-sm md:text-base lg:text-lg">Personal</p>
                    <hr class="my-2 border-gray-300 w-1/3">
                    <p class="text-gray-400 text-xs md:text-base lg:text-sm mb-4">2025</p>
                    <div class="flex flex-items gap-3">
                        <a href="https://github.com/yinscript/Minimal-TodoList" target="_blank"
                            class="w-50 relative border border-gray-300 group py-1.5 px-2.5 text-gray-300 cursor-pointer flex items-center justify-center">
                            <span
                                class="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 group-hover:w-full group-hover:transition-all"></span>
                            <span class="px-2">View project</span>
                        </a>
                        <a href="https://minimal-todolist.vercel.app/" target="_blank"
                            class="w-10 relative border border-gray-300 group py-1.5 px-3 text-gray-300 cursor-pointer">
                            <span
                                class="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 group-hover:w-full group-hover:transition-all"></span>
                            <i class="fas fa-globe"></i>
                        </a>
                    </div>
                </div>
                <!-- Right Column: Image -->
                <div>
                    <div class="w-full relative mx-auto h-auto overflow-hidden">
                        <img src="../assets/todolist.png" alt="SOARchives"
                            class="w-full h-auto relative z-0 transition-all duration-300 hover:scale-110">
                    </div>
                </div>
            </div>

            <!-- Project 2: SOARchives -->
            <div data-aos="fade-up"
                class="grid grid-cols-2 gap-3 max-w-5xl mt-10 mx-auto coding inverse-toggle text-gray-300 text-sm font-mono subpixel-antialiased border-0 leading-normal overflow-hidden h-full">
                <!-- Left Column: Text -->
                <div class="flex flex-col justify-start">
                    <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold">SOARchives</h2>
                    <p class="text-gray-300 text-sm md:text-base lg:text-lg">Capstone Project</p>
                    <hr class="my-2 border-gray-300 w-1/3">
                    <p class="text-gray-400 text-xs md:text-base lg:text-sm mb-4">2024</p>
                    <div class="flex flex-items gap-3">
                        <a href="https://www.behance.net/gallery/215552791/SOARchives-Frontend-User-Interface-Design" target="_blank"
                            class="w-50 relative border border-gray-300 group py-1.5 px-2.5 text-gray-300 cursor-pointer flex items-center justify-center">
                            <span
                                class="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 group-hover:w-full group-hover:transition-all"></span>
                            <span class="px-2">View project</span>
                        </a>
                        <a href="https://soarchives.online" target="_blank"
                            class="w-10 relative border border-gray-300 group py-1.5 px-3 text-gray-300 cursor-pointer">
                            <span
                                class="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 group-hover:w-full group-hover:transition-all"></span>
                            <i class="fas fa-globe"></i>
                        </a>
                    </div>
                </div>
                <!-- Right Column: Image -->
                <div>
                    <div class="w-full relative mx-auto h-auto overflow-hidden">
                        <img src="../assets/project1.png" alt="SOARchives"
                            class="w-full h-auto relative z-0 transition-all duration-300 hover:scale-110">
                    </div>
                </div>
            </div>

            <!-- Project 3: Codeit -->
            <div data-aos="fade-up"
                class="grid grid-cols-2 gap-3 max-w-5xl mt-10 mx-auto coding inverse-toggle text-gray-300 text-sm font-mono subpixel-antialiased border-0 leading-normal overflow-hidden h-full">
                <!-- Left Column: Text -->
                <div class="flex flex-col justify-start">
                    <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold ">Codeit</h2>
                    <p class="text-gray-300 text-sm md:text-base lg:text-lg">Personal</p>
                    <hr class="my-2 border-gray-300 w-1/3">
                    <p class="text-gray-400 text-xs md:text-base lg:text-sm mb-4">2024</p>
                    <a href="https://www.behance.net/gallery/175061235/Codeit-Responsive-Website-Design" target="_blank"
                        class="w-40 relative border border-gray-300 group py-1.5 px-2.5 text-gray-300 cursor-pointer flex items-center justify-center">
                        <span
                            class="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 group-hover:w-full group-hover:transition-all"></span>
                        <span class="px-2">View project</span>
                    </a>
                </div>
                <!-- Right Column: Image -->
                <div class="w-full relative mx-auto h-auto overflow-hidden">
                    <img src="../assets/project2.png" alt="Codeit"
                        class="w-full h-auto relative z-0 transition-all duration-300 hover:scale-110">
                </div>
            </div>

            <!-- Project 4: Snacz -->
            <div data-aos="fade-up"
                class="grid grid-cols-2 gap-3 max-w-5xl mt-10 mx-auto coding inverse-toggle text-gray-300 text-sm font-mono subpixel-antialiased border-0 leading-normal overflow-hidden h-full">
                <!-- Left Column: Text -->
                <div class="flex flex-col justify-start">
                    <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold ">Snacz</h2>
                    <p class="text-gray-300 text-sm md:text-base lg:text-lg">Personal</p>
                    <hr class="my-2 border-gray-300 w-1/3">
                    <p class="text-gray-400 text-xs md:text-base lg:text-sm mb-4">2024</p>
                    <a href="https://www.behance.net/gallery/174934231/Snacz-Snack-Ordering-App-for-a-Movie-Theater" target="_blank"
                        class="w-40 relative border border-gray-300 group py-1.5 px-2.5 text-gray-300 cursor-pointer flex items-center justify-center">
                        <span
                            class="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 group-hover:w-full group-hover:transition-all"></span>
                        <span class="px-2">View project</span>
                    </a>
                </div>
                <!-- Right Column: Image -->
                <div class="w-full relative mx-auto h-auto overflow-hidden">
                    <img src="../assets/project3.png" alt="Snacz"
                        class="w-full h-auto relative z-0 transition-all duration-300 hover:scale-110">
                </div>
            </div>

            <!-- Project 5: Edu Spark PH -->
            <div data-aos="fade-up"
                class="grid grid-cols-2 gap-3 max-w-5xl mt-10 mx-auto coding inverse-toggle text-gray-300 text-sm font-mono subpixel-antialiased border-0 leading-normal overflow-hidden h-full">
                <!-- Left Column: Text -->
                <div class="flex flex-col justify-start">
                    <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold ">Edu Spark PH</h2>
                    <p class="text-gray-300 text-sm md:text-base lg:text-lg">Personal</p>
                    <hr class="my-2 border-gray-300 w-1/3">
                    <p class="text-gray-400 text-xs md:text-base lg:text-sm mb-4">2024</p>
                    <a href="https://www.behance.net/gallery/174104055/Edu-Spark-PH-App-UX-Case-Study" target="_blank"
                        class="w-40 relative border border-gray-300 group py-1.5 px-2.5 text-gray-300 cursor-pointer flex items-center justify-center">
                        <span
                            class="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 group-hover:w-full group-hover:transition-all"></span>
                        <span class="px-2">View project</span>
                    </a>
                </div>
                <!-- Right Column: Image -->
                <div class="w-full relative mx-auto h-auto overflow-hidden">
                    <img src="../assets/project4.png" alt="Edu Spark PH"
                        class="w-full h-auto relative z-0 transition-all duration-300 hover:scale-110">
                </div>
            </div>
        </div>
    </section>

    <!-- line divider -->
    <div class="line-divider mb-40 text-gray-300 mt-50">
        <div class="animate-on-scroll line md:block">
            <div class=" w-0.5 h-60 bg-gray-300 mx-auto rounded-full mb-2"></div>
        </div>

        <div class="flex items-center justify-center mb-20"
            style="animation: spin 1s linear forwards; animation-fill-mode: forwards;">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </div>
    </div>

    <!-- lower gradient -->
    <div data-aos="zoom-in" class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true">
        <div class="relative left-[calc(50%+3rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 bg-linear-to-tr from-[#FFAE17] to-[#FF463F] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
    </div>

</template>
