const header = document.querySelector('header');
const text = document.getElementById("ft");
const lif = document.querySelector("#lif");
const toggle = document.querySelector(".div1");

const x = window.matchMedia('(min-width: 1112px)')
const y = window.matchMedia('(min-width: 678px)')


if (x.matches) {
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 1) {
            header.style.background = "rgba(255,255,255,0.8)";
            header.style.border = "1px solid #808080";
            text.classList.add("active");
        }
        else {
            header.style.background = "transparent";
            header.style.border = "0";
            text.classList.remove("active");
        }
    })

}
else if(y.matches){
    header.style.background = "rgba(255,255,255)";
    header.style.width = "90%";
}
else {
    header.style.padding=0;
}


const ham = document.getElementById("hamburger");
const head = document.getElementById("head1");

ham.onclick = () => {
    ham.classList.toggle("active");
    head.classList.toggle("active");

}

const div11 = document.querySelector(".div11");
const div12 = document.querySelector(".div12");
const div13 = document.querySelector(".div13");

var image = new Array (
    "products/134400_LT03_FullGrain-White_side.jpg",
    "data:image/jpeg;base64,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",
    "https://th.bing.com/th/id/OIP.GQCxppirg1znJr2zuR4NKAHaE8?w=280&h=187&c=7&o=5&dpr=1.25&pid=1.7",
    "https://th.bing.com/th/id/OIP.K5wRMuoOI72QXI2VP_4PdgHaEn?w=274&h=181&c=7&o=5&dpr=1.25&pid=1.7   ",
    "https://th.bing.com/th/id/OIP.qFxksp1WnyibCR0z-eJCCgHaHa?w=181&h=182&c=7&o=5&dpr=1.25&pid=1.7"
)

const next = document.getElementById("next");
const prev = document.getElementById("prev");

const next2 = document.getElementById("next2");
const prev2 = document.getElementById("prev2");

const next3 = document.getElementById("next3");
const prev3 = document.getElementById("prev3");

//for first div
let i=0;
next.onclick = () => {
    if(i<5){
        if(i==4){
        i=0;
        }
        div11.style.backgroundImage = "url('"+image[i+1]+"')";
        i++;
    }
}
prev.onclick = () => {
    if(i<5){
     if(i == 0)
     i=4;
        div11.style.backgroundImage = "url('"+image[i]+"')";
        i--;
    }
}

//for second div
let j=0;
next2.onclick = () => {
    if(j<5){
        if(j==4){
        j=0;
        }
        div12.style.backgroundImage = "url('"+image[j+1]+"')";
        j++;
    }
}
prev2.onclick = () => {
    if(j<5){
        if(j==0){
        j=4;
        }
       
        div12.style.backgroundImage = "url('"+image[j]+"')";

        j--;
    }
}
//for third div
let k=0;
next3.onclick = () => {
    if(k<5){
        if(k==4){
        k=0;
        }
       
        div13.style.backgroundImage = "url('"+image[k+1]+"')";
        k++;
    }
}
prev3.onclick = () => {
    if(k<5){
        if(k==0){
        k=4;
        }
        
        div13.style.backgroundImage = "url('"+image[k]+"')";
        k--;
    }
}


