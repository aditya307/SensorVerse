function fetchData() {
  fetch('https://jaadu-home.herokuapp.com/node/data')
    .then((response) => {
      if (!response.ok) {
        throw Error('ERROR');
      }
      return response.json();
    })
    .then((data) => {
      console.log(data.data);
      const html = data.data
        .map((info) => {
          return `
          <div class="info">
          <table style = " margin-left: auto; margin-right: auto; margin-top: 50px;">
          <tr>
          <th>Parameters</th>
          <th>Readings</th>
          </tr>
          <tr>
          <td>Humidity:</td>
          <td>${info.Humidity}</td>
          </tr>
          <tr>
          <td>Temprature:</td>
          <td>${info.Temprature} °C</td>
          </tr>
          <tr>
          <td>Fire:</td>
          <td>${info.Fire}</td>
          </tr>
          <tr>
          <td>Smoke:</td>
          <td>${info.Smoke}</td>
          </tr>
          <tr>
          <td>Sound:</td>
          <td>${info.Sound}</td>
          </tr>
          <tr>
          <td>Distance:</td>
          <td>${info.Inches} inch ${info.Cm} cm </td>
          </tr>
          <tr>
          <td>Updated on :</td>
          <td>${info.CreatedAt} </td>
          </tr>
          </table>
          </div>
          `;
        })
        .join('');
      console.log(html);
      document.querySelector('#app').insertAdjacentHTML('afterbegin', html);
    })
    .catch((error) => {
      console.log(error);
    });
}
// fetchData();
window.setInterval(function () {
  fetchData();
}, 3000);
