document.addEventListener("DOMContentLoaded", function () {
    let fixedNav = document.querySelector('.header');
    window.addEventListener("scroll", () => {
        window.scrollY > 100 ? fixedNav.classList.add("active") : fixedNav.classList.remove("active");
    });
    let exploreBtn = document.querySelector('.title .btn'),
        HadithSection = document.querySelector('.hadith');

    exploreBtn.addEventListener('click', () => {
        HadithSection.scrollIntoView({ behavior: "smooth" })
    })

    // HadithSection
    let hadithContainter = document.querySelector('.hadithContainer');
    let next = document.querySelector('.buttons .next');
    let prev = document.querySelector('.buttons .prev');
    let number = document.querySelector('.buttons .number');
    let hadithIndex = 0;
    HadithChanger();


    function HadithChanger() {
        const apiUrl = 'https://cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@1/editions/ara-bukhari.json';
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                let Hadiths = data.hadiths;
                changeHadith();
                next.addEventListener('click', () => {
                    hadithIndex == 7562 ? hadithIndex = 0 : hadithIndex++;
                    changeHadith();
                })
                prev.addEventListener('click', () => {
                    hadithIndex == 0 ? hadithIndex = 7562 : hadithIndex--;
                    changeHadith();
                })

                function changeHadith() {
                    hadithContainter.innerText = Hadiths[hadithIndex].text;
                    number.innerText = `7563 - ${hadithIndex + 1}`
                }
            });
    }
});
