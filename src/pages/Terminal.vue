<template>
    <div data-aos="fade-up">
        <!-- Terminal-like Tab -->
        <div class="container mx-auto px-6 py-1 mb-10 flex items-center justify-center">
            <header class="w-full max-w-3xl gap-3">

                <div class="h-full w-full">
                    <div class="coding inverse-toggle px-0 py-0 shadow-lg text-gray-800 text-sm mono subpixel-antialiased bg-black/30 border border-neutral-700 rounded-lg leading-normal overflow-y-auto max-h-full">
                        <!-- MacOS-style buttons with terminal tab name -->
                        <div class="top flex items-center bg-neutral-800 py-3 px-5">
                            <div class="h-3 w-3 bg-red-400 rounded-full"></div>
                            <div class="ml-2 h-3 w-3 bg-orange-300 rounded-full"></div>
                            <div class="ml-2 h-3 w-3 bg-green-500 rounded-full"></div>
                            <span class="ml-4 text-gray-400 text-xs">yin.dev/webPorfolio/bash</span>
                        </div>

                        <div class="w-full text-xs text-center justify-center overflow-y-auto h-120" style="scrollbar-color: rgb(71, 71, 71) rgb(30, 30, 30)">
                            <pre class="rainbow-text">

                           __                    
        __                /\ \                   
 __  __/\_\    ___        \_\ \     __   __  __  
/\ \/\ \/\ \ /' _ `\      /'_` \  /'__`\/\ \/\ \ 
\ \ \_\ \ \ \/\ \/\ \  __/\ \L\ \/\  __/\ \ \_/ |
 \/`____ \ \_\ \_\ \_\/\_\ \___,_\ \____\\ \___/ 
  `/___/  \/_/\/_/\/_/\/_/\/__,_ /\/____/ \/__/  
     /\___/                                      
     \/__/                                       

                            </pre>
                            <div class="items-center text-base justify-start text-left px-5">
                                <div class="terminal" @click="focusInput">
                                    <div class="output" v-for="(line, index) in output" :key="index">
                                        <pre v-html="line"></pre>
                                    </div>
                                    <div class="input-line text-md pb-5 mb-20">
                                        <span class="text-[#52ff55] me-1">→</span><span class="prompt">[yin.dev]~$</span>
                                        <input v-model="input" @keyup.enter="processCommand" ref="inputField" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    </div>
    <!-- End of Terminal-like Tab -->

    <!-- Under Construction Section -->
    <section data-aos="fade-up" id="under-construction">
        <div class="flex flex-col items-center justify-center mt-10 mb-30">
             <div class="flex items-center justify-center w-50 h-50">
                <span style="font-size: 5rem;">🚧</span>
            </div>
            <h2 class="text-2xl font-bold text-gray-300 mb-3">Under Construction</h2>
            <p class="text-gray-300 text-center text-base md:text-lg lg:text-xl xl:text-base 2xl:text-base mb-5">
                honestly still working on this... bear with me
            </p>
        </div>
    </section>
    <!-- End of Under Construction Section -->

</template>

<script>

var dev = "https://dev.to/cosmicwanderer7";

// Frontend
import htmlLogo from "../assets/svg/html.svg";
import cssLogo from "../assets/svg/css.svg";
import jsLogo from "../assets/svg/js.svg";
import vueLogo from "../assets/svg/vue.svg";
import bootstrapLogo from "../assets/svg/bootstrap.svg";
import tailwindcssLogo from "../assets/svg/tailwindcss.svg";

// Backend
import nodejsLogo from "../assets/svg/nodejs.svg";
import csharpLogo from "../assets/svg/csharp.svg";
import phpLogo from "../assets/svg/php.svg";
import laravelLogo from "../assets/svg/laravel.svg";
import mysqlLogo from "../assets/svg/mysql.svg";

// Tools
import gitLogo from "../assets/svg/git.svg";
import figmaLogo from "../assets/svg/figma.svg";
import adobeXDLogo from "../assets/svg/xd.svg";
import finderLogo from "../assets/svg/finder.svg";
import reactLogo from "../assets/svg/react.svg";
import postmanLogo from "../assets/svg/postman.svg";
import npmLogo from "../assets/svg/npm.svg";


export default {
    data() {
        return {
            input: "",
            output: [
                "Welcome to the terminal! Type <span class='text-amber-500'>help</span> for a list of commands. Type 'help' to see available commands.",
            ],
            commands: {
                help: `
Available commands: 
help ------------> list of supported commands 
about -----------> about me in tech
outsidetech -----> about me outside tech 
projects --------> displays my projects
techstack -------> list of tools i use
clear -----------> clear terminal
`,
                about: `
<div class="input-line text-[#f0f0f0]"><span class="text-[#52ff55] me-1">→</span><span class="input-line">About </span></div>
Hi, I'm Yin! 👋

👩‍💻 I'm an Information Technology student with a passion for software development, particularly in UI/UX and front-end development.
`,
                projects: `
<div class="input-line text-[#f0f0f0]"><span class="text-[#52ff55] me-1">→</span><span class="input-line">Projects </span></div>
Check out my recent projects on <a href="/#projects" class="bg-[#52ff55] px-2" target="_blank">Projects Page</a>!
Check out my projects on <a href="https://github.com/yinscript" class="bg-[#52ff55] px-2" target="_blank">GitHub</a>!
Check out my UI/UX case studies on <a href="https://www.behance.net/jennymarinay" class="bg-[#52ff55] px-2 text-gray-700" target="_blank">Behance</a>!
`,
                outsidetech: `
<div class="input-line text-[#f0f0f0]"><span class="text-[#52ff55] me-1">→</span><span class="input-line">Outside Tech </span></div>
Visit the <a href="/about#outsideTech" class="bg-[#52ff55] px-2 target="_blank">About Me Outside Tech</a> page for more information!
`,
                techstack: `
<div class="input-line text-[#f0f0f0]"><span class="text-[#52ff55] me-1">→</span><span class="input-line">Technology I Use </span></div>

Frontend

<div class="flex items-center">
      <img src="${htmlLogo}" alt="HTML Logo" class="inline-block w-8 h-8" />
      <span class="ml-1 text-gray-300">HTML</span>
</div>
<div class="flex items-center">
      <img src="${cssLogo}" alt="CSS Logo" class="inline-block w-8 h-8" />
      <span class="ml-1 text-gray-300">CSS</span>
</div>
<div class="flex items-center">
      <img src="${jsLogo}" alt="JS Logo" class="inline-block w-8 h-8" />
      <span class="ml-1 text-gray-300">JavaScript</span>
</div>
<div class="flex items-center">
      <img src="${vueLogo}" alt="Vue Logo" class="inline-block w-8 h-8" />
      <span class="ml-1 text-gray-300">Vue.js</span>
</div>
<div class="flex items-center">
      <img src="${reactLogo}" alt="React Logo" class="inline-block w-8 h-8" />
      <span class="ml-1 text-gray-300">React</span>
</div>
<div class="flex items-center">
      <img src="${bootstrapLogo}" alt="Bootstrap Logo" class="inline-block w-8 h-8" />
      <span class="ml-1 text-gray-300">Bootstrap</span>
</div>
<div class="flex items-center">
      <img src="${tailwindcssLogo}" alt="Tailwindcss Logo" class="inline-block w-8 h-8" />
      <span class="ml-1 text-gray-300">TailwindCSS</span>
</div>

Backend

<div class="flex items-center">
      <img src="${nodejsLogo}" alt="Nodejs Logo" class="inline-block w-8 h-8" />
      <span class="ml-1 text-gray-300">Node.js</span>
</div>
<div class="flex items-center">
      <img src="${csharpLogo}" alt="Nodejs Logo" class="inline-block w-8 h-8" />
      <span class="ml-1 text-gray-300">C#</span>
</div>
<div class="flex items-center">
      <img src="${phpLogo}" alt="PHP Logo" class="inline-block w-8 h-8" />
      <span class="ml-1 text-gray-300">PHP</span>
</div>
<div class="flex items-center">
      <img src="${laravelLogo}" alt="Laravel Logo" class="inline-block w-8 h-8" />
      <span class="ml-1 text-gray-300">Laravel</span>
</div>
<div class="flex items-center">
      <img src="${mysqlLogo}" alt="MySQL Logo" class="inline-block w-8 h-8" />
      <span class="ml-1 text-gray-300">Laravel</span>
</div>

Software Tools

<div class="flex items-center">
      <img src="${gitLogo}" alt="Git Logo" class="inline-block w-8 h-8" />
      <span class="ml-1 text-gray-300">Git</span>
</div>
<div class="flex items-center">
      <img src="${figmaLogo}" alt="Figma Logo" class="inline-block w-8 h-8" />
      <span class="ml-1 text-gray-300">Figma</span>
</div>
<div class="flex items-center">
      <img src="${adobeXDLogo}" alt="Adobe XD Logo" class="inline-block w-8 h-8" />
      <span class="ml-1 text-gray-300">Adobe XD</span>
</div>
<div class="flex items-center">
      <img src="${finderLogo}" alt="Finder Logo" class="inline-block w-8 h-8" />
      <span class="ml-1 text-gray-300">Finder</span>
</div>
</div>
<div class="flex items-center">
      <img src="${npmLogo}" alt="NPM Logo" class="inline-block w-8 h-8" />
      <span class="ml-1 text-gray-300">NPM</span>
</div>
<div class="flex items-center">
      <img src="${postmanLogo}" alt="Postman Logo" class="inline-block w-8 h-8" />
      <span class="ml-1 text-gray-300">Postman</span>
</div>
</div>

`,
                clear: "",
            },
        };
    },
    methods: {
        processCommand() {
            const command = this.input.trim();
            const promptLine = `<div class="input-line text-[#f0f0f0]"><span class="text-[#52ff55] me-1">→</span><span class="input-line">[yin.dev]~$ </span><span class="text-amber-500">${command}</span></div>`;
            this.output.push(promptLine);

            if (command === "clear") {
                this.output = [
                    "Welcome to the terminal! Type <span class='text-amber-500'>help</span> for a list of commands. Type 'help' to see available commands.",
                ];
            } else if (this.commands[command]) {
                this.output.push(this.commands[command]);
            } else {
                this.output.push("Command not found. Type 'help' for a list of commands.");
            }

            this.input = "";
            this.$nextTick(() => this.$refs.inputField.focus());
        },
        focusInput() {
            this.$refs.inputField.focus();
        },
    },
};
</script>

