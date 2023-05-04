searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
  searchForm.classList.toggle('active');
}

let loginForm = document.querySelector('.login-form-container');

document.querySelector('#login-btn').onclick = () =>{
  loginForm.classList.toggle('active');
}

document.querySelector('#close-login-btn').onclick = () =>{
  loginForm.classList.remove('active');
}

window.onscroll = () =>{

  searchForm.classList.remove('active');

  if(window.scrollY > 80){
    document.querySelector('.header .header-2').classList.add('active');
  }else{
    document.querySelector('.header .header-2').classList.remove('active');
  }

}

window.onload = () =>{

  if(window.scrollY > 80){
    document.querySelector('.header .header-2').classList.add('active');
  }else{
    document.querySelector('.header .header-2').classList.remove('active');
  }

  fadeOut();

}

function loader(){
  document.querySelector('.loader-container').classList.add('active');
}

function fadeOut(){
  setTimeout(loader, 4000);
}

var swiper = new Swiper(".books-slider", {
  loop:true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".featured-slider", {
  spaceBetween: 10,
  loop:true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    450: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});

var swiper = new Swiper(".arrivals-slider", {
  spaceBetween: 10,
  loop:true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".reviews-slider", {
  spaceBetween: 10,
  grabCursor:true,
  loop:true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".blogs-slider", {
  spaceBetween: 10,
  grabCursor:true,
  loop:true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

// __Final__code________________________________________________________________




// ___End_________________________________________________________________
// // getting all required elements
// const searchWrapper = document.querySelector(".search-input");
// const inputBox = searchWrapper.querySelector("input");
// const suggBox = searchWrapper.querySelector(".autocom-box");
// const icon = searchWrapper.querySelector(".icon");
// let linkTag = searchWrapper.querySelector("a");
// let webLink;

// // if user press any key and release
// inputBox.onkeyup = (e) => {
//   let userData = e.target.value; //user enetered data
//   let emptyArray = [];
//   if (userData) {
//     icon.onclick = () => {
//       // C++ link cosmofeed
//       webLink = `https://cosmofeed.com/vig/6440d93820f1fd0020175adf`;
//       // https://cosmofeed.com/vig/6440d93820f1fd0020175adf

//       // webLink = `https://www.google.com/search?q=${userData}`;
//       linkTag.setAttribute("href", webLink);
//       linkTag.click();
//     };

//     emptyArray = suggestions.filter((data) => {
//       //filtering array value and user characters to lowercase and return only those words which are start with user enetered chars
//       return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
//     });
//     // show data in searchbar
//     emptyArray = emptyArray.map((data) => {
//       // passing return data inside li tag
//       return (data = `<li>${data}</li>`);
//     });
    
//     searchWrapper.classList.add("active"); //show autocomplete box
//     showSuggestions(emptyArray);
//     let allList = suggBox.querySelectorAll("li");
//     for (let i = 0; i < allList.length; i++) {
//       //adding onclick attribute in all li tag
//       allList[i].setAttribute("onclick", "select(this)");
//     }
//   } else {
//     searchWrapper.classList.remove("active"); //hide autocomplete box
//   }
// };

// function select(element) {
//   let selectData = element.textContent;
//   inputBox.value = selectData;
//   icon.onclick = () => {
//     webLink = `https://www.google.com/search?q=${selectData}`;
//     linkTag.setAttribute("href", webLink);
//     linkTag.click();
//   };
//   searchWrapper.classList.remove("active");
// }

// function showSuggestions(list) {
//   let listData;
//   if (!list.length) {
//     userValue = inputBox.value;
//     listData = `<li>${userValue}</li>`;
//   } else {
//     listData = list.join("");
//   }
//   suggBox.innerHTML = listData;
// }


// *******************************************************************************************************************************************








// // workking.@@@@@@@@@@@@@@@@@.
// function search() {
//   let filter = document.getElementById('search-box').value.toUpperCase();
//   let item = document.querySelectorAll('.product');
//   let l = document.getElementsByTagName('h3');
//   for (var i = 0; i <= l.length; i++) {
//       let a = item[i].getElementsByTagName('h3')[0];
//       let value = a.innerHTML || a.innerText || a.textContent;
//       if (value.toUpperCase().indexOf(filter) > -1) {
//           item[i].style.display = "";
//       }
//       else {
//           item[i].style.display = "none";
//       }
//   }
// }
////////////////////

// const search = () => {
//   const searchbox = document.getElementsById("search-box").value.toUpperCase(); 
//   const storeitems = document.getElementById("productlist")
//   const product = document.querySelectorAll("product")
//   const pname = storeitems.getElementsByTagName("h3")

//   for (var i = e; i < pname.length; i++) {
//     let match =product[i].getElementsByTagName('h2')[0];

//     if (match) {
//       let textvalue = match.textContent || match.innerHTML

//       if (textvalue.toUpperCase().indexOf(searchbox) > -1) {
//         product[i].style.display = "";
//       }
//       else {
//         product[i].style.display = "none";     
//     }
//   }
// }
// }



// 22222222222222222222222222222222222222222222222222222222

// function Search(item){
//         var collection = document.getElementsByClassName('.search-form');
//         for (i = 0;i < collection.length; i++){
//             if (((collection[i].innerHTML).toLowerCase()).indexOf(item) > -1) {
//                 collection[i].style.display = "block";
//                 } else {
//                     collection[i].style.display = "none";
//                     }
//         }
// }


