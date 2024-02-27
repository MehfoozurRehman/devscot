import { Head } from "@router";
import { Outlet } from "react-router-dom";

export default () => {
  return (
    <>
      <Head
        title="Devscot"
        image="/favicon.ico"
        url="https://vitefilerouter.com"
        description="Devscot"
      />
      <Outlet />
    </>
  );
};
