 AOS.init({
      duration:1200,
      once:false
    });

    // Cursor

    const cursor =
    document.querySelector(".cursor");

    document.addEventListener(
      "mousemove",
      (e)=>{

      cursor.style.left =
      e.clientX + "px";

      cursor.style.top =
      e.clientY + "px";

    });

    // Theme Toggle

    const themeToggle =
    document.getElementById(
      "themeToggle"
    );

    themeToggle.addEventListener(
      "click",
      ()=>{

      document.body.classList.toggle(
        "light"
      );

      if(
        document.body.classList.contains(
          "light"
        )
      ){

        themeToggle.innerHTML =
        '<i class="fa-solid fa-sun"></i>';

      }else{

        themeToggle.innerHTML =
        '<i class="fa-solid fa-moon"></i>';

      }

    });

    // Typing Effect

    const text =
    "Build The Future With AI";

    let i = 0;

    function typing(){

      if(i < text.length){

        document.querySelector(
          ".typing"
        ).innerHTML +=
        text.charAt(i);

        i++;

        setTimeout(typing,100);

      }

    }

    typing();

    // Contact Form

    const form =
    document.querySelector(
      ".contact-form"
    );

    form.addEventListener(
      "submit",
      (e)=>{

      e.preventDefault();

      alert(
        "Message Sent Successfully!"
      );

    });

    // Particles

    particlesJS(
      "particles-js",
      {

      particles:{

        number:{
          value:80
        },

        size:{
          value:3
        },

        move:{
          speed:2
        },

        line_linked:{
          enable:true
        }

      }

    });