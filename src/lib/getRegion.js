import { State } from "country-state-city";

export function expandRegion(countryCode, regionCode) {
  return State.getStateByCodeAndCountry(regionCode, countryCode).name;

}