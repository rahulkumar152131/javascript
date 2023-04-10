var number =document.getElementById("num")
window.addEventListener("scroll", function() {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;
    const percent = Math.round(scrollTop / (scrollHeight - clientHeight) * 100);
    number.textContent = percent;
  });