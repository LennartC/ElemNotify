var ElemNotify = (function() {
    var defaultTimeOut = 5000;
    var container = {};

    document.ready(function() {
        container = document.getElem("body").div({"class": "elem-notify container"});
    });

    function notify(message, title, options) {
        var notification = container.div({"class": "notification"});

        if (!options || typeof options !== "object") {
            options = { }
        }

        if (options["class"]) {
            notification.addClass(options["class"]);
        }

        if (options.icon) {
            notification.span({ "class": "icon fa "+options.icon });
        }

        if (title) {
            notification.h4(title);
        }

        if (message) {
            notification.div(message);
        }

        if (!options.timeOut) {
            options.timeOut = defaultTimeOut;
        }

        notification.setAttribute("data-timer", setTimeout(function() { fadeOut(notification); }, options.timeOut));
        notification.on("mouseenter", function() {
            if (this.getAttribute("data-timer")) clearTimeout(this.getAttribute("data-timer"));
            if (this.getAttribute("data-originalOpacity")) this.style.opacity = this.getAttribute("data-originalOpacity");
        }, false).on("mouseleave", function() {
            notification.setAttribute("data-timer", setTimeout(function() { fadeOut(notification); }, options.timeOut));
        }, false);
    };

    function fadeOut(notification) {
        var opacity = parseFloat(window.getComputedStyle(document.getElem(".notification")).opacity);
        if (!notification.getAttribute("data-originalOpacity")) {
            notification.setAttribute("data-originalOpacity", opacity);
        }
        if (opacity<0.05) {
            notification.del();
        } else {
            notification.style.opacity = (opacity-0.05);
            notification.setAttribute("data-timer", setTimeout(function() { fadeOut(notification); }, 10));
        }
    }

    return {
        info: function(message, title) {
            notify(message, title, { icon: "fa-info-circle"});
        },
        error: function(message, title) {
            notify(message, title, { icon: "fa-warning", "class": "warning"});
        },
        success: function(message, title) {
            notify(message, title, { icon: "fa-check", "class": "success"});
        }
    }
})();
