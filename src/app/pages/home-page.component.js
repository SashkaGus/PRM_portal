import { WFMComponent, router, _ } from 'framework'

class HomePageComponent extends WFMComponent {
  constructor(config) {
    super(config)

    this.data = {
      title: 'Выгрузки из базы',
      bzTitle: 'Изменения в базе',
      delTitle: 'Статусы БЗ'
    }
  }

  events() {
    return {
      'click .btn_upload': 'goToUpload',
      'click .btn_tabs': 'goToTabs',
      'click .btn_BZ': 'goToBZStat'
    }
  }
  
goToUpload(){
    event.preventDefault()
    router.navigate('upload')
}


goToTabs() {
    event.preventDefault()
    router.navigate('tabs')
  }

goToBZStat(){
    event.preventDefault()
    router.navigate('**')
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
        <p>Переход на страницу со скриптами для выгрузок из базы</p>
      </div>
      <div class="card-action">
        <a class="waves-effect waves-light btn_upload"><i class="material-icons left">book</i>Перейти</a>
      </div>
    </div>
  </div>

<div class="col s6 m3" style="margin-top: 40px">
  <div class="card blue-grey darken-1">
    <div class="card-content white-text">
      <span class="card-title">{{ bzTitle }}</span>
      <p>Переход на страницу со скриптами для внесения изменений в базу</p>
    </div>
    <div class="card-action">
    <a class="waves-effect waves-light btn_tabs"><i class="material-icons left">book</i>Перейти</a>
  </div>
  </div>
</div>

<div class="col s9 m3" style="margin-top: 40px">
  <div class="card blue-grey darken-1">
    <div class="card-content white-text">
      <span class="card-title">{{ delTitle }}</span>
      <p>Переход на страницу со статусами БЗ</p>
    </div>
    <div class="card-action">
    <a class="waves-effect waves-light btn_BZ"><i class="material-icons left">book</i>Перейти</a>
  </div>
  </div>
</div>
  `,
  styles: `
    .home__block { margin-top: 40px; }
  `
})