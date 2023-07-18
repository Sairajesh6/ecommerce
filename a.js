document.querySelector('a[href="#home"]').addEventListener('click', function (e) {
    e.preventDefault(); // Prevent the default anchor behavior
  
    const targetSection = document.querySelector('#home');
    const offsetTop = targetSection.offsetTop;
  
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth' // Enable smooth scrolling
    });
  });

  document.querySelector('a[href="#trending"]').addEventListener('click', function (e) {
    e.preventDefault(); // Prevent the default anchor behavior
  
    const targetSection = document.querySelector('#trending');
    const offsetTop = targetSection.offsetTop;
  
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth' // Enable smooth scrolling
    });
  });


  document.querySelector('a[href="#organic"]').addEventListener('click', function (e) {
    e.preventDefault(); // Prevent the default anchor behavior
  
    const targetSection = document.querySelector('#organic');
    const offsetTop = targetSection.offsetTop;
  
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth' // Enable smooth scrolling
    });
  });


  document.querySelector('a[href="#store"]').addEventListener('click', function (e) {
    e.preventDefault(); // Prevent the default anchor behavior
  
    const targetSection = document.querySelector('#store');
    const offsetTop = targetSection.offsetTop;
  
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth' // Enable smooth scrolling
    });
  });


  document.querySelector('a[href="#contact"]').addEventListener('click', function (e) {
    e.preventDefault(); // Prevent the default anchor behavior
  
    const targetSection = document.querySelector('#contact');
    const offsetTop = targetSection.offsetTop;
  
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth' // Enable smooth scrolling
    });
  });