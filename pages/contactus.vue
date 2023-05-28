<template>
<section class="">
    <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-white">Contact Us</h2>
        <p class="mb-8 lg:mb-16 font-light text-center text-white sm:text-xl">If you're interested in working with us you or renting equipment, you can contact us here!</p>
        <form name="contact" class="space-y-8" data-netlify="true" action="/thankyou">
            <div>
                <label for="email" class="block mb-2 text-sm font-medium text-white">Your email</label>
                <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@email.com" required>
            </div>
            <div>
                <label for="subject" class="block mb-2 text-sm font-medium text-white">Subject</label>
                <input type="text" id="subject" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Subject" required>
            </div>
            <div class="sm:col-span-2">
                <label for="message" class="block mb-2 text-sm font-medium text-white">Your message</label>
                <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Write us a message here"></textarea>
            </div>
            <div class="relative font-light flex flex items-center justify-center m-auto pt-5 p-20 px-20 overflow-hidden font-bold rounded-md group w-[325px] sm:w-[325px] md:w-96 lg:w-[505px] xl:w-[505px] 2xl:w-[505px]">
            <button type="submit" class="relative rounded px-5 py-2.5 overflow-hidden group bg-primary relative hover:bg-gradient-to-r hover:from-primary-focus hover:to-primary text-white hover:ring-2 hover:ring-offset-2 hover:ring-primary transition-all ease-out duration-300">
<span class="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
<span class="relative">Submit</span>
            </button>
        </div>
        </form>
    </div>
  </section>

</template>
