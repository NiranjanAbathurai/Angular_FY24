import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'testimpurePipe',
  pure: false
})
export class TestimpurePipePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    if(value.length>8 && value.length < 16){
      console.log("Impure loop 1");
      return "Password length passed"
    } else if(value.length == undefined){
      console.log("Impure loop 2");
      return "Password reset"
    } else{
      console.log("Impure loop 3");
      return "Password recheck"
    }
  }

}
