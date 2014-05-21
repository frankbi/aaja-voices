var photoGrid = {

    init: function(json) {
        photoGrid.boxStatus = [];
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

        console.log(photoGrid.boxStatus);

        if (photoGrid.boxStatus == 0) {
            $(".photo-box").click(function() {
                photoGrid.boxStatus = 1;
                var el = (this.className).replace("photo-box ", "");
                $("." + el + "-text").show();
                $("." + el + "-title").hide();
            });
        }
    },

    flipToTitle: function() {

        console.log(photoGrid.boxStatus);

        if (photoGrid.boxStatus == 1) {
            $(".photo-box").click(function() {
                photoGrid.boxStatus = 0;
                var el = (this.className).replace("photo-box ", "");
                $("." + el + "-text").hide();
                $("." + el + "-title").show();
            });
        }
    }

}

photoGrid.init({ path: "data/photo-grid-data.json" });
