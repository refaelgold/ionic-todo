import {Component} from '@angular/core';
import {Modal, NavController} from 'ionic-angular';
import {AddItemPage} from '../add-item/add-item';
import {ItemDetailPage} from '../item-detail/item-detail';

@Component({
  templateUrl: 'build/pages/list/list.html',
})

export class listPage {

  private items = [];

  constructor(private nav: NavController) {

  }

  addItem(){

    let addModal = Modal.create(AddItemPage);

    addModal.onDismiss((item) => {

      if(item){
        this.saveItem(item);
      }

    });

    this.nav.present(addModal);

  }

  saveItem(item){
    this.items.push(item);
  }

  viewItem(item){
    this.nav.push(ItemDetailPage, {
      item: item
    });
  }

}