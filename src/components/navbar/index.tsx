"use client";
import Link from "next/link";
import React from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import Switch from "@/utils/switch";
import { useSelector } from "react-redux";

export const Navbar = () => {
  // const { darkMode } = useSelector((states: any) => states.general);
  // console.log("DARKMODE:", darkMode);

  return (
    <div className={styles.navbar}>
      <Link className={styles.logo} key={"0"} href={"/"}>
        <Image
          src="/logo.png"
          width={70}
          height={105}
          alt="Picture of the author"
        />
      </Link>
      <div className={styles.linkContainer}>
        <Switch />
        {headers.map((i) => (
          <Link className={styles.links} key={i.id} href={i.page}>
            {i.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

const headers = [
  {
    id: "1",
    title: "About",
    page: "/about",
  },
  {
    id: "2",
    title: "Services",
    page: "/services",
  },
  {
    id: "3",
    title: "Projects",
    page: "/projects",
  },
  {
    id: "4",
    title: "Contact",
    page: "/contact",
  },
];
