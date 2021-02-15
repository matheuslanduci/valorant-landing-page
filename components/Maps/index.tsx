import { useState } from "react";
import {
  BackgroundModule,
  Bar,
  BarModule,
  Container,
  Content,
  ContentBackground,
  ContentModule,
  ContentTitle,
  Coordinates,
  MapDescription,
  MapItem,
  MapsColumn,
  MapTitle
} from "./styles";

type Map = {
  name: string;
  value: string;
  coordinates: string;
  description: string;
  backgroundProperties: {
    width: string;
    height: string;
    top?: string;
  };
};

const maps: Map[] = [
  {
    name: "Haven",
    value: "haven",
    coordinates: "27°28'A' N 89°38'WZ' E",
    description:
      "Sob um mosteiro abandonado, é possível ouvir agentes se enfrentando pelo controle de três pontos distintos. Neste mapa, há mais áreas para controlar. Em compensação, os defensores também conseguem aproveitar o território extra para coordenar investidas mais agressivas.",
    backgroundProperties: {
      width: "100%",
      height: "808.26px"
    }
  },
  {
    name: "Bind",
    value: "bind",
    coordinates: "34°2'A' N 6°51'Z' W",
    description:
      "Dois pontos. Nenhuma área no meio. Você precisa escolher: direita ou esquerda? E aí, qual vai ser? Ambos os lados oferecem caminhos diretos para os atacantes, e dois teleportadores de sentido único facilitam o flanqueamento.",
    backgroundProperties: {
      width: "100%",
      height: "808.26px"
    }
  },
  {
    name: "Split",
    value: "split",
    coordinates: "35°41'CD' N 139°41'WX' E",
    description:
      "Se quiser avançar, é preciso subir. Separados por uma área central elevada, dois pontos fornecem movimentação rápida com duas cordas ascendentes. Cada ponto tem uma torre imponente que é vital para o controle da área. E não se esqueça: mantenha os olhos abertos e focados nas áreas elevadas antes que tudo vá pelos ares.",
    backgroundProperties: {
      width: "100%",
      height: "808.26px"
    }
  },
  {
    name: "Ascent",
    value: "ascent",
    coordinates: "45°26'BF' N 12°20'Q' E",
    description:
      "Com várias opções de posicionamento e conflito, um território aberto divide duas áreas em Ascent. Cada uma pode ser fortificada por portas explosivas irreversíveis que, quando derrubadas, forçam as equipes a destruí-las ou a acharem outra maneira de prosseguir. Não deixe que o inimigo tome o seu território.",
    backgroundProperties: {
      width: "100%",
      height: "808.26px"
    }
  },
  {
    name: "Icebox",
    value: "icebox",
    coordinates: "76°44'A' N 149°30'Z' E",
    description:
      "Seu próximo campo de batalha será uma área de escavação secreta da Kingdom retomada pela força do Ártico. Você precisará ter cuidado com os terrenos horizontais dos dois pontos principais, que são protegidos por neve e metal. Aproveite para usar as tirolesas, e seus inimigos nunca verão seu ataque iminente.",
    backgroundProperties: {
      width: "100%",
      height: "772.76px"
    }
  }
];

const MapsSection = (): JSX.Element => {
  const [selectedMap, setSelectedMap] = useState<Map>(maps[4]);

  return (
    <Container>
      <BackgroundModule>
        <img src="icons/maps-background.svg" className="maps" />
        <Bar className="left" />
        <img src="icons/valorant-logo.svg" className="logo" />
      </BackgroundModule>
      <ContentModule>
        <ContentBackground>
          <img
            src={`images/maps/${selectedMap.value}.png`}
            className="map"
            style={{
              width: selectedMap.backgroundProperties.width,
              height: selectedMap.backgroundProperties.height,
              top: selectedMap.backgroundProperties.top || 0
            }}
          />
        </ContentBackground>
      </ContentModule>
      <Content>
        <Coordinates>{selectedMap.coordinates}</Coordinates>
        <MapsColumn>
          {maps.map(map => (
            <MapItem
              key={map.value}
              onClick={() => setSelectedMap(map)}
              className={selectedMap.value === map.value ? "active" : ""}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="287"
                height="96"
                viewBox="0 0 287 96"
                className="border"
              >
                <g fill="rgba(355, 73, 100, 0)">
                  <path
                    d="M 286.5 95.5 L 0.5 95.5 L 0.5 0.5 L 277.1796569824219 0.5 L 286.5 10.69411182403564 L 286.5 95.5 Z"
                    stroke="none"
                  />
                  <path
                    d="M 1 1 L 1 95 L 286 95 L 286 10.88825988769531 L 276.9592895507813 1 L 1 1 M 0 0 L 277.3999938964844 0 L 287 10.5 L 287 96 L 0 96 L 0 0 Z"
                    stroke="none"
                    fill="#fff"
                  />
                </g>
              </svg>
              <span className="text">{map.name}</span>
            </MapItem>
          ))}
        </MapsColumn>
        <ContentTitle>Conheça os mapas</ContentTitle>
        <MapTitle>{selectedMap.name}</MapTitle>
        <MapDescription>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="240"
            height="218"
            viewBox="0 0 240 218"
            className="background"
          >
            <path d="M230.4,0H0V218H240V10.5Z" fill="#ff4655" />
          </svg>
          <p className="description">{selectedMap.description}</p>
          <a
            href="https://playvalorant.com/pt-br/maps/"
            target="_blank"
            rel="noopener noreferrer"
            className="button"
          >
            <span className="base" />
            <span className="hover" />
            <span className="content">
              <span>Galeria</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                style={{ marginLeft: 8 }}
              >
                <path
                  d="M5.977,13.852H16.608l-4.9,4.9,1.269,1.225,7-7-7-7L11.752,7.2l4.856,4.9H5.977Z"
                  transform="translate(-5.977 -5.977)"
                  fill="#ece8e1"
                />
              </svg>
            </span>
          </a>
        </MapDescription>
      </Content>
      <BarModule>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="171"
          height="52"
          viewBox="0 0 171 52"
          className="decor-top"
        >
          <rect
            width="123"
            height="52"
            transform="translate(48)"
            fill="#0f1923"
          />
          <path d="M48,52,0,0H48Z" fill="#0f1923" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="171"
          height="52"
          viewBox="0 0 171 52"
          className="decor-bot"
        >
          <rect
            width="123"
            height="52"
            transform="translate(48)"
            fill="#0f1923"
          />
          <path d="M48,0,0,52H48Z" fill="#0f1923" />
        </svg>
        <Bar className="right" />
        <Bar className="in-decor" />
      </BarModule>
    </Container>
  );
};

export default MapsSection;
