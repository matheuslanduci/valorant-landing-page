import { useState } from "react";

import {
  AgentData,
  AgentImage,
  AgentItem,
  AgentsColumn,
  BackgroundModule,
  Bar,
  BarsModule,
  CategoriesRow,
  Category,
  Container,
  ContentModule
} from "./styles";

import Button from "../Button";

type Agent = {
  name: string;
  value: string;
  role: {
    name: "Controlador" | "Duelista" | "Sentinela" | "Iniciador";
    value: "controller" | "duelist" | "sentinel" | "initiator";
  };
  biography: string;
};

const agents: Agent[] = [
  {
    name: "Jett",
    value: "jett",
    role: {
      name: "Duelista",
      value: "duelist"
    },
    biography:
      "Representando a Coreia do Sul, sua terra natal, Jett tem um estilo de luta ágil e evasivo que permite que ela assuma riscos como ninguém. Ela corre em meio a qualquer confronto, cortando os inimigos antes mesmo que eles percebam quem ou o que os atingiu."
  },
  {
    name: "Reyna",
    value: "reyna",
    role: {
      name: "Duelista",
      value: "duelist"
    },
    biography:
      "Criada no coração do México, Reyna domina o combate individual, destacando-se a cada abate efetuado. Sua capacidade só é limitada por sua própria perícia, tornando-a bastante dependente de desempenho."
  },
  {
    name: "Raze",
    value: "raze",
    role: {
      name: "Duelista",
      value: "duelist"
    },
    biography:
      'Raze chega do Brasil em uma explosão de carisma e armas letais. Com seu estilo de jogo "porradeiro", ela é craque em desentocar inimigos entrincheirados e limpar espaços apertados com uma bela dose de BUUUM!'
  },
  {
    name: "Phoenix",
    value: "phoenix",
    role: {
      name: "Duelista",
      value: "duelist"
    },
    biography:
      "Chegando com tudo diretamente do Reino Unido, o poder estelar de Phoenix reluz em seu estilo de luta, incendiando o campo de batalha com luz e estilo. Tendo ajuda ou não, ele entra na luta como e quando achar que deve."
  },
  {
    name: "Yoru",
    value: "yoru",
    role: {
      name: "Duelista",
      value: "duelist"
    },
    biography:
      "Yoru, nativo do Japão, abre fendas na realidade para infiltrar as linhas inimigas sem ser visto. Ele usa tanto artimanhas quanto táticas agressivas, e os alvos são abatidos sem saber de onde o ataque veio."
  },
  {
    name: "Breach",
    value: "breach",
    role: {
      name: "Iniciador",
      value: "initiator"
    },
    biography:
      "Breach, o homem-biônico sueco, dispara poderosos jatos cinéticos para forçar a abertura de um caminho pelo território inimigo. O dano e a interrupção que ele causa garantem que nenhuma luta seja justa."
  },
  {
    name: "Sova",
    value: "sova",
    role: {
      name: "Iniciador",
      value: "initiator"
    },
    biography:
      "Nascido sob o eterno inverno das tundras russas, Sova rastreia, encontra e elimina inimigos com eficiência e precisão implacáveis. Seu arco personalizado e suas habilidades inigualáveis de reconhecimento garantem que nenhuma presa escape."
  },
  {
    name: "Skye",
    value: "skye",
    role: {
      name: "Iniciador",
      value: "initiator"
    },
    biography:
      "Mandando um salve direto da Austrália, Skye e sua equipe de feras desbravam territórios hostis. Com seus poderes de cura e suas criações que partem pra cima dos inimigos, qualquer equipe ficará mais forte e mais segura tendo Skye como aliada."
  },
  {
    name: "Killjoy",
    value: "killjoy",
    role: {
      name: "Sentinela",
      value: "sentinel"
    },
    biography:
      "Killjoy, uma alemã genial, defende o campo de batalha facilmente usando seu arsenal de invenções. Se o dano causado por seu equipamento não der cabo dos inimigos, os efeitos negativos de seus queridos robôs dão conta do recado."
  },
  {
    name: "Cypher",
    value: "cypher",
    role: {
      name: "Sentinela",
      value: "sentinel"
    },
    biography:
      "Cypher, um vendedor de informações do Marrocos, é uma verdadeira rede de vigilância de um homem só que fica de olho em cada movimento dos inimigos. Nenhum segredo está a salvo. Nenhuma manobra passa despercebida. Cypher está sempre vigiando."
  },
  {
    name: "Sage",
    value: "sage",
    role: {
      name: "Sentinela",
      value: "sentinel"
    },
    biography:
      "Como uma verdadeira fortaleza chinesa, Sage traz segurança para si mesma e para a equipe aonde quer que vá. Capaz de reviver aliados e rechaçar investidas agressivas, ela oferece um centro de calmaria em meio ao caos da batalha."
  },
  {
    name: "Brimstone",
    value: "brimstone",
    role: {
      name: "Controlador",
      value: "controller"
    },
    biography:
      "Vindo diretamente dos EUA, o arsenal orbital de Brimstone garante que o esquadrão dele esteja sempre em vantagem. Sua capacidade de oferecer utilidade com precisão a distância faz dele um comandante inigualável na linha de frente."
  },
  {
    name: "Omen",
    value: "omen",
    role: {
      name: "Controlador",
      value: "controller"
    },
    biography:
      "Omen, uma lembrança fantasmagórica, caça nas sombras. Ele cega os inimigos, teleporta-se pelo campo e deixa a paranoia assumir o controle enquanto o adversário tenta descobrir de onde virá seu próximo ataque."
  },
  {
    name: "Viper",
    value: "viper",
    role: {
      name: "Controlador",
      value: "controller"
    },
    biography:
      "Viper, a química dos Estados Unidos, emprega uma variedade de dispositivos químicos venenosos para controlar o campo de batalha e prejudicar a visão do inimigo. Se as toxinas não matarem a presa, seus jogos mentais certamente o farão."
  }
];

const AgentsSection = (): JSX.Element => {
  const [selectedAgent, setSelectedAgent] = useState<Agent>(agents[0]);
  const [selectedCategory, setSelectedCategory] = useState<string>("duelist");
  const [tempAgents, setTempAgents] = useState<Agent[]>(
    agents.filter(ag => ag.role.value === "duelist")
  );

  const handleChangeCategory = (value: string) => {
    if (value === "duelist") {
      setTempAgents(agents.filter(ag => ag.role.value === "duelist"));
      setSelectedAgent(agents.filter(ag => ag.role.value === "duelist")[0]);
    } else if (value === "initiator") {
      setTempAgents(agents.filter(ag => ag.role.value === "initiator"));
      setSelectedAgent(agents.filter(ag => ag.role.value === "initiator")[0]);
    } else if (value === "sentinel") {
      setTempAgents(agents.filter(ag => ag.role.value === "sentinel"));
      setSelectedAgent(agents.filter(ag => ag.role.value === "sentinel")[0]);
    } else {
      setTempAgents(agents.filter(ag => ag.role.value === "controller"));
      setSelectedAgent(agents.filter(ag => ag.role.value === "controller")[0]);
    }

    setSelectedCategory(value);
  };

  return (
    <Container>
      <BackgroundModule>
        <img src="icons/agents-background.svg" />
      </BackgroundModule>
      <BarsModule>
        <Bar className="left" />
        <Bar className="right" />
        <img src="icons/valorant-logo.svg" className="logo" />
        <span className="text">Nós somos Valorant</span>
      </BarsModule>
      <ContentModule>
        <span className="title">Conheça os agentes</span>
        <AgentData>
          <span className="name">{selectedAgent.name}</span>
          <div className="role">
            <span className="role-title">Função</span>
            <span className="role-value">
              <img src={`images/roles/${selectedAgent.role.value}.png`} />
              <span> // {selectedAgent.role.name}</span>
            </span>
          </div>
          <div className="bio">
            <span className="bio-title">Biografia</span>
            <p className="bio-value">{selectedAgent.biography}</p>
          </div>
        </AgentData>
        <AgentImage src={`images/agents/${selectedAgent.value}.png`} />
        <Button
          variant={{
            background: "#ff4655",
            hover: "#ece8e1",
            font: "#ece8e1"
          }}
          className="button"
          href={`https://playvalorant.com/pt-br/agents/${selectedAgent.value}/`}
        >
          Ver todas as habilidades
        </Button>
        <CategoriesRow>
          <Category
            className={selectedCategory === "duelist" ? "active" : ""}
            onClick={() => handleChangeCategory("duelist")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 48 48"
              className="border"
            >
              <g fill="none">
                <path d="M48,10.5,38.4,0H0V48H48V10.5Z" stroke="none" />
                <path
                  d="M 1 1 L 1 47 L 47 47 L 47 10.88824081420898 L 37.95932388305664 1 L 1 1 M 0 0 L 38.40000152587891 0 L 48 10.5 L 48 48 L 0 48 L 0 0 Z"
                  stroke="none"
                  fill="#fff"
                />
              </g>
            </svg>
            <img src="images/roles/duelist.png" className="content" />
          </Category>
          <Category
            className={selectedCategory === "initiator" ? "active" : ""}
            onClick={() => handleChangeCategory("initiator")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 48 48"
              className="border"
            >
              <g fill="none">
                <path d="M48,10.5,38.4,0H0V48H48V10.5Z" stroke="none" />
                <path
                  d="M 1 1 L 1 47 L 47 47 L 47 10.88824081420898 L 37.95932388305664 1 L 1 1 M 0 0 L 38.40000152587891 0 L 48 10.5 L 48 48 L 0 48 L 0 0 Z"
                  stroke="none"
                  fill="#fff"
                />
              </g>
            </svg>
            <img src="images/roles/initiator.png" className="content" />
          </Category>
          <Category
            className={selectedCategory === "sentinel" ? "active" : ""}
            onClick={() => handleChangeCategory("sentinel")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 48 48"
              className="border"
            >
              <g fill="none">
                <path d="M48,10.5,38.4,0H0V48H48V10.5Z" stroke="none" />
                <path
                  d="M 1 1 L 1 47 L 47 47 L 47 10.88824081420898 L 37.95932388305664 1 L 1 1 M 0 0 L 38.40000152587891 0 L 48 10.5 L 48 48 L 0 48 L 0 0 Z"
                  stroke="none"
                  fill="#fff"
                />
              </g>
            </svg>
            <img src="images/roles/sentinel.png" className="content" />
          </Category>
          <Category
            className={selectedCategory === "controller" ? "active" : ""}
            onClick={() => handleChangeCategory("controller")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 48 48"
              className="border"
            >
              <g fill="none">
                <path d="M48,10.5,38.4,0H0V48H48V10.5Z" stroke="none" />
                <path
                  d="M 1 1 L 1 47 L 47 47 L 47 10.88824081420898 L 37.95932388305664 1 L 1 1 M 0 0 L 38.40000152587891 0 L 48 10.5 L 48 48 L 0 48 L 0 0 Z"
                  stroke="none"
                  fill="#fff"
                />
              </g>
            </svg>
            <img src="images/roles/controller.png" className="content" />
          </Category>
        </CategoriesRow>
        <AgentsColumn>
          {tempAgents.map(agent => (
            <AgentItem
              key={agent.value}
              onClick={() => setSelectedAgent(agent)}
              className={selectedAgent.value === agent.value ? "active" : ""}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="287"
                height="96"
                viewBox="0 0 287 96"
                className="border"
              >
                <g fill="none">
                  <path d="M287,10.5,277.4,0H0V96H287V10.5Z" stroke="none" />
                  <path
                    d="M 1 1 L 1 95 L 286 95 L 286 10.88825988769531 L 276.9592895507813 1 L 1 1 M 0 0 L 277.3999938964844 0 L 287 10.5 L 287 96 L 0 96 L 0 0 Z"
                    stroke="none"
                    fill="#fff"
                  />
                </g>
              </svg>
              <span className="text">{agent.name}</span>
            </AgentItem>
          ))}
        </AgentsColumn>
      </ContentModule>
    </Container>
  );
};

export default AgentsSection;
