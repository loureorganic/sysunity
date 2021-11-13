var dados = ""
var var_lista = document.getElementById("");
var btnsee = '<button type="button" class="visibility" data-bs-toggle="modal" data-bs-target="#MyModal"></button>';
var btnedit = '<button type="button" class="edit" data-bs-toggle="modal" data-bs-target="#MyModalEditar"></button>';
var btndelete = '<button type="button" class="delete" data-bs-toggle="modal" data-bs-target="#MyModalDeletar"></button>';

var modalsee = ` <div class="modal" id="MyModal">
<div class="modal-dialog modal-dialog-centered modal-lg">
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title">Visualizar Vendas</h5>
      <button type="button" class="delete" data-bs-dismiss="modal"></button>
    </div>
    <div class="modal-body">
      <form>
        <div id="div-table" class="user-email">
          <table id="table-vendas">
            <thead id="thead-vendas">
              <tr id="thead-tr-vendas">
                <th>Item</th>
                <th>Quantidade</th>
                <th>Valor</th>
              </tr>
            </thead>
            <tbody id="tbody-vendas" class="tbody-vendas">
              <tr>
                <td>
                  <input id="inputItem" type="text" placeholder="Coxinha de frango" disabled />
                </td>
                <td>
                  <input id="inputQtn" type="text" placeholder="20" disabled />
                </td>
                <td>
                  <input id="inputValor" type="text" placeholder="R$ 0,69" disabled />
                </td>
              </tr>
              <tr>
                <td>
                  <input id="inputItem" type="text" placeholder="Coxinha de frango" disabled />
                </td>
                <td>
                  <input id="inputQtn" type="text" placeholder="20" disabled />
                </td>
                <td>
                  <input id="inputValor" type="text" placeholder="R$ 0,69" disabled />
                </td>
              </tr>
              <tr>
                <td>
                  <input id="inputItem" type="text" placeholder="Coxinha de frango" disabled />
                </td>
                <td>
                  <input id="inputQtn" type="text" placeholder="20" disabled />
                </td>
                <td>
                  <input id="inputValor" type="text" placeholder="R$ 0,69" disabled />
                </td>
              </tr>
              <tr>
                <td>
                  <input id="inputItem" type="text" placeholder="Coxinha de frango" disabled />
                </td>
                <td>
                  <input id="inputQtn" type="text" placeholder="20" disabled />
                </td>
                <td>
                  <input id="inputValor" type="text" placeholder="R$ 0,69" disabled />
                </td>
              </tr>
              <tr>
                <td>
                  <input id="inputItem" type="text" placeholder="Coxinha de frango" disabled />
                </td>
                <td>
                  <input id="inputQtn" type="text" placeholder="20" disabled />
                </td>
                <td>
                  <input id="inputValor" type="text" placeholder="R$ 0,69" disabled />
                </td>
              </tr>
              <tr>
                <td>
                  <input id="inputItem" type="text" placeholder="Coxinha de frango" disabled />
                </td>
                <td>
                  <input id="inputQtn" type="text" placeholder="20" disabled />
                </td>
                <td>
                  <input id="inputValor" type="text" placeholder="R$ 0,69" disabled />
                </td>
              </tr>
              <tr>
                <td>
                  <input id="inputItem" type="text" placeholder="Coxinha de frango" disabled />
                </td>
                <td>
                  <input id="inputQtn" type="text" placeholder="20" disabled />
                </td>
                <td>
                  <input id="inputValor" type="text" placeholder="R$ 0,69" disabled />
                </td>
              </tr>
              <tr>
                <td>
                  <input id="inputItem" type="text" placeholder="Coxinha de frango" disabled />
                </td>
                <td>
                  <input id="inputQtn" type="text" placeholder="20" disabled />
                </td>
                <td>
                  <input id="inputValor" type="text" placeholder="R$ 0,69" disabled />
                </td>
              </tr>
              <tr>
                <td>
                  <input id="inputItem" type="text" placeholder="Coxinha de frango" disabled />
                </td>
                <td>
                  <input id="inputQtn" type="text" placeholder="20" disabled />
                </td>
                <td>
                  <input id="inputValor" type="text" placeholder="R$ 0,69" disabled />
                </td>
              </tr>
              <tr>
                <td>
                  <input id="inputItem" type="text" placeholder="Coxinha de frango" disabled />
                </td>
                <td>
                  <input id="inputQtn" type="text" placeholder="20" disabled />
                </td>
                <td>
                  <input id="inputValor" type="text" placeholder="R$ 0,69" disabled />
                </td>
              </tr>
              <tr>
                <td>
                  <input id="inputItem" type="text" placeholder="Coxinha de frango" disabled />
                </td>
                <td>
                  <input id="inputQtn" type="text" placeholder="20" disabled />
                </td>
                <td>
                  <input id="inputValor" type="text" placeholder="R$ 0,69" disabled />
                </td>
              </tr>
              <tr>
                <td>
                  <input id="inputItem" type="text" placeholder="Coxinha de frango" disabled />
                </td>
                <td>
                  <input id="inputQtn" type="text" placeholder="20" disabled />
                </td>
                <td>
                  <input id="inputValor" type="text" placeholder="R$ 0,69" disabled />
                </td>
              </tr>
              <tr>
                <td>
                  <input id="inputItem" type="text" placeholder="Coxinha de frango" disabled />
                </td>
                <td>
                  <input id="inputQtn" type="text" placeholder="20" disabled />
                </td>
                <td>
                  <input id="inputValor" type="text" placeholder="R$ 0,69" disabled />
                </td>
              </tr>
              <tr>
                <td>
                  <input id="inputItem" type="text" placeholder="Coxinha de frango" disabled />
                </td>
                <td>
                  <input id="inputQtn" type="text" placeholder="20" disabled />
                </td>
                <td>
                  <input id="inputValor" type="text" placeholder="R$ 0,69" disabled />
                </td>
              </tr>
              <tr>
                <td>
                  <input id="inputItem" type="text" placeholder="Coxinha de frango" disabled />
                </td>
                <td>
                  <input id="inputQtn" type="text" placeholder="20" disabled />
                </td>
                <td>
                  <input id="inputValor" type="text" placeholder="R$ 0,69" disabled />
                </td>
              </tr>
              <tr>
                <td>
                  <input id="inputItem" type="text" placeholder="Coxinha de frango" disabled />
                </td>
                <td>
                  <input id="inputQtn" type="text" placeholder="20" disabled />
                </td>
                <td>
                  <input id="inputValor" type="text" placeholder="R$ 0,69" disabled />
                </td>
              </tr>
              <tr>
                <td>
                  <input id="inputItem" type="text" placeholder="Coxinha de frango" disabled />
                </td>
                <td>
                  <input id="inputQtn" type="text" placeholder="20" disabled />
                </td>
                <td>
                  <input id="inputValor" type="text" placeholder="R$ 0,69" disabled />
                </td>
              </tr>
              <tr>
                <td>
                  <input id="inputItem" type="text" placeholder="Coxinha de frango" disabled />
                </td>
                <td>
                  <input id="inputQtn" type="text" placeholder="20" disabled />
                </td>
                <td>
                  <input id="inputValor" type="text" placeholder="R$ 0,69" disabled />
                </td>
              </tr>
              <tr>
                <td>
                  <input id="inputItem" type="text" placeholder="Coxinha de frango" disabled />
                </td>
                <td>
                  <input id="inputQtn" type="text" placeholder="20" disabled />
                </td>
                <td>
                  <input id="inputValor" type="text" placeholder="R$ 0,69" disabled />
                </td>
              </tr>
              <tr>
                <td>
                  <input id="inputItem" type="text" placeholder="Coxinha de frango" disabled />
                </td>
                <td>
                  <input id="inputQtn" type="text" placeholder="20" disabled />
                </td>
                <td>
                  <input id="inputValor" type="text" placeholder="R$ 0,69" disabled />
                </td>
              </tr>
              <tr>
                <td>
                  <input id="inputItem" type="text" placeholder="Coxinha de frango" disabled />
                </td>
                <td>
                  <input id="inputQtn" type="text" placeholder="20" disabled />
                </td>
                <td>
                  <input id="inputValor" type="text" placeholder="R$ 0,69" disabled />
                </td>
              </tr>
              <tr>
                <td>
                  <input id="inputItem" type="text" placeholder="Coxinha de frango" disabled />
                </td>
                <td>
                  <input id="inputQtn" type="text" placeholder="20" disabled />
                </td>
                <td>
                  <input id="inputValor" type="text" placeholder="R$ 0,69" disabled />
                </td>
              </tr>
              <tr>
                <td>
                  <input id="inputItem" type="text" placeholder="Coxinha de frango" disabled />
                </td>
                <td>
                  <input id="inputQtn" type="text" placeholder="20" disabled />
                </td>
                <td>
                  <input id="inputValor" type="text" placeholder="R$ 0,69" disabled />
                </td>
              </tr>
              <tr>
                <td>
                  <input id="inputItem" type="text" placeholder="Coxinha de frango" disabled />
                </td>
                <td>
                  <input id="inputQtn" type="text" placeholder="20" disabled />
                </td>
                <td>
                  <input id="inputValor" type="text" placeholder="R$ 0,69" disabled />
                </td>
              </tr>                              
            </tbody>
          </table>
        </div>
        <div>
          <br>
          <h4>Informações de Pagamento</h4>
        </div>                       
        <div class="user-email">
          <label for="">Forma de pagamento
            <input id="prazo" type="text" placeholder="" disabled />
          </label>
          <label for="">Data de pagamento
            <input id="totalProducao" type="text" placeholder="" disabled />
          </label>
          <label for="">Valor pago
            <input id="totalProducao" type="text" placeholder="" disabled />
          </label>
        </div>
        <div class="user-email">
          <label for="">Vendedor
            <input id="dataVenciemnto" type="text" placeholder="" disabled />
          </label>
          <label for="">Data da Venda
            <input id="dataProdução" type="text" placeholder="" disabled />
          </label>
          <label for="">Data de entrega
            <input id="dataVenciemnto" type="text" placeholder="" disabled />
          </label>
          <label for="">Total
            <input id="dataVenciemnto" type="text" placeholder="" disabled />
          </label>
        </div>
      </form>
    </div>
  </div>
</div>
</div>`;

var modaledit = `<div class="modal" id="MyModalEditar">
<div class="modal-dialog modal-dialog-centered modal-lg">
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title2">Editar Vendas</h5>
      <button type="button" class="delete" data-bs-dismiss="modal"></button>
    </div>
    <div class="modal-body">
      <form>
        <div id="div-table" class="user-email">
          <table id="table-vendas">
            <thead id="thead-vendas">
              <tr id="thead-tr-vendas">
                <th>Item</th>
                <th>Quantidade</th>
                <th>Valor</th>
              </tr>
            </thead>
            <tbody id="tbody-vendas" class="tbody-vendas">
              <tr>
                <td>
                  <input id="inputItem" type="text" placeholder="Coxinha de frango" />
                </td>
                <td>
                  <input id="inputQtn" type="text" placeholder="20" />
                </td>
                <td>
                  <input id="inputValor" type="text" placeholder="R$ 0,69" />
                </td>
              </tr>
              <tr>
                <td>
                  <input id="inputItem" type="text" placeholder="Coxinha de frango" />
                </td>
                <td>
                  <input id="inputQtn" type="text" placeholder="20" />
                </td>
                <td>
                  <input id="inputValor" type="text" placeholder="R$ 0,69" />
                </td>
              </tr>
              <tr>
                <td>
                  <input id="inputItem" type="text" placeholder="Coxinha de frango" />
                </td>
                <td>
                  <input id="inputQtn" type="text" placeholder="20" />
                </td>
                <td>
                  <input id="inputValor" type="text" placeholder="R$ 0,69" />
                </td>
              </tr>
              <tr>
                <td>
                  <input id="inputItem" type="text" placeholder="Coxinha de frango" />
                </td>
                <td>
                  <input id="inputQtn" type="text" placeholder="20" />
                </td>
                <td>
                  <input id="inputValor" type="text" placeholder="R$ 0,69" />
                </td>
              </tr>
              <tr>
                <td>
                  <input id="inputItem" type="text" placeholder="Coxinha de frango" />
                </td>
                <td>
                  <input id="inputQtn" type="text" placeholder="20" />
                </td>
                <td>
                  <input id="inputValor" type="text" placeholder="R$ 0,69" />
                </td>
              </tr>
              <tr>
                <td>
                  <input id="inputItem" type="text" placeholder="Coxinha de frango" />
                </td>
                <td>
                  <input id="inputQtn" type="text" placeholder="20" />
                </td>
                <td>
                  <input id="inputValor" type="text" placeholder="R$ 0,69" />
                </td>
              </tr>
              <tr>
                <td>
                  <input id="inputItem" type="text" placeholder="Coxinha de frango" />
                </td>
                <td>
                  <input id="inputQtn" type="text" placeholder="20" />
                </td>
                <td>
                  <input id="inputValor" type="text" placeholder="R$ 0,69" />
                </td>
              </tr>
              <tr>
                <td>
                  <input id="inputItem" type="text" placeholder="Coxinha de frango" />
                </td>
                <td>
                  <input id="inputQtn" type="text" placeholder="20" />
                </td>
                <td>
                  <input id="inputValor" type="text" placeholder="R$ 0,69" />
                </td>
              </tr>
              <tr>
                <td>
                  <input id="inputItem" type="text" placeholder="Coxinha de frango" />
                </td>
                <td>
                  <input id="inputQtn" type="text" placeholder="20" />
                </td>
                <td>
                  <input id="inputValor" type="text" placeholder="R$ 0,69" />
                </td>
              </tr>
              <tr>
                <td>
                  <input id="inputItem" type="text" placeholder="Coxinha de frango" />
                </td>
                <td>
                  <input id="inputQtn" type="text" placeholder="20" />
                </td>
                <td>
                  <input id="inputValor" type="text" placeholder="R$ 0,69" />
                </td>
              </tr>
              <tr>
                <td>
                  <input id="inputItem" type="text" placeholder="Coxinha de frango" />
                </td>
                <td>
                  <input id="inputQtn" type="text" placeholder="20" />
                </td>
                <td>
                  <input id="inputValor" type="text" placeholder="R$ 0,69" />
                </td>
              </tr>
              <tr>
                <td>
                  <input id="inputItem" type="text" placeholder="Coxinha de frango" />
                </td>
                <td>
                  <input id="inputQtn" type="text" placeholder="20" />
                </td>
                <td>
                  <input id="inputValor" type="text" placeholder="R$ 0,69" />
                </td>
              </tr>
              <tr>
                <td>
                  <input id="inputItem" type="text" placeholder="Coxinha de frango" />
                </td>
                <td>
                  <input id="inputQtn" type="text" placeholder="20" />
                </td>
                <td>
                  <input id="inputValor" type="text" placeholder="R$ 0,69" />
                </td>
              </tr>
              <tr>
                <td>
                  <input id="inputItem" type="text" placeholder="Coxinha de frango" />
                </td>
                <td>
                  <input id="inputQtn" type="text" placeholder="20" />
                </td>
                <td>
                  <input id="inputValor" type="text" placeholder="R$ 0,69" />
                </td>
              </tr>
              <tr>
                <td>
                  <input id="inputItem" type="text" placeholder="Coxinha de frango" />
                </td>
                <td>
                  <input id="inputQtn" type="text" placeholder="20" />
                </td>
                <td>
                  <input id="inputValor" type="text" placeholder="R$ 0,69" />
                </td>
              </tr>
              <tr>
                <td>
                  <input id="inputItem" type="text" placeholder="Coxinha de frango" />
                </td>
                <td>
                  <input id="inputQtn" type="text" placeholder="20" />
                </td>
                <td>
                  <input id="inputValor" type="text" placeholder="R$ 0,69" />
                </td>
              </tr>
              <tr>
                <td>
                  <input id="inputItem" type="text" placeholder="Coxinha de frango" />
                </td>
                <td>
                  <input id="inputQtn" type="text" placeholder="20" />
                </td>
                <td>
                  <input id="inputValor" type="text" placeholder="R$ 0,69" />
                </td>
              </tr>
              <tr>
                <td>
                  <input id="inputItem" type="text" placeholder="Coxinha de frango" />
                </td>
                <td>
                  <input id="inputQtn" type="text" placeholder="20" />
                </td>
                <td>
                  <input id="inputValor" type="text" placeholder="R$ 0,69" />
                </td>
              </tr>
              <tr>
                <td>
                  <input id="inputItem" type="text" placeholder="Coxinha de frango" />
                </td>
                <td>
                  <input id="inputQtn" type="text" placeholder="20" />
                </td>
                <td>
                  <input id="inputValor" type="text" placeholder="R$ 0,69" />
                </td>
              </tr>
              <tr>
                <td>
                  <input id="inputItem" type="text" placeholder="Coxinha de frango" />
                </td>
                <td>
                  <input id="inputQtn" type="text" placeholder="20" />
                </td>
                <td>
                  <input id="inputValor" type="text" placeholder="R$ 0,69" />
                </td>
              </tr>
              <tr>
                <td>
                  <input id="inputItem" type="text" placeholder="Coxinha de frango" />
                </td>
                <td>
                  <input id="inputQtn" type="text" placeholder="20" />
                </td>
                <td>
                  <input id="inputValor" type="text" placeholder="R$ 0,69" />
                </td>
              </tr>
              <tr>
                <td>
                  <input id="inputItem" type="text" placeholder="Coxinha de frango" />
                </td>
                <td>
                  <input id="inputQtn" type="text" placeholder="20" />
                </td>
                <td>
                  <input id="inputValor" type="text" placeholder="R$ 0,69" />
                </td>
              </tr>
              <tr>
                <td>
                  <input id="inputItem" type="text" placeholder="Coxinha de frango" />
                </td>
                <td>
                  <input id="inputQtn" type="text" placeholder="20" />
                </td>
                <td>
                  <input id="inputValor" type="text" placeholder="R$ 0,69" />
                </td>
              </tr>
              <tr>
                <td>
                  <input id="inputItem" type="text" placeholder="Coxinha de frango" />
                </td>
                <td>
                  <input id="inputQtn" type="text" placeholder="20" />
                </td>
                <td>
                  <input id="inputValor" type="text" placeholder="R$ 0,69" />
                </td>
              </tr>                              
            </tbody>
          </table>
        </div>
        <div>
          <br>
          <h4>Informações de Pagamento</h4>
        </div>                       
        <div class="user-email">
          <label for="">Forma de pagamento
            <input id="prazo" type="text" placeholder="" />
          </label>
          <label for="">Data de pagamento
            <input id="totalProducao" type="text" placeholder="" />
          </label>
          <label for="">Valor pago
            <input id="totalProducao" type="text" placeholder="" />
          </label>
        </div>
        <div class="user-email">
          <label for="">Vendedor
            <input id="dataVenciemnto" type="text" placeholder="" />
          </label>
          <label for="">Data da Venda
            <input id="dataProdução" type="text" placeholder="" />
          </label>
          <label for="">Data de entrega
            <input id="dataVenciemnto" type="text" placeholder="" />
          </label>
          <label for="">Total
            <input id="dataVenciemnto" type="text" placeholder="" />
          </label>
        </div>
        <div class="save">
          <div class="btn-group">
            <button class="btn btn-primary" id="btn_salvar" type="button">SALVAR</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>
</div>`;

var modaldelete = `<div class="modal" id="MyModalDeletar">
<div class="modal-dialog modal-dialog-centered">
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title3">Deletar Vendas</h5>
      <button type="button" class="delete" data-bs-dismiss="modal"></button>
    </div>
    <div class="modal-body">
      <form>
        <h3>Tem certeza que deseja deletar a venda?</h3>
        <div class="alternative">
          <button type="button" class="btn btn-primary">SIM</button>
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">NÃO</button>
        </div>
      </form>
    </div>
  </div>
</div>
</div>`;


export default class databasemanagementsale{

    managementsale(){
        all.forEach(
            function(curecord){
                var produto = curecord.val();
                var tr = document.createElement('tr');
                tr.classList.add('dot');
                dados =
                "<td>" + produto.name + "</td>" + 
                "<td>" + produto.value + "</td>" + "<td>" + btnsee + btnedit + btndelete + "</td>";

                tr.innerHTML = dados;
                var_lista.appendChild(tr);
            }
        )
    }
}