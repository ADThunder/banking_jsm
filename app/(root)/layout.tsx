interface RootLayout {
  children: React.ReactNode;
}

const RootLayout = ({ children }: RootLayout) => {
  return (
    <main>
      sidebar
      {children}
    </main>
  );
};

export default RootLayout;
