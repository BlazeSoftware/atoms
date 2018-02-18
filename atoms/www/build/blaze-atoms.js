/*! Built with http://stenciljs.com */
(function(win, doc, appNamespace, urlNamespace, publicPath, discoverPublicPath, appCore, appCoreSsr, appCorePolyfilled, hydratedCssClass, components) {

function init(win, doc, docScripts, appNamespace, urlNamespace, publicPath, discoverPublicPath, appCore, appCorePolyfilled, hydratedCssClass, components, x, y) {
    // create global namespace if it doesn't already exist
    (win[appNamespace] = win[appNamespace] || {}).components = components;
    y = components.filter(function (c) { return c[2]; }).map(function (c) { return c[0]; });
    if (y.length) {
        // auto hide components until they been fully hydrated
        // reusing the "x" and "i" variables from the args for funzies
        x = doc.createElement('style');
        x.innerHTML = y.join() + '{visibility:hidden}.' + hydratedCssClass + '{visibility:inherit}';
        x.setAttribute('data-styles', '');
        doc.head.insertBefore(x, doc.head.firstChild);
    }
    // get this current script
    // script tag cannot use "async" attribute
    if (discoverPublicPath) {
        x = docScripts[docScripts.length - 1];
        if (x && x.src) {
            y = x.src.split('/').slice(0, -1);
            publicPath = (y.join('/')) + (y.length ? '/' : '') + urlNamespace + '/';
        }
    }
    // request the core this browser needs
    // test for native support of custom elements and fetch
    // if either of those are not supported, then use the core w/ polyfills
    // also check if the page was build with ssr or not
    x = doc.createElement('script');
    x.src = publicPath + ((!urlContainsFlag(win) && supportsCustomElements(win) && supportsEsModules(x) && supportsFetch(win) && supportsCssVariables(win)) ? appCore : appCorePolyfilled);
    x.setAttribute('data-path', publicPath);
    x.setAttribute('data-namespace', urlNamespace);
    doc.head.appendChild(x);
}
function urlContainsFlag(win) {
    return win.location.search.indexOf('core=es5') > -1;
}
function supportsEsModules(scriptElm) {
    // detect static ES module support
    const staticModule = 'noModule' in scriptElm;
    if (!staticModule) {
        return false;
    }
    // detect dynamic import support
    try {
        new Function('import("")');
        return true;
    }
    catch (err) {
        return false;
    }
}
function supportsCustomElements(win) {
    return win.customElements;
}
function supportsFetch(win) {
    return win.fetch;
}
function supportsCssVariables(win) {
    return (win.CSS && win.CSS.supports && win.CSS.supports('color', 'var(--c)'));
}


init(win, doc, doc.scripts, appNamespace, urlNamespace, publicPath, discoverPublicPath, appCore, appCoreSsr, appCorePolyfilled, hydratedCssClass, components);

})(window, document, "BlazeAtoms","blaze-atoms","/build/blaze-atoms/",true,"blaze-atoms.core.js","es5-build-disabled.js","hydrated",[["blaze-accordion","blaze-accordion"],["blaze-accordion-pane","blaze-accordion",0,[["_isOpen",5],["close",6],["header",1,1,2],["isOpen",6],["open",1,1,3],["show",6]]],["blaze-address","blaze-address"],["blaze-address-heading","blaze-address"],["blaze-alert","blaze-alert",0,[["_isOpen",5],["close",6],["dismissible",1,1,3],["isOpen",6],["open",1,1,3],["show",6],["type",1,1,2]]],["blaze-avatar","blaze-avatar",0,[["size",1,1,2],["src",1,1,2],["src2",1,1,2],["text",1,1,2]]],["blaze-badge","blaze-badge",0,[["ghost",1,1,3],["rounded",1,1,3],["type",1,1,2]]],["blaze-breadcrumb","blaze-breadcrumb",0,[["href",1,1,2]]],["blaze-breadcrumbs","blaze-breadcrumb",0,[["el",7]]],["blaze-card","blaze-card"],["blaze-card-body","blaze-card"],["blaze-card-footer","blaze-card"],["blaze-card-header","blaze-card"],["blaze-drawer","blaze-drawer",0,[["_isOpen",5],["close",6],["dismissible",1,1,3],["elem",7],["isOpen",6],["open",1,1,3],["position",1,1,2],["show",6]]],["blaze-image","blaze-image",0,[["alt",1,1,2],["collection",1,1,2],["filter",1,1,2],["height",1,1,4],["likes",1,1,3],["photo",1,1,2],["src",1,1,2],["user",1,1,2],["width",1,1,4]]],["blaze-modal","blaze-modal",0,[["_isOpen",5],["close",6],["dismissible",1,1,3],["elem",7],["full",1,1,3],["ghost",1,1,3],["isOpen",6],["open",1,1,3],["show",6]]],["blaze-pagination","blaze-pagination",0,[["_currentPage",5],["currentPage",6],["goToPage",6],["page",1,1,4],["pages",1,1,4]]],["blaze-panel","blaze-panel",0,[["height",1,1,4]]],["blaze-progress","blaze-progress",0,[["percentage",1,1,2],["rounded",1,1,3],["size",1,1,2],["type",1,1,2]]],["blaze-tab","blaze-tab",0,[["disabled",1,1,3],["header",1,1,2],["open",1,1,3]]],["blaze-tabs","blaze-tab",0,[["currentTab",6],["elem",7],["openTab",6],["tabs",5],["type",1,1,2]]],["blaze-toasts","blaze-toasts",0,[["position",1,1,2]]],["blaze-toggle","blaze-toggle",0,[["_toggled",5],["isToggled",6],["toggled",1,1,3],["type",1,1,2]]]]);