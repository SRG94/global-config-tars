// Функция для замены текста
jQuery.fn.extend({
    toggleText: function (a, b){
        var isClicked = false;
        var that = this;
        this.click(function (){
            if (isClicked) { that.text(a); isClicked = false; }
            else { that.text(b); isClicked = true; }
        });
        return this;
    }
});

var portfButton = $('.jsPortfolioGalleryButton');
$(portfButton).toggleText("Смотреть все", "Вернуть обратно");

$(portfButton).click(function() {
	$('.portfolio-gallery-more').slideToggle();
})

