import { WFMComponent, $ } from 'framework'
import { http } from '../../framework/tools/http'

class TabsPageComponent extends WFMComponent {
  constructor(config) {
    super(config)
  }

  events() {
    return {
      'click .collapsible': 'onTabClick',
      'click .btn_delete': 'resDelete',
      'click .btn_remark': 'dlrRemark'
    }
  }
  
  onTabClick({target}) {
    let $target = $(target)
    if (!$target.hasClass('collapsible-header')) return

    this.el.findAll('.js-tab').forEach(e => e.removeClass('active'))
    $target.parent().addClass('active')
  }

  dlrRemark() {
    // http.get('https://jsonplaceholder.typicode.com/users').then(data => console.log(data))
    // http.get('/prm_admin_portal/rest/database/getAll').then(data => console.log(data))
    http.get(`/prm_admin_portal/rest/database/getOne?id=${client_id.value}`).then(data => console.log(data))
  }


  
  resDelete() {
    // const body = {client: client_id.value,
    //               dealer: dealer_id.value}
    http.get(`/prm_admin_portal/rest/database/save?name=${dealer_id.value}&surname=${schema_id.value}`).then(data => console.log(data))
    // http.get('https://jsonplaceholder.typicode.com/users').then(data => console.log(data))
  }
}

export const tabsPageComponent = new TabsPageComponent({
  selector: 'app-tabs-page',
  template: `
    <div class="row">
      <div class="col s6 offset-s3">
        <ul class="collapsible popout collapsible-accordion">
          <li class="js-tab">
            <div class="collapsible-header">
            <i class="material-icons">bookmark</i>
            <i class="material-icons right">info_outline</i>
            Смена маркера дилера по регистрации</div>
            <div class="collapsible-body">
            <p>Для изменения маркера введите ID дилера в PRM (bis_delr_id) и список MSISDN через запятую 
              в формате: 123456, 123456, ...
               </p>
              <input placeholder="ID клиента" id="client_id" type="text" class="validate">
              <input placeholder="ID дилера" id="dealer_id" type="text" class="validate">
              <div class="card-action">
              <a class="waves-effect waves-light btn_remark">
                <i class="material-icons left">book</i>
              Выполнить</a>
              </div>
            </div>
 
          </li>
          <li class="js-tab">
            <div class="collapsible-header">
            <i class="material-icons">bookmark</i>
            <i class="material-icons right">info_outline</i>
            Удаление расчётов по дилеру</div>
            <div class="collapsible-body"> 
            <p>Для удаления расчётов введите ID дилера в PRM (bis_delr_id),
               период, за который необходимо удалить расчёты и филиал (MO, KV, NW ...). Поле ID схемы не обязательно к заполнению, если нужно удалить все расчёты по партнёру</p>
              <input placeholder="ID дилера" id="dealer_id" type="text" class="validate">
              <input placeholder="Период (YYYYMM-YYYYMM)" id="mnth_id" type="text" class="validate">
              <input placeholder="Код филиала" id="fll_code" type="text" class="validate">
              <input placeholder="ID схемы" id="schema_id" type="text" class="validate">
                <div class="card-action">
                  <a class="waves-effect waves-light btn_delete"><i class="material-icons left">archive</i>Выполнить</a>
                </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  `,
  styles: `
    .collapsible-accordion { margin-top: 30px; }
    .collapsible li.active .collapsible-body {
      display: block;
    }
  `
})