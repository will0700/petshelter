import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private _http: HttpClient
  ) { }

  createPet(pet){
    return this._http.post('/api/pets', pet)
  }

  getPets(){
    return this._http.get('/api/pets')
  }

  getPet(id){
    return this._http.get('/api/pets/' + id)
  }

  updatePet(id, pet){
    return this._http.put('/api/pets/' + id, pet)
  }

  deletePet(id){
    return this._http.delete('/api/pets/' + id)
  }
}
