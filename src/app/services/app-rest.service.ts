import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class AppRestService {

  constructor( private http: HttpClient) { 
    
  }

  //Metodo para obtener datos de personajes

  getDataPersonajes(){ 
    return this.http.get('https://rickandmortyapi.com/api/character/');      
  }


  //Metodo para obtener datos de capitulos
 
  getDataCapitulos(){
    return this.http.get('https://rickandmortyapi.com/api/episode/');
  }


  //Metodo para obtener listado de personajes de la url de capitulos

  getUrlListadoPersonajes( url:string){
    return this.http.get(url);       
  }

  //Metodo para filtrar personajes en el buscador

  getFilterCapitulos( termino:string ){
    return this.http.get(`https://rickandmortyapi.com/api/character/?name=${ termino }`);
  }

  //Metodo para filtrar capitulos en el buscador

  getFilterPersonajes( termino:string ){
    return this.http.get(`https://rickandmortyapi.com/api/episode/?name=${ termino }`);
  }
}


