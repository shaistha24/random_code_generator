var quotes= ["In forming a bridge between body and mind, dreams may be used as a springboard from which man can leap to new realms of experience lying outside his normal state of consciousness.","It has been said that democracy is the worst form of government except all the others that have been tried","By desiring little, a poor man makes himself rich.","Things work out best for those who make the best of how things work out.","If you are not willing to risk the usual you will have to settle for the ordinary.", "Trust because you are willing to accept the risk, not because it’s safe or certain.","Take up one idea. Make that one idea your life - think of it, dream of it, live on that idea. Let the brain, muscles, nerves, every part of your body, be full of that idea, and just leave every other idea alone. This is the way to success.","All our dreams can come true if we have the courage to pursue them.","Success is walking from failure to failure with no loss of enthusiasm.","Opportunities don’t happen, you create them.","Try not to become a person of success, but rather try to become a person of value.","Great minds discuss ideas; average minds discuss events; small minds discuss people.","I have not failed. I’ve just found 10,000 ways that won’t work.","If you don’t value your time, neither will others. Stop giving away your time and talents- start charging for it.","A successful man is one who can lay a firm foundation with the bricks others have thrown at him.","No one can make you feel inferior without your consent.","The whole secret of a successful life is to find out what is one’s destiny to do, and then do it.","If you’re going through hell keep going.","The ones who are crazy enough to think they can change the world, are the ones that do.","What seems to us as bitter trials are often blessings in disguise.","The distance between insanity and genius is measured only by success.","When you stop chasing the wrong things you give the right things a chance to catch you.","Don’t be afraid to give up the good to go for the great. ","Happiness is a butterfly, which when pursued, is always beyond your grasp, but which, if you will sit down quietly, may alight upon you.","If you can’t explain it simply, you don’t understand it well enough.", "Life is not about finding yourself. Life is about creating yourself. ", "Innovation distinguishes between a leader and a follower.","There are two types of people who will tell you that you cannot make a difference in this world: those who are afraid to try and those who are afraid you will succeed.","Success is walking from failure to failure with no loss of enthusiasm." ,"If you don’t value your time, neither will others. Stop giving away your time and talents- start charging for it.","What seems to us as bitter trials are often blessings in disguise."];
  


			$(document).ready(function() {
  var randomQuote = quotes[0]
$('blockquote.quotes').html(randomQuote);

				$('#quote').on('click', quote);

				$('#twitter').on('click', twitter);

				var temp;

				function quote() {
					var randomNumber = Math.floor(Math.random() * quotes.length);
					randomQuote = quotes[randomNumber];
						
					$('blockquote.quotes').html(randomQuote);
					temp = randomNumber;		
				}

				function twitter() {
					tweetThis = 'http://twitter.com/home/?status=' + randomQuote;
					// window.location.href = tweetThis;
					window.open(tweetThis, '_blank', 'width = 500, height = 400');
				}
})
			

