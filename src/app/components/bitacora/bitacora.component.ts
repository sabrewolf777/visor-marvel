import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Bitacora } from 'src/app/models/bitacora';
import { ConsumeService } from 'src/app/services/consume.service';

@Component({
  selector: 'app-bitacora',
  templateUrl: './bitacora.component.html',
  styleUrls: ['./bitacora.component.css']
})
export class BitacoraComponent implements OnInit {
  prod: boolean=false;
  dataSource = new MatTableDataSource<Bitacora>();
  displayedColumns: string[] = ['idusuario','fecha','api'];
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  constructor(private consumeservice:ConsumeService,) { 

    this.getLstBitacoras();

  }


  ngOnInit(): void {
    this.paginator._intl.itemsPerPageLabel="Registros por pagina: ";
    this.paginator._intl.nextPageLabel="";
    this.paginator._intl.lastPageLabel="";
    this.paginator._intl.firstPageLabel="";
    this.paginator._intl.previousPageLabel="";
  }

  getLstBitacoras(){
    this.consumeservice.getBitacora().subscribe(response=>{
      console.log("response:["+response.lstBitacora+"]");
      try {
          if(response.mensaje.codigo == 200){
            this.dataSource = new MatTableDataSource(response.lstBitacora);
            this.dataSource.paginator = this.paginator;
            this.dataSource.data= this.dataSource.data;
            this.prod=true;
          }
      } catch (error) {
        console.log(error);
      }
    });
}


}
