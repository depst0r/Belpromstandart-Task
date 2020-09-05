(function () {
    const jQueryPlugin = (window.jQueryPlugin = function (ident, func) {
        return function (arg) {
            if (this.length > 1) {
                this.each(function () {
                    let $this = $(this);

                    if (!$this.data(ident)) {
                        $this.data(ident, func($this, arg));
                    }
                });

                return this;
            } else if (this.length === 1) {
                if (!this.data(ident)) {
                    this.data(ident, func(this, arg));
                }

                return this.data(ident);
            }
        };
    });
})();

(function () {
    function Accordion($roots) {
        const accordion_target = $roots.find("[data-accordion-item]");
        const accordion_content = $roots.find("[data-accordion-content]");
        $(accordion_target).click(function () {
            $(this).toggleClass("opened");
            $(this).find(accordion_content).slideToggle("slow");
            $(this).siblings().find(accordion_content).slideUp("slow");
            $(this).siblings().removeClass("opened");
            $(this).siblings().removeClass("transform-cross");
        });
    }
    $.fn.Accordion = jQueryPlugin("Accordion", Accordion);
    $("[data-accordion]").Accordion();

})();






// (function () {
//     "use strict";
//     var jQueryPlugin = (window.jQueryPlugin = function (ident, func) {
//         return function (arg) {
//             if (this.length > 1) {
//                 this.each(function () {
//                     var $this = $(this);

//                     if (!$this.data(ident)) {
//                         $this.data(ident, func($this, arg));
//                     }
//                 });

//                 return this;
//             } else if (this.length === 1) {
//                 if (!this.data(ident)) {
//                     this.data(ident, func(this, arg));
//                 }

//                 return this.data(ident);
//             }
//         };
//     });
// })();

// (function () {
//     "use strict";

//     function Accordion($roots) {
//         var element = $roots;
//         var accordion = $roots.first("[data-accordion]");
//         var accordion_target = $roots.find("[data-accordion-item]");
//         var accordion_content = $roots.find("[data-accordion-content]");
//         $(accordion_target).click(function () {
//             $(this).toggleClass("opened");
//             $(this).find(accordion_content).slideToggle("slow");
//             $(this).siblings().find(accordion_content).slideUp("slow");
//             $(this).siblings().removeClass("opened");
//         });
//     }
//     $.fn.Accordion = jQueryPlugin("Accordion", Accordion);
//     $("[data-accordion]").Accordion();

//     function Ripple_Button($root) {
//         var elements = $root;
//         var ripple_btn = $root.first("[data-ripple]");
//         $(ripple_btn).on("click", function (event) {
//             event.preventDefault();
//             var $div = $("<div/>"),
//                 btnOffset = ripple_btn.offset(),
//                 xPos = event.pageX - btnOffset.left,
//                 yPos = event.pageY - btnOffset.top;
//             $div.addClass("transform-cross");
//             $div.css({
//                 height: ripple_btn.height(),
//                 width: ripple_btn.height(),
//                 top: yPos - $div.height() / 2,
//                 left: xPos - $div.width() / 2,
//                 background: ripple_btn.data("ripple") || "#ffffff26",
//             });
//             ripple_btn.append($div);

//             window.setTimeout(function () {
//                 $div.remove();
//             }, 2000);
//         });
//     }
//     $.fn.Ripple_Button = jQueryPlugin("Ripple_Button", Ripple_Button);
//     $("[data-ripple]").Ripple_Button();
// })();