let screen = document.getElementById("screen");
button = document.querySelectorAll(".button"); //array of btns
console.log(button); //
//let screenValue = "";
for (item of button) {
  //loop

  item.addEventListener("click", (e) => {
    buttontext = e.target.innerText;
    console.log("Button text is", buttontext);

    if (buttontext == "X") {
      buttontext = "*";
    }

    if (buttontext == "/") {
      buttontext = "/";
    }

    //  if(buttontext=='DEL')
    //  {
    //     let x=screen.value;
    //     x=x.substring(x.length-1) ;
    //     console.log(x);
    //  }
    screen.value += buttontext;
  });
}




const finalBtn = document.getElementById("AG");

finalBtn.addEventListener("click", () => {
  console.log(screen.value);

  let isValid = true;

  try {
    eval(screen.value);
  } catch (error) {
    isValid = false;
  }

  if (isValid) {
    // console.log(typeof(screen.value));

    screen.value = eval(screen.value);
  } else {
    alert("Please Check your Input");
  }
});


const DELBtn = document.getElementById("DEL");

DELBtn.addEventListener("click", () => {
  let x = screen.value;
  //     x=x.substring(x.length-1) ;
  //     console.log(x);

  let res = x.substring(0, x.length - 1);
  screen.value = res;
});

const allClearBtn = document.getElementById("AC");

allClearBtn.addEventListener("click", () => {
  screen.value = " ";
});
