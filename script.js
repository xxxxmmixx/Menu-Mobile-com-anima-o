let viewMobile = document.getElementById("container");
let showMobile = document.getElementById("linksMobile");

viewMobile.addEventListener("click", function(){
    viewMobile.classList.toggle("change");
    if(showMobile.style.display === "block"){
        showMobile.style.display = "none";
    }else{
        showMobile.style.display = "block";
    }
})

