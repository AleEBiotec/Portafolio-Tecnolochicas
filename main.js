let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString("I'm a data scientist passionate about web design and creative coding.")
  .pauseFor(200)
  .deleteChars(10)
  .start();
