import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[error-msg]' //nombre con el que se identifica en el thml
})
export class ErrorMsgDirective implements OnInit, OnChanges{

  private _color: string ='red'
  private _mensaje : string = 'Este campo es requerido'
  
  htmlElement: ElementRef<HTMLElement>
  
  @Input() set color( valor: string){
        //this.htmlElement.nativeElement.style.color = valor;
        this._color= valor
        this.setColor();
  }                                     //al ponerlo asi es una propiedad que se puede colocar en el padre 
  
  @Input() set mensaje(valor: string){
    //this.htmlElement.nativeElement.innerText = valor
    this._mensaje = valor;
    this.setMensaje()
  }

  @Input() set valido(valor: boolean){
    if(valor){
      this.htmlElement.nativeElement.classList.add('hidden')
    } else{this.htmlElement.nativeElement.classList.add('remove')}
  }
  
  //@Input() mensaje: string = 'Debe ingresar este campo'

  constructor(private el: ElementRef<HTMLElement>) {
    
    this.htmlElement = el;
   }
  ngOnChanges(changes: SimpleChanges): void {
    
    // if(changes['mensaje']){
    //   const mensaje = changes['mensaje'].currentValue;
    // this.htmlElement.nativeElement.innerText = mensaje
    // }

    // if(changes['color']){
    //   const color = changes['color'].currentValue;
    //   this.htmlElement.nativeElement.style.color = color
    // }
    
    
  }
  ngOnInit(): void {
    this.setEstilo()
    this.setColor()
    this.setMensaje()
  }

  setEstilo():void{
    this.htmlElement.nativeElement.classList.add("form-text")
  }

  setColor(): void{
    this.htmlElement.nativeElement.style.color = this._color
    
  }

  setMensaje(): void{
    this.htmlElement.nativeElement.innerText = this._mensaje
  }

}
