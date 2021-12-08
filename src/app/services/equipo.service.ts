import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Mouse{
  ID_Mouse: String;
  Marca: string;
  Modelo: string;
  Conectividad: string;
  Adquisicion:	string;
}

export interface Teclado{
  ID_Teclado: String;
  Marca: string;
  Modelo: string;
  Conectividad: string;
  Interfaz:	string;
  Adquisicion:	string;
}

export interface Monitor{
  ID_Monitor: String;
  Marca: string;
  Modelo: string;
  Resolucion: string;
  Pulgadas:	string;
  Conectividad:	string;
  Adquisicion: string;
}

export interface Computadora{
  ID_Computadora: String;
  Marca: string;
  Modelo: string;
  serie: string;
  Procesador:	string;
  Memoria_RAM:	string;
  deepfreeze: string;
  HDD: string;
}

export interface Software{
  software_id: String;
  nombre: string;
}

export interface miembrosTS{
  personaId: string;
  Nombre: string;
  Apellido1: string;
  Apellido2: string;
  Telefono: string;
  ID_TechSuport: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})

export class MouseService {
  private url = 'http://localhost/creud_api/api/controles';

  constructor(private http: HttpClient) {}

  getAll(){
    return this.http.get<[Mouse]>(this.url);
  }

  get(ID_Mouse: string){
    return this.http.get<Mouse>(this.url + '/' + ID_Mouse);
  }

  create(equipo: Mouse){
    return this.http.post(this.url, equipo);
  }

  update(mouse: Mouse, ID_Mouse: string){
    return this.http.put(this.url + '/' + ID_Mouse, mouse)
  }

  remove(ID_Mouse: string){
    return this.http.delete(this.url + '/' + ID_Mouse);
  }

}

export class TecladoService {
  private url = 'http://localhost/creud_api/api/controles';

  constructor(private http: HttpClient) {}

  getAll(){
    return this.http.get<[Teclado]>(this.url);
  }

  get(ID_Teclado: string){
    return this.http.get<Teclado>(this.url + '/' + ID_Teclado);
  }

  create(teclado: Teclado){
    return this.http.post(this.url, teclado);
  }

  update(teclado: Teclado, ID_Teclado: string){
    return this.http.put(this.url + '/' + ID_Teclado, teclado)
  }

  remove(ID_Teclado: string){
    return this.http.delete(this.url + '/' + ID_Teclado);
  }

}

export class SoftwareService {
  private url = 'http://localhost/creud_api/api/controles';

  constructor(private http: HttpClient) {}

  getAll(){
    return this.http.get<[Software]>(this.url);
  }

  get(ID_Software: string){
    return this.http.get<Software>(this.url + '/' + ID_Software);
  }

  create(software: Software){
    return this.http.post(this.url, software);
  }

  update(software: Software, ID_Software: string){
    return this.http.put(this.url + '/' + ID_Software, software)
  }

  remove(ID_Software: string){
    return this.http.delete(this.url + '/' + ID_Software);
  }

}

export class MonitoresService {
  private url = 'http://localhost/creud_api/api/controles';

  constructor(private http: HttpClient) {}

  getAll(){
    return this.http.get<[Monitor]>(this.url);
  }

  get(ID_Monitor: string){
    return this.http.get<Monitor>(this.url + '/' + ID_Monitor);
  }

  create(monitor: Monitor){
    return this.http.post(this.url, monitor);
  }

  update(monitor: Monitor, ID_Monitor: string){
    return this.http.put(this.url + '/' + ID_Monitor,monitor)
  }

  remove(ID_Monitor: string){
    return this.http.delete(this.url + '/' + ID_Monitor);
  }

}

export class ComputadoraService {
  private url = 'http://localhost/creud_api/api/controles';

  constructor(private http: HttpClient) {}

  getAll(){
    return this.http.get<[Computadora]>(this.url);
  }

  get(ID_Computadora: string){
    return this.http.get<Computadora>(this.url + '/' + ID_Computadora);
  }

  create(computadora: Computadora){
    return this.http.post(this.url, computadora);
  }

  update(computadora: Computadora, ID_Computadora: string){
    return this.http.put(this.url + '/' + ID_Computadora, computadora)
  }

  remove(ID_Computadora: string){
    return this.http.delete(this.url + '/' + ID_Computadora);
  }

}