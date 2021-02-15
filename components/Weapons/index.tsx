import { useState } from "react";
import { useComponentVisibility } from "../../hooks";
import {
  BackgroundModule,
  Bar,
  BarsModule,
  Container,
  ContentModule,
  ContentTitle,
  Select,
  SelectCurrent,
  SelectList,
  SelectOption,
  WeaponItem,
  WeaponsGrid,
  WeaponShowcase
} from "./styles";

type Category = {
  name: string;
  value: string;
};

type Weapon = {
  name: string;
  value: string;
  description: string;
  category: Category;
  price: number;
};

const weapons: Weapon[] = [
  {
    name: "Classic",
    value: "classic",
    description:
      "Seu modo primário faz disparos precisos quando o jogador está parado. Além disso, ela vem equipada com um modo alternativo de rajadas para combates de curta distância.",
    category: {
      name: "Armas leves",
      value: "pistols"
    },
    price: 200
  },
  {
    name: "Shorty",
    value: "shorty",
    description:
      "Uma escopeta rápida de cano curto e altamente letal a curta distância, mas que dispara apenas dois tiros antes de precisar recarregar. Combina bem com armas de longa distância.",
    category: {
      name: "Armas leves",
      value: "pistols"
    },
    price: 200
  },
  {
    name: "Frenzy",
    value: "frenzy",
    description:
      "A curta distância, dedo no gatilho! A longa distância... é melhor procurar outra arma.",
    category: {
      name: "Armas leves",
      value: "pistols"
    },
    price: 400
  },
  {
    name: "Ghost",
    value: "ghost",
    description:
      "Ghost é uma arma precisa que conta com um grande carregador, o que ajuda a compensar qualquer erro seu. Para acertar alvos distantes, é preciso manter a cadência de tiro controlada.",
    category: {
      name: "Armas leves",
      value: "pistols"
    },
    price: 500
  },
  {
    name: "Sheriff",
    value: "sheriff",
    description:
      "Seus projéteis de alto impacto provocam bastante recuo, então é preciso ter pulso firme. Quando você domina esta arma, seus inimigos logo percebem que nunca tiveram chance.",
    category: {
      name: "Armas leves",
      value: "pistols"
    },
    price: 800
  },
  {
    name: "Stinger",
    value: "stinger",
    description:
      "Esta submetralhadora tem mais potência a médias e longas distâncias, à custa da cadência de tiro e mobilidade.",
    category: {
      name: "Submetralhadoras",
      value: "submachines"
    },
    price: 1000
  },
  {
    name: "Spectre",
    value: "spectre",
    description:
      "Spectre é uma arma faz-tudo com ótimo equilíbrio entre dano, cadência de tiro e precisão – tudo isso a distâncias curtas e intermediárias.",
    category: {
      name: "Submetralhadoras",
      value: "submachines"
    },
    price: 1600
  },
  {
    name: "Bucky",
    value: "bucky",
    description:
      "Pesada, porém estável, Bucky tem um modo primário que serve para segurar avanços em esquinas acirradas ou ajudar na investida em áreas pequenas.",
    category: {
      name: "Escopetas",
      value: "shotguns"
    },
    price: 900
  },
  {
    name: "Judge",
    value: "judge",
    description:
      "Ela é estável com seus tiros normais, mas se torna volátil em disparos rápidos. Seu modo primário acaba com os alvos a curta distância.",
    category: {
      name: "Escopetas",
      value: "shotguns"
    },
    price: 1600
  },
  {
    name: "Bulldog",
    value: "bulldog",
    description:
      "Seu modo secundário permite que o atirador use a mira e descarregue rajadas curtas e precisas em qualquer um que se aproximar a distâncias intermediárias a longas.",
    category: {
      name: "Fuzis",
      value: "rifles"
    },
    price: 2100
  },
  {
    name: "Guardian",
    value: "guardian",
    description:
      "Guardian é mais pesado e oferece menos mobilidade do que outros fuzis, mas seus disparos são precisos e poderosos. Saia caçando inimigos a distâncias longas e intermediárias.",
    category: {
      name: "Fuzis",
      value: "rifles"
    },
    price: 2400
  },
  {
    name: "Phantom",
    value: "phantom",
    description:
      "Lance rajadas curtas e controladas para dispersar inimigos em qualquer lugar. Phantom tem um desempenho melhor quando o atirador está parado.",
    category: {
      name: "Fuzis",
      value: "rifles"
    },
    price: 2900
  },
  {
    name: "Vandal",
    value: "vandal",
    description:
      "Vandal concede bastante dano a longa distância e recompensa aqueles que focam em um único tiro certeiro na cabeça do alvo.",
    category: {
      name: "Fuzis",
      value: "rifles"
    },
    price: 2900
  },
  {
    name: "Marshal",
    value: "marshal",
    description:
      "Marshal é um fuzil de precisão ágil e de zoom único que consegue manter longe aqueles inimigos insistentes.",
    category: {
      name: "Fuzis de Precisão",
      value: "sniper_rifles"
    },
    price: 1100
  },
  {
    name: "Operator",
    value: "operator",
    description:
      "Operator é um fuzil de precisão intenso com zoom duplo altamente eficiente.",
    category: {
      name: "Fuzis de Precisão",
      value: "sniper_rifles"
    },
    price: 5000
  },
  {
    name: "Ares",
    value: "ares",
    description:
      "Ares conta com um carregador enorme e se destaca em fogo de supressão ou causando muito dano a grupos concentrados de inimigos.",
    category: {
      name: "Metralhadoras",
      value: "machines"
    },
    price: 1600
  },
  {
    name: "Odin",
    value: "odin",
    description:
      "Ares conta com um carregador enorme e se destaca em fogo de supressão ou causando muito dano a grupos concentrados de inimigos.",
    category: {
      name: "Metralhadoras",
      value: "machines"
    },
    price: 3200
  }
];

const options: Category[] = [
  {
    name: "Armas leves",
    value: "pistols"
  },
  {
    name: "Submetralhadoras",
    value: "submachines"
  },
  {
    name: "Escopetas",
    value: "shotguns"
  },
  {
    name: "Fuzis",
    value: "rifles"
  },
  {
    name: "Fuzis de Precisão",
    value: "sniper_rifles"
  },
  {
    name: "Metralhadoras",
    value: "machines"
  }
];

const WeaponsSection = (): JSX.Element => {
  const [selectedWeapon, setSelectedWeapon] = useState<Weapon>(weapons[0]);
  const [selectedCategory, setSelectedCategory] = useState<Category>({
    name: "Armas leves",
    value: "pistols"
  });
  const [tempWeapons, setTempWeapons] = useState<Weapon[]>(
    weapons.filter(weapon => weapon.category.value === "pistols")
  );
  const { isVisible, setIsVisible, ref } = useComponentVisibility();

  const handleChangeCategory = (category: Category) => {
    if (category.value === "pistols") {
      setTempWeapons(
        weapons.filter(weapon => weapon.category.value === "pistols")
      );
      setSelectedWeapon(
        weapons.filter(weapon => weapon.category.value === "pistols")[0]
      );
    } else if (category.value === "submachines") {
      setTempWeapons(
        weapons.filter(weapon => weapon.category.value === "submachines")
      );
      setSelectedWeapon(
        weapons.filter(weapon => weapon.category.value === "submachines")[0]
      );
    } else if (category.value === "shotguns") {
      setTempWeapons(
        weapons.filter(weapon => weapon.category.value === "shotguns")
      );
      setSelectedWeapon(
        weapons.filter(weapon => weapon.category.value === "shotguns")[0]
      );
    } else if (category.value === "rifles") {
      setTempWeapons(
        weapons.filter(weapon => weapon.category.value === "rifles")
      );
      setSelectedWeapon(
        weapons.filter(weapon => weapon.category.value === "rifles")[0]
      );
    } else if (category.value === "sniper_rifles") {
      setTempWeapons(
        weapons.filter(weapon => weapon.category.value === "sniper_rifles")
      );
      setSelectedWeapon(
        weapons.filter(weapon => weapon.category.value === "sniper_rifles")[0]
      );
    } else {
      setTempWeapons(
        weapons.filter(weapon => weapon.category.value === "machines")
      );
      setSelectedWeapon(
        weapons.filter(weapon => weapon.category.value === "machines")[0]
      );
    }

    setSelectedCategory(category);
  };

  return (
    <Container>
      <BackgroundModule>
        <img src="icons/weapons-background.svg" className="weapons" />
      </BackgroundModule>
      <BarsModule>
        <Bar className="left" />
        <Bar className="right" />
        <span className="text">Desafie seus limites</span>
      </BarsModule>
      <ContentModule>
        <ContentTitle>Conheça as armas</ContentTitle>
        <WeaponsGrid>
          {tempWeapons.map(weapon => (
            <WeaponItem
              key={weapon.value}
              className={weapon.value === selectedWeapon.value ? "active" : ""}
              onClick={() => setSelectedWeapon(weapon)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="259"
                height="94"
                viewBox="0 0 259 94"
                className="border"
              >
                <g fill="none">
                  <path d="M259,10.5,249.4,0H0V94H259V10.5Z" stroke="none" />
                  <path
                    d="M 1 1 L 1 93 L 258 93 L 258 10.88823699951172 L 248.9593200683594 1 L 1 1 M 0 0 L 249.3999938964844 0 L 259 10.5 L 259 94 L 0 94 L 0 0 Z"
                    stroke="none"
                    fill="#ece8e1"
                  />
                </g>
              </svg>
              <img src={`images/weapons/${weapon.value}.png`} />
            </WeaponItem>
          ))}
        </WeaponsGrid>
        <WeaponShowcase>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="460"
            height="397"
            viewBox="0 0 460 397"
            className="border"
          >
            <g fill="none">
              <path d="M460,10.5,450.4,0H0V397H460Z" stroke="none" />
              <path
                d="M 2 2 L 2 395 L 458 395 L 458 11.27645874023438 L 449.5186462402344 2 L 2 2 M 0 0 L 450.3999938964844 0 L 460 10.5 L 460 397 L 0 397 L 0 0 Z"
                stroke="none"
                fill="#ece8e1"
              />
            </g>
          </svg>
          <img
            src={`images/weapons/${selectedWeapon.value}.png`}
            className="weapon-img"
          />
          <div className="weapon-description">
            <span className="weapon-name">{selectedWeapon.name}.</span>
            <span className="weapon-category">{`• ${selectedWeapon.category.name}`}</span>
            <span className="weapon-tip">{selectedWeapon.description}</span>
            <span className="weapon-price">${selectedWeapon.price}</span>
          </div>
        </WeaponShowcase>
        <Select ref={ref}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="460"
            height="56"
            viewBox="0 0 460 56"
            className="border"
          >
            <g fill="none">
              <path d="M460,10.5,450.4,0H0V56H460Z" stroke="none" />
              <path
                d="M 1 1 L 1 55 L 459 55 L 459 10.88820266723633 L 449.9593505859375 1 L 1 1 M 0 0 L 450.3999938964844 0 L 460 10.5 L 460 56 L 0 56 L 0 0 Z"
                stroke="none"
                fill="#ece8e1"
              />
            </g>
          </svg>
          <SelectCurrent onClick={() => setIsVisible(value => !value)}>
            <span className="value">
              {selectedCategory.name}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="27.984"
                height="16"
                viewBox="0 0 27.984 16"
                style={{
                  transform: isVisible ? "rotateZ(180deg)" : ""
                }}
              >
                <path
                  d="M20.184,22.423,30.765,11.834a1.991,1.991,0,0,1,2.824,0,2.017,2.017,0,0,1,0,2.833l-11.989,12a2,2,0,0,1-2.758.058L6.771,14.675A2,2,0,0,1,9.6,11.842Z"
                  transform="translate(-6.188 -11.247)"
                  fill="#ece8e1"
                />
              </svg>
            </span>
          </SelectCurrent>
          {isVisible && (
            <SelectList>
              {options.map(option => (
                <SelectOption
                  key={option.value}
                  onClick={() => handleChangeCategory(option)}
                >
                  <span className="base"></span>
                  <span className="hover"></span>
                  <span className="content">{option.name}</span>
                </SelectOption>
              ))}
            </SelectList>
          )}
        </Select>
      </ContentModule>
    </Container>
  );
};

export default WeaponsSection;
