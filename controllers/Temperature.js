var tuc = require('temp-units-conv');

module.exports.convert = function convert (req, res, next) {
  var temperature = req.swagger.params.temperature.value;
  var unit = req.swagger.params.unit.value;

  var requestedTemperature = new tuc.Temperature(temperature, unit);

  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({
    conversions: [
      {
        temperature: requestedTemperature.toUnit('C').temp,
        unit: 'C'
      },
      {
        temperature: requestedTemperature.toUnit('F').temp,
        unit: 'F'
      },
      {
        temperature: requestedTemperature.toUnit('K').temp,
        unit: 'K'
      }
    ]
  }));
};
