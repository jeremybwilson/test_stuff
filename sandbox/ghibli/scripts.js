const app = document.getElementById('root');

const logo = document.createElement('img');
logo.src = 'logo.png';

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(logo);
app.appendChild(container);

var request = new XMLHttpRequest();
request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);
request.onload = function () {

  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {
    data.forEach(movie => {
      const card = document.createElement('div');
      card.setAttribute('class', 'card');

      const h1 = document.createElement('h1');
      h1.textContent = movie.title;

      const p = document.createElement('p');
      movie.description = movie.description.substring(0, 300);
      p.textContent = `${movie.description}...`;

      const span = document.createElement('span');
      movie.director = movie.director.substring(0, 50);
      movie.release_date = movie.release_date.substring(0, 50);
      // const brtag = `<br />`;
      span.innerHTML = `${"Directed by: " + movie.director}` + `<br />` + `${"Year: " + movie.release_date}`;
      // span.textContent = `${"Year: " + movie.release_date}`;

      container.appendChild(card);
      card.appendChild(h1);
      card.appendChild(p);
      p.appendChild(span);

    });
  } else {
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = `Gah, it's not working!`;
    app.appendChild(errorMessage);
  }
}

request.send();