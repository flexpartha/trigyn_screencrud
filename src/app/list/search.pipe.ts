import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, name: string) {
    if(name === ''){
      return value;
    }
    return value.filter((client:any) =>
    client.clientname.toLowerCase().indexOf(name.toLowerCase()) !== -1
   );
  }

}
