function IsMobileOrComputer ()
{
    if (/Android|iPhone|iPod|iPad/i.test(navigator.userAgent))
    {
        window.location.replace("/mobile/mobile.html");
    }
}