const Layout = ({ children }) => {
  return (
    <div id="layout" className="relative min-h-full ">
      <div id="mainBody" className="md:pb-[9rem] pb-16 w-full">
        {children}
      </div>
    </div>
  );
};

export default Layout;
