(function(){
    var rmail = /[a-zA-Z0-9]+@[a-zA-Z.]+\.[a-zA-Z]{2,8}/i,
        rMaj = /[A-Z]+/,
        rMin = /[a-z]+/,
        rCh = /[0-9]+/;
        
    

    var bar = document.querySelector(".dis"),
        btn = document.querySelector(".bar"),
        mail = document.querySelector('input[type="email"]'),
        psd = document.querySelector('input[name="psd"]'),
        cpsd = document.querySelector('input[name="cpsd"]');


    var Maj = document.querySelector(".lettre_Maj"),
        Min = document.querySelector(".lettre_Min"),
        ch = document.querySelector(".chiffre"),
        lC = document.querySelector(".carac"),
        div_princ = document.querySelector(".checkpass"),
        check = {
            cmin:false,
            cMaj:false,
            cC:false,
            cCh:false
        },
        cG = "color:green;font-weight:bold;text-decoration: line-through;",
        cB = "color:black;font-weight:normal";

        psd.addEventListener("input", function () {
            var psdV = psd.value,
                span = psd.nextElementSibling;

            if (psdV) {
                span.innerHTML = "";
                if (psdV.length >= 8) {
                    lC.style = cG;
                    check.cC = true;
                } else {
                    lC.style = cB;
                    check.cC = false;
                }

                if (rMaj.test(psdV)){
                     Maj.style = cG;
                     check.cMaj = true;
                }else{
                    Maj.style = cB;
                    check.cMaj = false;
                }

                if (rMin.test(psdV)) {
                    Min.style = cG;
                    check.cmin = true;
                }else{
                    Min.style = cB;
                    check.cmin = false;
                }

                if (rCh.test(psdV)) {
                    ch.style = cG;
                    check.cCh = true;
                } else {
                    ch.style = cB;
                    check.cCh = false;
                }

                

            }else{
                Min.style = cB;
                Maj.style = cB;
                lC.style = cB;
                ch.style = cB;
                for(var c in check){
                    check[c] = false;
                }
            }
        });

        psd.addEventListener("focusout",function(){
            var v = psd.value,
                result = true;
                span = psd.nextElementSibling;
            if(!v){
                psd.style = "border:3px solid #FC0000";
                span.innerHTML = "votre mot de passe ne peut pas etre vide";

            }
            for (var j in check) {
                console.log(check[j]);
                result = result && check[j];
            }

            console.log(result);

            if(result){
                div_princ.style = "display:none";
                span.innerHTML = "";
                psd.style = "border:3px solid green";

            }else{
                div_princ.style = "display:block";
                psd.style = "border:3px solid #FC0000";
            }
        });

        cpsd.addEventListener("focusout",function(){
            var cpsdV = cpsd.value,
                psdV = psd.value,
                span = cpsd.nextElementSibling;
            if(cpsdV){
                if(psdV){
                    if (cpsdV.length == psdV.length) {
                        if (psdV == psdV) {
                            cpsd.style = "border:3px solid green";
                            span.innerHTML = "";
                        } else {
                            cpsd.style = "border:3px solid #FC0000";
                            span.innerHTML = "le mot de passe ne correspond pas au premier";
                        }
                    } else {
                        cpsd.style = "border:3px solid #FC0000";
                        span.innerHTML = "le mot de passe ne correspond pas au premier";

                    }
                }else{
                    cpsd.style = "border:3px solid #FC0000";
                    span.innerHTML = "vous ne pouvez pas confirmer le mot de pas car vous n'avez pas saisir de mot de passe";
                }
            }
        });
        
        
    

    

    mail.addEventListener("focusout",function(){
        var span = mail.nextElementSibling.nextElementSibling;
        if(rmail.test(mail.value)){
            mail.style.border="3px solid green";
            span.innerHTML = "";
        }else if(mail.value == ""){
             mail.style.border = "3px solid red";
             span.innerHTML = "Veuillez saisir votre mail svp";
        }else{
            mail.style.border = "3px solid red";
            span.innerHTML = "Votre mail est incorrect";
        }
    });

    

    btn.addEventListener("click", clickbtn);

    setInterval(function () {
        if (window.innerWidth >= 933) {
            bar.classList.add("dis");
            bar.classList.remove("active");
        }
    }, 100);

    function clickbtn(){
        var span = document.querySelectorAll(".bar span");
        if (bar.className == "dis" || bar.className == "up" || bar.className == "dis up " || bar.className == "up dis") {
            
            span[2].style="opacity:0";
            span[1].style="transform:rotate(-45deg)";
            span[0].style="top:6px;transform:rotate(45deg)";
                

            span[0].style.animationName = "bar_first";
            span[1].style.animationName = "bar_second";
            span[2].style.animationName = "bar_last";

            bar.classList.remove("dis");
            bar.classList.add("active");
            bar.style.animationName = "scrolldown";
            
            
        } else {
            bar.style.animationName="scrollup";
            

            
            span[1].style = "transform:rotate(0deg)";
            span[0].style = "top:0px;transform:rotate(0deg)";

            setTimeout(function(){
                bar.classList.remove("active");
                bar.classList.add("dis");
                span[2].style = "opacity:1";
                
            },300);
           
            
        }
    }

    var inputText = document.querySelectorAll('input[type="text"]');
    for(var i = 0;i<inputText.length;i++){
       (function(input,t){
           var inputext = input;
           inputext[t].addEventListener("input", function () {
               var temp = "";
               var tLong = inputext[t].value.length;
               var span;
               if (inputext[t].className == "fname"){
                    span = inputext[t].nextElementSibling;
               }else{
                   span = inputext[t].nextElementSibling.nextElementSibling;
               }
            
               if(tLong >= 15){
                    temp = inputext[t].value;
                   inputext[t].style.border="3px solid #FC0000";
                   if(inputext[t].className == "fname"){
                       span.innerHTML = "Le nom est compris entre 4 lettres et 15 lettres";
                   }else{
                       span.innerHTML = "Le prenom est compris entre 4 lettres et 15 lettres";
                   }
               } else if (tLong >= 4 ){
                   inputext[t].style.border = "3px solid green";
                   span.innerHTML ="";
               }else{
                   inputext[t].style.border = "none";
               }

           });

           inputext[t].addEventListener("focusout", function () {
               var temp = "";
               var tLong = inputext[t].value.length;
               var span; 
               if (inputext[t].className == "fname") {
                   span = inputext[t].nextElementSibling;
               } else {
                   span = inputext[t].nextElementSibling.nextElementSibling;
               }

               if (tLong < 4) {
                   temp = inputext[t].value;
                   inputext[t].style.border = "3px solid #FC0000";
                   if (inputext[t].className == "fname") {
                       span.innerHTML = "le nom peut pas etre vide ou inferieur a 4";
                   } else {
                       span.innerHTML = "Le prenom peut pas etre vide ou inferieur a 4";
                   }
                   
               }

           });
       })(inputText,i);
    }
})();