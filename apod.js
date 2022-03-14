const img = document.querySelector(".picture");
const title = document.querySelector(".title");
const explanation = document.querySelector(".explanation");
const capturedate = document.querySelector(".capturedate");
const copyright = document.querySelector(".copyright");

let date, start = Date.parse('2021-01-01'),
  end = new Date();
end.setDate(end.getDate() - 1);
const getDate = () => {
  date = new Date(Math.floor(Math.random() * (end - start + 1) + start)).toISOString().split('T')[0];
  return date
};

fetch(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&start_date=${getDate()}&end_date=${date}`)
  .then(response => response.json())
  .then(data => {
    img.src = data[0].url
    title.innerText = data[0].title
		explanation.innerText = data[0].explanation
    capturedate.innerText = data[0].date
    copyright.innerText = "Image Copyright by @ " + data[0].copyright
  })

function nextimg(){
  window.location.reload();
}