import React from "react";

import HeaderAdminPage from "../../components/admin/headerAdminPanel/HeaderAdminPanel";
import News from "../../components/admin/editNews/NewsField";
const NewsPage = () => {
  return (
    <div>
      <HeaderAdminPage />
      <News />
    </div>
  );
};

export default NewsPage;