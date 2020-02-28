

      var compensacoes = new Vue({
        el: '#compensacoes',
        data: {
         
          compensacoes: [
            { numero: '1',
              text: 'identifique o problema de vôo pelo qual passou' },
            { numero: '2',
              text: 'Relate o seu caso através do nosso sistema de avaliação' },
            { numero: '3',
              text: 'Aguarde o contato do consultor da LiberFly.' },
            { numero: '4',
              text: 'Espere o resultado da mediação com a companhia aéra.' },
            { numero: '5',
              text: 'Receba sua compensação financeira' }
          ]
        }
      })

      var negociacoes = new Vue({
        el: '#negociacoes',
        data: {
         
          negociacoes: [
            { titulo: 'Negociação Expressa',
              text: 'Após a avaliação do seu caso, você pode ser compensado em até 48h com valores de até R$ 1.000,00. Esta é a melhor opção pra quem não quer perder tempo.' },
            { titulo: 'Negociação tradicional',
              text: 'A negociação é feita com a companhia aérea sem custo inicial. Com o aceite da proposta ou compensação, 30% do valor é descontado como taxa de sucesso.' }    
          ]
        }
      })

      var situacao_direito = new Vue({
        el: '#situacao_direito',
        data: {
          direitos: [
            { text: 'Direito Voo Cancelado' },
            { text: 'Direito Voo atrasado' },
            { text: 'Direito na bagagem' },
            { text: 'Direito overbooking'},
            { text: 'Direito no-show'}
          ]
        }
      })

      var nossa_empresa = new Vue({
        el: '#nossa_empresa',
        data: {
         
          institucionais: [
            { text: 'Blog' },
            { text: 'Avaliar meu caso' }
          ]
        }
      })

      var suporte = new Vue({
        el: '#suporte',
        data: {
         
          suportes: [
            { text: 'Perguntas Frequentes' }
          ]
        }
      })

      var social_media = new Vue({
        el: '#redes',
        data: {
         
          images: [
            { url:'./assets/icones/instagram.webp'},
            { url:'./assets/icones/linkedin.webp'},
            { url:'./assets/icones/facebook.webp'},
            { url:'./assets/icones/twitter.webp'},
            { url:'./assets/icones/youtube.webp'}
          ]
        }
      })

