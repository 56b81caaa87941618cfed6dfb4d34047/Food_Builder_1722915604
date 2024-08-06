/* Summary: This component contains a h2 heading title for the CTA, a line of text under it, and a button underneath it. They are all centre aligned.
*/
Vue.component("simple_cta_component_1722915669", {
    template: `
    <section id="cta-component" style="min-height: 470px"  class="min-h-310px bg-gradient-to-br from-pink-500 to-purple-700 flex-1 p-8">
        <div id="cta-inner-container" class="max-w-screen-xl px-6 py-10 mx-auto lg:py-20 lg:px-8 bg-white bg-opacity-10 backdrop-filter backdrop-blur-md rounded-xl shadow-lg">
            <div id="cta-content" class="max-w-screen-sm mx-auto text-center">
                <div id="cta-title-container" class="flex">
                    <h2 id="cta-title" class="flex-1 mb-6 text-4xl font-extrabold leading-tight tracking-tight text-white">Craft Delicious Meals Effortlessly</h2>
                </div>

                <div id="cta-subtitle-container" class="flex">
                    <p id="cta-subtitle" class="flex-1 mb-8 font-light text-gray-100 md:text-xl">Discover recipes, plan meals, and simplify cooking with our intuitive app.</p>
                </div>
                
                <div id="cta-button-container" class="flex">
                    <a id="cta-button" href="#" class="flex-1 text-purple-800 bg-white bg-opacity-20 hover:bg-opacity-30 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-lg px-8 py-3 transition duration-300 ease-in-out transform hover:scale-105 backdrop-filter backdrop-blur-sm shadow-md">Start Building Your Menu</a>
                </div>
            </div>
        </div>
    </section>
        `,
    data() {
        return {
            expanded: false,
            tab: null,
        };
    },
});
