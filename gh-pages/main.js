window.onload = function() {
  // Define elements
  var elements = [
    {
      element: document.getElementById('front-page'),
      speed: 1
    },
    {
      element: document.getElementById('first-paragraph'),
      speed: 0.2
    },
    {
      element: document.getElementById('center-screen'),
      speed: 2.5
    },
    {
      element: document.getElementById('options-paragraph'),
      speed: 3
    },
    {
      element: document.getElementById('second-paragraph'),
      speed: 0.5,
      offset: function() {
        return -(window.innerHeight / 2);
      }
    }
  ];

  // Pass them to SimpleParallax
  var parallax = new SimpleParallax(elements);
};
