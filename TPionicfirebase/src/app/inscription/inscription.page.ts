import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.page.html',
  styleUrls: ['./inscription.page.scss'],
})
export class InscriptionPage implements OnInit {



  constructor( public afDB: AngularFireDatabase, private auth: AngularFireAuth) { }

  ngOnInit() {
  }



  add(donnee) {
    this.auth.createUserWithEmailAndPassword(donnee.value.email, donnee.value.password);
    console.log(donnee.value);
    
    this.afDB.list('User/').push({
      email: donnee.value.email,
      name: donnee.value.name,
      password: donnee.value.password,
      tel: donnee.value.tel,
      prenom: donnee.value.prenom


   });
  }

}
