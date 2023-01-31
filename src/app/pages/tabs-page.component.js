import { WFMComponent, $ } from 'framework'
import { http } from '../../framework/tools/http'

class TabsPageComponent extends WFMComponent {
  constructor(config) {
    super(config)

    this.data = {
      remarkInf: "Для изменения маркера введите ID дилера в PRM (bis_delr_id) и список MSISDN через запятую в формате: 123456, 123456, ...",
      resDeleteInf: "Для удаления расчётов введите ID дилера в PRM (bis_delr_id), период, за который необходимо удалить расчёты и филиал (MO, KV, NW ...). Поле ID схемы не обязательно к заполнению, если нужно удалить все расчёты по партнёру"
    }
  }

  events() {
    return {
      'click .collapsible': 'onTabClick',
      'click .btn_delete': 'resDelete',
      'click .btn_remark': 'dlrRemark',
      'click .popup': 'myFunction'
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



//<i class="material-icons right" id="remInfo">info_outline</i>
export const tabsPageComponent = new TabsPageComponent({
  selector: 'app-tabs-page',
  template: `
  <div class="row">
  <div class="col s6 offset-s3">
    <ul class="collapsible popout collapsible-accordion">
      <li class="js-tab">
        <div class="collapsible-header">
        <i class="material-icons">bookmark</i>
        <p data-tooltip="{{ remarkInf }}">
        <i class="material-icons right" id="remInfo">info_outline</i> 
        </p>
                   
        Смена маркера дилера по регистрации</div>
        <div class="collapsible-body">
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
        <p data-tooltip="{{ resDeleteInf }}">
        <i class="material-icons right">info_outline</i>
        </p>
        Удаление расчётов по дилеру</div>
        <div class="collapsible-body"> 
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

    [data-tooltip] {
      position: relative;                           /* Относительное позиционирование */ 
     }
     [data-tooltip]::after {
      content: attr(data-tooltip);                  /* Выводим текст */
      position: absolute;                           /* Абсолютное позиционирование */
      width: 300px;                                 /* Ширина подсказки */
      left: 105%; top: -5px;                        /* Положение подсказки */
      background: #3989c9;                          /* Синий цвет фона */
      color: #fff;                                  /* Цвет текста */
      padding: 0.5em;                               /* Поля вокруг текста */
      box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);   /* Параметры тени */
      pointer-events: none;                         /* Подсказка */
      opacity: 0;                                   /* Подсказка невидима */
      transition: 1s;                               /* Время появления подсказки */
      border-radius: 6px;                           /* Скругление углов подсказки */
      font-size: 1.5 rem;
      font-weight: 400
     } 
     [data-tooltip]:hover::after {
      opacity: 1;                                   /* Показываем подсказку */
      top: 2em;                                     /* Положение подсказки */
     }

  `
})