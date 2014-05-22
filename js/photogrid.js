var photoGrid = {

    init: function(json) {
        photoGrid.boxStatus = 0;
        $.getJSON(json.path, photoGrid.renderGrid);
    }, 

    renderGrid: function(obj) {
        var source = $("#photo-box-template").html();
        var template = Handlebars.compile(source);
        for (var i = 0; i < obj.people.length; i++) {
            $(".photo-grid-container").append(template(obj.people[i]));
        }
        photoGrid.flipToText();
        photoGrid.flipToTitle();
    },

    flipToText: function() {
        $(".photo-box-title").click(function() {
            var el = (this.className)
                .replace("photo-box-title ", "")
                .replace("-title", "");

            $("." + el + "-title").hide();
            $("." + el + "-text").show();

        });
    },

    flipToTitle: function() {
        $(".photo-box-text").click(function() {
            var el = (this.className)
                .replace("photo-box-text ", "")
                .replace("-text", "");

            $("." + el + "-text").hide();
            $("." + el + "-title").show();

        });
    }

}

photoGrid.init({ path: "data/photo-grid-data.json" });