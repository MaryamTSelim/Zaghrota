window.addEventListener("load", (windowLoadEvent) => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    document.getElementById("bride-name").innerText = urlParams.get("name");

    document.getElementById("audio-start").addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
    }, false);


    document.getElementById("zagrat").addEventListener("mousedown",(e)=>{
        document.getElementById("audio-start").currentTime = 0;
        document.getElementById("audio-start").play();
    })
    document.getElementById("zagrat").addEventListener("mouseup",(e)=>{
        document.getElementById("audio-start").pause();
        document.getElementById("audio-start").currentTime = 0;
        document.getElementById("audio-end").play();
    })
    document.getElementById("zagrat").addEventListener("touchstart",(e)=>{
        e.preventDefault();
        document.getElementById("audio-start").currentTime = 0;
        document.getElementById("audio-start").play();
    })
    document.getElementById("zagrat").addEventListener("touchend",(e)=>{
        document.getElementById("audio-start").pause();
        document.getElementById("audio-start").currentTime = 0;
        document.getElementById("audio-end").play();
    })
});