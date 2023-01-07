import { Component, OnInit } from '@angular/core';
import {Burger} from '../../interfaces/Burger'
import { BurgersService } from 'src/app/services/burgers.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-burger-form',
  templateUrl: './burger-form.component.html',
  styleUrls: ['./burger-form.component.css']
})

class bool {
  constructor(public valor: boolean) {
    this.valor = valor;
  }
}

export class BurgerFormComponent implements OnInit{

  boolcito = new bool(false)


  burger: Burger = {
    nombre_hamburguesa: '',
    tipo_carne: '',
    carne: 0,
    lechuga: false,
    cebolla: false,
    aros_cebolla: false,
    tomate: false,
    tocino: false,
    huevo: false,
    jamon: false,
    jalapeno: false,
    pepinillo: false,
    queso_cheddar: false,
    champinones: false,
    nachos: false,
    salsa: '' //ketchup, mostaza, jack daniel, bluecheese, guacamole, buffalo, barbacoa, nada
  };

  

  edit: boolean = false;

  constructor(
    private burgerService: BurgersService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params; //id de la ruta actual
    if(params["id"])
    {
      this.burgerService.getBurger(params['id'])
      .subscribe(
        res=>
        {
          this.burger = res;
          this.edit = true;
        }
      )
    }
  }
  
  submitBurger() {
    console.log(this.burger)
    this.burgerService.createBurger(this.burger)
    .subscribe(
      res =>
      {
        console.log(res)
        this.router.navigate(['/'])
      }
    )
  }

  updateBurger() {
    if (this.burger.id) { 
      this.burgerService.updateBurger(this.burger.id, this.burger)
      .subscribe(
        res =>
        {
          console.log(res),
          this.router.navigate(['/'])
        }
      )
    }
  }
}
