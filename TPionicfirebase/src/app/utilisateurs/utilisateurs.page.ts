import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Component({
  selector: 'app-utilisateurs',
  templateUrl: './utilisateurs.page.html',
  styleUrls: ['./utilisateurs.page.scss'],
})
export class UtilisateursPage implements OnInit {

  public userListe: any;

  constructor(private afd: AngularFireDatabase) {
    this.afd.list("/User").valueChanges().subscribe(
      (result) => {
        this.userListe = result;
      }
    )
  }

  ngOnInit() {
  }

}
