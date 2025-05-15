import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  imports: [],
  templateUrl: './interpolation.component.html',
  styleUrl: './interpolation.component.css',
})
export class InterpolationComponent {
  titulo = 'Bem Vindo ao Angular';
  desc = 'Aprendendo Angular com Interpolação';
  texto = 'Texto de exemplo para interpolação';
  status = 'inativo';
  corStatus = 'red';
  corBotao = 'white';
  textoBotao = 'Ativar';
  tamanhoBTN = 200;
  larguraBTN = 200;

  alternarStatus() {
    if (this.status === 'ativo') {
      this.status = 'inativo';
      this.corStatus = 'red';
      this.corBotao = 'white';
      this.textoBotao = 'Ativar';
    } else {
      this.status = 'ativo';
      this.corStatus = 'green';
      this.corBotao = 'green';
      this.textoBotao = 'Desativar';
    }
  }

  aumentarTamanhoBTN() {
    this.tamanhoBTN += 30;
    console.log('Tamanho do botão aumentado para: ' + this.tamanhoBTN);
  }

  diminuirTamanhoBTN() {
    this.tamanhoBTN -= 30;
  }

  aumentarLargura() {
    this.larguraBTN += 30;
    console.log('Largura do botão aumentada para: ' + this.larguraBTN);
  }

  diminuirLargura() {
    this.larguraBTN -= 30;
    console.log('Largura do botão diminuída para: ' + this.larguraBTN);
  }
}
