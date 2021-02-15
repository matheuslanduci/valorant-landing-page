import Button from "../Button";
import {
  AgentsModule,
  BackgroundModule,
  BarsModule,
  Container,
  ContentModule,
  DownloadButton
} from "./styles";

const PlaySection = (): JSX.Element => {
  return (
    <Container>
      <BackgroundModule>
        <img src="icons/valorant-logo-stroke.svg" className="logo" />
      </BackgroundModule>
      <BarsModule>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="599.219"
          height="658.019"
          viewBox="0 0 599.219 658.019"
          className="left"
        >
          <line
            x1="597"
            y1="656"
            transform="translate(1.109 1.01)"
            fill="none"
            stroke="#fff"
            stroke-width="3"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="599.219"
          height="658.019"
          viewBox="0 0 599.219 658.019"
          className="right"
        >
          <line
            y1="656"
            x2="597"
            transform="translate(1.109 1.01)"
            fill="none"
            stroke="#fff"
            stroke-width="3"
          />
        </svg>
      </BarsModule>
      <ContentModule>
        <div className="content-module">
          <span className="title">Jogue agora</span>
          <div className="button-row">
            <Button
              href="https://playvalorant.com/pt-br/"
              className="sign-in"
              variant="Secondary"
            >
              Já tenho uma conta
            </Button>
            <Button
              href="https://auth.riotgames.com/login#client_id=play-valorant-web-prod&prompt=signup"
              className="sign-up"
              variant={{
                background: "#fff",
                hover: "#0F1923",
                font: "#FF4655"
              }}
            >
              Ainda não tenho uma conta
            </Button>
          </div>
          <DownloadButton
            href="https://playvalorant.com/pt-br/download/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="base"></span>
            <span className="hover"></span>
            <span className="content">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="84"
                height="84"
                viewBox="0 0 84 84"
              >
                <g transform="translate(-0.5 -0.5)">
                  <path
                    d="M80.5,22.5V39.389a8.444,8.444,0,0,1-8.444,8.444H12.944A8.444,8.444,0,0,1,4.5,39.389V22.5"
                    transform="translate(0 32.667)"
                    fill="none"
                    stroke="#fff"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="8"
                  />
                  <path
                    d="M10.5,15,31.611,36.111,52.722,15"
                    transform="translate(10.889 19.056)"
                    fill="none"
                    stroke="#fff"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="8"
                  />
                  <path
                    d="M18,55.167V4.5"
                    transform="translate(24.5)"
                    fill="none"
                    stroke="#fff"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="8"
                  />
                </g>
              </svg>
            </span>
          </DownloadButton>
          <span className="info-text">
            Baixe agora
          </span>
        </div>
      </ContentModule>
      <AgentsModule>
        <img src="images/agents/reyna.png" className="reyna"/>
        <img src="images/agents/raze.png" className="raze"/>
      </AgentsModule>
    </Container>
  );
};

export default PlaySection;
