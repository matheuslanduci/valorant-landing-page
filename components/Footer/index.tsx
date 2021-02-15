import { Container } from "./styles";

const Footer = (): JSX.Element => {
  return (
    <Container>
      <p>
        Esse site é apenas uma versão feita por um fã do jogo e de CSS. Confira
        o{" "}
        <a
          href="https://playvalorant.com/pt-br/"
          target="_blank"
          rel="noopener noreferrer"
        >
          site oficial
        </a>
        .
      </p>
      <span>
        Feito por{" "}
        <a
          href="https://matheuslanduci.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Matheus Landuci
        </a>{" "}
        em{" "}
        <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer">
          NextJS
        </a>
        .
      </span>
    </Container>
  );
};

export default Footer;
