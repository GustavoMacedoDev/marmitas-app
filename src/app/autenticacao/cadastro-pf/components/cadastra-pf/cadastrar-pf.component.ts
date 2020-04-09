import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CpfValidator, CnpjValidator } from 'src/app/shared/validators';
import { CadastroPf } from 'src/app/shared/models/cadastro-pf.model';
import { CadastrarPfService } from 'src/app/shared/services/cadastrar-pf.service';

@Component({
  selector: 'app-cadastra-pf',
  templateUrl: './cadastrar-pf.component.html',
  styleUrls: ['./cadastrar-pf.component.css']
})
export class CadastrarPfComponent implements OnInit {

  form: FormGroup;
  
  telPattern = /[0-9]{2}[0-9]{5}[0-9]{4}/;
  numberPattern = /^[0-9]*$/;

  constructor(
  	private fb: FormBuilder, 
  	private snackBar: MatSnackBar,
    private router: Router,
    private cadastrarPfService: CadastrarPfService
    ) { }

  ngOnInit() {
  	this.gerarForm();
  }

  gerarForm() {
  	this.form = this.fb.group({
  		nome: ['', [Validators.required, Validators.minLength(3)]],
      telefone: this.fb.control('', [Validators.required, Validators.pattern(this.telPattern)]),
      logradouro: this.fb.control('', [Validators.required, Validators.minLength(5)]),
      numero: this.fb.control('', [Validators.required, Validators.pattern(this.numberPattern)]),
      complemento: this.fb.control('', [Validators.required, Validators.minLength(0)]),
      bairro: this.fb.control('', [Validators.required, Validators.minLength(3)])
  	});
  }

  cadastrarPf() {
  	if (this.form.invalid) {
      return;
    }

    const cadastroPf: CadastroPf = this.form.value;
    this.cadastrarPfService.cadastrar(cadastroPf)
      .subscribe(
        data => {
          const msg: string = "Realize o login para acessar o sistema.";
          this.snackBar.open(msg, "Sucesso", { duration: 5000 });
          this.router.navigate(['/login']);
        },
        err => {
          let msg: string = "Tente novamente em instantes.";
          if (err.status == 400) {
            msg = err.error.errors.join(' ');
          }
          this.snackBar.open(msg, "Erro", { duration: 5000 });
        }
      );
  	return false;
  }


}