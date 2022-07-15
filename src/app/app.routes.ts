import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";
import { TechnologyComponent } from "./components/technology/technology.component";
import { DisciplinaComponent} from "./components/disciplina/disciplina.component";
import { AreaComponent } from "./components/area/area.component";

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent},    
    { path: 'area', component:AreaComponent},
    { path: 'technology', component: TechnologyComponent},
    { path: 'disciplina', component: DisciplinaComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'home'}
]

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
