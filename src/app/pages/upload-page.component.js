import { WFMComponent, $ } from 'framework'
import { http } from '../../framework/tools/http'

class UploadPageComponent extends WFMComponent {
  constructor(config) {
    super(config)
  }

  events() {
    return {
      'click .collapsible': 'onTabClick',
      'click .btn_upload_scenario_rpt': 'uploadScenRpt'
    }
  }

  uploadScenRpt() {
    const person = http.get('https://jsonplaceholder.typicode.com/users/1').then(data => {return data}) //xlsx(data, settings, callback)
    const dwnExcel = async () => {
      var xlsx = require('xlsx')
      const pers = await person
      const workBook = xlsx.utils.book_new()
      const workSheet = xlsx.utils.json_to_sheet([pers])
      xlsx.utils.book_append_sheet(workBook, workSheet)
      xlsx.writeFile(workBook, "convJSON.xlsx")
    }
    dwnExcel();
  }

  
  onTabClick({target}) {
    let $target = $(target)
    if (!$target.hasClass('collapsible-header')) return

    this.el.findAll('.js-tab').forEach(e => e.removeClass('active'))
    $target.parent().addClass('active')
  }
}

export const uploadPageComponent = new UploadPageComponent({
  selector: 'app-tabs-page',
  template: `
    <div class="row">
      <div class="col s6 offset-s3">
        <ul class="collapsible popout collapsible-accordion">
          <li class="js-tab">
            <div class="collapsible-header"><i class="material-icons">bookmark</i>
            <p data-tooltip="Невероятно полезная подсказка 1">
            <i class="material-icons right">info_outline</i>
            </p>
            Отчет по составу сценариев
             </div>
            <div class="collapsible-body">
              <input placeholder="Филиалы (MO, KV, NW ...)" id="fll_id" type="text" class="validate">
            <div class="card-action">
              <a class="waves-effect waves-light btn_upload_scenario_rpt"><i class="material-icons left">archive</i>Загрузить</a>
            </div>
            <div class="card-action">
              <a class="waves-effect waves-light btn_open_scenario_rpt"><i class="material-icons left">search</i>Открыть на странице</a>
            </div>
            </div>
 
          </li>
          <li class="js-tab">
            <div class="collapsible-header"><i class="material-icons">bookmark</i>
            <p data-tooltip="Невероятно полезная подсказка 2">
                <i class="material-icons right">info_outline</i>
            </p>
            Отчёт по выкладке документов на ДП
            </div>
            <div class="collapsible-body"> 
              <input placeholder="Дата выкладки (DD-MM-YYYY)" id="dwnld_date" type="text" class="validate">
              <input placeholder="Отчётный период (YYYYMM)" id="report_date" type="text" class="validate">
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
       } 
       [data-tooltip]:hover::after {
        opacity: 1;                                   /* Показываем подсказку */
        top: 2em;                                     /* Положение подсказки */
       }
  
  `
})