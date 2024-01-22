document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('.scroll-link')

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetID = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetID);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                })
            }
        })
    })
})