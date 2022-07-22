import { Layout as AntLayout } from "antd";
import "antd/dist/antd.min.css";
import { Outlet } from "react-router-dom";
import styles from "./Layout.module.scss";

export function Layout() {
  return (
    <AntLayout className={styles.page}>
      <AntLayout.Content>
        <Outlet />
      </AntLayout.Content>
    </AntLayout>
  );
}

export default Layout;
