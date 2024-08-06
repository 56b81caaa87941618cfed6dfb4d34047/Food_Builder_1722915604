/* Summary: This component contains a h2 heading title for the CTA, a line of text under it, and a button underneath it. They are all centre aligned.
*/
Vue.component("simple_cta_component_1722920850", {
    template: `
    <section id="cta-component" style="min-height: 510px"  class="bg-gradient-to-r from-pink-400 to-purple-600 flex-1 min-h-screen flex items-center justify-center">
        <div id="cta-inner-container" class="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6 bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg">
            <div id="cta-content" class="max-w-screen-sm mx-auto text-center">
                <div id="cta-title-container" class="flex">
                    <h2 id="cta-title" class="flex-1 mb-4 text-3xl font-extrabold leading-tight tracking-tight text-white">Craft Delicious Meals Effortlessly</h2>
                </div>

                <div id="cta-subtitle-container" class="flex">
                    <p id="cta-subtitle" class="flex-1 mb-6 font-light text-white md:text-lg">Discover recipes, plan meals, and simplify cooking with our intuitive app.</p>
                </div>
                

                <div id="cta-button-container" class="flex">
                    <a id="cta-button" href="#" class="flex-1 text-purple-700 bg-white bg-opacity-50 hover:bg-opacity-75 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 transition-all duration-300 ease-in-out shadow-md hover:shadow-lg">Start Building Your Menu</a>
                    <a href="#" class="flex-1 text-purple-700 bg-white bg-opacity-50 hover:bg-opacity-75 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 transition-all duration-300 ease-in-out shadow-md hover:shadow-lg">Nine</a>
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
