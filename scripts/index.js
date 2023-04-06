let height2 = 0;
let height3 = $(window).height();
let bottomPos = 0;
let currTop = 0;
let debounceFlag = false;
$(window).on("wheel resize DOMMouseScroll", function (event) {
  if (debounceFlag) return;
  let wd = event.originalEvent.wheelDelta || -event.originalEvent.detail;
  height2 = $(".skills").offset().top;
  height3 = $(".experiences").offset().top;
  bottomPos =
    window.scrollY + $(window).height() + event.originalEvent.deltaY;
  currTop = window.pageYOffset + event.originalEvent.deltaY;

  if (!debounceFlag) {
    debounceFlag = true;
    if (wd < 0) {
      if (currTop < height2 && bottomPos > height2 - 2) {
        $("html,body")
          .stop()
          .animate(
            {
              scrollTop: $(".skills").offset().top + 2,
            },
            1000,
            "swing",
            function () {
              debounceFlag = false;
            }
          );
      } else if (
        currTop >= height2 &&
        bottomPos < height3 + window.innerHeight
      ) {
        //scroll up
        if ((height1 = height2))
          $("html,body")
            .stop()
            .animate(
              {
                scrollTop: $(".experiences").offset().top + 2,
              },
              1000,
              "swing",
              function () {
                debounceFlag = false;
                $(window);
              }
            );
      }
    } else {
      if (currTop <= height3 && currTop > height2 + 2) {
        $("html,body")
          .stop()
          .animate(
            {
              scrollTop: $(".skills").offset().top - 2,
            },
            1000,
            "swing",
            function () {
              debounceFlag = false;
            }
          );
      } else if (
        currTop <= height2 &&
        currTop > height2 - window.innerHeight + 2
      ) {
        $("html,body")
          .stop()
          .animate(
            {
              scrollTop: $(".skills").offset().top - window.innerHeight,
            },
            1000,
            "swing",
            function () {
              debounceFlag = false;
            }
          );
      }
    }
  }

  bottomPos = window.scrollY + $(window).height();
  currTop = window.scrollY;
  debounceFlag = false;
});

$(document).ready(function () {
  $(".hamburgerBtn").click(function () {
    $(".hmbgBtnTgl").stop().slideToggle(200);
  });
  // $(window).scroll(function () {
  //   height2 = $(window).height();
  // });
});

function funcHmbgBtn(x) {
  x.classList.toggle("change");
}

