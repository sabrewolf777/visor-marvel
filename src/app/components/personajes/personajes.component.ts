import { Component, OnInit, TemplateRef } from '@angular/core';
import { ConsumeService } from 'src/app/services/consume.service';
import { MatTableDataSource } from '@angular/material/table';
import { Personaje } from 'src/app/models/personaje';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {

  jsonResponse="";
  lstPersonajes:Personaje []=[];
  personajeDetalle!:Personaje;

  constructor(private consumeservice:ConsumeService,
              private modalService: NgbModal) {

              this.getLstPersonajes();
  }

  ngOnInit(): void {
  }


  getLstPersonajes(){
      this.consumeservice.getLstPersonajes().subscribe(response=>{
        console.log("response:["+response+"]");
        try{
          if(response.mensaje.codigo == 200){
            this.lstPersonajes=response.lstCharacterTO;
          }
        } catch (error) {
          console.log(error);
        }
      });
  }


  getDetalle(personaje:Personaje,templateRef:TemplateRef<any>){
    this.personajeDetalle=personaje;
    const dialog = this.modalService.open(templateRef,{
      size: 'lg', //'sm' | 'md' | 'lg' = 'md'
      windowClass: 'modal-lg',
      centered: true,
      backdrop:'static'
    });
  }


  closeModalService(){
    this.modalService.dismissAll();
  }



}
