    
    


    window.addEventListener("keydown",(e)=>{
        if(e.ctrlKey && e.keyCode == 191){
        document.getElementById("head-search").focus();
        }
    })

    const sideTogg = document.querySelector(".side-toggle");
    const menuLine = document.querySelectorAll(".menu-line");

    sideTogg.addEventListener("click", ()=>{

        
        document.querySelector(".sidebar").classList.toggle("active");

        for (const i of menuLine) {
            i.classList.toggle("active")
        }
    });
       
    
    function dispName(){

        let id = localStorage.getItem("id");


                const data = user_data;
                let userId = data.find(u => u.id == id);
                
                const nameDisp = document.querySelector(".header-username");
                const profDisp = document.querySelector(".profile-field");

                nameDisp.innerHTML += " " + userId.name;
                profDisp.style.background = `url("https://ui-avatars.com/api/?name=${userId.name}&rounded=true&uppercase=false&background=random") no-repeat center center/cover`
            


    }
    
    dispName();
