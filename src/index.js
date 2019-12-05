import './styles/index.styl';
import VehiclesList from "./components/VehiclesList";
import FuelConsumption from "./components/FuelConsumption";
import UsagePurpose from "./components/UsagePurpose";
import CompletedJourneys from "./components/CompletedJourneys";

customElements.define("vehicles-list", VehiclesList);
customElements.define("fuel-consumption", FuelConsumption);
customElements.define("usage-purpose", UsagePurpose);
customElements.define("completed-journeys", CompletedJourneys);
