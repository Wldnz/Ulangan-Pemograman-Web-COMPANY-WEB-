document.addEventListener("DOMContentLoaded",() => {
    const buttonExplore = document.getElementById("button-explore")


    buttonExplore.addEventListener("click",()=>{
        window.location = "/jasa.html"
    })

    const syarat1 = document.getElementById("syarat1")
    const syarat2 = document.getElementById("syarat2")
    syarat2.style.display = "none"

    syarat1.addEventListener("click", () => {
        syarat2.style.display = "block"
    })

})