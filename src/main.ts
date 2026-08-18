import "./style.css";

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
        →
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

  <main id="map">
    <p class="map-message">Map will appear here.</p>
  </main>
`;