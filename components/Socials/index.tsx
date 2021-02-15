import Button from "../Button";
import {
  BackgroundModule,
  Container,
  ContentModule,
  SocialsColumn
} from "./styles";

const SocialsSection = (): JSX.Element => {
  return (
    <Container>
      <BackgroundModule>
        <img src="icons/socials-background.svg" className="social" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="171"
          height="52"
          viewBox="0 0 171 52"
          className="decor-top-left"
        >
          <rect width="123" height="52" fill="#ff4655" />
          <path d="M0,52,48,0H0Z" transform="translate(123)" fill="#ff4655" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="52"
          height="340.5"
          viewBox="0 0 52 340.5"
          className="decor-left"
        >
          <g transform="translate(0 -4540.5)">
            <g transform="translate(0 4711.5) rotate(-90)">
              <rect width="123" height="52" fill="#ff4655" />
              <path
                d="M0,52,48,0H0Z"
                transform="translate(123)"
                fill="#ff4655"
              />
            </g>
            <g transform="translate(52 4710) rotate(90)">
              <rect width="123" height="52" fill="#ff4655" />
              <path
                d="M0,0,48,52H0Z"
                transform="translate(123)"
                fill="#ff4655"
              />
            </g>
          </g>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="171"
          height="52"
          viewBox="0 0 171 52"
          className="decor-top-right"
        >
          <rect
            width="123"
            height="52"
            transform="translate(48)"
            fill="#ff4655"
          />
          <path d="M48,52,0,0H48Z" fill="#ff4655" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="52"
          height="340.5"
          viewBox="0 0 52 340.5"
          className="decor-right"
        >
          <g transform="translate(0 171) rotate(-90)">
            <rect width="123" height="52" fill="#ff4655" />
            <path d="M0,0,48,52H0Z" transform="translate(123)" fill="#ff4655" />
          </g>
          <g transform="translate(52 169.5) rotate(90)">
            <rect width="123" height="52" fill="#ff4655" />
            <path d="M0,52,48,0H0Z" transform="translate(123)" fill="#ff4655" />
          </g>
        </svg>
      </BackgroundModule>
      <ContentModule>
        <div className="content-module">
          <span className="title">Confira nossas redes socais</span>
        </div>
        <SocialsColumn>
          <Button
            href="https://www.facebook.com/valorantbrasil"
            variant="Primary"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="7.498"
              height="14"
              viewBox="0 0 7.498 14"
              style={{ marginRight: 8 }}
            >
              <path
                d="M8.616,7.875l.389-2.534H6.574V3.7A1.267,1.267,0,0,1,8,2.328H9.108V.171A13.478,13.478,0,0,0,7.146,0,3.093,3.093,0,0,0,3.835,3.41V5.341H1.609V7.875H3.835V14H6.574V7.875Z"
                transform="translate(-1.609)"
                fill="#ff4655"
              />
            </svg>
            Facebook
          </Button>
          <Button
            href="https://www.youtube.com/channel/UCgWiuB2PQIUhJgEN9No281g"
            variant="Primary"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19.911"
              height="14"
              viewBox="0 0 19.911 14"
              style={{ marginRight: 8 }}
            >
              <path
                d="M20.545,6.691a2.5,2.5,0,0,0-1.76-1.772C17.232,4.5,11.006,4.5,11.006,4.5s-6.226,0-7.779.419a2.5,2.5,0,0,0-1.76,1.772,26.245,26.245,0,0,0-.416,4.824,26.245,26.245,0,0,0,.416,4.824,2.465,2.465,0,0,0,1.76,1.743c1.553.419,7.779.419,7.779.419s6.226,0,7.779-.419a2.465,2.465,0,0,0,1.76-1.743,26.245,26.245,0,0,0,.416-4.824,26.245,26.245,0,0,0-.416-4.824ZM8.969,14.475V8.554l5.2,2.961-5.2,2.96Z"
                transform="translate(-1.05 -4.5)"
                fill="#ff4655"
              />
            </svg>
            Youtube
          </Button>
          <Button
            href="https://www.instagram.com/valorantbrasil"
            variant="Primary"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              style={{ marginRight: 8 }}
            >
              <g transform="translate(-2 -2)">
                <path
                  d="M6.5,3h7A3.5,3.5,0,0,1,17,6.5v7A3.5,3.5,0,0,1,13.5,17h-7A3.5,3.5,0,0,1,3,13.5v-7A3.5,3.5,0,0,1,6.5,3Z"
                  fill="none"
                  stroke="#ff4655"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
                <path
                  d="M17.635,14.324a2.8,2.8,0,1,1-2.359-2.359A2.8,2.8,0,0,1,17.635,14.324Z"
                  transform="translate(-4.835 -4.765)"
                  fill="none"
                  stroke="#ff4655"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
                <path
                  d="M26.25,9.75h0"
                  transform="translate(-12.4 -3.6)"
                  fill="none"
                  stroke="#ff4655"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
              </g>
            </svg>
            Instagram
          </Button>
          <Button href="https://twitter.com/valorantbrasil" variant="Primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17.237"
              height="14"
              viewBox="0 0 17.237 14"
              style={{ marginRight: 8 }}
            >
              <path
                d="M15.466,6.87c.011.153.011.306.011.459A9.983,9.983,0,0,1,5.425,17.381,9.983,9.983,0,0,1,0,15.795a7.308,7.308,0,0,0,.853.044,7.075,7.075,0,0,0,4.386-1.509,3.539,3.539,0,0,1-3.3-2.45,4.455,4.455,0,0,0,.667.055,3.736,3.736,0,0,0,.93-.12A3.533,3.533,0,0,1,.7,8.346V8.3a3.558,3.558,0,0,0,1.6.448A3.538,3.538,0,0,1,1.2,4.026a10.042,10.042,0,0,0,7.284,3.7A3.988,3.988,0,0,1,8.4,6.914,3.536,3.536,0,0,1,14.514,4.5a6.955,6.955,0,0,0,2.242-.853A3.523,3.523,0,0,1,15.2,5.59a7.082,7.082,0,0,0,2.034-.547A7.594,7.594,0,0,1,15.466,6.87Z"
                transform="translate(0 -3.381)"
                fill="#ff4655"
              />
            </svg>
            Twitter
          </Button>
          <Button
            href="https://discord.com/invite/valorant-br"
            variant="Primary"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12.25"
              height="14"
              viewBox="0 0 12.25 14"
              style={{ marginRight: 8 }}
            >
              <path
                d="M8.127,6.65a.717.717,0,1,1-.714-.777A.746.746,0,0,1,8.127,6.65ZM4.858,5.873a.78.78,0,0,0,0,1.554.746.746,0,0,0,.714-.777A.741.741,0,0,0,4.858,5.873ZM12.25,1.442V14c-1.764-1.558-1.2-1.043-3.248-2.947l.371,1.3H1.435A1.438,1.438,0,0,1,0,10.906V1.442A1.438,1.438,0,0,1,1.435,0h9.38A1.438,1.438,0,0,1,12.25,1.442ZM10.255,8.078A9.374,9.374,0,0,0,9.247,4,3.462,3.462,0,0,0,7.28,3.262l-.1.112a4.659,4.659,0,0,1,1.743.889A5.948,5.948,0,0,0,3.7,4.06c-.259.119-.413.2-.413.2a4.722,4.722,0,0,1,1.841-.917l-.07-.084A3.462,3.462,0,0,0,3.087,4,9.374,9.374,0,0,0,2.079,8.078,2.538,2.538,0,0,0,4.214,9.142s.259-.315.469-.581a2.177,2.177,0,0,1-1.225-.826c.1.072.273.166.287.175a5.1,5.1,0,0,0,4.368.245,4.006,4.006,0,0,0,.805-.413,2.209,2.209,0,0,1-1.267.833c.21.266.462.567.462.567A2.559,2.559,0,0,0,10.255,8.078Z"
                fill="#ff4655"
              />
            </svg>
            Discord
          </Button>
        </SocialsColumn>
        <img src="images/misc/riot.png" className="riot-logo" />
      </ContentModule>
    </Container>
  );
};

export default SocialsSection;
