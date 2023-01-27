import { WFMComponent, $ } from 'framework'

class TabsPageComponent extends WFMComponent {
  constructor(config) {
    super(config)
  }

  events() {
    return {
      'click .collapsible': 'onTabClick',
      'click .btn_delete': 'resDelete',
    }
  }
  
  onTabClick({target}) {
    let $target = $(target)
    if (!$target.hasClass('collapsible-header')) return

    this.el.findAll('.js-tab').forEach(e => e.removeClass('active'))
    $target.parent().addClass('active')
  }

  // dlrRemark() {
  //   // http.get('/prm_admin_portal/rest/database/getAll').then(data => console.log(data))
  //   http.get(`/prm_admin_portal/rest/database/getOne?id=${client_id.value}`).then(data => console.log(data))
  // }


  
  // resDelete() {
  //   // const body = {client: client_id.value,
  //   //               dealer: dealer_id.value}
  //   http.get(`/prm_admin_portal/rest/database/save?name=${dealer_id.value}&surname=${schema_id.value}`).then(data => console.log(data))
  //   // http.post('https://jsonplaceholder.typicode.com/users', body).then(data => console.log(body))
  // }
}

export const tabsPageComponent = new TabsPageComponent({
  selector: 'app-tabs-page',
  template: `
    <div class="row">
      <div class="col s6 offset-s3">
        <ul class="collapsible popout collapsible-accordion">
          <li class="js-tab">
            <div class="collapsible-header"><i class="material-icons">bookmark</i>Смена маркера дилера по регистрации</div>
            <div class="collapsible-body">
              <input placeholder="ID клиента" id="client_id" type="text" class="validate">
              <input placeholder="ID дилера" id="dealer_id" type="text" class="validate">
              <div class="card-action">
              <a class="waves-effect waves-light btn_remark"><i class="material-icons left">book</i>Выполнить</a>
              </div>
            </div>
 
          </li>
          <li class="js-tab">
            <div class="collapsible-header"><i class="material-icons">bookmark</i>Удаление расчётов по дилеру</div>
            <div class="collapsible-body"> 
              <input placeholder="ID дилера" id="dealer_id" type="text" class="validate">
              <input placeholder="ID схемы" id="schema_id" type="text" class="validate">
              <input placeholder="Период (YYYYMM-YYYYMM)" id="mnth_id" type="text" class="validate">
                <div class="card-action">
                  <a class="waves-effect waves-light btn_delete"><i class="material-icons left">archive</i>Выполнить</a>
                </div>
            </div>
          </li>
          <li class="active js-tab">
            <div class="collapsible-header"><i class="material-icons">bookmark</i>Third</div>
            <div class="collapsible-body"><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></div>
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