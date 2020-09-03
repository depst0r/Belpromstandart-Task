(function () {
    let jQueryPlugin = (window.jQueryPlugin = function (ident, func) {
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
        let accordion_target = $roots.find("[data-accordion-item]");
        let accordion_content = $roots.find("[data-accordion-content]");
        $(accordion_target).click(function () {
            $(this).toggleClass("opened");
            $(this).find(accordion_content).slideToggle("slow");
            $(this).siblings().find(accordion_content).slideUp("slow");
            $(this).siblings().removeClass("opened");
        });
    }
    $.fn.Accordion = jQueryPlugin("Accordion", Accordion);
    $("[data-accordion]").Accordion();

})();