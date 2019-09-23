import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  newPet = {
    name: "",
    type: "",
    description: "",
    skills: [],
    likes: undefined
  }

  errors = []

  constructor(
    private _httpService: HttpService,
    private _router: Router
  ) { }

  ngOnInit() {
  }

  handleCancel(){
    this._router.navigate(['/pets'])
  }

  handleSubmit(){
    this._httpService.createPet(this.newPet)
    .subscribe((data: any) => {
      if(data.hasOwnProperty('errors')){
        this.errors = data.errors
      } else {
        this._router.navigate(['/pets'])
      }
    })
  }
}
