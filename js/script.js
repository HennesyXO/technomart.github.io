var feedbackLink = document.querySelector(".mail-btn");
var feedbackPopup = document.querySelector(".feedback");
if (feedbackPopup) {
  var feedbackClose = feedbackPopup.querySelector(".feedback__close");
  var feedbackForm = feedbackPopup.querySelector("form");

  var feedbackName = feedbackPopup.querySelector("[name=name]");
  var feedbackEmail = feedbackPopup.querySelector("[name=email]");
}

var storage = localStorage.getItem("feedbackName");

if (feedbackLink) {
  feedbackLink.addEventListener("click", function(event) {
    event.preventDefault();
    feedbackPopup.classList.add("feedback-show");
    feedbackName.focus();
    if (storage) {
      feedbackName.value = storage;
      feedbackEmail.focus();
      } else {
      feedbackName.focus();
      }
  });
}

if (feedbackClose) {
  feedbackClose.addEventListener("click", function(event) {
    event.preventDefault();
    feedbackPopup.classList.remove("feedback-show");
    feedbackPopup.classList.remove("feedback-error");
  });
}

if (feedbackForm) {
  feedbackForm.addEventListener("submit", function(event) {
      if (!feedbackName.value || !feedbackEmail.value){
      event.preventDefault();
      feedbackPopup.classList.add("feedback-error");
      }else {
        localStorage.setItem("feedbackName", feedbackName.value);
   }
  });
}

window.addEventListener("keydown", function(event) {
   if (event.keyCode === 27) {
     if (feedbackPopup.classList.contains("feedback-show")) {
       feedbackPopup.classList.remove("feedback-show");
     }
   }
});


var mapOpen = document.querySelector(".js-open-map");
var mapPopup = document.querySelector(".map-popup");
if (mapPopup) {
  var mapClose = mapPopup.querySelector(".map-popup__close");
}

if (mapOpen) {
  mapOpen.addEventListener("click", function(event) {
    event.preventDefault();
    mapPopup.classList.add("map-popup-show");
  });
}

if (mapClose) {
  mapClose.addEventListener("click", function(event){
    event.preventDefault();
    mapPopup.classList.remove("map-popup-show");
  });
}

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (mapPopup.classList.contains("map-popup-show")) {
      mapPopup.classList.remove("map-popup-show");
    }
  }
})



var cartOpen = document.querySelectorAll(".buy-hover__btn"), i;
var cartPopup = document.querySelector(".cart-notification");
var cartClose = document.querySelector(".cart-notification-close");
var cartCancel = document.querySelector(".cart-cancel-btn");

for (i = 0; i < cartOpen.length; i++) {
  cartOpen[i].addEventListener("click", function (event) {
    event.preventDefault(event);
    cartPopup.classList.add("cart-notification-show");
  });
}

cartClose.addEventListener("click", function(event) {
   event.preventDefault();
   cartPopup.classList.remove("cart-notification-show");
 });


cartCancel.addEventListener("click", function (event) {
  event.preventDefault(event);
  cartPopup.classList.remove("cart-notification-show");
});

window.addEventListener("keydown", function (event) {
    if (event.keyCode == 27) {
        if (cartPopup.classList.contains("cart-notification-show")) {
            cartPopup.classList.remove("cart-notification-show");
        }
    }
});




var catalogCartOpen = document.querySelectorAll(".js-open-cart"), i;
var catalogCartPopup = document.querySelector(".cart-notification");
var catalogCartClose = document.querySelector(".cart-notification-close");
var catalogCartCancel = document.querySelector(".cart-cancel-btn");

for (i = 0; i < catalogCartOpen.length; i++) {
  catalogCartOpen[i].addEventListener("click", function (event) {
    event.preventDefault(event);
    catalogCartPopup.classList.add("cart-notification-show");
  });
}



if (catalogCartClose) {
  catalogCartClose.addEventListener("click", function(event) {
     event.preventDefault();
     catalogCartPopup.classList.remove("cart-notification-show");
   });
}


if (catalogCartCancel) {
  catalogCartCancel.addEventListener("click", function (event) {
    event.preventDefault(event);
    catalogCartPopup.classList.remove("cart-notification-show");
  });
}


window.addEventListener("keydown", function (event) {
    if (event.keyCode == 27) {
        if (catalogCartPopup.classList.contains("cart-notification-show")) {
            catalogCartPopup.classList.remove("cart-notification-show");
        }
    }
});
