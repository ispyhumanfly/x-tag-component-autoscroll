"use strict";

var XTAG = require("x-tag");

var JQUERY = require("jquery");

function XTagAutoScroll(parameters) {
    alert("Trdt");
    JQUERY(document).ready(function() {
        XTAG.register("x-tag-autoscroll", {
            content: parameters.content || "",
            lifecycle: {
                created: function() {
                    setTimeout(function() {
                        JQUERY("html, body").animate({
                            scrollTop: parameters.height || 300
                        }, 1e3);
                    }, parameters.delay || 5e3);
                }
            },
            events: {
                tap: function() {
                    JQUERY("html, body").animate({
                        scrollTop: parameters.height || 300
                    }, 1e3);
                }
            }
        });
    });
}

exports.XTagAutoScroll = XTagAutoScroll;