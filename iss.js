const request = require('request');

const fetchMyIP = function(callback) {
  request(`https://geo.ipify.org/api/v1?apiKey=at_ccUKyGjVpfIXJREpH8XUm26eatJrZ`, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response ${body}`;
      callback(Error(msg), null);
      return;
    }
    const ip = JSON.parse(body).ip;
    callback(null, ip);
  });
};

module.exports = { fetchMyIP };