import { useState } from "react";
import {
  BackgroundModule,
  Bar,
  BarsModule,
  Collection,
  CollectionDescription,
  Container,
  ContentModule,
  ContentTitle,
  Option,
  OptionsRow
} from "./styles";

type Collection = {
  value: string;
  title: string;
  imagePath: string;
};

const collections: Collection[] = [
  {
    value: "saqueadora",
    title: "A coleção saqueadora está de volta",
    imagePath: "images/collections/saqueadora.jpg"
  },
  {
    value: "ancifogo",
    title: "Nova coleção: Ancifogo!",
    imagePath: "images/collections/ancifogo.jpg"
  },
  {
    value: "oni",
    title: "A nova coleção Oni está disponível na loja",
    imagePath: "images/collections/oni.png"
  },
  {
    value: "xblast",
    title: "Brinque de matar seus oponentes com a coleção blastx",
    imagePath: "images/collections/xblast.jpg"
  },
  {
    value: "nebulosa",
    title: "Nova coleção: Nebulosa!",
    imagePath: "images/collections/nebulosa.jfif"
  }
];

const CollectionsSection = (): JSX.Element => {
  const [selectedCollection, setSelectedCollection] = useState<Collection>(
    collections[0]
  );
  return (
    <Container>
      <BackgroundModule>
        <img src="icons/collections-background.svg" className="collections" />
      </BackgroundModule>
      <BarsModule>
        <span className="text">Jogue em seu próprio estilo</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="171"
          height="52"
          viewBox="0 0 171 52"
          className="decor"
        >
          <rect
            width="123"
            height="52"
            transform="translate(48)"
            fill="#0f1923"
          />
          <path d="M48,52,0,0H48Z" fill="#0f1923" />
        </svg>
        <Bar className="left" />
        <Bar className="right" />
      </BarsModule>
      <ContentModule>
        <ContentTitle>Coleções</ContentTitle>
        <Collection>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="1140"
            height="579"
            viewBox="0 0 1140 579"
          >
            <defs>
              <pattern
                id="pattern"
                preserveAspectRatio="xMidYMid slice"
                width="100%"
                height="100%"
                viewBox="0 0 1000 488"
              >
                <image
                  width="1000"
                  height="488"
                  xlinkHref={selectedCollection.imagePath}
                />
              </pattern>
            </defs>
            <path d="M1140,21,1127.2,0H0V579H1140V21Z" fill="url(#pattern)" />
          </svg>
          <CollectionDescription>
            <div className="text">{selectedCollection.title}</div>
            <a
              href="https://playvalorant.com/pt-br/"
              target="_blank"
              rel="noopener noreferrer"
              className="button"
            >
              <span className="base" />
              <span className="hover" />
              <span className="content">
                <span>Comprar agora</span>
              </span>
            </a>
          </CollectionDescription>
        </Collection>
        <OptionsRow>
          {collections.map(collection => (
            <Option
              key={collection.value}
              onClick={() => setSelectedCollection(collection)}
              className={
                selectedCollection.value === collection.value ? "active" : ""
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="16"
                viewBox="0 0 60 16"
              >
                <g fill="none">
                  <path d="M57.659,0H0V16H60V3.111Z" stroke="none" />
                  <path
                    d="M 1 1 L 1 15 L 59 15 L 59 3.445381164550781 L 57.15956878662109 1 L 1 1 M 0 0 L 57.65853118896484 0 L 60 3.111109733581543 L 60 16 L 0 16 L 0 0 Z"
                    stroke="none"
                    fill="#ff4655"
                  />
                </g>
              </svg>
            </Option>
          ))}
        </OptionsRow>
      </ContentModule>
    </Container>
  );
};

export default CollectionsSection;
