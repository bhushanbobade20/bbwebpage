const typed = require('typed.js');

const myTyped = new typed('#subtitle', {
  strings: ['<i>Consultant</i> @Capgemini', 'Software Engineer', 'Fullstack Developer',
            'Passionate for HTML, CSS, Javascript', 'WordPress CMS Enthusiast',
            'Creating Engaging Digital Experiences'
          ],
  backDelay: 3500,
  /* Delay in text change */
  typeSpeed: 50,
  /* Typing speed */
  loop: true
});

myTyped.start();