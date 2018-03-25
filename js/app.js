const project = [
  {
    thumb : 'images/portfolio-1.png',
    image : 'images/portfolio-1.png',
    title : 'Styled Sign Up Form',
    description : 'Styled Sign Up Form',
    link: 'https://julie-lewis.github.io/techdegree-project-3/',
    category: 'form',
    tags: ['css', 'html5']
  },
  {
    thumb : 'images/portfolio-2.png',
    image : 'images/portfolio-2.png',
    title : 'SVG Animations',
    description : 'SVG Animations',
    link: 'https://julie-lewis.github.io/techdegree-project-8/',
    category: 'form',
    tags: ['css', 'html5', 'SVG Assets', 'Animation']
  },
  {
    thumb : 'images/portfolio-3.png',
    image : 'images/portfolio-3.png',
    title : 'SASS Style Guide',
    description : 'SASS Style Guide',
    link: 'https://julie-lewis.github.io/techdegree-project-5/',
    category: 'form',
    tags: ['sass', 'html5']
  },
  {
    thumb : 'images/portfolio-4.png',
    image : 'images/portfolio-4.png',
    title : 'JavaScript Guessing Game',
    description : 'Wheel of Success',
    link: 'https://julie-lewis.github.io/techdegree-project-7/',
    category: 'function',
    tags: ['css', 'html5', 'JavaScript']
  },
  {
    thumb : 'images/portfolio-5.png',
    image : 'images/portfolio-5.png',
    title : 'Employee Directory',
    description : 'Accessed RandomUserGenerator API to create Employee Directory',
    link: 'https://julie-lewis.github.io/techdegree-project-10/',
    category: 'function',
    tags: ['css', 'html5', 'JavaScript']
  },
  {
    thumb : 'images/portfolio-6.png',
    image : 'images/portfolio-6.png',
    title : 'REACT Flickr Gallery',
    description : 'Used Flickr API to develop a searchable Gallery using the REACT.js library',
    link: 'https://julie-lewis.github.io/techdegree-project-11/',
    category: 'function',
    tags: ['css', 'html5', 'JavaScript', 'REACT']
  },
  {
    thumb : 'images/portfolio-1.png',
    image : 'images/portfolio-1.png',
    title : 'Dubzz Digital Marketing',
    description : 'Worked with a team to design, develop and implement a re-designed company website',
    link: 'https://julie-lewis.github.io/techdegree-project-1/',
    category: 'application',
    tags: ['css', 'html5', 'JavaScript', 'Copywriting', 'UX', 'SEO', 'WordPress']
  },
  {
    thumb : 'images/portfolio-2.png',
    image : 'images/portfolio-2.png',
    title : 'Chris Bell Dental',
    description : 'Custom WordPress theme development, copywriting and SEO implementation',
    link: 'https://julie-lewis.github.io/techdegree-project-1/',
    category: 'application',
    tags: ['css', 'html5', 'JavaScript', 'Copywriting', 'UX', 'SEO', 'WordPress']
  },
  {
    thumb : 'images/portfolio-2.png',
    image : 'images/portfolio-2.png',
    title : 'Te Taumata',
    description : 'Custom WordPress theme development',
    link: 'https://julie-lewis.github.io/techdegree-project-1/',
    category: 'application',
    tags: ['css', 'html5', 'JavaScript', 'UX', 'WordPress']
  }
];



$(document).ready(()=>{
  // ********************************************
  // VARIABLES
  // ********************************************
  const formWrap = document.getElementById('form');
  const functionWrap = document.getElementById('function');
  const applicationWrap = document.getElementById('application');
  const overlayWrap = document.getElementById('overlay-wrapper');

  // ********************************************
  // SET EMPLOYEE DIV CONTENT
  // ********************************************
  function setSingleProject(projectCategory) {
  	// runs through project array
  	for (let i = 0; i < project.length; i++) {
  		//if category = projectCategory

 		// let project

	    let projectDiv = '<div class="single-project" data-index="'+project[i]+'">';

	    projectDiv += '<img class="project-image" data-index="' + project[i] + '" src="' + project.thumb + ' " alt=" ' + project.title + ' ">';
	    projectDiv += '<div data-index="'+ project[i] +'">';
	    projectDiv += '<h3 class="employee-name" data-index="'+ project[i] +'">' +  project.title  + '</h3>';
	    projectDiv += '</div></div>';

	    // push to an array? return category?
	    
	}
  }

  function appendProjects() => {
    // for each item in array
  		if category = form {
  			// $(formWrap).append(projectDiv);
  		}
  		else if category = functional {
  			// $(functionWrap).append(projectDiv);
  		} else if category = application {
  			// $(applicationWrap).append(projectDiv);
  		} else {
  			console.log('whoops!')
  		}
}


  // USER SEARCH - USE FOR CAT FILTER?
  const userSearch = document.querySelector("input[id='user-search']");
  $(userSearch).keyup(function(){
    // Retrieve the input field text 
    var filter = $(this).val();
    // Loop through the employee div 
    $(".avatar").each(function(){
        var employeeName = $(this).attr('alt').search(new RegExp(filter, "i"));
        if (employeeName < 0) {  
            $(this).parent().fadeOut();
        // Show the div item if the phrase matches 
        } else {
            $(this).parent().show();
        }
    });
  });



  // ********************************************
  // DEFINE MODAL CONTENT
  // ********************************************
  function setOverlay(employee) {       
    let overlay = $('#overlay-content');

    let overlayDiv = '<div id="overlay"><span id="close" class="close">&times;</span>';
    overlayDiv += '<img class="avatar" data-index="' + employee.index + '" src="' + employee.img + ' " alt=" ' + employee.name + ' ' + employee.userName + ' ">';
    overlayDiv += '<p class="employee-name">' + employee.name + '</p>';
    overlayDiv += '<p class="overlay-email">'+ employee.userName + '</p>';
    overlayDiv += '<p class="overlay-email">'+ employee.email + '</p>';
    overlayDiv += '<hr class="hr">';
    overlayDiv += '<p class="overlay-cell">'+ employee.cell + '</p>';
    overlayDiv += '<p class="overlay-address">'+ employee.address+ '</p>';
    overlayDiv += '<p class="overlay-dob">'+ employee.bday + '</p>';
    overlayDiv += '</div>';

    overlay.html(overlayDiv);
  } //end setOverlay


  // ********************************************
  // OPEN MODAL ON CLICK
  // ********************************************
  $(employeeWrap).on('click', '.employee', e => { // Delegated event handler so that margins don't open undefined
    overlayWrap.style.display = "block";
    let selected = e.target; // Gets clicked item
    let selectedIndex = $(selected).data('index'); //Indentifies index of clicked on node
    setOverlay(employeeInfo[selectedIndex]);
  });
  // ********************************************
  // MODAL CONTROLS
  // ********************************************
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

  //Make arrows navigate to/show previous/next employee
  const previous = document.getElementById('previous');
  const next = document.getElementById('next');
  previous.onclick = function() {
    let currentIndex = document.getElementById('close').nextSibling.getAttribute('data-index');
    let previousEmployee = Number(currentIndex) - 1;
    let lastEmployee = Number(currentIndex) + 11;
    if (currentIndex == 0) {
      setOverlay(employeeInfo[ lastEmployee ]);
    }
    else { 
      setOverlay(employeeInfo[ previousEmployee ]);
    }
  };
  next.onclick = function() {
    let currentIndex = document.getElementById('close').nextSibling.getAttribute('data-index');
    let nextEmployee = Number(currentIndex) + 1;
    let firstEmployee = Number(currentIndex) - 11;
    if (currentIndex > 10) {
      setOverlay(employeeInfo[ firstEmployee ]);
    }
    else { 
      setOverlay(employeeInfo[ nextEmployee ]);
    }
  };





}); //end document. ready












