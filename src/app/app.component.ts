import { Component } from '@angular/core';
import { GetDataService } from './services/get-data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testing';
  products
  constructor(private excelService: GetDataService) { }

  ngOnInit(): void {
    this.excelService.getData().subscribe((data) => {
      console.log(data);
      this.products = data
    })
  }
  exportAsExcel() {
    this.excelService.exportAsExcelFile(this.products, 'Exported_ExcelSheet')
  }

}
