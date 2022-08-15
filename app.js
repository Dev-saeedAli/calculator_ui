// Selectors
const allThemeSwitcher = document.querySelectorAll(".theme__switcher");
const mainContainer = document.querySelector(".container");
const calculator= document.querySelector(".calculator");
const themeSwitcher = document.querySelector(".theme__switcher");
const screen = document.querySelector(".calculator__screen");
const calcBody= document.querySelector(".calculator__body");
const calcBtn= document.querySelector(".calculation__btns");
const allBtn = document.querySelectorAll(".btn");
const calcSum = document.querySelector(".calution__result span");
const btnPercentage = document.querySelector(".btn__percentage");
const deletePrevious = document.querySelector(".btn__conversion");
const calcArea = document.querySelector(".calculator__calulation-area span")




let values = "";


// events

allThemeSwitcher.forEach(switcher => {
    switcher.addEventListener("click", (e)=>{
        changeTheme(e.target)
    })
})

allBtn.forEach(btn => {
    btn.addEventListener("click", (e)=>{
         values = "";
        values += e.target.textContent
        changeScreenValue(values)
    })
})

deletePrevious.addEventListener("click", (e)=>{
    if(e.target.textContent === "x"){
       const filtered = calcArea.textContent.slice(0, -1)
       calcArea.textContent = filtered;
    }
})

// converting the value to percent 
btnPercentage.addEventListener("click", ()=>{
    const percentNumber = prompt("How much percentage does the value has to be converted?")
    const sum = Number(percentNumber * calcSum.textContent / 100).toFixed(1)
    calcSum.textContent = sum;
})

// functions

const changeTheme = (element) => {

    if(element.classList.value === "fa-solid fa-moon"){
        // change the theme to dark
        mainContainer.classList.add("darkMode")
        calculator.classList.add("darkMode")
        themeSwitcher.classList.add("darkMode")
        screen.classList.add("darkMode")
        calcBody.classList.add("darkMode")
        calcBtn.classList.add("darkMode")
    }else{
        // change the theme to white
        mainContainer.classList.remove("darkMode")
        calculator.classList.remove("darkMode")
        themeSwitcher.classList.remove("darkMode")
        screen.classList.remove("darkMode")
        calcBody.classList.remove("darkMode")
        calcBtn.classList.remove("darkMode")
    }
}

const changeScreenValue = (value) =>{
    const allClearBtn = document.querySelector(".btn__clearAll");
    const clearBtn = document.querySelector(".btn__clear");

    if(calcArea.textContent.length > 30){
        alert("Too big")
        return 
    }
    calcArea.textContent += `${value?.replace(/[x=%]/i, "")}`

    if(value === "="){
        const sum = eval(calcArea.textContent).toFixed(2)
        calcSum.textContent = sum
    }

    allClearBtn.addEventListener("click", () => {
        calcArea.textContent = ""
        calcSum.textContent = 0
    })

    clearBtn.addEventListener("click", () => {
        calcArea.textContent = ""
        calcSum.textContent = 0
    })

    
}


