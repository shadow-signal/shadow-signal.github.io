(function(){
  const main = document.querySelector('.weather-surface');
  if(!main) return;

  // ZIP 81505 (Grand Junction) approx coords
  const lat = 39.10, lon = -108.60;

  fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=weather_code`)
    .then(r => r.json())
    .then(d => {
      const code = d?.current?.weather_code;
      let cls = 'weather-cloudy';
      if (code === 0) cls = 'weather-clear';
      else if ([51,53,55,56,57,61,63,65,66,67,80,81,82].includes(code)) cls = 'weather-rain';
      else if ([71,73,75,77,85,86].includes(code)) cls = 'weather-snow';
      main.classList.add(cls);
    })
    .catch(()=> main.classList.add('weather-cloudy'));
})();
