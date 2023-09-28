import { FC } from "react";
import {
  ApplyBtn,
  NavItem,
  NavLeft,
  NavList,
  NavRight,
  NavbarWrap,
} from "./navbar.s";
import { Container } from "@/styles/style-components";
import Image from "next/image";
import { LanguageButton } from "./components";
import Link from "next/link";
import { mockNavigation } from "@/mock";
import { useRouter } from "next/router";

interface INavbarProps {}

export const Navbar: FC<INavbarProps> = ({}) => {
  const router = useRouter();

  return (
    <NavbarWrap>
      <Container>
        <NavLeft>
          <Link href="/">
            <Image
              height={36}
              src={require("../../assets/images/logo.png")}
              alt="Brand logo"
            />
          </Link>
        </NavLeft>
        <NavList>
          {mockNavigation.map((nav) => (
            <NavItem
              key={nav.id}
              active={
                nav?.href?.split("/")[1] === router?.pathname?.split("/")[1]
              }
            >
              <Link href={nav.href}>{nav.name}</Link>
            </NavItem>
          ))}
        </NavList>
        <NavRight>
          <Link href="/jobs">
            <ApplyBtn>Sign up</ApplyBtn>
          </Link>
          <LanguageButton />
        </NavRight>
      </Container>
    </NavbarWrap>
  );
};
