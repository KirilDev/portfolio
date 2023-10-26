function IsMobileOrComputer ()
{
    if (/Android|iPhone|iPod|iPad/i.test(navigator.userAgent))
    {
        window.location.href = "https://kirildev.github.io/portfolio/mobile/mobile.html";
    }
}
