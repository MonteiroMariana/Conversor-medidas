import { Component } from '@angular/core';

@Component({
  selector: 'app-medidas',
  templateUrl: './medidas.component.html',
  styleUrls: ['./medidas.component.css']
})
export class MedidasComponent {
  medida: string = "De";
  alvo: string = "Para";
  value: number = 0;
  resultado: number = 0;
  enviar()
  {
    let a = this.medida;
    let b = this.alvo;
    let valor = this.value;
    var r = 0;

    if(a == "cm")
    {
      if(b == "m")
      {
        r = valor / 100;
      }
      else
      {
        r = valor * 10;
      }
    }
    else
    {
      if(a == "m")
      {
        if(b == "cm")
        {
          r = valor * 100;
        }
        else
        {
          r = valor * 1000;
        }
      }
      else
      {
        if(a == "mm")
        {
          if(b == "m")
          {
            r = valor / 1000;
          }
          else
          {
            r = valor / 10;
          }
        }
      }
    }
    this.resultado = r;
  }
}
