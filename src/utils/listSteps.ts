import { textIntroduction } from "./text";

interface IListSteps {
  type: string;
  title?: string;
  titleCard: string;
  description: string;
  observation?: string;
}

export const listSteps: IListSteps[] = [
  {
    type: 'intro',
    title: 'Introdução',
    titleCard: 'Iniciando a Jornada',
    description: textIntroduction,
  },
  {
    type: 'question',
    titleCard: 'A importância dos sistemas para seu negócio.',
    description: 'Quanto você considera que seus sistemas são importantes para a geração de novos negócios e a operação da sua empresa?',
    observation: 'Sistemas críticos dependem de mão de obra e supervisão constante. As ameaças estão o tempo todo buscando por vulnerabilidades e se beneficiando delas queira você ou não. O que todo gestor deseja é o mínimo de interrupção de sua operação e que possa gerar prejuízos para a companhia.'
  },{
    type: 'question',
    titleCard: 'Parceiros internos que fazem a diferença.',
    description: 'O nível de conformidade e maturidade de seu sistema de informação é conhecido por você e a alta administração?',
    observation: 'Obter transparências nas ações e respaldo do corpo diretivo é importante quando falamos de segurança da informação. O risco que as informações estão expostas devem ser gerenciadas de forma estratégica e conhecidas por todas as partes interessadas. Dessa forma recursos e aprovações podem fluir com mais eficiência.'
  },{
    type: 'question',
    titleCard: 'Estar preparado é estar um passo à frente.',
    description: 'Se uma vulnerabilidade expôr dados corporativos, o quanto sua empresa está preparada para identificar e tratar a vulnerabilidade?',
    observation: 'Um fato importante, é que todas as vulnerabilidades se identificadas antecipadamente, geram um custo $ menor de tratamento. Mecanismos de identificação atualizados é extremamente importante para ser adotado no processo de identificação. Um programa de bug bounty proporciona essa visão ao gestor.'
  },{
    type: 'question',
    titleCard: 'Custos altos inviabilizam o negócio.',
    description: 'Está claro a você sobre todos os custos de tratar uma vulnerabilidade, considerando que seu sistema está em produção?',
    observation: 'Além dos custos financeiros de reparo ou impactos imagem da companhia, ambos podem ser altos, ainda mais quando uma vulnerabilidade é identificada após um incidente ocorrer. O custo de parada do sistemas e processos de negócio críticos, mão de obra interna ou externa, vazamento dos dados que podem gerar multas, impacto na imagem, são fatos reais que toda empresa está sujeita. Atuar de forma preventiva sempre reduzirá os custos.'
  },{
    type: 'question',
    titleCard: 'A criticidade está no ambiente produtivo.',
    description: 'Processos de identificação de vulnerabilidades em ambiente de desenvolvimento e testes são realizados em sua operação como medida preventiva?',
    observation: 'A esteira de desenvolvimento é o momento ideal para consertar bugs e colocar a prova toda sua segurança. Mesmo que você conte com empresas parceiras no desenvolvimento, é uma excelente prática solicitar que incluem testes de código em busca de vulnerabilidades. É possível você incorporar seus processo juntamente com um programa na Bug hunt.'
  },{
    type: 'question',
    titleCard: 'O conhecimento é capaz de minimizar os riscos.',
    description: 'Seu time está preparado para buscar vulnerabilidades reais e testar o seu ambiente com as melhores práticas utilizadas pelos hacker de todo mundo?',
    observation: 'É constante a busca de conhecimento, tanto para identificar novas vulnerabilidades quanto para se proteger de ações maliciosas. Muitos recursos $ são investidos em mão de obra e tecnologias, porém, não é garantido que seja aplicado na prática. Mesmo que você tenha um time interno ou conte com uma empresa externa especialista como parceira nas demandas de cyber, é uma excelente prática utilizar programas como uma visão externa do que é identificado. A Bug hunt conta com centenas de pesquisadores especialistas no assunto.'
  },{
    type: 'question',
    titleCard: 'Processos devem ser eficiente e eficazes.',
    description: 'Caso receba um report de vulnerabilidade em seu sistema, seja por um agente interno ou externo, você possui mecanismos de avaliação e direcionamento?',
    observation: 'Na maioria dos casos as empresas são chantageadas e ficam a disposição dos hackers sem garantias da veracidade das informações. Os custos e impactos de se expôr a estas ameaças são altíssimas. Mas você não está sozinho, várias empresas já passam por isso e contam com a plataforma da bug hunt para tratar esse tipo de situação.'
  },{
    type: 'final',
    title: 'Conclusão',
    titleCard: 'Veja como nós enxergamos sua jornada em cyber segurança',
    description: '',
  }
]
