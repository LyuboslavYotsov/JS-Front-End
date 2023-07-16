function extract(content) {
  const text = document.getElementById(`${content}`).textContent;

  const words = text.match(/[\(]{1}[a-zA-Z\s]*[\)]{1}/gm);

  let result = [];
  
  words.forEach(word => {
    result.push(word.match(/[a-zA-Z\s]+/))
  });

  return(result.join("; "))
}
