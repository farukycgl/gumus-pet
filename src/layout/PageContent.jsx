import React from "react";

const PageContent = ({ children }) => {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 min-h-[calc(100vh-200px)]">
      {children}
    </main>
  );
};

export default PageContent;
