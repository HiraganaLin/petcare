function funcError(){
    alert("This function is not working yet :(");

    document.getElementById('sound').play();
}

function onEntry(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('element-show');
        }
    });
}
let options = { threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element-animation');
for (let elm of elements) {
    observer.observe(elm);
}

$("#services_button").click(function() {
    $('html,body').animate({
            scrollTop: $("#services").offset().top},
        'fast');
});