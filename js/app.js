$(document).ready(()=>{

// ********************************************
// VARIABLES
// ********************************************

const project = [
  {
  	index: 0,
    thumb : 'images/thumb1.jpg',
    image : 'images/full-img1.jpg',
    title : 'Styled Sign Up Form',
    description : 'Used HTML5 and CSS to create and style an E-newsletter Sign Up form to match a prescribed mock up and comply with valid markup.',
    link: 'https://julie-lewis.github.io/techdegree-project-3/',
    category: 'form',
    tags: ['CSS', 'html5']
  },
  {
  	index: 1,
    thumb : 'images/thumb2.jpg',
    image : 'images/full-img2.jpg',
    title : 'SVG Animations',
    description : 'Utilised and styled SVG icons to produce animation effects on a provided design brief.',
    link: 'https://julie-lewis.github.io/techdegree-project-8/',
    category: 'form',
    tags: ['CSS', 'HTML5', 'SVG Assets', 'Animation']
  },
  {
  	index: 2,
    thumb : 'images/thumb3.jpg',
    image : 'images/full-img3.jpg',
    title : 'SASS Style Guide',
    description : 'Created a flexible, digital Style Guide using SASS syntax and a structured file system.',
    link: 'https://julie-lewis.github.io/techdegree-project-5/',
    category: 'form',
    tags: ['SASS', 'HTML5']
  },
  {
  	index: 3,
    thumb : 'images/thumb4.jpg',
    image : 'images/full-img4.jpg',
    title : 'Wheel of Success',
    description : 'Create a JavaScript Guessing Game, where the user is prompted to guess letters in a phrase.  The user receives feedback on progress and messages regarding their success or failure.',
    link: 'https://julie-lewis.github.io/techdegree-project-7/',
    category: 'function',
    tags: ['CSS', 'HTML5', 'JavaScript']
  },
  {
  	index: 4,
    thumb : 'images/thumb5.jpg',
    image : 'images/full-img5.jpg',
    title : 'Employee Directory',
    description : 'Accessed RandomUserGenerator API to create a dynamic, searchable Employee Directory.',
    link: 'https://julie-lewis.github.io/techdegree-project-10/',
    category: 'function',
    tags: ['CSS', 'HTML5', 'JavaScript']
  },
  {
  	index: 5,
    thumb : 'images/thumb6.jpg',
    image : 'images/full-img6.jpg',
    title : 'REACT Flickr Gallery',
    description : 'Used the Flickr API to develop a searchable Gallery using the REACT.js library.',
    link: 'https://julie-lewis.github.io/techdegree-project-11/',
    category: 'function',
    tags: ['CSS', 'HTML5', 'JavaScript', 'REACT']
  },
  {
  	index: 6,
    thumb : 'images/thumb7.jpg',
    image : 'images/full-img7.jpg',
    title : 'Dubzz Digital Marketing',
    description : 'Worked with a team to design, develop and implement a re-designed and restructured company website.',
    link: 'https://dubzz.co.nz/',
    category: 'application',
    tags: ['SASS', 'HTML5', 'JavaScript', 'Copywriting', 'UX', 'SEO', 'WordPress', 'PHP']
  },
  {
  	index: 7,
    thumb : 'images/thumb8.jpg',
    image : 'images/full-img8.jpg',
    title : 'Chris Bell Dental',
    description : 'New website development, including custom WordPress theme development, copywriting and SEO implementation',
    link: 'https://belldental.co.nz/',
    category: 'application',
    tags: ['SASS', 'HTML5', 'JavaScript', 'Copywriting', 'UX', 'SEO', 'WordPress', 'Logo Development', 'PHP']
  },
  {
  	index: 8,
    thumb : 'images/thumb9.jpg',
    image : 'images/full-img9.jpg',
    title : 'Te Taumata',
    description : 'New website development, including a custom WordPress theme, SASS systax and component file structure, and jQuery effects.',
    link: 'http://wordpress-158078-456862.cloudwaysapps.com/',
    category: 'application',
    tags: ['SASS', 'HTML5', 'JavaScript', 'jQuery', 'UX', 'WordPress', 'PHP']
  }
];

  	const portfolioWrap = document.getElementById('portfolio-wrap');
  	const overlayWrap = document.getElementById('overlay-wrapper');

  // ********************************************
  // SET PROJECT DIV CONTENT & DEFINE MODAL CONTENT
  // ********************************************
  function setSingleProject(project) {

  	for (let i = 0; i < project.length; i++) {

	    let projectDiv = '<div class="single-project" data-index="'+ i +'">';

	    projectDiv += '<img class="full-img" data-index="' + i + '" src="' + project[i].thumb + ' " alt=" ' + project[i].title + ' ">';
	    projectDiv += '<div data-index="'+ i +'">';
	    projectDiv += '<h3 class="project-title" data-index="'+ i +'">' +  project[i].title  + '</h3>';
	    projectDiv += '</div></div>';

	    $("#portfolio-wrap").append(projectDiv);

	}
  };

  setSingleProject(project);

  // ********************************************
  // DEFINE MODAL CONTENT
  // ********************************************
  function setOverlay(project) {     
 		
 		console.log(project.index);

	    let overlay = $('#overlay-content');

	    let overlayDiv = '<div id="overlay" ><span id="close" class="close">&times;</span>';
	    overlayDiv += '<a href=" ' + project.link + ' " target="_blank" data-index="' + project.index + '"><img class="avatar" src="' + project.image + ' " alt=" ' + project.title + ' "></a>';
	    overlayDiv += '<h3 class="overlay-title">' + project.title + '</h3>';
	    overlayDiv += '<p class="overlay-description">'+ project.description + '</p>';
	    overlayDiv += '<h2 class="project-tags"><strong>Skills Used:</strong> ' +  project.tags.join(', ')  + '</h2>';
	    overlayDiv += '<hr class="hr">';
	    overlayDiv += '<a href=" ' + project.link + ' " target="_blank" class="overlay-link">View Project</p>';
	    overlayDiv += '</div>';

    	overlay.html(overlayDiv);

  } //end setOverlay


  // ********************************************
  // OPEN MODAL ON CLICK
  // ********************************************
  $("#portfolio-wrap").on('click', '.single-project', e => { // Delegated event handler so that margins don't open undefined
    overlayWrap.style.display = "block";
    let selected = e.target; // Gets clicked item
    let selectedIndex = $(selected).data('index'); //Indentifies index of clicked on node
    setOverlay(project[selectedIndex]);
  });

  // // ********************************************
  // // MODAL CONTROLS
  // // ********************************************
  // Close modal by clicking X
  $('#overlay-wrapper').on('click', '#close', e=> { // Delegated event handler to existing DOM element
    $('#overlay').text('');
    $("#overlay").css("display", "none");
    $("#overlay-wrapper").css("display", "none");
  }); 

  // Close modal by clicking outside of modal
  window.onclick = function(event) {
    if (event.target == overlayWrap) {
      $('#overlay').text('');
      $("#overlay").css("display", "none");
      $("#overlay-wrapper").css("display", "none");
    }    
  };

  // //Make arrows navigate to/show previous/next Project
  const previous = document.getElementById('previous');
  const next = document.getElementById('next');
  previous.onclick = function() {
    let currentIndex = document.getElementById('close').nextSibling.getAttribute('data-index');
    let previousProject = Number(currentIndex) - 1;
    let lastProject = Number(currentIndex) + 8;
    if (currentIndex == 0) {
      setOverlay(project[ lastProject ]);
    }
    else { 
      setOverlay(project[ previousProject ]);
    }
  };
  next.onclick = function() {
    let currentIndex = document.getElementById('close').nextSibling.getAttribute('data-index');
    let nextProject = Number(currentIndex) + 1;
    let firstProject = Number(currentIndex) - 8;
    if (currentIndex > 7) {
      setOverlay(project[ firstProject ]);
    }
    else { 
      setOverlay(project[ nextProject ]);
    }
  };


}); //end document. ready












