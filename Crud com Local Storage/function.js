function mostrar(x)//função responsável pela transição de página, vai do menu para a opção escolhida
{
	switch(x)
	{
		case '1':
		document.getElementById('menu').className= 'n_mostrar';
		document.getElementById('salvar').className= 'mostrar';
		break;
		case '2':
		document.getElementById('menu').className= 'n_mostrar';
		document.getElementById('achar').className= 'mostrar';
		break;
		case '3':
		document.getElementById('menu').className= 'n_mostrar';
		geral();
		document.getElementById('geral').className= 'mostrar';
		break;
		case '4':
		document.getElementById('menu').className= 'n_mostrar';
		document.getElementById('atualizar').className= 'mostrar';
		break;
		case '5':
		document.getElementById('menu').className= 'n_mostrar';
		document.getElementById('remover').className= 'mostrar';		
		break;
	}
}
function voltar(y)//função responsável pela transição dá pagina atual para o menu
{
	switch(y)
	{
		case '1':
		document.getElementById('salvar').className= 'n_mostrar';
		document.getElementById('menu').className= 'mostrar';
		break;
		case '2':
		document.getElementById('achar').className= 'n_mostrar';
		document.getElementById('b2').className= 'n_mostrar';
		document.getElementById('menu').className= 'mostrar';
		limpar_inputs();
		break;
		case '3':		
		document.getElementById('geral').className= 'n_mostrar';
		document.getElementById('menu').className= 'mostrar';
		limpar_inputs();
		break;
		case '4':
		document.getElementById('at2').className= 'n_mostrar';
		document.getElementById('atualizar').className= 'n_mostrar';
		document.getElementById('menu').className= 'mostrar';
		limpar_inputs();
		break;
		case '5':
		document.getElementById('re2').className= 'n_mostrar';
		document.getElementById('remover').className= 'n_mostrar';
		document.getElementById('menu').className= 'mostrar';
		limpar_inputs();
		break;
	}
}
function limpar_inputs()//uma função para limpar as inpus
{
	document.getElementById('save_form').reset();//como estou usando uma tag form no html, eu utilizei o reset.
	document.getElementById('busca').reset();//Assim quando essa função for chamada ela vai deixar as inputs do jeito que estavam quando abriu o formulário.
	document.getElementById('att_form').reset();
	document.getElementById('re_form').reset();
}