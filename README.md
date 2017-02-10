# SimpleParallax

SimpleParallax is a small, simple, easy to use scrolling parallax library. It uses CSS3 transformations along with requestAnimationFrame to create buttery smooth animations, with zero dependencies. Get up and running in seconds.

## Usage

To build locally:

```
git clone https://github.com/christopherwk210/SimpleParallax.git
cd SimpleParallax
npm i
npm start
```

To use in your page:

```html
<script src="path/to/dist/SimpleParallax.min.js"></script>
```

# Getting Started

The most basic usage of SimpleParallax looks like this:

```javascript
var parallax = new SimpleParallax({
  element: document.getElementById('parallax-element')
});
```

This will initialize a new instance of SimpleParallax and add `#parallax-element` to the list of elements that are affected by the parallax effect. Since no speed is specified, the default speed is used.

If you later wish to add more elements, you can use the following:

```javascript
parallax.addElement({
  element: document.getElementById('parallax-element')
});
```

Both the constructor and `addElement` optionally take an array of objects that can be used to add multiple elements at once:

```javascript
parallax.addElement([
  {
    element: document.getElementById('element-one')
  },
  {
    element: document.getElementById('element-two')
  }
]);
```

## Options

A number of optional parameters can be set when adding elements to a SimpleParallax instance.

```javascript
var parallax = new SimpleParallax({
  element: document.getElementById('element'),
  speed: 0.5,
  offset: function() {
      return 20;
  }
});
```

**element** is the element to apply the parallax effect to.

**speed** is the rate at which to apply the effect. The default value is 0.5, which will cause the element to move at 1.5 times the normal speed. If you wanted the element to move slower than usual rather than faster, you could use a negative value like -0.5. Note that if you wanted to the element to use an easing function for movement, you could add a transform to the transition property for that element's CSS.

**offset** is a custom function that will change the offset of elements vertical position on the page. SimpleParallax will keep the element in it's exact position on the page when you would normally see it by scrolling down. If you wanted the element to line up with it's original position once that position was vertically centered, you could use this as your offset function:

```javascript
parallax.addElement({
  element: document.getElementById('center-screen'),
  offset: function() {
      return window.innerHeight / 2;
  }
});
```

# Browser Compatibility

SimpleParallax has been tested and confirmed to properly work in the latest versions of Chrome, Firefox, Safari, and iOS Safari. It should however work properly in all modern browsers, and any browser that works with the `translate3d` CSS syntax and `requestAnimationFrame` (vendor prefixes are dealt with automatically).
