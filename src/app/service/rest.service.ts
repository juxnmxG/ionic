import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";


@Injectable()

export class RestService{

    constructor(public http: HttpClient){
        console.log("hola te habla el servicio");
    }

    obtenerDatos(){
        return this.http.get('http://localhost:8000/lista');
    }
}