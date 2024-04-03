let stars = document.querySelectorAll('input');
let unselected = 0;

stars.forEach((star, index) => {
    star.addEventListener("mouseover", function(){
        for (let i = 0; i <= index; i++) {
            stars[i].classList.add('filledStar');
        }
    });

    star.addEventListener("mouseout", function(){
        if (index > unselected) {
            for (let i = unselected; i <= stars.length - 1; i++) {
                stars[i].classList.remove('filledStar');
            }
        }
    });

    star.addEventListener("click", function() {
        for (let i = 0; i <= index; i++) {
            stars[i].classList.add('filledStar');
        }
        unselected = index;
    });
});