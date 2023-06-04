// get banner
var banner = document.querySelector('.jd_banner');
// banner width
var width = banner.offsetWidth;
// image container
var imageBox = banner.querySelector('ul:first-child');
// dot container
var pointBox = banner.querySelector('ul:last-child');
// all dots
var points = pointBox.querySelectorAll('li');

var setTranslateX = function (translateX) {
  imageBox.style.transform = 'translateX(' + translateX + 'px)';
}

/* scroll index */
var index = 0;

// change point style
var setPoint = function () {
  // clear point style
  for (var i = 0; i < points.length; i++) {
    var obj = points[i];
    obj.classList.remove('now');
  }
  // add style
  points[index].classList.add('now');
}

var startX = 0;
var distanceX = 0;
var isMove = false;

// Add touch start event to record the X coordinate of the starting position
imageBox.addEventListener('touchstart', function (e) {
  startX = e.touches[0].clientX;
});

// Add touch move event to move image
imageBox.addEventListener('touchmove', function (e) {
  // the x coordinate during the sliding process
  var moveX = e.touches[0].clientX;
  // calc direction
  distanceX = moveX - startX;
  // calc move distance
  var translateX = -index * width + distanceX;
  imageBox.style.transition = 'none';
  imageBox.style.transform = 'translateX(' + translateX + 'px)';
  // is moved
  isMove = true;
});

// Add touched event to scroll image
imageBox.addEventListener('touchend', function (e) {
  // if isMove flag is true
  if (isMove) {
    // Restore to the previous position, if the distance is too short
    if (Math.abs(distanceX) < width / 3) {
      imageBox.style.transition = 'all 0.2s';
      imageBox.style.transform = 'translateX(' + -index * width + 'px)';
    } else {
      if (distanceX > 0 && index > 0) {
        index--;
      } else if (distanceX < 0 && index < 2) {
        index++;
      }
      // move to other image
      imageBox.style.transition = 'all 0.2s';
      setTranslateX(-index * width);
    }
    setPoint();
  }

  // reset all state
  startX = 0;
  distanceX = 0;
  isMove = false;
});

// get add to cart btn
var addCart = document.getElementById("add_cart");
// get added
var added = document.getElementById("added");

// add click event to show added result
addCart.addEventListener("click", function() {
  // show added
  added.style.display = "block";
});

// get all size item
var sizeItems = document.querySelectorAll('.size-wrapper > div');
for (var i = 0; i < sizeItems.length; i++) {
  // add click event listener to switch item select
  sizeItems[i].addEventListener("click", function() {
    for (var j = 0; j < sizeItems.length; j++) {
      sizeItems[j].classList.remove("active");
    }
    this.classList.add("active");
  });
}

// get all star
var starts = document.querySelectorAll('.star-wrapper img');
for (let i = 0; i < starts.length; i++) {
  // add click event
  starts[i].addEventListener("click", function() {
    // reset star image
    for (let j = 0; j < starts.length; j++) {
      starts[j].src = "images/star.png";
    }
    // add start active
    for (let j = 0; j <= i; j++) {
      starts[j].src = "images/star-active.png";
    }
  });
}
