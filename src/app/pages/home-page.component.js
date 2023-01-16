import { WFMComponent, router, _ } from 'framework'
import { http } from '../../framework/tools/http'
class HomePageComponent extends WFMComponent {
  constructor(config) {
    super(config)

    this.data = {
      title: 'Проставить дилера по регистрации',
      bzTitle: 'Статусы БЗ'
    }
  }

  events() {
    return {
      'click .waves-effect': 'goToTabs'
    }
  }
  
  goToTabs() {
    const body = {title: 'Проставить дилера по регистрации',
    bzTitle: 'Статусы БЗ'}
    // event.preventDefault()
    // router.navigate('tabs')
    //http.get('https://jsonplaceholder.typicode.com/todos/1')
    http.post('https://jsonplaceholder.typicode.com/todos/1').then(data => console.log(data))
  }
}

export const homePageComponent = new HomePageComponent({
  selector: 'app-home-page',
  template: `
  <div class="row">
  <div class="col s3 m3" style="margin-top: 40px">
    <div class="card blue-grey darken-1">
      <div class="card-content white-text">
        <span class="card-title">{{ title }}</span>
        <input placeholder="ID клиента" id="client_id" type="text" class="validate">
        <input placeholder="ID дилера" id="dealer_id" type="text" class="validate">
      </div>
      <div class="card-action">
        <a class="waves-effect waves-light btn"><i class="material-icons left">book</i>Выполнить</a>
      </div>
    </div>
  </div>

<div class="col s6 m3" style="margin-top: 40px">
  <div class="card blue-grey darken-1">
    <div class="card-content white-text">
      <span class="card-title">{{ bzTitle }}</span>
      <p>Ссылка на страницу со статусами БЗ</p>
    </div>
    <div class="card-action">
      <a href="#not_exist" class="js-link">Перейти</a>
    </div>
  </div>
</div>
  `,
  styles: `
    .home__block { margin-top: 40px; }
  `
})