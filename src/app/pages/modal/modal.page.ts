import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalInfoPage } from '../modal-info/modal-info.page';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  @Input() nombre;
  @Input() pais;

  constructor( private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  async abrirModal() {

    const modal = await this.modalCtrl.create({

      component: ModalInfoPage,
      componentProps: {
        nombre : 'Fernando',
        pais : 'Costa Rica'
      }

    });

    await modal.present();

    const { data } = await modal.onDidDismiss();

    console.log('Retorno del Modal', data);

  }

}
