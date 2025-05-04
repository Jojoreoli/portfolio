/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useMemo } from "react";

interface UseContentReturnerProps {
  title: "academia" | "juridico" | "literatura" | "marketing" | "home";
}

export interface IContentChildrenProps {
  content: {
    title: React.ReactNode;
    originalText: React.ReactNode;
    translatedText: React.ReactNode;
    reference: React.ReactNode;
    inFull?: React.ReactNode;
  }[];
  title: string;
}

interface IContentProps {
  academia: IContentChildrenProps;
  juridico?: IContentChildrenProps;
  literatura: IContentChildrenProps;
  marketing?: unknown;
  home: string;
}

export const useContentReturner = ({ title }: UseContentReturnerProps) => {
  //@ts-ignore
  const content: IContentChildrenProps = useMemo(() => {
    const contentObject: IContentProps = {
      academia: {
        content: [
          {
            title: (
              <h1 className="content__title">
                Resumo Acadêmico:{" "}
                <i>Eating Disorders in Children and Adolescents</i>.
              </h1>
            ),
            originalText: (
              <p className="content__text">
                Eating disorders have life-threatening impact on physical and
                emotional health, impacting youth from childhood through
                adulthood. Early recognition can prevent serious morbidity and
                mortality, particularly by preventing maladaptive eating
                attitudes and behaviors from getting hard-wired. Clinicians in
                all fields, from primary care to subspecialists, need to be able
                to recognize and appropriately treat and/or refer at the
                earliest sign of an eating disorder, and especially when the
                young person begins falling off expected growth parameters.
                Concerns from aparentorother caringadult need to be taken
                seriously, with close follow up whenever these concerns are
                raised. Medical complications are life threatening but
                treatable.
                <br />
                <br />
                <b>Keywords:</b> eating disorders; anorexia nervosa; bulimia
                nervosa; avoidant/restrictive food intake disorder;
                medicalcomplications
              </p>
            ),
            translatedText: (
              <p className="content__text">
                Transtornos alimentares oferecem risco à saúde física e mental,
                podendo impactar jovensdesde a infância até a vida adulta.O
                reconhecimento precoce pode prevenir morbidades graves e
                mortalidade, principalmente ao impedir que hábitos e
                comportamentos desadaptativos se tornem inconscientes. Médicos
                de todas as áreas, desde médicos generalistas até
                sub-especialistas têm de ser capazes de reconhecer e tratar
                adequadamente o transtorno ou encaminhar ao especialista ao
                primeiro sinal de um transtorno alimentar, especialmente quando
                o jovem começar a apresentar queda nos parâmetros de
                crescimento. Preocupações de pais e responsáveis devem ser
                levadas em conta e acompanhadas de perto, sempre que tais
                preocupações forem levantadas. As complicações médicas são
                graves, mas tratáveis.
                <br />
                <br />
                <b>Palavras-chave:</b> distúrbios alimentares; anorexia nervosa;
                bulimia nervosa; transtorno alimentar restritivo/evitativo;
                complicaçõesmédicas
              </p>
            ),
            reference: (
              <p className="content__reference">
                ROME, Ellen S., ISSAC, Veronica E. Eating disorders in children
                and adolescents.{" "}
                <b>
                  Pediatric Gastrointestinal and Liver Disease (Sixth Edition)
                </b>
                ,2021,p.148-158
              </p>
            ),
          },
          {
            title: (
              <h1 className="content__title">
                Resumo Acadêmico (versão):{" "}
                <i>
                  English academic discourse: Its hegemonic status and
                  implications for translation
                </i>
                .
              </h1>
            ),
            originalText: (
              <p className="content__text">
                <b>Resumo:</b> Esta tese representa uma tentativa de responder a
                questões que surgiram diretamente da minha prática profissional
                como tradutora no âmbito 'acadêmico'. Visa-se, em primeiro
                lugar, confirmar a existência em Portugal de um discurso
                'acadêmico' com contornos bastante diferentes do discurso
                hegemônico inglês, assim dando início ao trabalho complexode
                definir os parâmetros, traçar a história e explorar a ideologia
                subjacente; segundo, estudar o que acontece a esse discurso
                durante o processo de tradução; e finalmente, focar as questões
                ideológicas e culturais que surgem no processo de tradução. A
                investigação baseia-se num Corpus de 408 textos das ciências
                exactas, sociais e humanas (1.333.890 palavras), de disciplinas
                e de gêneros diversos, que me foram apresentados para tradução
                durante um período de dez anos, sensivelmente. Os textos
                portugueses foram analisados para determinar a presença de
                características discursivas não habitualmente usadas em discurso
                acadêmico inglês[...]
              </p>
            ),
            translatedText: (
              <p className="content__text">
                <b>Abstract:</b> This theses represents an attempt to answer the
                questions brought along my work experience as a translator in
                the academic scope. We aim, primarily, to confirm the existence
                of a more different "academic discourse" in Portugal than the
                hegemonic English discourse, initiating the complex work to
                define parameters, and to trace history and explore the
                underlying ideology; secondly, to study what happens to this
                discourse in the translation process; and, finally, to discuss
                the ideological and cultural issues that may appear in the
                translation process. The investigation is based on a Corpus
                composed of 408 texts from the exact, social and human sciences
                (1,333,890 words), from diverse subjects and genre, presented
                for me to translate in a ten-year period. The Portuguese texts
                were analyzed to determine the presence of discursive
                characteristics that are non usual in the English Academic
                Discourse [...]
              </p>
            ),
            reference: (
              <p className="content__reference">
                BENNETT, K. English academic discourse: its hegemonic status and
                implications for translation.
                <b>Tese de Doutorado.</b> Universidade de Lisboa - Faculdade de
                Letras, Departamento Estudos da Cultura, 2008.
              </p>
            ),
            inFull: (
              <a
                target="_blank"
                href="https://docs.google.com/document/d/1jzyxMvzxh2B-imKuO-JZFcihoCN2n2lhw4pzvtUcUd4/edit?tab=t.0"
              >
                Versão na íntegra
              </a>
            ),
          },
          {
            title: (
              <h1 className="content__title">
                Terceiro parágrafo do artigo (versão):{" "}
                <i>
                  É verdade este “bilete”: relações dialógicas e(m) discurso no
                  ciberespaço
                </i>
                .
              </h1>
            ),
            originalText: (
              <p className="content__text">
                O ato (a escrita do bilhete, a ação de entregá-lo à mãe,
                estabelecendo interação discursiva) marca uma prática social
                situada nouniversooff-lineeumgêneropresentena vida cotidiana. O
                “bilete” desse jovem enunciadornos informaque, aos cincoanos de
                idade, Gabriel não somente já está alfabetizado (tem acesso ao
                código linguístico e sabe, em acordo com sua tenra idade, ler e
                escrever), mas também é letrado nos usos sociais de bilhetes
                (neste caso específico, bilhetes que circulam mensagens entre as
                esferas escolar e familiar). O letramento em questão indica que
                Gabriel entende as funções do gênero nesse contexto e sabe dele
                se (re)utilizar e (re)conhece condições de produção tais quais o
                endereçamento de seu enunciado
                aointerlocutorpretendido,nocasosuamãe. O menino indica, também,
                perceber o funcionamento das relações de poder estabelecidas
                entre enunciador e leitor-alvo (respectivamente professora e
                mãe), quando decide assegurar a “validade” de seu discurso ao
                afirmar “é verdade esse bilete”.
              </p>
            ),
            translatedText: (
              <p className="content__text">
                The boy's action (the writing of the note and the act of
                delivering it to his mother, establishing a discursive
                interaction) sets a social practice that takes place in the
                offline universe and a common genre in daily life. The “notte”
                from the young enunciator informs that, by the age of five years
                old, Gabriel is not only literate (he has access to the
                linguistic code and knows how to read and write), but he is also
                literate to the social uses of notes - particularly in notes
                from the school and family spheres. The literacy in question
                indicates that Gabriel comprehends the functions of that genre
                in this context and knows how to (re)use it, and recognizes the
                production conditions, addressing the utterance to the intended
                interlocutor, his mother. The child also shows to understand how
                power relations between enunciator and interlocutor (teacher and
                mother, respectively) work, when he decides to ensure the
                “validity” of his discourse,affirming“this 'notte' is true”
              </p>
            ),
            reference: (
              <p className="content__reference">
                Azzari, E. F.; Amarante, M. de F. S.; Andrade, E. R. “É verdade
                este bilete”: relações dialógicas e(m) discurso no ciberespaço.
                <b>Bakhtiniana,</b> Rev. Estud. Discurso 15 (1) Jan-Mar 2020,
                p.7-34. Disponível em:
                <a
                  target="_blank"
                  href="https://doi.org/10.1590/2176-457341595"
                >
                  https://doi.org/10.1590/2176-457341595
                </a>
                .(Recorte:p.21-24).
              </p>
            ),
          },
          {
            title: (
              <h1 className="content__title">
                Excertos do artigo <i>Frantz Fanon and the Issue of Identity</i>
              </h1>
            ),
            originalText: (
              <p className="content__text">
                <b>Abstract:</b> During the 1930s, 1940s and 1950s, when the
                signs of change appeared and the decolonization movement spread
                out all over the colonized countries, especially in the African
                ones, a controversy about the choice of language erupted and
                pursued writers and critics around the world, especially Black
                writers and critics.[...]
                <br /> <b>Objectives:</b> As it can be found in many different
                writings, and since its beginning to the contemporary period, it
                is obvious that the African writing is a series of attempts and
                efforts by black people to attain a specific recognizable
                identity and gain and achieve certain kind of respect and
                appreciation in the larger Western world s a minority group that
                suffered from long years of European colonization and its
                consequences of racism and oppression.[...]
              </p>
            ),
            translatedText: (
              <p className="content__text">
                <b>Resumo:</b> Durante os anos 1930 até 1950, quando sinais
                sociais de mudança surgirameomovimentodedecolonização se
                espalhou pelos países colonizados, principalmente os países
                africanos, irrompeu a controvérsia e escritores se mobilizaram
                em relação a que língua escolher para a produção de obras
                literárias - a língua dos colonizadores ou as línguas
                originárias. Isso influenciou escritores e críticos ao redor do
                mundo, sobretudo os negros.[...]
                <br /> <b>Objetivos:</b> Como já abordado em diversos outros
                artigos, desde o início até a contemporaneidade, é óbvio que a
                escrita africana possui uma série de tentativas e esforços do
                povo negro de alcançar uma identidade específica e reconhecível,
                conquistando um certo respeito e validação no ocidente. Como um
                grupo minoritarizado que sofreu longos anos de colonização
                europeia e o consequente racismo e opressão[...]
              </p>
            ),
            reference: (
              <p>
                ALI, Hemida Abdel Ati. Frantz Fanon and the Issue of Identity.
                <b>Journal of Arts and Human Sciences,</b> University of Minia,
                Egypt, 2016, p. 850-894. Disponível em: HYPERLINK
                <a
                  target="_blank"
                  href="https://fjhj.journals.ekb.eg/article_162390_6411af99bf430b3069bd6a6d17da957e.pdf"
                >
                  "https://fjhj.journals.ekb.eg/article_162390_6411af99bf430b3069bd6a6d17da957e.pdf"(ekb.eg)
                </a>
              </p>
            ),
            inFull: (
              <a
                target="_blank"
                href="https://docs.google.com/document/d/1A1mHn2TP4p3ysRGYxHCvpQtYYyBUfRMDJISmQdIEWtU/edit?tab=t.0"
              >
                Tradução na íntegra
              </a>
            ),
          },
          {
            title: (
              <h1 className="content__title">
                Excertos do artigo{" "}
                <i>The impact of the covid-19 pandemic on suicide rates</i>
              </h1>
            ),
            originalText: (
              <p className="content__text">
                <b>Summary:</b> Multiple lines of evidence indicate that the
                coronavirus disease 2019 (COVID-19) pandemic has profound
                psychological and social effects. The psychological sequelae of
                the pandemic will probably persist for months and years to come.
                Studies indicate that the COVID-19 pandemic is associated with
                distress, anxiety, fear of contagion, depression and insomnia in
                the general population and among healthcare professionals.
                Social isolation, anxiety, fear of contagion, uncertainty,
                chronic stress and economic difficulties may lead to the
                development or exacerbation of depressive, anxiety, substance
                use and other psychiatric disorders in vulnerable populations
                including individuals with pre-existing psychiatric disorders
                and people who reside in high COVID-19 prevalence areas.[...]
              </p>
            ),
            translatedText: (
              <p className="content__text">
                <b>Resumo:</b> Diversas linhas de pesquisa indicam que a
                pandemia da doença causada pelo coronavírus 2019 (COVID19) tem
                efeitos psicológicos e sociais profundos. As sequelas
                psicológicas da pandemia podem persistir por meses ou anos.
                Estudos indicam que a pandemiade COVID-19 está associada à
                angústia, ansiedade, medo de contágio, depressão e insônia na
                população em geral e entre profissionais de saúde. O isolamento
                social, a ansiedade, o medo do contágio, a incerteza, o estresse
                crônico e as dificuldades econômicas podem levar ao
                desenvolvimento ou exacerbação de depressão, ansiedade, abuso de
                substâncias e outros transtornos psiquiátricos em populações
                vulneráveis, incluindo indivíduos com transtornos psiquiátricos
                pré-existentes e pessoas que residem em áreas de predominância
                de COVID-19.[...]
              </p>
            ),
            reference: (
              <p>
                SHER, Leo. The impact of the COVID-19 pandemic on suicide rates.
                <b>QJM: An International Journal of Medicine</b>, Volume 113,
                Issue 10. October 2020. p. 707-712,
                <a target="_blank" href="https://doi.org/10.1093/qjmed/hcaa202">
                  https://doi.org/10.1093/qjmed/hcaa202
                </a>
              </p>
            ),
            inFull: (
              <a
                target="_blank"
                href="https://docs.google.com/document/d/1pgz5ud7ZuO8fF8EHqKj5HREhsJ8fbPqWR_BvqVhD26o/edit?tab=t.0"
              >
                Tradução na íntegra
              </a>
            ),
          },
          {
            title: (
              <h1 className="content__title">
                Resumo Acadêmico:{" "}
                <i>
                  Globalized Language Culture in the Localized Postsojourn
                  Context: Returnee Brazilian Language Learners' Strategies and
                  Processes for Forming and Negotiating L2 Identity.
                </i>
              </h1>
            ),
            originalText: (
              <p className="content__text">
                <b>Abstract:</b> This qualitative study investigates the process
                of identity negotiation and formation of 10 Brazilian English
                language learners (ELLs). Participants were asked to share their
                experiences in formal as well as informal English language
                learning environments, and to discuss how these experiences
                potentially impacted their ability to create an imagined
                identity and join an imagined community of the target
                language.[...]
                <br /> <b>Research Questions</b> 1. What strategies do adult
                English language learnersuse toform andnegotiate imagined L2
                identities and imagined L2 communities in formal and informal
                sites of languagelearning?
              </p>
            ),
            translatedText: (
              <p className="content__text">
                <b>Resumo:</b> Esta pesquisa qualitativa investiga o processo de
                negociação e formação da identidade de 10 aprendizes brasileiros
                de língua inglesa (ELL - English Language Learners). Os
                participantes compartilharam suas experiências em ambientes
                formais e informais de aprendizado de língua inglesa e
                discutiram como essas experiências potencialmente impactaram sua
                habilidade para criar uma identidade imaginada e fazer parte de
                uma comunidade imaginada da língua meta[...]
                <br />
                <b>Perguntas de Pesquisa</b> 1. Quais estratégias aprendizes
                adultos da língua inglesa usam para formação e negociação de
                identidades e comunidades imaginadas da L2 em contextos formais
                e informais de aprendizagemdelíngua?
              </p>
            ),
            reference: (
              <p>
                WILDESON, Madeline. Globalized Language Culture in the Localized
                Postsojourn Context: Returnee Brazilian English Language
                Learners' Strategies and Processes for Forming and Negotiating
                L2 Identity. <b>Culminating Projects in TESL</b>.20.2019
                <a
                  target="_blank"
                  href="https://repository.stcloudstate.edu/tesl_etds/20"
                >
                  https://repository.stcloudstate.edu/tesl_etds/20
                </a>
              </p>
            ),
            inFull: (
              <a
                target="_blank"
                href="https://docs.google.com/document/d/1GbPG-eNkXfftqWp2FAl5wyb6s8KISxjML6ifo7EQI3o/edit?tab=t.0"
              >
                Tradução na íntegra
              </a>
            ),
          },
          {
            title: (
              <h1 className="content__title">
                <i>
                  Trabalho de Conclusão de curso (versão): A percepção de
                  aconselhadores de investimento sobre os investimentos
                  sustentáveis para investidores de alta renda.
                </i>
              </h1>
            ),
            originalText: (
              <p className="content__text">
                <b>Considerações Finais:</b> A partir da análise quantitativa do
                comportamento de profissionais aconselhadores financeiros de
                investimento, os quais trabalham ou trabalharam em instituições
                financeiras (públicas e privadas, de médio e grande porte), cujo
                foco se dá no aconselhamento de investimentos de pessoas físicas
                de alta renda, esta pesquisa acadêmica interpretou as
                informações obtidas em questionário estruturado fechado, de
                maneira a quantificar, representar e projetar o comportamento e
                opiniões dos mesmos sobre o aconselhamento de investimentos ESG.
                Com base na hipótese básica desta pesquisa foi possível validar
                que os profissionais especialistas em aconselhamento financeiro
                de investimentos para o público de alta renda possuem pleno
                conhecimento e familiaridade sobre os investimentos sustentáveis
                ESG[...]
              </p>
            ),
            translatedText: (
              <p className="content__text">
                <b>Final Considerations:</b> Based on the quantitative analysis
                of investment advisors' behavior, who work or have worked in
                financial institutions (stateowned and private, medium and
                largesized), whose focus is on investment advice of private
                individuals of high net worth, this academic research analyzed
                the information obtained through a closed structured
                questionnaire, in order to quantify, represent and forecast the
                behavior and opinions of the advisors aboutESGinvestmentadvice.
                Grounded in the basic hypothesis of this research, it was
                possible to confirm that investment advisor professionals to
                high net worth individuals have full knowledge and familiarity
                with sustainable ESG investments [...]
              </p>
            ),
            reference: (
              <p>
                ANDRADE, Guilherme. A percepção de aconselhadores de
                investimento sobre os investimentos sustentáveis para
                investidores de alta renda.2021.<b>Gestão de Pessoas.</b>{" "}
                USP.Piracicaba,2021
              </p>
            ),
            inFull: (
              <a
                target="_blank"
                href="https://docs.google.com/document/d/1ROxOKb93fVsEA3tDFE2lGzIAKbuNASS5FdCeXUk9u2E/edit?tab=t.0"
              >
                Tradução na íntegra
              </a>
            ),
          },
        ],
        title:
          "RESUMOS ACADÊMICOS, TRECHOS DE ARTIGOS CIENTÍFICOS, TRABALHOS DE CONCLUSÃO DE CURSO, TESES DE MESTRADO E DOUTORADO",
      },
      literatura: {
        content: [
          {
            title: (
              <h1 className="content__title">
                Tradução de trecho do livro <i>The Catcher in the Rye</i>
                (em dupla com Juliana Caruso)
              </h1>
            ),
            originalText: (
              <p className="content__text">
                If you really want to hear about it, the first thing you'll
                probably want to know is where I was born,and what my lousy
                childhood was like, and how my parents were occupied and all
                before they had me, and all that David Copperfield kind of crap,
                but I don't feel like going into it, if you want to know the
                truth. In the first place, that stuff bores me, and in the
                second place, my parents would have about two hemorrhages apiece
                if I told anything pretty personal about them. They're quite
                touchy about anything like that, especially my father. They're
                nice and all--I'm not saying that--but they're also
                touchyashell. [...]
                <br /> "Holden!" Mrs. Spencer said. "How lovely to see you! Come
                in, dear! Are you frozen to death?" I think she was glad to see
                me. She likedme.Atleast,Ithinkshedid. Boy, did I get in that
                house fast. "How are you, Mrs. Spencer?" I said. "How's Mr.
                Spencer?"
              </p>
            ),
            translatedText: (
              <p className="content__text">
                Se você quer mesmo ouvir sobre isso, a primeira coisaque
                vocêprovavelmente vai querer saber é onde eu nasci, e como minha
                infância foi péssima, e como meus pais eram ocupados e tudo
                mais, antes de me terem, e toda essa porcaria do David
                Copperfield¹, mas para ser sincero, eu não tô a fim de falar
                sobre isso. Em primeiro lugar,essas coisasmedeixamentediado,e em
                segundo lugar, meus pais teriam uns dois ataques do coração se
                eu contasse algo muito pessoal sobre eles. Eles são bem
                sensíveis com esse tipo de coisa, principalmente meu pai. Eles
                são legais e tudo mais - não tô dizendo que não - mas eles
                também são sensíveis pra caramba. [...]
                <br /> “Holden!” disse a sra. Spencer. “Que bom te ver! Entre,
                meu bem! Você deve estar morrendo de frio, não?” Acho que ela
                estava feliz emme ver.Ela gostava de mim. Quer dizer,eu acho.
                Cara, como eu entrei rápido naquela casa. “Como você tá, sra.
                Spencer?” eu perguntei. “Como tá o sr.Spencer?”
                <br />
                <em>
                  ¹David Copperfield é o protagonista do romance de
                  mesmonomedoautorCharles Dickens.Nesse livro, o personagem
                  também não possui uma boa relação com seus pais. Há também uma
                  referência para o tipo de escrita de Dickens, conhecido por
                  detalhar muito a vida de seus personagens, que no caso de
                  Holden, não terá esseexcessodeinformação
                </em>
              </p>
            ),
            reference: (
              <p className="content__reference">
                SALINGER,J.D.<b>The catcher in the rye.</b> Boston:Little Brown
                and Company, 1951.
              </p>
            ),
            inFull: (
              <a
                target="_blank"
                href="https://docs.google.com/document/d/1G7OxOXBr_-J5VZG1NfUg6mu0XTjh_G2msUSV3tf7TQU/edit?tab=t.0"
              >
                Tradução na íntegra
              </a>
            ),
          },
          {
            title: (
              <h1 className="content__title">
                Tradução de trechos do romance <i>Of Mice and Men</i>
                (em dupla com Juliana Caruso)
              </h1>
            ),
            originalText: (
              <p className="content__text">
                A few miles South of Soledad, the Salinas River drops in close
                to the hillside bank and runsdeepandgreen.Thewateriswarmtoo, for
                it has slipped twinkling over the yellow sands in the sunlight
                before reaching the narrow pool. On one side of the river the
                golden foothill slopes curve up to the strong and rocky Gabilan
                mountains, but on the valley side the water is lined with trees
                - willows fresh and green with every spring, carrying in their
                lower leaf junctures the debris of the winter's flooding; and
                sycamores with mottled, white, recumbent limbs and branches that
                arch over the pool. On the sandy bank under the trees the leaves
                lie deep and so crisp that a lizard makes a great skittering if
                he runs among them.Rabbits comeoutofthebrushtositon the sand in
                the evening, and the damp flats are covered with the night
                tracks of 'coons, and with the spread pads of dogs from the
                ranches, and with the split-wedge tracks of
                deerthatcometodrinkinthedark. There is a path through the
                willows and among the sycamores, a path beaten hard by boys
                coming down from the ranches to swim in the deep pool, and
                beaten hard by tramps who come wearily down from the highway in
                the evening to jungle-up near water.
              </p>
            ),
            translatedText: (
              <p className="content__text">
                Algumas milhas ao Sul de Soledad, o rio Salinas desce próximo à
                encosta, profundo e esverdeado. A água também é quente, pois
                desliza cintilante pelas areias amarelas banhadas pelo sol,
                antes de alcançar o estreito lago. De um lado do rio, o sopé
                dourado da encosta sobe para a Cordilheira Gabilan, com
                montanhas fortes e rochosas. Do lado do vale, a água corre
                alinhada a árvores - salgueiros, sempre verdes e frondosos
                durante as primaveras, carregando, em suas ramificações mais
                baixas, destroços das inundações do inverno. Sicômoros com ramos
                e galhos manchados de branco curvam-se formando um arco sobre o
                lago. No banco arenoso debaixo das árvores, as folhas repousam,
                tão secas que se um lagarto passa por elas, acaba deslizando
                rapidamente.Aoentardecer,coelhos saem dos arbustos para sentar
                na areia. O chão úmido fica coberto com os rastros noturnos dos
                guaxinins, com as marcas espaçadas das patas dos cães dos
                ranchos e com as pegadas pontudas dos cervos que aparecem para
                tomar água no escuro. Há uma trilha pelos salgueiros e
                sicômoros, desgastada pelos garotos que vêm dos ranchos para
                nadar no lago profundo, e pelos mendigos que, ao entardecer,
                descem cansados da estrada para se abrigarem perto da água.
              </p>
            ),
            reference: (
              <p className="content__reference">
                STEINBECK,John. <b>Of Mice and Men</b>. Pascal Covici, 1937.
              </p>
            ),
            inFull: (
              <a
                target="_blank"
                href="https://docs.google.com/document/d/1SztzA6ffF10WgwWdQnyFuz4sNZCwH50YPKByOUTqaRY/edit?tab=t.0"
              >
                Tradução na íntegra
              </a>
            ),
          },
          {
            title: (
              <h1 className="content__title">
                Tradução de trechos do livro <i>Book Lovers</i>
                (em dupla com Juliana Caruso)
              </h1>
            ),
            originalText: (
              <p className="content__text">
                Even now, walking back into town with Libby for the “secret
                surprise” she planned for us, I'm only two-thirds present.
                Determined to wrangle that last third into submission,Iask,
                “AmIdressedokay?” Without breaking stride, Libby squeezes my
                arm. “Perfect.Agoddessamongmortals.” I look down at my jeans and
                yellow silk tank, trying to guess what they might be “perfect”
                for.
                <br /> Out of the corner of my eye, I do another quick audit of
                her body language. I've been watching her closely since the
                weird text fromBrendan,butnothing's seemedamiss. When we were
                kids, she used to beg Mrs. Freeman to let her reshelve books,
                and now her efforts to update Goode Books have turned her into
                bizarro Belle, right down to singing the “provincial life” song
                into her broom handle while Charlie shoots me fiery
                make-it-stopglares. “I can'thelpyou,” Ifinally toldhim. “Ihaveno
                jurisdictionhere.” [...]
              </p>
            ),
            translatedText: (
              <p className="content__text">
                Mesmoagora, voltandopara a cidadecom Libby para a “surpresa
                secreta” que ela preparou, eu estou apenas dois terços presente.
                Determinada a domar o último terço,pergunto: <br />
                —Estoubonita?
                <br /> Sem diminuir o passo, Libby aperta meu braço.
                <br />
                —Perfeita.Umadeusadentremortais.
                <br /> Eu olho para a minha calça jeans e minha regata de seda
                amarela, tentando adivinhar para que ocasião eu estaria
                “perfeita”.
                <br /> Pela visão periférica, reparo rapidamente na linguagem
                corporal de Libby. Tenho a observado atentamente desde a
                mensagem estranha do Brendan, mas parecequenãohánadadeerrado.
                Quando éramos crianças, ela implorava para a sra. Freeman
                deixá-la rearrumar as estantes de livros, agora, seus esforços
                para renovar a Goode Books a transformaram numa versão bizarra
                da Bela, deABela e a Fera, cantando sobre “a vida do interior”,
                usando a vassoura de microfone, enquanto Charlie me lança
                olharesdefaça-isso-parar.,br/ — Não posso te ajudar — disse a
                ele, enfim.—Nãotenhojurisdiçãoaqui.[...]
              </p>
            ),
            reference: (
              <p className="content__reference">
                HENRY,Emily.<b>Book Lovers</b>. New York: Berkley, 2022
              </p>
            ),
            inFull: (
              <a
                target="_blank"
                href="https://docs.google.com/document/d/16tJrYjpRckHE5QqADcVHXjn5NJYDoNax4BxHbjDIy-Y/edit?tab=t.0"
              >
                Tradução na íntegra
              </a>
            ),
          },
          {
            title: (
              <h1 className="content__title">
                Tradução do capítulo 2 do livro{" "}
                <i>Dreams in a Time of War: A Childhood Memoir</i> (em dupla com
                Juliana Caruso)
              </h1>
            ),
            originalText: (
              <p className="content__text">
                I was born in 1938, under the shadow of another war, the Second
                World War, to Thiong'owa Ndũcũ, my father, andWanjikũ wa Ngũgĩ,
                my mother. I don't know where I ranked, in terms of years, among
                the twentyfour children of my father and his four wives, but I
                was the fifth child of my mother's house. Ahead of me were the
                eldest sister, Gathoni; eldest brother, Wallace Mwangi; and
                sisters Njoki and Gacirũ, in that order, with my younger
                brother, Njinjũ, being the sixthandlastbornofmymother.
                <br /> My earliest recollection of home was of a large
                courtyard, five huts forming a semicircle. One of these was my
                father's, where goats also slept at night. It was the main hut
                notbecause of its sizebutbecause it was set apart and
                equidistant from the otherfour.Itwascalledathingira.My father's
                wives, or our mothers as we called them,
                wouldtakefoodtohishutinturns.
                <br /> Each woman’s hut was divided into spaces with different
                functions, a three-stone fireplace at its center; sleeping areas
                and a kind of pantry; a large section for goats and, quite
                often, a small enclosure, a pen for fattening sheep or goats to
                be slaughtered for specialoccasions.
              </p>
            ),
            translatedText: (
              <p className="content__text">
                Eu nasci em 1938, sob a sombra de outra guerra, a Segunda Guerra
                Mundial, de Thiong’o wa Ndũcũ, meu pai, e Wanjikũ
                waNgũgĩ,minhamãe.Eunãoseiondeme encaixo, em termos de anos,
                entre os vinte e quatro filhos do meu pai e suas quatro esposas,
                mas eu era o quinto filho da casa de minha mãe.
                <br /> Antes de mim estavam minhairmãmaisvelha,Gathoni;meuirmão
                mais velho, Wallace Mwangi; e minhas irmãs Njoki e Gacirũ, nessa
                ordem exata, com meu irmão mais novo, Njinjũ, sendo o
                sextoeoúltimodeminhamãe. Minha memória mais antiga de casa era a
                de um pátio grande, com cinco cabanas formando um semicírculo.
                Uma delas era de meu pai, onde as cabras também dormiam à noite.
                Era a cabana principal, não por conta de seu tamanho, mas porque
                ficava equidistante das outras quatro. Era chamada de thingira.
                As esposas de meu pai, ou nossas mães, como as chamávamos,
                dividiam-se em turnosparalevarcomidaparaele.
                <br /> Cada cabana das mulheres era dividida em espaços com
                diferentes funções, com um fogareiro de três pedras no centro;
                áreas de dormir e uma espécie de despensa; um amplo espaço para
                as cabras e, com frequência, um cercado para engordar as ovelhas
                e cabras que Re eramabatidasparaeventosespeciais.
              </p>
            ),
            reference: (
              <p className="content__reference">
                THIONG'O, Ngũgĩ wa.{" "}
                <b>Dreams in a Time of War:a Childhood Memoir</b>. London:
                Harvill Secker,2010.
              </p>
            ),
            inFull: (
              <a
                target="_blank"
                href="https://docs.google.com/document/d/1Z_MoIcJEeI5dc2s_b-mio-02Ki3lLZsFlh5gicrO60g/edit?tab=t.0"
              >
                Tradução na íntegra
              </a>
            ),
          },
          {
            title: (
              <h1 className="content__title">
                Tradução de trecho do livro{" "}
                <i>Chronicles from the Land of the Happiest People on Earth</i>
              </h1>
            ),
            originalText: (
              <p className="content__text">
                That the nation known as the Giant of Africa was credited with
                harbouring the Happiest People in the World was no longer news.
                What remained confusing was how such recognition came to be
                earned and, by universal consent, deserved. Aspiring nations
                needed to be rescued from their state of envious aspiration, a
                malaise that induced doomed efforts to snatch the
                crownfromtheirhead.Thewisdomofelders counsels that it is more
                dignified to acknowledge a champion where indisputable,
                thereafter take one's place behind its leadership, than to carp
                and wriggleinfrustration.As theYoruba arewont to admonish, Ti a
                ba ri erin igbo k'a gba wipe a ri ajanaku, ka ye so wipe a ri
                nka nto lo firi. When we encounter an elephant, let us admit
                that we have seen the lord of the forest, not offhandedly remark
                that we saw somethingflashacrossour sight.
                <br /> Not many nations, for instance, could boast a Ministry of
                Happiness. Yet this was an innovation that came from one of the
                most impoverished states within that federated nation.
              </p>
            ),
            translatedText: (
              <p className="content__text">
                Não era novidade que a nação conhecida como Gigante da África
                fora creditada por abrigar as Pessoas Mais Felizes do Mundo. O
                que continuava confuso era como este reconhecimento veio a ser
                alcançado e, com consentimento universal, merecido. Nações
                aspirantes precisavam ser resgatadas de seu estado invejoso de
                aspiração, uma enfermidade que induzia esforços em vão para
                roubar a coroa de suas cabeças. A sabedoria dos anciãos
                aconselhava que era mais digno
                reconhecerumcampeãoinquestionávele, por consequência tomar seus
                lugares abaixo na liderança ao invés de se retorcer inquieto de
                frustração. Como os Yoruba costumam advertir, Ti a ba ri erin
                igbo k'a gba wipe a ri ajanaku, ka ye so wipe a ri nka nto lo
                firi. Quando encontramos um elefante, é melhor admitir que vimos
                o senhor da floresta, não comentar descuidadamente que vimos
                algo passandoderelancepelavista.
                <br /> Não há muitas nações que podem se gabar por terem um
                Ministério da Felicidade. Porém, esta foi uma inovação vinda de
                um dos mais empobrecidos estadosdafederação.
              </p>
            ),
            reference: (
              <p className="content__reference">
                SOYINKA,Wole.{" "}
                <b>
                  Chronicles from the land of the happiest people on Earth: A
                  Novel
                </b>
                . New York: Pantheon. 2021.
              </p>
            ),
            inFull: (
              <a
                target="_blank"
                href="https://docs.google.com/document/d/1fYv59zO3GI8GW8EBOUOTDQhoxAfOeIU0QyBl-2u2rkM/edit?tab=t.0"
              >
                Tradução na íntegra
              </a>
            ),
          },
        ],
        title:
          "TRADUÇÕES DE TRECHOS DE OBRAS CLÁSSICAS (CANÔNICAS) E MODERNAS (NÃO CANÔNICAS)",
      },
      home: "",
    };

    return contentObject[title];
  }, [title]);

  return content;
};
