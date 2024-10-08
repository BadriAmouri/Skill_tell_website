import React from "react";

const Footer = () => {
    return (
        <section class="py-10 sm:pt-16 lg:pt-24 bg-[url('/photo_5775934125344146798_y.jpg')] bg-cover bg-center">
            <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div class="grid grid-cols-2 md:col-span-3 lg:grid-cols-6 gap-y-16 gap-x-12">
                    <div class="col-span-2 md:col-span-3 lg:col-span-2 lg:pr-8">
                        the club icon  Skill&Tell
                        <p class="text-base leading-relaxed text-white mt-7">
                        Thank you for visiting! We are dedicated to providing exceptional service and support. Follow us on social media or reach out via email or phone for any inquiries, updates, or feedback. Stay connected for the latest news, promotions, and more!
                            </p>
                        
                        <ul class="flex items-center space-x-3 mt-9">
                           
                        </ul>
                    </div>

                    <div class="col-span-4 md:col-span-3 lg:col-span-4 lg:pl-8">
                        <p class="text-sm font-semibold tracking-widest text-gray-200 uppercase">Contact us</p>

                        <form  class="mt-6">
                            <div>
                                <label for="email" class="sr-only">Email</label>
                                <input type="email" name="email" id="email" placeholder="Enter your email" class="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600" />
                            </div>

                            <button type="submit" class="inline-flex items-center justify-center px-6 py-4 mt-3 font-semibold text-white transition-all duration-200 bg-blue-600 rounded-md hover:bg-blue-700 focus:bg-blue-700">contact us</button>
                        </form>
                    </div>
                </div>

                <hr class="mt-16 mb-10 border-gray-200" />
            </div>
        </section>
    );
};

export default Footer;
