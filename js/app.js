$(document).ready(()=>{

// ********************************************
// VARIABLES
// ********************************************

const project = [
  {
  	index: 0,
    thumb : 'images/portfolio-1.png',
    image : 'images/portfolio-1.png',
    title : 'Styled Sign Up Form',
    description : 'Styled Sign Up Form',
    link: 'https://julie-lewis.github.io/techdegree-project-3/',
    category: 'form',
    tags: ['css', 'html5']
  },
  {
  	index: 1,
    thumb : 'images/portfolio-2.png',
    image : 'images/portfolio-2.png',
    title : 'SVG Animations',
    description : 'SVG Animations',
    link: 'https://julie-lewis.github.io/techdegree-project-8/',
    category: 'form',
    tags: ['css', 'html5', 'SVG Assets', 'Animation']
  },
  {
  	index: 2,
    thumb : 'images/portfolio-3.png',
    image : 'images/portfolio-3.png',
    title : 'SASS Style Guide',
    description : 'SASS Style Guide',
    link: 'https://julie-lewis.github.io/techdegree-project-5/',
    category: 'form',
    tags: ['sass', 'html5']
  },
  {
  	index: 3,
    thumb : 'images/portfolio-4.png',
    image : 'images/portfolio-4.png',
    title : 'JavaScript Guessing Game',
    description : 'Wheel of Success',
    link: 'https://julie-lewis.github.io/techdegree-project-7/',
    category: 'function',
    tags: ['css', 'html5', 'JavaScript']
  },
  {
  	index: 4,
    thumb : 'images/portfolio-5.png',
    image : 'images/portfolio-5.png',
    title : 'Employee Directory',
    description : 'Accessed RandomUserGenerator API to create Employee Directory',
    link: 'https://julie-lewis.github.io/techdegree-project-10/',
    category: 'function',
    tags: ['css', 'html5', 'JavaScript']
  },
  {
  	index: 5,
    thumb : 'images/portfolio-6.png',
    image : 'images/portfolio-6.png',
    title : 'REACT Flickr Gallery',
    description : 'Used Flickr API to develop a searchable Gallery using the REACT.js library',
    link: 'https://julie-lewis.github.io/techdegree-project-11/',
    category: 'function',
    tags: ['css', 'html5', 'JavaScript', 'REACT']
  },
  {
  	index: 6,
    thumb : 'images/portfolio-1.png',
    image : 'images/portfolio-1.png',
    title : 'Dubzz Digital Marketing',
    description : 'Worked with a team to design, develop and implement a re-designed company website',
    link: 'https://julie-lewis.github.io/techdegree-project-1/',
    category: 'application',
    tags: ['css', 'html5', 'JavaScript', 'Copywriting', 'UX', 'SEO', 'WordPress']
  },
  {
  	index: 7,
    thumb : 'images/portfolio-2.png',
    image : 'images/portfolio-2.png',
    title : 'Chris Bell Dental',
    description : 'Custom WordPress theme development, copywriting and SEO implementation',
    link: 'https://julie-lewis.github.io/techdegree-project-1/',
    category: 'application',
    tags: ['css', 'html5', 'JavaScript', 'Copywriting', 'UX', 'SEO', 'WordPress']
  },
  {
  	index: 8,
    thumb : 'images/portfolio-2.png',
    image : 'images/portfolio-2.png',
    title : 'Te Taumata',
    description : 'Custom WordPress theme development',
    link: 'https://julie-lewis.github.io/techdegree-project-1/',
    category: 'application',
    tags: ['css', 'html5', 'JavaScript', 'UX', 'WordPress']
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
 		
 		console.log(project)

	    let overlay = $('#overlay-content');

	    let overlayDiv = '<div id="overlay"><span id="close" class="close">&times;</span>';
	    overlayDiv += '<a href=" ' + project.link + ' " target="_blank"><img class="avatar"  data-index="' + project.index + '" src="' + project.image + ' " alt=" ' + project.title + ' "></a>';
	    overlayDiv += '<h3 class="overlay-title">' + project.title + '</h3>';
	    overlayDiv += '<p class="overlay-description">'+ project.description + '</p>';
	    overlayDiv += '<p class="project-tags">Skills Used: ' +  project.tags.join(', ')  + '<p>';
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












