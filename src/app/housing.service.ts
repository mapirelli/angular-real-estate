import { Injectable } from "@angular/core";
import { HousingLocation } from "./housing-location";

@Injectable({
  providedIn: "root",
})
export class HousingService {
  url = "https://mapirelli-nuxt-api-locations.netlify.app/api/locations";
  constructor() {}

  async getAllHousingLocations(): Promise<HousingLocation[]> {
    const data = await fetch(this.url);
    return (await data.json()) ?? [];
  }
  async getHousingLocationById(
    id: Number
  ): Promise<HousingLocation | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return (await data.json()) ?? {};
  }
}
