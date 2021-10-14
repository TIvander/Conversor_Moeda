import {Component, AfterViewInit, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
@Component({
  selector: 'app-listar-simbolos',
  templateUrl: './listar-simbolos.component.html',
  styleUrls: ['./listar-simbolos.component.css']
})
export class ListarSimbolosComponent implements AfterViewInit {

  displayedColumns: string[] = ['codigo', 'descricao'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

}

export interface PeriodicElement {
  codigo: string;
  descricao: string;
}



const ELEMENT_DATA: PeriodicElement[] = [
  {codigo: 'BRL', descricao: 'Real Brasileiro'},
  {codigo: 'USD', descricao: 'Dólar dos Estados Unidos'},
  {codigo: 'AFN', descricao: 'Afegane'},
  {codigo: 'MGA', descricao: 'Ariary'},
  {codigo: 'ETB', descricao: 'Birr etíope'},
  {codigo: 'VES', descricao: 'Bolivar Soberano Venezuelano'},
  {codigo: 'AUD', descricao: 'Dólar australiano'},
  {codigo: 'CHF', descricao: 'Franco suíço'},
  {codigo: 'JPY', descricao: 'Iene'},
  {codigo: 'GBP', descricao: 'Libra Esterlina'},
  {codigo: 'XAU', descricao: 'Libra Esterlina'},
  {codigo: 'BTC', descricao: 'Bit Coin'},
  {codigo: 'UGX', descricao: 'Xelim de Uganda'},
  {codigo: 'EUR', descricao: 'Euro'},
  {codigo: 'CVE', descricao: 'Escudo cabo-verdiano'},
  {codigo: 'XOF', descricao: 'Franco CFA BCEAO'},
  {codigo: 'CAD', descricao: 'Dólar canadense'},
  {codigo: 'BND', descricao: 'Dólar do Brunei'},
  {codigo: 'XCD', descricao: 'Dólar do Caribe Oriental'},
  {codigo: 'GIP', descricao: 'Libra de Gibraltar'},
  {codigo: 'EGP', descricao: 'Libra egípcia'},
  {codigo: 'FKP', descricao: 'Libra das Malvinas'},
  {codigo: 'SYP', descricao: 'Libra da Síria'},
  {codigo: 'TWD', descricao: 'Novo Dólar de Taiwan'},
  {codigo: 'ARS', descricao: 'Peso argentino'}
];


