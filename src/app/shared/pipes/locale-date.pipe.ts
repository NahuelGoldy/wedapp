import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'myLocaleDatePipe'})
export class MyLocaleDatePipe implements PipeTransform {
    monthsArray: string[] = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
                             'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    transform(date: Date) {
        const day = date.getDate();
        const month = date.getMonth();
        const year = date.getFullYear();
        return (day + ' ' + this.monthsArray[month] + ' ' + year);
    }
}
