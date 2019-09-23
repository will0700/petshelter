import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  pet = null;
  errors = [];

  constructor(
    private _httpService: HttpService,
    private _router: Router,
    private _route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this._route.params
    .subscribe((params: Params) => {
      this._httpService.getPet(params.id)
      .subscribe((data: any)  => {
        this.pet = data.pet
      })
    })
  }

  handleCancel(){
    this._router.navigate(['/pets'])
  }

  handleSubmit(){
    this._httpService.updatePet(this.pet._id, this.pet
    )
    .subscribe((data: any) => {
      if(data.hasOwnProperty('errors')){
        this.errors = data.errors
      } else {
        this._router.navigate(['/pets'])
      }
    })
  }
}
