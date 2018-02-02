import { Component,Input,Output,EventEmitter,OnChanges,SimpleChanges,OnInit,DoCheck,OnDestroy } from '@angular/core';

@Component({
    selector: 'parques',
    templateUrl:  './parques.component.html'
})

export class ParquesComponent implements OnChanges,OnInit,DoCheck,OnDestroy{
    @Input()  nombre:string;
    @Input('metros_cuadrados') metros:number;
    public vegetacion:string;
    public abierto:boolean;

    @Output() pasameLosDatos = new EventEmitter(); 

    constructor(){
        this.nombre='Parque natural para caballos';
        this.metros=450;
        this.vegetacion='Alta';
        this.abierto=true;
    }

    ngOnChanges(changes: SimpleChanges){
        console.log(changes);
    }

    ngOnInit(){
        console.log('ahora oninit');
    }

    ngDoCheck(){
        console.log('ahora el docheck se ha lanzado');
    }
    ngOnDestroy(){
        console.log('ahora el componente se ha borrado');
    }

    emitirEvento(){
        this.pasameLosDatos.emit({
            'nombre' : this.nombre,
            'metros' : this.metros=450,
            'vegetacion' : this.vegetacion,
            'abierto' : this.abierto
        });
    }
}