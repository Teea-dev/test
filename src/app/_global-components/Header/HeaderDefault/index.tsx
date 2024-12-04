import React from "react";
import s from "./headerDefault.module.scss";
import Image from "next/image";
import Link from "next/link";
import cn from "clsx";
import { MdKeyboardArrowLeft } from "react-icons/md";
interface PropTypes {
  children?: React.ReactNode | React.JSX.Element;
}

function HeaderDefault({ children = null }: PropTypes) {
  return (
    <header className={cn("layout-block-inner", s.wrapper)}>
      <div className={s.container}>
        <Link className={s.logo} href={"/"}>
        </Link>
        <nav className={s.childComponent}>{children}</nav>
      </div>
    </header>
  );
}

export default HeaderDefault;
