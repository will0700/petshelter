import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {
  pet = null
  errors = []
  disableLike = false
  
  constructor(
    private _httpService: HttpService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this._route.params
    .subscribe((params: Params) => {
      this._httpService.getPet(params.id)
      .subscribe((data: any)  => {
        if(data.hasOwnProperty('errors')){
          this.errors = data.errors
        } else {
          this.pet = data.pet
        }
      })
    })
  }
  
  handleDelete(id){
    this._httpService.deletePet(id)
    .subscribe((data: any) => {
      this._router.navigate(['/pets'])
    })
  }

  handleLike(id){
    this.disableLike = true;
    this.pet.likes += 1;
    this._httpService.updatePet(id, this.pet)
    .subscribe((data: any) => {
      console.log(data)
    })
  }
}
