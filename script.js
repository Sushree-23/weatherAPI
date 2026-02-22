async function getWeather() {
  const location = document.getElementById("locationInput").value;

  if (!location) {
    alert("Please enter a location");
    return;
  }

  const apiKey = "8e5b29e20f8044e38fc73317262202";
  const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=yes`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    document.getElementById("city").innerText =
      data.location.name + ", " + data.location.country;

    document.getElementById("temp").innerText =
      "Temperature: " + data.current.temp_c + "°C";

    document.getElementById("condition").innerText =
      "Condition: " + data.current.condition.text;

    document.getElementById("humidity").innerText =
      "Humidity: " + data.current.humidity + "%";

  } catch (error) {
    alert("Error fetching weather data");
  }
}
