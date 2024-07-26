var farhan = document.querySelector("#scroll");

window.addEventListener("scroll",function(){
    var percentage = (window.scrollY / (document.body.scrollHeight - window.innerHeight))*100;
    farhan.style.width = percentage + '%';
})