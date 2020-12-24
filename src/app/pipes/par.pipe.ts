import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'par'
})

export class EsParPipe implements PipeTransform{

    transform(value: any){
        return "La fecha de hoy es: "+value;
    }

}