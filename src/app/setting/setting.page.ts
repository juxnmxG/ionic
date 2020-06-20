import { Component, OnInit } from '@angular/core';
import { RestService } from "../service/rest.service";

@Component({
  selector: 'app-setting',
  templateUrl: './setting.page.html',
  styleUrls: ['./setting.page.scss'],
})

export class SettingPage  {

  usuarios

  constructor(private service: RestService) { }

  ionViewDidLoad(){
    this.service.obtenerDatos()
    .subscribe(
      (data) => {
        this.usuarios = data;
      },
      (error)=>{
        console.log("error");
      }
    )
  }

}
