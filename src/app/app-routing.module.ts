import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

enum TestEnum {
  testValue = 'hey'
}

const routes: Routes = [
  {
    path: '',
    children: []
  },
  {
    path: 'test',
    loadChildren: './test/test.module#TestModule',
    data: {
      [TestEnum.testValue]: 'random'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
