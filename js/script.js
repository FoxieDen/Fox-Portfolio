document.addEventListener('DOMContentLoaded', () => {
  const chatBubble = document.querySelector('.sumire-bubble');
  const avatar = document.querySelector('.sumire-avatar');
  const inputField = document.getElementById('user-input');
  const submitbutton = document.getElementById('submit-button');
  const buttonSumire = document.getElementById('button-sumire');
  const msg = document.getElementById('response');
  
  
  function respondToUser(overrideInput = null) {
  const inputField = document.getElementById('user-input');
  const msg = document.getElementById('response');

  if (!chatBubble || !inputField || !msg) return;
  
  const input = overrideInput !== undefined && overrideInput !== null
    ? overrideInput.toLowerCase().trim()
    : inputField.value.toLowerCase().trim();
	
  let mode = 'confused';

 
 
    if (input.includes("twitch")) {
    mode = 'twitch';
    avatar.src = 'images/sumire_blush2.png';
    chatBubble.textContent = "....You really weren’t supposed to see this… ";                              
  } else if (input.includes("translate")) {
    mode = 'translate';
	avatar.src = 'images/sumire_translate.png';
    chatBubble.textContent = "Let's polish it with elegance.";
  } else if (input.includes("analyze")) {
    mode = 'analyze';
	avatar.src = 'images/sumire_analyze.png';
    chatBubble.textContent = "Mmm… let's take a closer look.";
  } else if (input.includes("hi")) {
    mode = 'hi';
	avatar.src = 'images/Sumire.png';
    chatBubble.textContent = "Hi there! What do you need help with?";
  } else {
	avatar.src = 'images/sumire_confused.png';
    chatBubble.textContent = "I'm not sure… but I'm listening.";
  }	  
  
   changeSumirePic(mode);
    inputField.value = '';

  }
  
  function changeSumirePic(mode) {
    const avatar = document.querySelector('.sumire-avatar');
	switch (mode) {
	  case 'twitch': 
		avatar.scr = 'images/sumire_blush2.png'
		break;
      case 'hi':
        avatar.src = 'images/Sumire.png';
        break;
      case 'translate':
        avatar.src = 'images/sumire_translate.png';
        break;
      case 'analyze':
        avatar.src = 'images/sumire_analyze.png';
        break;
      case 'confused':
      default:
        avatar.src = 'images/sumire_confused.png';
        break;
		
    }
  }

    // Input field ENTER
  inputField.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
      respondToUser();
    }
  });

  // Button click
  buttonSumire.addEventListener('click', function () {
    respondToUser('twitch');

  });

 window.respondToUser = respondToUser;	
	  inputField.addEventListener('', function() {
            respondToUser('ask');
        
});


});
