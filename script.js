let btn = document.querySelector("#btn-menu");
let mobileMenu = document.querySelector(".mobile");


btn.addEventListener("click", () => {
    if(mobileMenu.style.display === "block"){
        mobileMenu.style.display = "none";
        btn.classList = "bi bi-list"
    }else{
        mobileMenu.style.display = "block";
        btn.classList = "bi bi-x"
    }
    
});