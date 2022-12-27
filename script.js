(function() {
    function calculateDistance(elem, mouseX, mouseY) {
        return Math.floor(Math.sqrt(Math.pow(mouseX - (elem.offset().left+(elem.width()/2)), 2) + Math.pow(mouseY - (elem.offset().top+(elem.height()/2)), 2)));
    }

    $(".vertical").mouseover(function(e) {
        $(".vertical").each(function(){
            $(this).css("background-color", "#fff");
            let distance = calculateDistance($(this), e.pageX, e.pageY);
            let distanceValue = (1 - (distance / 1920)) * (1 - (distance / 1920)) * (1 - (distance / 1920)) * (1 - (distance / 1920)) * (1 - (distance / 1920)) * (1 - (distance / 1920)) * (1 - (distance / 1920)) * (1 - (distance / 1920)) * (1 - (distance / 1920)) * (1 - (distance / 1920)) * (1 - (distance / 1920)) * (1 - (distance / 1920)); 
            let random = Math.random();
            let randomValue = 1 - (random * random * random * random * random * random * random * random * random * random * random * random);
            let black = distanceValue > randomValue;
            if (black) {
                $(this).css("background-color", "#000");
            }
        });           
    });
})();