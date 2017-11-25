/*! Built with http://stenciljs.com */

mycomponent.loadStyles("my-component","\nmy-component.hydrated{visibility:inherit}");
mycomponent.loadComponents(

/**** module id (dev mode) ****/
"my-component",

/**** component modules ****/
function importComponent(exports, h, Context, publicPath) {
"use strict";
// @stencil/core

class MyComponent {
    render() {
        return (h("div", null,
            "Hello, World! I'm ",
            this.first,
            " ",
            this.last));
    }
}

exports['my-component'] = MyComponent;
},


/***************** my-component *****************/
[
/** my-component: tag **/
"my-component",

/** my-component: members **/
[
  [ "first", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "last", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ]
],

/** my-component: host **/
{}

]
);