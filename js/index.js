function IsMobileOrComputer ()
{
    if (/Android|iPhone|iPod|iPad/i.test(navigator.userAgent))
    {
        window.location.replace("/portfolio/mobile/mobile.html");
    }
}
