import "./style.css";
import "leaflet/dist/leaflet.css";

const API_KEY = "at_8q7zetpdPKm2t2zyq2vZjfN7VTcNC";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <header class="header">
    <h1>IP Address Tracker</h1>

     <form id="search-form" class="search-form">
      <label for="ip-input" class="sr-only">
        Enter an IP address or domain
      </label>

    <input
        type="text"
        id="ip-input"
        placeholder="Search for any IP address or domain"
      />

       <button type="submit" aria-label="Search">
        <img src="/images/icon-arrow.svg" alt="" />
      </button>
    </form>
  </header>

  <section class="info-card">
    <div class="info-item">
      <h2>IP ADDRESS</h2>
      <p id="ip-address">--</p>
    </div>

    <div class="info-item">
      <h2>LOCATION</h2>
      <p id="location">--</p>
    </div>

    <div class="info-item">
      <h2>TIMEZONE</h2>
      <p id="timezone">--</p>
    </div>

    <div class="info-item">
      <h2>ISP</h2>
      <p id="isp">--</p>
    </div>
  </section>

  <main id="map"></main>
`;

const form = document.querySelector<HTMLFormElement>("#search-form")!;
const input = document.querySelector<HTMLInputElement>("#ip-input")!;

const ipAddress = document.querySelector<HTMLParagraphElement>("#ip-address")!;
const location = document.querySelector<HTMLParagraphElement>("#location")!;
const timezone = document.querySelector<HTMLParagraphElement>("#timezone")!;
const isp = document.querySelector<HTMLParagraphElement>("#isp")!;

async function getIpData(search?: string) {
  let url = `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}`;

  if (search) {
    url += `&ipAddress=${search}`;
  }
    try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Unable to get IP information");
    }
    const data = await response.json();

    ipAddress.textContent = data.ip;
    location.textContent = `${data.location.city}, ${data.location.region}`;
    timezone.textContent = `UTC ${data.location.timezone}`;
    isp.textContent = data.isp;

    console.log(data);
  } catch (error) {
    console.error(error);
    alert("Unable to find that IP address or domain.");
  }
}
