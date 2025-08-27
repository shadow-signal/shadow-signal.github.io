async function setWeatherBackground() {
  const lat = 39.0639; // Grand Junction, CO
  const lon = -108.5506;
  const res = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`
  );
  const data = await res.json();
  const code = data.current_weather.weathercode;

  let cls = 'weather-cloudy';
  if (code === 0) cls = 'weather-clear';
  else if ([1, 2, 3].includes(code)) cls = 'weather-clear'; // mainly clear–partly cloudy
  else if ([45, 48].includes(code)) cls = 'weather-cloudy'; // fog
  else if ([51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82].includes(code)) cls = 'weather-rain';
  else if ([71, 73, 75, 77, 85, 86].includes(code)) cls = 'weather-snow';

  document.querySelector('.weather-surface').classList.add(cls);
}

document.addEventListener('DOMContentLoaded', setWeatherBackground);
