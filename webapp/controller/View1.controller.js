sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("ux.hello.controller.View1", {
            onInit: function () {

            },

            onPress:function(){
        alert("Hello");
            },
        });
    });
