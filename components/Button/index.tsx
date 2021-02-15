import { FC } from "react";
import { Container } from "./styles";

type Variant = {
  background: string;
  hover: string;
  font: string;
};

type Props = {
  variant: "Primary" | "Secondary" | Variant;
  href: string;
  className?: string;
};

const Button: FC<Props> = ({
  children,
  variant,
  href,
  className
}): JSX.Element => {
  const getVariant = () => {
    switch (variant) {
      default:
        return variant;
      case "Primary":
        return {
          background: "#ff4655",
          hover: "#0f1923",
          font: "#ece8e1"
        };
      case "Secondary":
        return {
          background: "#0f1923",
          hover: "#ff4655",
          font: "#ece8e1"
        };
    }
  };

  const variantStyle = getVariant();

  return (
    <Container
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="246"
        height="54"
        viewBox="0 0 246 54"
        className="background"
      >
        <g transform="matrix(1, 0, 0, 1, 0, 0)">
          <path d="M236.4,0H0V54H246V10.5Z" fill={variantStyle.background} />
        </g>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="246"
        height="54"
        viewBox="0 0 246 54"
        className="background-hover"
      >
        <g transform="matrix(1, 0, 0, 1, 0, 0)">
          <path d="M236.4,0H0V54H246V10.5Z" fill={variantStyle.hover} />
        </g>
      </svg>
      <span className="content" color={variantStyle.font}>
        {children}
      </span>
    </Container>
  );
};

export default Button;
