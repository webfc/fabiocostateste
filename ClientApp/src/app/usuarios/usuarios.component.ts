import { Component, OnInit, Pipe, PipeTransform  } from '@angular/core';
import { Usuarios } from '../models/usuarios'; 
import { UsuariosService } from '../services/usuarios.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  usuarios: Usuarios; 
  constructor(private _usuariosService: UsuariosService) { }

  ngOnInit() {

    
    this._usuariosService.getUsuario().subscribe(usuarioslista => {

      console.log(usuarioslista); 

      this.usuarios = usuarioslista.usuarios; 
    },    
      error => {

        console.log(error); 
        //    this.dialogRef.close('error');
      });
  }


}
