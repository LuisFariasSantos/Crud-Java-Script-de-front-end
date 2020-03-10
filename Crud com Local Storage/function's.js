/*OBS:
	Eu instanciei o cont como global no arquivo function.js, pois quando ele fosse executar na função buscar ele pegar o valor retornado do método busca
	,assim tornando esse valor global, eu utilizo esse valor para saber qual a posição que esse contato buscado pelo usuário está salvo.
	\Assim eu utilizo no Busca, Atualizar e Remover.
*/
function salvar(nome_salvar,nume_salvar,data_nas,email,endereco,obs)
{
	var poo= new Contato();
	poo.salvar_informacos(nome_salvar,nume_salvar,data_nas,email,endereco,obs);
	var save= new Bd_local();
	save.local(poo);
}
function buscar(b,z)//função buscar, eu utilizo ela para quando for buscar apenas um usuário e mostrar, para atualizar e para remover.
{
	cont= global_class.buscar(b);
	var busca= JSON.parse(localStorage.getItem("Agenda"));
	if(cont==-1)
	{
		alert('Contato não cadastrado');
	}
	else
	{			
		switch(z)
		{
			case'1'://opção busca
			document.getElementById('b2').className= 'mostrar';
			document.getElementById('b_nome').value= busca[cont].nome;
			document.getElementById('b_cell').value= busca[cont].num_cell;
			document.getElementById('b_data').value= busca[cont].data_nas;
			document.getElementById('b_e_mail').value= busca[cont].email;
			document.getElementById('b_endere').value= busca[cont].endereco;
			document.getElementById('b_obs').value= busca[cont].obs;
			break;
			case'2'://opção atualizar
			document.getElementById('at2').className= 'mostrar';
			document.getElementById('at_nome').value= busca[cont].nome;
			document.getElementById('at_cell').value= busca[cont].num_cell;
			document.getElementById('at_data').value= busca[cont].data_nas;
			document.getElementById('at_e_mail').value= busca[cont].email;
			document.getElementById('at_endere').value= busca[cont].endereco;
			document.getElementById('at_obs').value= busca[cont].obs;
			break;
			case'3'://opção remover
			document.getElementById('re2').className= 'mostrar';
			document.getElementById('re_nome').value= busca[cont].nome;
			document.getElementById('re_cell').value= busca[cont].num_cell;
			document.getElementById('re_data').value= busca[cont].data_nas;
			document.getElementById('re_e_mail').value= busca[cont].email;
			document.getElementById('re_endere').value= busca[cont].endereco;
			document.getElementById('re_obs').value= busca[cont].obs;
			break
		}		
	}
}
function atualizar(nome,cell,date_nas,email,endereco,obs)//função para Atualizar usuário;
{	
	var at= global_class.atualizar(nome,cell,date_nas,email,endereco,obs);
}
function remover()//função para remover usuário
{
	var remove= global_class.remover();
}
function geral()//função para mostrar todos os contatos salvos no localStorage 
{
	var ge= JSON.parse(localStorage.getItem("Agenda"));
	document.getElementById('geral1').innerHTML = " ";
	if(localStorage== undefined)//se caso o localStorage não estiver definido
	{
		document.getElementById('geral1').innerHTML+= '<table><tr><td><h3>Nenhum Contato Salvo</h3><p><button onclick=\'voltar(y="3")\' class="efeito">Voltar</button></tr></td></table>'
	}
	else// se não entrar no if acima, ele irá gerar todos os dados através do innerHTML.
	{
		for(var i=0;i<ge.length;i++)
		{
			document.getElementById('geral1').innerHTML+= '<table id="n1" class="mostrar"><tr><td>Nome: '+ge[i].nome+'</tr></td><tr><td>Numero: '+ge[i].num_cell+'</tr></td><tr><td>Data de Nascimento: '+ge[i].data_nas+'</tr></td><tr><td>E-Mail: '+ge[i].email+'</tr></td><tr><td>endereço: '+ge[i].endereco+'</tr></td><tr><td>observação: '+ge[i].obs+'</td></tr><br></table>'
		}
		document.getElementById('geral1').innerHTML+= '<table><tr><td><button onclick=\'voltar(y="3")\' class="efeito">Voltar</button></tr></td></table>'
	}
}