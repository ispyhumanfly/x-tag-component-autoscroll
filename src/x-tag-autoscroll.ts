/// <reference path="../typings/index.d.ts" />
/* tslint:enabled */

"use strict";

const XTAG = require("../node_modules/x-tag/dist/x-tag-core-with-shadowdom.min.js")
const JQUERY = require("../node_modules/jquery/dist/jquery.min.js")

export function XTagAutoScroll (delay, height, content) {

    JQUERY(document).ready(() => {

        XTAG.register("x-tag-autoscroll", {
            content: content || "",
            lifecycle: {
                created: function() {
                    setTimeout(function() {
                        JQUERY("html, body").animate({
                            scrollTop: height || 300
                        }, 1000)
                    }, delay || 5000)
                }
            },
            events: {
                tap: function() {
                    JQUERY("html, body").animate({
                        scrollTop: height || 300
                    }, 1000)
                }
            }
        })

    })
}
