import { Component } from '@angular/core';


@Component({
    selector: 'app-footer',
    templateUrl:'./footer.component.html',
    styleUrls: ['./footer.components.css']
})
export class FooterComponent {

    private autor: any = {nombre: 'Leonardo', apellido:'Castrillon'}
}
