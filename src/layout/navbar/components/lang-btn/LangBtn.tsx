import { useEffect, useRef, useState } from "react";
import { FC } from "react";
import {
  LanguageActiveItem,
  LanguageButtonWrap,
  LanguageItem,
  LanguageList,
} from "./lang-btn.s";
import { langList } from "@/mock";
import Image from "next/image";

interface ILanguageButtonProps {}

export const LanguageButton: FC<ILanguageButtonProps> = ({}) => {
  const [language, setLanguage] = useState(langList[0]);
  const [languageOpen, setLanguageOpen] = useState(false);

  const languageSelectorRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        languageSelectorRef.current &&
        !languageSelectorRef.current.contains(event.target as Node)
      ) {
        setLanguageOpen(false);
      }
    };

    const handleScroll = () => {
      setLanguageOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <LanguageButtonWrap>
      <LanguageActiveItem onClick={() => setLanguageOpen(true)}>
        {language.language}
        <Image src={language.flagImage} alt="flag image" />
      </LanguageActiveItem>
      <LanguageList open={languageOpen} ref={languageSelectorRef}>
        <LanguageItem
          onClick={() => {
            setLanguageOpen(false);
          }}
        >
          <a>
            {language.language}
            <Image src={language.flagImage} alt="flag image" />
          </a>
        </LanguageItem>
        {langList
          ?.filter((item) => item.key !== language.key)
          .map((item, index) => (
            <LanguageItem
              key={index}
              onClick={() => {
                setLanguageOpen(false);
                setTimeout(() => {
                  setLanguage(item);
                }, 250);
              }}
            >
              <a>
                {item.language}
                <Image src={item.flagImage} alt="flag image" />
              </a>
            </LanguageItem>
          ))}
      </LanguageList>
    </LanguageButtonWrap>
  );
};
