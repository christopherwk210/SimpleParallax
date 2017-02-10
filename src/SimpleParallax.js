;(function() {
  // Correct animation frame
  window.requestAnimationFrame = window.requestAnimationFrame ||
                                  window.webkitRequestAnimationFrame ||
                                  window.mozRequestAnimationFrame ||
                                  window.msRequestAnimationFrame ||
                                  window.oRequestAnimationFrame;

  window.cancelAnimationFrame = window.cancelAnimationFrame ||
                                  window.webkitCancelAnimationFrame ||
                                  window.mozCancelAnimationFrame ||
                                  window.msCancelAnimationFrame ||
                                  window.oCancelAnimationFrame;

  // Define SimpleParallax
  window.SimpleParallax = function(e) {
    // Local variables
    this.elementList = [];
    this.transformVendor = this.getTransformVender();
    this.offset = 0;

    // Scroll listener
    this.setupScrollHandler();

    // Kick off animation
    var self = this;
    requestAnimationFrame(function() {
      self.animate(self);
    });

    // Handle constructor params
    if (e !== undefined) {
      this.addElement(e);
    }
  };

  // Create an event listener for the window scroll
  window.SimpleParallax.prototype.setupScrollHandler = function() {
    var self = this;

    window.addEventListener("scroll", function() {
      self.offset = this.pageYOffset;
    });
  };

  // Convert page offset to parallax values
  window.SimpleParallax.prototype.animate = function(self) {
    var length = self.elementList.length;

    for (var i = 0; i < length; i++) {
      var mod = self.elementList[i].offset() * self.elementList[i].speed;
      if (self.elementList[i].element.offsetTop > window.innerHeight) {
        mod += ((self.elementList[i].element.offsetTop + self.elementList[i].element.offsetHeight) - window.innerHeight) * self.elementList[i].speed;
      }
      var y = -((self.offset * self.elementList[i].speed) - mod);
      self.elementList[i].element.style[self.transformVendor] = 'translate3d(0px, ' + y + 'px, 0px)';
    }

    requestAnimationFrame(function() {
      self.animate(self);
    });
  };

  // Returns the browser transform prefix
  window.SimpleParallax.prototype.getTransformVender = function() {
    var transformVendors = [
      'webkitTransform',
      'MozTransform',
      'msTransform',
      'OTransform',
      'transform'
    ];

    var correctVendor;

    for (var i = 0; i < transformVendors.length; i++) {
      if (document.body.style[transformVendors[i]] !== undefined) {
        correctVendor = transformVendors[i];
      }
    }

    return correctVendor;
  };

  // Add an element to the array of elements to apply the parallax effect to
  window.SimpleParallax.prototype.addElement = function(element) {
    if ((element === undefined) || (typeof element !== 'object')) {
      return;
    }

    // Put single object inside of array
    if (Array.isArray(element) === false) {
      var orig = element;
      element = [orig];
    }

    var length = element.length || 0;
    for (var i = 0; i < length; i++) {
      if (element[i].element === undefined) {
          return;
      }

      var elementEntry = {
        element: element[i].element,
        speed: 0.5,
        offset: function() {
          return 0;
        }
      };

      if (element[i].speed !== undefined) {
          elementEntry.speed = element[i].speed;
      }

      if (element[i].offset !== undefined) {
          elementEntry.offset = element[i].offset;
      }

      var existingElement = this.isElementInList(element[i].element);
      if (existingElement) {
        this.elementList.splice(existingElement, 1);
      }

      this.elementList.push(elementEntry);
    }
  };

  // Returns in the array position in the elementList if the element exists, otherwise returns false
  window.SimpleParallax.prototype.isElementInList = function(element) {
    var length = this.elementList.length;

    for (var i = 0; i < length; i++) {
      if (this.elementList[i].element === element) {
        return i;
      }
    }

    return false;
  };

}());
