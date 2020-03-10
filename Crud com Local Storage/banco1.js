var banco= [];
var cont=0;
class Bd_local// classe para salvar os dados no localStorage
{
	local(poo)
	{
		if(localStorage.length == 0)
		{
			banco.push(poo);
			localStorage.setItem("Agenda", JSON.stringify(banco));
			alert("Usuário Salvo com Sucesso");
		}
		else
		{
			var agenda= JSON.parse(localStorage.getItem("Agenda"));
			agenda.push(poo);//n esquecer de copiar o banco genreico;
			localStorage.setItem("Agenda", JSON.stringify(agenda));
			alert("Usuário Salvo com Sucesso");
		}	
	}
}
class Contato
{
	constructor()
	{
		this.nome;
		this.num_cell;
		this.data_nas;
		this.email;
		this.endereco;
		this.obs;
	}
	salvar_informacos(nome_salvar,nume_salvar,data_nas,email,endereco,obs)
	{
		this.nome=nome_salvar;
		this.num_cell=nume_salvar;
		this.data_nas= data_nas;
		this.email=email;
		this.endereco=endereco;
		this.obs=obs;
	}
	buscar(b)//método de busca
	{
		var busca= JSON.parse(localStorage.getItem("Agenda"));
		for(var i=0;i<busca.length;i++)
		{
			if(b==busca[i].nome || b==busca[i].num_cell)
			{
				return i;
			}
		}
		return -1
	}
	atualizar(nome,cell,date_nas,email,endereco,obs)//método para atualizar
	{
		var at= JSON.parse(localStorage.getItem("Agenda"));
		at[cont].nome= nome;
		at[cont].num_cell= cell;
		at[cont].data_nas= date_nas;
		at[cont].email= email;
		at[cont].endereco= endereco;
		at[cont].obs= obs;
		localStorage.setItem("Agenda",JSON.stringify(at));
		alert("Usuário Alterado com Sucesso");
	}
	remover()//método para remover
	{
		var re= JSON.parse(localStorage.getItem("Agenda"));
		re.splice(cont,1);
		alert('Usuário Removido com Sucesso');
		localStorage.setItem("Agenda",JSON.stringify(re));
	}
}
var global_class= new Contato();