import {
  AgentsModule,
  BackgroundModule,
  Bar,
  BarsModule,
  Container,
  ContentModule
} from "./styles";

import Button from "../Button";

const MainSection = (): JSX.Element => {
  return (
    <Container>
      <BackgroundModule>
        <img src="icons/valorant-background-logo.svg" />
      </BackgroundModule>
      <BarsModule>
        <Bar className="left" />
        <Bar className="right" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="52"
          height="24"
          viewBox="0 0 52 24"
          className="badge"
        >
          <path d="M0,0H40L52,12,40,24H0L12,12Z" fill="#ff4655" />
        </svg>
        <Bar className="in-decor" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="171"
          height="52"
          viewBox="0 0 171 52"
          className="decor"
        >
          <g transform="translate(0 -563)">
            <rect
              width="123"
              height="52"
              transform="translate(0 563)"
              fill="#0f1923"
            />
            <path
              d="M0,0,48,52H0Z"
              transform="translate(123 563)"
              fill="#0f1923"
            />
          </g>
        </svg>
      </BarsModule>
      <AgentsModule>
        <img src="images/agents/jett.png" className="jett" />
        <img src="images/agents/phoenix.png" className="phoenix" />
      </AgentsModule>
      <ContentModule>
        <div className="icon-wrapper">
          <img src="icons/valorant-icon.svg" />
        </div>
        <img src="icons/valorant-logo.svg" className="logo" />
        <span className="description">
          Um jogo de tiro tático 5x5 com personagens originais
        </span>
        <Button href="https://playvalorant.com/pt-br/" variant="Primary">
          Jogue grátis
        </Button>
        <Button
          href="https://auth.riotgames.com/login#client_id=play-valorant-web-prod&prompt=signup"
          variant="Secondary"
        >
          Criar minha conta
        </Button>
      </ContentModule>
    </Container>
  );
};

export default MainSection;
