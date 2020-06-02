import { Component} from '@angular/core';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page {
    public nomUtilisateur: string;
    public prenomUtilisateur: string;
    public ageUtilisateur: string;
    public myAngularxQrCode: string = null;


  constructor() {}

  createQRCode() {
    this.myAngularxQrCode = this.nomUtilisateur + this.prenomUtilisateur + this.ageUtilisateur;
    this.nomUtilisateur = "";
    this.prenomUtilisateur = "";
    this.ageUtilisateur = "";
  }

}
