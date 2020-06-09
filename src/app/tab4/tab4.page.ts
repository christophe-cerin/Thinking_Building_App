import { Component, NgZone } from '@angular/core';
import { BLE } from '@ionic-native/ble/ngx';

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
    devices:any[] = [];



constructor(private ble:BLE,private ngZone: NgZone)  {}

  createQRCode() {
    this.myAngularxQrCode = this.nomUtilisateur + this.prenomUtilisateur + this.ageUtilisateur;
    this.nomUtilisateur = "";
    this.prenomUtilisateur = "";
    this.ageUtilisateur = "";
  }
 Scan(){
    this.devices = [];
    this.ble.scan([],15).subscribe(
      device => this.onDeviceDiscovered(device)
    );
  }
  onDeviceDiscovered(device){
    console.log('Discovered' + JSON.stringify(device,null,2));
    this.ngZone.run(()=>{
      this.devices.push(device)
      console.log(device)
    })
  }

}
