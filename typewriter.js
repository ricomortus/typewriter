const typeWriter = (text) => {
  let delay = 0;
  for (const char of text) {
    setTimeout(() => {
      process.stdout.write(char);
    }, delay);
    delay += 50;
  }
  setTimeout(() => {
    console.log();
  }, delay);
};

typeWriter('Hello World');

