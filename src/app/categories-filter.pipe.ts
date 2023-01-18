import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoriesFilter'
})
export class CategoriesFilterPipe implements PipeTransform {

  transform(value: any[], filterString: string, property:string): unknown {
    const result:any=[];
    
     return null;
  }

}
