import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private auth: AngularFireAuth, private rout: Router) {}

  public checkDonnee(donnee: any){
    console.log(donnee.value);
    this.auth.signInWithEmailAndPassword(donnee.value.mail, donnee.value.pass).then(
      (result) => {
        this.rout.navigateByUrl("/profil")
      }
    );
  }

}
