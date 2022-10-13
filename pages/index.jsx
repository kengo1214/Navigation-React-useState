import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import styles from "../styles/Home.module.scss";

export default function Home() {
  const [openMenu, setOpenMenu] = useState(false);
  const menuFunction = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div className={styles.body}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <h1>Navigation</h1>
          <p>React-useState</p>
        </div>

        <div className={styles.nothing}></div>

        <nav className={styles.nav}>
          <ul>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>News</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Contact</a>
              </Link>
            </li>
          </ul>
        </nav>

        <div className={styles.container}>
          <div className={styles.humburger} onClick={() => menuFunction()}>
            <span className={openMenu ? styles.open : undefined}></span>
            <span className={openMenu ? styles.open : undefined}></span>
            <span className={openMenu ? styles.open : undefined}></span>
            {/* <p className={openMenu ? styles.open : undefined}>Menu</p> */}
          </div>
        </div>
      </header>

      {/*🔥################# close #################🔥*/}

      <div
        className={`${styles.drawerMenu} ${openMenu ? styles.open : undefined}`}
      >
        <ul>
          <div className={styles.close} onClick={() => menuFunction()}>
            <div className={styles.border}>
              <div className={styles.closeBox}>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
          <li>
            <Link href="/">
              <a>
                <h1 className={styles.mainTitle}>Home</h1>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>
                <h1 className={styles.mainTitle}>Menu</h1>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>
                <h1 className={styles.mainTitle}>Contact</h1>
              </a>
            </Link>
          </li>
        </ul>
      </div>

      {/* 🔥🔴元に戻したい場合（自分が少し手を加えてるバージョン）🔴🔥 */}

      {/* <div
        className={`${styles.drawerMenu} ${openMenu ? styles.open : undefined}`}
      >
        <ul>
          <div className={styles.close} onClick={() => menuFunction()}>
            <div className={styles.closeBox}>
              <span></span>
              <span></span>
            </div>
          </div>
          <li>
            <Link href="/">
              <a>
                <h1 className={styles.mainTitle}>Home</h1>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>
                <h1 className={styles.mainTitle}>Menu</h1>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>
                <h1 className={styles.mainTitle}>Contact</h1>
              </a>
            </Link>
          </li>
        </ul>
      </div> */}
    </div>
  );
}
