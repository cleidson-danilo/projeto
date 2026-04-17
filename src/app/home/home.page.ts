import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// Agrupamos todos os componentes do Ionic em um único import
import {
  IonHeader, IonToolbar, IonTitle, IonContent,
  IonAccordion, IonAccordionGroup, IonItem, IonLabel,
  IonButton, IonCard, IonCardHeader, IonCardTitle,
  IonCardContent, IonBadge, IonInput, IonIcon
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonAccordion,
    IonAccordionGroup,
    IonItem,
    IonLabel,
    IonButton,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonBadge,
    IonInput,
    IonIcon
  ],
})
export class HomePage {
  // Atributos
  idade: number = 20;
  lista: string[] = ['Mobile', 'Backend', 'Banco de Dados'];
  listaPaises: string[] = [];

  constructor() {}

  // Métodos
  exibirMensagem() {
    alert('Anotações carregadas com sucesso!');
  }

  adicionarPais(input: any) {
    const valor = input.value;

    if (valor && valor.length >= 3) {
      this.listaPaises.push(valor); // Adiciona o valor na lista
      input.value = ""; // Limpa o campo após adicionar
    } else {
      alert("Digite pelo menos 3 letras!");
    }
  }
}
