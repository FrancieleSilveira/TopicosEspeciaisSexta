import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//componentes
import { CadastrarComponent } from './components/views/cadastrar/cadastrar.component';
import { ListarComponent } from './components/views/listar/listar.component';

const routes: Routes = [  // contante routes do tipo Routes que é um array
  {
    //Rota para listar os ciclos de pagamento
    path : '',  // quando '' vazio, quer dizer que vai para a raiz = localhost:4200
    component : ListarComponent  // o que será aberto no caminho passado em path
  },
  {
    //Rota para cadastrar os ciclos de pagamento
    path : 'ciclo/cadastrar',
    component : CadastrarComponent  // o que será aberto no caminha passado em path
  }
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
