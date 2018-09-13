import { Component, OnInit } from '@angular/core';
import { Usuarios } from '../models/usuarios'; 
import { NgForm } from '@angular/forms'; // <-- NgModel lives here
import { HttpClientModule } from '@angular/common/http';
import { UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {


cadastroerro: string;
cadastrosucesso: string;

  constructor(private _usuariosService: UsuariosService) { }

  ngOnInit() {
  }


  onSubmit(cadastroForm: NgForm) {


    console.log(cadastroForm.value);

    var usuario = {

      Nome: cadastroForm.value.nome,
      Email: cadastroForm.value.email,
      Senha: cadastroForm.value.senha,
      Datanascimento: cadastroForm.value.datanascimento,
      SexoId: cadastroForm.value.sexo 
    };
      
    console.log(usuario);
      
      
    this._usuariosService.addUsuario(usuario).subscribe(usuario => {
      // replace the hero in the heroes list with update from server
      console.log(usuario);

      //this.cadastroerro = usuario;       

      if (usuario != null) {

        this.cadastroerro = usuario.errormsg;       

      } else {

        this.cadastrosucesso = "Cadastro realizado com sucesso"; 
      
  } 

    },
      error => {
        //    this.dialogRef.close('error');
        console.log(error);
      });

  }
}
