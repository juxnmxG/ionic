import { Component } from '@angular/core';
import {RestService} from '../service/rest.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  usuarios

  constructor(public service: RestService) { }

  ionViewDidLoad(){
    this.service.obtenerDatos()
    .subscribe(
      (data) => {
        this.usuarios = data;
      }
    )
  }

}
