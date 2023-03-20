# [TrackIt](https://projeto11-trackit-ebon.vercel.app)

O **TrackIt** é um aplicativo web que tem como objetivo ajudar os usuários a criarem e manterem hábitos saudáveis em seu dia a dia. Com ele, é possível adicionar e acompanhar hábitos, visualizar progresso diário e semanal, além de receber lembretes e motivações para continuar na jornada de criar novos hábitos.

## Tecnologias utilizadas

O aplicativo foi desenvolvido utilizando as seguintes tecnologias:

- ReactJS  (`useState`, `useContext`, `useEffect`): bibliotecas nativas do React utilizadas para gerenciar o estado dos componentes, consumir e fornecer dados a partir do contexto e executar efeitos para aprimorar a experiencia do usuário.
- Axios (`get`, `post`): biblioteca utilizada para fazer requisições HTTP à API. Foram utilizados os métodos `get` e `post` para buscar e enviar dados, respectivamente, além de `delete` para permitir apagar hábitos.
- `react-circular-progressbar`: biblioteca utilizada para exibir as barras de progresso circular dos hábitos na tela Hoje. Com ela, é possível personalizar facilmente o estilo da barra e a porcentagem de progresso exibida.
- `react-loader-spinner` é uma biblioteca para exibir indicadores de carregamento animados em aplicativos React. Fornecer uma experiência mais amigável ao usuário enquanto esperam a exibição dos dados solicitados.
- `dayjs`: biblioteca utilizada para manipulação de datas. Foi utilizada para exibir o dia atual na tela Hoje.
- Node.js
- Express.js
- MongoDB

## Como usar

Para utilizar o Habit Tracker, basta acessar o [link do projeto](https://projeto11-trackit-ebon.vercel.app) e criar uma conta de usuário. Após a criação da conta, é possível fazer login e começar a adicionar hábitos.

### Adicionando um hábito

Na tela Hábitos do aplicativo, é possível adicionar um novo hábito clicando no botão "+". Em seguida, é necessário inserir o nome do hábito e selecionar os dias da semana em que ele será realizado. Ao salvar, o novo hábito será adicionado à lista e o progresso diário e semanal será atualizado.

### Visualizando o progresso

Na tela principal do aplicativo, é possível monitorar o seu desempenho diário e semanal em relação aos seus hábitos. A barra de progresso indica quais hábitos já foram realizados no dia e quais ainda precisam ser cumpridos.

### Deletando um hábito

Para deletar um hábito, basta clicar no botão de lixeira ao lado do nome do hábito e confirmar a exclusão. O hábito será removido da lista e o progresso diário e semanal será atualizado.

### Acompanhando a sequência

Na tela "Hoje" do aplicativo, é possível acompanhar a sequência de dias em que o hábito foi realizado. A sequência atual é mostrada em verde e, caso seja igual ao recorde do usuário, o recorde também será mostrado em verde.

## Conclusão

O Habit Tracker é uma ferramenta útil para quem busca criar e manter hábitos saudáveis. Com ele, é possível visualizar progresso, se motivar a continuar na jornada de criar novos hábitos. Espero que goste do aplicativo e que ele possa ajudá-lo(a) a alcançar seus objetivos.
