import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-first',
  templateUrl: './first.page.html',
  styleUrls: ['./first.page.scss'],
})
export class FirstPage implements OnInit {

  constructor(private nav:NavController) { }



  ngOnInit() {
  }

  goToLogin(){
    this.nav.navigateRoot('login');
  }

}
