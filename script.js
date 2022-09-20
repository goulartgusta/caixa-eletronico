
		var saldo = 15100.5; //Variavel Global
		var nome = prompt("Bem vindo!! Por favor, digite seu nome: ");
		alert("Olá " + nome + " é um prazer ter você por aqui!");

		function inicio() {

			var escolha = parseInt(prompt("Olá " + nome + ". Selecione uma opção 1.) Saldo 2.) Extrato 3.) Depósito 4.) Saque 5.) Tranferência 6.) Sair"));

			switch (escolha) {
				case 1:
					ver_saldo();
					break;
				case 2:
					ver_extrato();
					break;
				case 3:
					fazer_deposito();
					break;
				case 4:
					fazer_saque();
					break;
				case 5:
					fazer_transferencia();
					break;
				case 6:
					sair();
					break;
				default:
					erro();
					break;
			}

		}

		function ver_saldo() {
			alert('Seu saldo atual é: ' + saldo);
			inicio();
		}

		function fazer_deposito() {
			var deposito = parseFloat(prompt('Qual o valor para depósito?'));

			if (isNaN(deposito) || deposito === '') {
				alert('Por favor, informe um número.');
				fazer_deposito();
			} else {
				saldo += deposito;
				ver_saldo();
			}
		}

		function fazer_saque() {
			ver_senha();
			var saque = parseFloat(prompt('Qual o valor para saque?'));

			if (isNaN(saque) || saque === '') {
				alert('Por favor, informe um número.');
				fazer_saque();
			} else if (saque > saldo || saque <= 0) {
				alert("Operação não autorizada.")
				fazer_saque();
			} else {
				saldo -= saque;
				ver_saldo();
			}
		}

		function ver_extrato() {
			ver_senha();
			alert("PIX recebido de R$100,00." + " Empréstimo na caixa R$15.000,00 juros de 30x." + " Bolo de cenoura R$20,00");
			inicio();
		}

		function fazer_transferencia() {
			ver_senha();
			var num_conta = parseInt(prompt("Por favor, digite o numero da conta que receberá a transferência: "));
			var transferencia = parseFloat(prompt("Por favor, digite o valor da transferencia: "));

			if (isNaN(num_conta) || num_conta === '') {
				alert('Por favor, informe um número para a conta.');
				fazer_transferencia();
			}
			if (isNaN(transferencia) || transferencia === '') {
				alert('Por favor, informe um número para a transferência.');
				fazer_transferencia();
			} else if (transferencia > saldo || transferencia <= 0) {
				alert('Operação não autorizada.');
				fazer_transferencia();
			} else {
				saldo -= transferencia;
				ver_saldo();
			}
		}

		function ver_senha() {
			var senha = parseInt(prompt("Digite sua senha: "));

			if (senha != 3589) {
				alert("Senha inválida...");
				ver_senha();
			}
		}

		function erro() {
			alert('Por favor, informe um número entre 1 e 6.');
			inicio();
		}

		function sair() {
			var confirma = confirm('Você deseja sair?');
			if (confirma) {
				alert(nome + ", foi um prazer ter você por aqui!");
				window.close();
			} else {
				inicio();
			}
		}

		inicio();