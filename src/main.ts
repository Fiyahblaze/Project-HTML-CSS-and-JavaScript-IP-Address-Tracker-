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

  <header class="header">
    <h1>IP Address Tracker</h1>
    <input
        type="text"
        id="ip-input"
        placeholder="Search for any IP address or domain"
      />