import type { ReactNode } from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import styles from "./index.module.css";

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`not-slop.org`}
      description="An open label for handmade digital content"
    >
      <main
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <img
          src="img/not-slop-logo.svg"
          style={{
            marginTop: "70px",
            maxWidth: "500px",
            alignSelf: "center",
          }}
        />
        <div
          style={{
            alignSelf: "center",
            fontSize: "30px",
            marginBottom: "100px",
          }}
        >
          An open label for handmade digital content
        </div>
      </main>
    </Layout>
  );
}
