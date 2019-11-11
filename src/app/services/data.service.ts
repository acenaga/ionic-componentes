import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Componente } from '../interfaces/interfaces';
<<<<<<< HEAD
import { delay } from 'rxjs/operators';
=======
>>>>>>> c9453f82a85c3090501ccac26e8da74a44eff83f

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

getHeroes() {
  return this.http.get('/assets/data/superheroes.json')
  .pipe(
    delay(2000)
  );
}


}
