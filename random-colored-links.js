var elements = document.querySelectorAll('.a');

[].slice.call(elements).forEach(function (elem) {
    elem.style.color = 'red';
});