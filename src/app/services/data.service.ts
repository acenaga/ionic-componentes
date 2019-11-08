import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Componente } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http: HttpClient ) { }


getUsers() {
  return this.http.get('http://jsonplaceholder.typicode.com/users');
}

getMenuOpts() {
  return this.http.get<Componente[]>('/assets/data/menu.json');
}

getAlbumnes() {
  return this.http.get<any>('http://jsonplaceholder.typicode.com/albums');
}


}
