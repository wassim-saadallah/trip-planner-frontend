import { Injectable } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';

export enum StationType {
  METRO = 2,
  BUS = 3
}

export interface Station {
  id: number,
  label: string,
  longitude: number,
  latitude: number,
  type: StationType
}

@Injectable({
  providedIn: 'root'
})
export class MapService {

  BASE_URL = "http://localhost:5000";

  constructor(private http: HttpClient) { }

  getAllStation() {

  }
}
