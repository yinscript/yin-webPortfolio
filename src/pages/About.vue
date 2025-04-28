<template>
    <!-- upper gradient -->
    <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
        <div class="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-[#2781FF] to-[#0ACF83] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
    </div>
    <section id="about">
        <h1 class="text-3xl md:text-4xl font-serif text-center p-10 text-gray-300">About Me</h1>

        <!-- Line Divider -->
        <div data-aos="zoom-in" class="line-divider mb-0">
            <div class="animate-on-scroll line md:block">
                <div class=" w-0.5 h-60 bg-gray-300 mx-auto rounded-full mb-2"></div>
            </div>
            <div class="x-svg flex items-center justify-center mb-20 text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
            </div>
        </div>
        <!-- End of Line Divider -->

        <!-- Techstack Section -->
        <section data-aos="fade-up" id="techstack" class="dark:text-gray-300 my-50">
            <div class="container max-w-5xl px-4 py-12 mx-auto">
                <div class="grid gap-4 mx-4 sm:grid-cols-12">
                    <div class="col-span-12 sm:col-span-4">
                        <div
                            class="text-center sm:text-left mb-14 before:block before:w-24 before:h-2 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-gray-300">
                            <h3 class="text-3xl font-semibold">Techstack</h3>
                            <span class="text-sm font-bold tracking-wider uppercase dark:text-gray-400">Technologies /
                                Tools I Use</span>
                        </div>
                    </div>
                    <div class="relative col-span-12 px-4 space-y-6 sm:col-span-8">
                        <div
                            class="col-span -12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-300">
                            <div
                                class="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-gray-300">
                                <h3 class="text-xl font-semibold tracking-wide">FRONTEND </h3>
                                <p class="mb-3 text-gray-400">Building user interfaces and user experiences is my passion.</p>
                                <div class="flex items-start space-x-2 justify-start">
                                    <img class="w-8 h-8" src="../assets/svg/html.svg" alt="HTML">
                                    <img class="w-8 h-8" src="../assets/svg/css.svg" alt="CSS">
                                    <img class="w-8 h-8" src="../assets/svg/js.svg" alt="JavaScript">
                                    <img class="w-8 h-8" src="../assets/svg/vue.svg" alt="Vue">
                                    <img class="w-8 h-8" src="../assets/svg/react.svg" alt="React">
                                    <img class="w-8 h-8" src="../assets/svg/bootstrap.svg" alt="Bootstrap">
                                    <img class="w-8 h-8" src="../assets/svg/tailwindcss.svg" alt="TailwindCSS">
                                </div>
                            </div>
                            <div
                                class="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-gray-300">
                                <h3 class="text-xl font-semibold tracking-wide mb-3">BACKEND</h3>
                                <p class="mb-3 text-gray-400">I explore and gain proficiency in various backend languages and frameworks.</p>
                                <div class="flex items-start space-x-2 justify-start mb-3">
                                    <img class="w-8 h-8" src="../assets/svg/nodejs.svg" alt="Node.js">
                                    <img class="w-8 h-8" src="../assets/svg/csharp.svg" alt="Csharp">
                                    <img class="w-8 h-8" src="../assets/svg/php.svg" alt="PHP">
                                    <img class="w-8 h-8" src="../assets/svg/laravel.svg" alt="Laravel">
                                    <img class="w-8 h-8" src="../assets/svg/mysql.svg" alt="MySql">
                                </div>
                            </div>
                            <div
                                class="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-gray-300">
                                <h3 class="text-xl font-semibold tracking-wide mb-3">SOFTWARE TOOLS</h3>
                                <p class="mb-3 text-gray-400">Experienced with software tools for version control, design, and API testing, as well as package management.</p>
                                <div class="flex items-start space-x-2 justify-start mb-3">
                                    <img class="w-8 h-8" src="../assets/svg/git.svg" alt="Git">
                                    <img class="w-8 h-8" src="../assets/svg/figma.svg" alt="Figma">
                                    <img class="w-8 h-8" src="../assets/svg/finder.svg" alt="Finder">
                                    <img class="w-8 h-8" src="../assets/svg/xd.svg" alt="Adobe XD">
                                    <img class="w-8 h-8" src="../assets/svg/postman.svg" alt="Postman">
                                    <img class="w-8 h-8" src="../assets/svg/npm.svg" alt="NPM">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </section>
    <!-- End of Techstack Section -->

    <!-- Outside Tech Section -->
    <section data-aos="fade-up" id="outsideTech">
        <h1 class="text-3xl md:text-4xl font-serif text-center p-10 text-gray-300">Outside Tech</h1>
        
        <!-- Line Divider -->
        <div class="line-divider mb-40">
            <div class="animate-on-scroll line md:block">
                <div class=" w-0.5 h-60 bg-gray-300 bg- mx-auto rounded-full mb-2"></div>
            </div>
            <div class="x-svg flex items-center justify-center mb-20 text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </div>
        </div>
        <!-- End of Line Divider -->

        <!-- Films Section -->
        <section data-aos="fade-up" id="films">
            <div class="overflow-hidden py-24 sm:py-32">
                <div class="mx-auto max-w-7xl px-6 lg:px-8">
                    <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                        <div class="lg:pt-4 lg:pr-8">
                            <div class="lg:max-w-lg">
                                <p class="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-300 sm:text-5xl mb-10">
                                    Films has been one of my escapes</p>
                                <p class="text-gray-300 text-md/8 leading-8 mb-5">
                                    a refuge where I can momentarily <span class="text-yellow-500">detach from
                                    reality</span> and immerse myself in different worlds, emotions, and stories.
                                </p>
                                <p class="text-gray-300 text-md/8 leading-8 mb-5">
                                    There's something comforting about the way movies can reflect my emotions—even the ones
                                    I struggle to articulate. When I feel lost, <span class="text-yellow-500">I find solace
                                    in characters who are also searching for meaning.</span>
                                </p>
                            </div>
                        </div>
                        <img src="../assets/film.gif" alt="films"
                            class="p-5 w-[48rem] max-w-none rounded-xl ring-1 shadow-xl ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
                            width="2432" height="1442" />
                    </div>
                </div>
            </div>
        </section>
        <!-- End of Films Section -->

        <!-- Line Divider -->
        <div class="line-divider mb-40">
            <div class="animate-on-scroll line md:block">
                <div class=" w-0.5 h-60 bg-gray-300 mx-auto rounded-full mb-2"></div>
            </div>
            <div class="x-svg flex items-center justify-center mb-20 text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </div>
        </div>
        <!-- End of Line Divider -->

        <!-- Medium Logo -->
        <div class="flex items-center justify-center mt-10">
            <i class="fa-brands fa-medium text-7xl text-gray-300"></i>
        </div>
        <!-- End of Medium Logo -->

        <!-- Medium Section -->
        <section data-aos="fade-up" id="Medium">
            <div class="grid grid-cols-3 gap-0 relative w-full mb-30">
                <div
                class="flex flex-col items-center justify-center col-span-3 px-2 sm:px-20 md:px-20 lg:px-20 xl:px-52 2xl:px-64 mt-5">
                <p class="text-gray-300 text-center text-base md:text-lg lg:text-xl xl:text-base 2xl:text-base mb-2">
                    "maybe life's less romantic when i don't wanna die"
                </p>
                <p class="text-gray-500 text-center text-base md:text-lg lg:text-xl xl:text-base 2xl:text-base mb-10">
                    NIKI | BACKBURNER
                </p>
                <div class="h-full w-full mb-20">
                    <div class="coding inverse-toggle px-4 py-6 md:px-8 shadow-lg text-gray-300 subpixel-antialiased bg-neutral-900 border border-gray-300 rounded-lg leading-normal overflow-hidden h-full">
                        <div class="flex flex-col items-center gap-3 p-4 md:p-8 w-full h-full">
                            <p class="text-gray-300 text-center text-md/8 leading-10">
                                It's strange how the parts of me that feel the deepest seem to fuel my creativity—as if the
                                weight of those feelings is what gives my words meaning. Maybe that's just how it works—some
                                things have to press against you to be worth expressing. There's something cathartic about
                                seeing my thoughts materialize into words, whether in a journal, a story, or even just a
                                stream of consciousness. It allows me <span class="text-amber-500">to make sense of
                                things</span>, to find meaning in moments that feel chaotic or uncertain. Sometimes,
                                writing feels like a conversation with myself—a way to explore feelings I might not fully
                                understand until I see them written down.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- End of Medium Section -->

        <!-- Grid Style Background -->
        <div class="relative flex flex-col items-center justify-center mt-[-350px] mb-100">
            <div class="w-[70%] mx-auto text-center"></div>
            <div class="absolute -z-10 inset-0 h-70 w-full bg-[linear-gradient(to_right,#73737320_1px,transparent_1px),linear-gradient(to_bottom,#73737320_1px,transparent_1px)] bg-[size:20px_20px] mb-60" />
        </div>
        <!-- End of Grid Style Background -->

        <!-- Line Divider -->
        <div class="line-divider mb-40 text-gray-300 mt-10">
            <div class="md:block">
                <div class="w-0.5 h-60 bg-gray-300 mx-auto rounded-full mb-2"></div>
            </div>
            <div class="flex items-center justify-center mb-20" style="animation: spin 1s linear forwards; animation-fill-mode: forwards;">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </div>
        </div>
        <!-- End of Line Divider -->

        <!-- Albums Infinite Loop -->
        <div class="album-loop">
            <div class="tag-list">
                <div class="loop-slider" style="--duration:15951ms; --direction:normal;">
                    <div class="inner gap-3">
                    <img src="../assets/albums/1.png" alt="The 1975" class="w-40 h-40 mx-auto opacity-20">
                    <img src="../assets/albums/2.png" alt="Red" class="w-40 h-40 mx-auto opacity-20">
                    <img src="../assets/albums/3.png" alt="Beach House - Single" class="w-40 h-40 mx-auto opacity-20">
                    <img src="../assets/albums/4.png" alt="Vide Noir" class="w-40 h-40 mx-auto opacity-20">
                    <img src="../assets/albums/12.png" alt="Madness" class="w-40 h-40 mx-auto opacity-20">
                    <img src="../assets/albums/5.png" alt="Abba" class="w-40 h-40 mx-auto opacity-20">
                    <img src="../assets/albums/7.png" alt="Nicole" class="w-40 h-40 mx-auto opacity-20">
                    <img src="../assets/albums/8.png" alt="Superache" class="w-40 h-40 mx-auto opacity-20">
                    <img src="../assets/albums/9.png" alt="With Ears To See and Eyes To Hear" class="w-40 h-40 mx-auto opacity-20">
                    <img src="../assets/albums/10.png" alt="A Brief Inquiry Into Online Relationships" class="w-40 h-40 mx-auto opacity-20">
                    <img src="../assets/albums/11.png" alt="Royal Albert's Hall 5SOS Live" class="w-40 h-40 mx-auto opacity-20">
                    <img src="../assets/albums/13.png" alt="Boy" class="w-40 h-40 mx-auto opacity-20">
                    <img src="../assets/albums/14.png" alt="Requiem" class="w-40 h-40 mx-auto opacity-20">
                    <img src="../assets/albums/6.png" alt="Abba" class="w-40 h-40 mx-auto opacity-20">
                    <img src="../assets/albums/15.png" alt="Immunity" class="w-40 h-40 mx-auto opacity-20">
                    </div>
                </div>
                <div class="loop-slider" style="--duration:12951ms; --direction:reverse;">
                    <div class="inner gap-3">
                    <img src="../assets/albums/16.png" alt="5SOS5" class="w-40 h-40 mx-auto opacity-20">
                    <img src="../assets/albums/17.png" alt="The Wild Youth EP" class="w-40 h-40 mx-auto opacity-20">
                    <img src="../assets/albums/18.png" alt="If I Could Make It Go Quiet" class="w-40 h-40 mx-auto opacity-20">
                    <img src="../assets/albums/19.png" alt="B-Sides and Rarities" class="w-40 h-40 mx-auto opacity-20">
                    <img src="../assets/albums/20.png" alt="All We Know Is Falling" class="w-40 h-40 mx-auto opacity-20">
                    <img src="../assets/albums/21.png" alt="A Rush of Blood to the Head" class="w-40 h-40 mx-auto opacity-20">
                    <img src="../assets/albums/22.png" alt="The Tears We Fight" class="w-40 h-40 mx-auto opacity-20">
                    <img src="../assets/albums/23.png" alt="Youngblood" class="w-40 h-40 mx-auto opacity-20">
                    <img src="../assets/albums/24.png" alt="Parachutes" class="w-40 h-40 mx-auto opacity-20">
                    <img src="../assets/albums/25.png" alt="Sour" class="w-40 h-40 mx-auto opacity-20">
                    <img src="../assets/albums/26.png" alt="Kid Krow" class="w-40 h-40 mx-auto opacity-20">
                    <img src="../assets/albums/27.png" alt="The Rise and Fallof a Midwest Princess" class="w-40 h-40 mx-auto opacity-20">
                    <img src="../assets/albums/28.png" alt="Good Morning It's Now Tomorrow" class="w-40 h-40 mx-auto opacity-20">
                    <img src="../assets/albums/29.png" alt="Five Seconds Flat" class="w-40 h-40 mx-auto opacity-20">
                    <img src="../assets/albums/30.png" alt="Abbey Road" class="w-40 h-40 mx-auto opacity-20">
                    </div>
                </div>
                <div class="loop-slider" style="--duration:15951ms; --direction:reverse;">
                    <div class="inner gap-3">
                    <img src="../assets/albums/31.png" alt="Unreal Unearth: Unheard" class="w-40 h-40 mx-auto opacity-20">
                    <img src="../assets/albums/32.png" alt="You're Losing Me" class="w-40 h-40 mx-auto opacity-20">
                    <img src="../assets/albums/33.png" alt="Multo - Single" class="w-40 h-40 mx-auto opacity-20">
                    <img src="../assets/albums/34.png" alt="Goodluck, Babe!" class="w-40 h-40 mx-auto opacity-20">
                    <img src="../assets/albums/35.png" alt="Folklore" class="w-40 h-40 mx-auto opacity-20">
                    <img src="../assets/albums/36.png" alt="If You Were a Movie, This Would Be Yout Soundtrack" class="w-40 h-40 mx-auto opacity-20">
                    <img src="../assets/albums/37.png" alt="Clapclapclap!" class="w-40 h-40 mx-auto opacity-20">
                    <img src="../assets/albums/38.png" alt="Mrs. Magic - Single" class="w-40 h-40 mx-auto opacity-20">
                    <img src="../assets/albums/39.jpg" alt="Lanterns" class="w-40 h-40 mx-auto opacity-20">
                    <img src="../assets/albums/40.png" alt="Lost In Translation" class="w-40 h-40 mx-auto opacity-20">
                    <img src="../assets/albums/41.png" alt="Petals for Armor" class="w-40 h-40 mx-auto opacity-20">
                    <img src="../assets/albums/42.png" alt="Fine Line" class="w-40 h-40 mx-auto opacity-20">
                    <img src="../assets/albums/43.png" alt="So Damn Dangerous - Single" class="w-40 h-40 mx-auto opacity-20">
                    <img src="../assets/albums/44.png" alt="The Show" class="w-40 h-40 mx-auto opacity-20">
                    <img src="../assets/albums/45.png" alt="Being Funny In a Foreign Language" class="w-40 h-40 mx-auto opacity-20">
                    </div>
                </div>
                <div class="loop-slider" style="--duration:15951ms; --direction:normal;">
                    <div class="inner gap-3">
                    <img src="../assets/albums/46.png" alt="CALM" class="w-40 h-40 mx-auto opacity-20">
                    <img src="../assets/albums/47.png" alt="Strange Trails" class="w-40 h-40 mx-auto opacity-20">
                    <img src="../assets/albums/48.png" alt="Brand New Eyes" class="w-40 h-40 mx-auto opacity-20">
                    <img src="../assets/albums/49.png" alt="When Facing The Things We Turn Away From" class="w-40 h-40 mx-auto opacity-20">
                    <img src="../assets/albums/50.png" alt="Charm" class="w-40 h-40 mx-auto opacity-20">
                    <img src="../assets/albums/51.png" alt="We Fell Inlove in October / Forget Her - Single" class="w-40 h-40 mx-auto opacity-20">
                    <img src="../assets/albums/52.png" alt="Internet Hometown Hero" class="w-40 h-40 mx-auto opacity-20">
                    <img src="../assets/albums/53.png" alt="Buzz" class="w-40 h-40 mx-auto opacity-20">
                    <img src="../assets/albums/54.png" alt="After Laughter" class="w-40 h-40 mx-auto opacity-20">
                    <img src="../assets/albums/55.png" alt="Moon Music" class="w-40 h-40 mx-auto opacity-20">
                    <img src="../assets/albums/56.png" alt="Je Te Laisserai Des Mots - Single" class="w-40 h-40 mx-auto opacity-20">
                    <img src="../assets/albums/57.png" alt="You're Losing Me - Single" class="w-40 h-40 mx-auto opacity-20">
                    <img src="../assets/albums/58.png" alt="The Black Parade" class="w-40 h-40 mx-auto opacity-20">
                    <img src="../assets/albums/59.png" alt="Casablanca - Single" class="w-40 h-40 mx-auto opacity-20">
                    <img src="../assets/albums/60.png" alt="Hurry up, We're Dreaming" class="w-40 h-40 mx-auto opacity-20">
                    </div>
                </div>
                <div class="fade"></div>
            </div>
            <!-- End of Albums Infinite Loop -->

            <!-- Embedded Music Player -->
            <div class="flex justify-center relative h-screen mt-[-550px]">
                <div style="width: 280px">
                    <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/0mMlo76aVZHpuvoR6fjBSK?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                </div>
            </div>
            <!-- End of Embedded Music Player -->
        </div>
    </section>
    <!-- End of Albums Infinite Loop -->

    <!-- Line Divider -->
    <div class="line-divider mb-40 text-gray-300 mt-20">
        <div class="animate-on-scroll line md:block">
            <div class="w-0.5 h-60 bg-gray-300 mx-auto rounded-full mb-2"></div>
        </div>

        <div class="flex items-center justify-center mb-8"
            style="animation: spin 1s linear forwards; animation-fill-mode: forwards;">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </div>
    </div>
    <!-- End of Line Divider -->

    <!-- Dance Skill Section -->
    <section data-aos="fade-up" id="dance-skill">
        <div class="dance-vid flex flex-col items-center justify-center mx-auto mb-40">
            <img src="../assets/dance.png" alt="" class="mx-auto w-20 h-20 sm:w-30 sm:h-30 mb-10">
            <h1 class="text-center mb-4 text-gray-300">I'm basically a professional dancer, and I've been dancing for years...</h1>
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                class="w-70 relative border border-gray-300 group py-1.5 px-2.5 text-gray-300 cursor-pointer mx-auto mt-4 flex items-center justify-center"
                target="_blank">
                <span class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-amber-500 group-hover:w-full group-hover:transition-all"></span>Watch
                my dance performance
            </a>
        </div>
    </section>
    <!-- End of Dance Skill Section -->

    <!-- Line Divider -->
    <div data-aos="fade-down" class="line-divider mb-10">
        <div class="animate-on-scroll line md:block">
            <div class=" w-0.5 h-60 bg-gray-300 mx-auto rounded-full mb-2"></div>
        </div>
        <div class="x-svg flex items-center justify-center mb-20 text-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M6 18L18 6M6 6l12 12" />
            </svg>
        </div>
    </div>
    <!-- End of Line Divider -->

    <!-- Under Construction Section -->
    <section data-aos="fade-up" id="under-construction">
        <div class="flex flex-col items-center justify-center mt-10 mb-30">
             <img src="../assets/owl.png" alt="" class="mx-auto w-20 h-20 sm:w-30 sm:h-30 mb-10">
            <h2 class="text-2xl font-bold text-gray-300 mb-3">Light Mode? Nah..</h2>
            <p class="text-gray-300 text-center text-base md:text-lg lg:text-xl xl:text-base 2xl:text-base mb-5">
                kidding, i'm still working on it :p
            </p>
        </div>
    </section>
    <!-- End of Under Construction Section -->

    <!-- Back to Top Button -->
    <a href="#about"
        class="flex items-center justify-center w-10 h-10 fixed bottom-5 right-5 rounded-full bg-gray-300 dark:bg-amber-600 text-gray-700 dark:text-gray-300 hover:bg-gray-400 dark:hover:bg-gray-600 transition duration-300 overflow-hidden"
        :class="{ 'hidden': scrollPosition <= 0 }">
        <i class="fa-solid fa-angles-up"></i>
        <span class="absolute left-12 w-0 overflow-hidden whitespace-nowrap rounded-md bg-gray-300 dark:bg-gray-700 text-xs px-0 py-1 opacity-0 transition-all duration-300 ease-in-out">
        </span>
    </a>
    <!-- End of Back to Top Button -->
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const scrollPosition = ref(0);

const updateScroll = () => {
    scrollPosition.value = window.scrollY;
};

onMounted(() => {
    window.addEventListener('scroll', updateScroll);
});

onUnmounted(() => {
    window.removeEventListener('scroll', updateScroll);
});
</script>
