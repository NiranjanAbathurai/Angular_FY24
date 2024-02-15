import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'testPipe'
})
export class TestPipePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    console.log("value" + value);
    if(value%10 == 0){
      return "Divisible by 10"
    }else if (value%2 == 0){
      return "Divisble by 2"
    } else if(value % 5 == 0){
      return "Divisble by 5"
    } else
      return "Not divisible by 2,5,10";
  }

}
