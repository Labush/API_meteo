const ville = document.querySelector(".ville");
const temp = document.querySelector(".temp");

const submit = document.getElementById('submit');
submit.addEventListener('click', () => {
    document.querySelector('.content').style.display = 'block';
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + document.querySelector(".inputvalue").value + "&appid=80c3777a74175c23214010ee98adbffb")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      var namevalue = data.name;
      var tempvalue = data["main"]["temp"];
      ville.innerHTML = namevalue;
      temp.innerHTML = (Math.floor(tempvalue - 273) + "°C");
    })
    .catch((err) => alert("Le nom de la ville n'est pas valide."));
});



