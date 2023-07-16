function attachGradientEvents() {
  const gradientBox = document.getElementById("gradient-box");

  gradientBox.addEventListener("mousemove", (e) => {
    
    let percentage = e.offsetX / e.target.clientWidth;
    percentage = Math.trunc(percentage * 100);
    document.getElementById("result").textContent = percentage + "%";
  });
}
