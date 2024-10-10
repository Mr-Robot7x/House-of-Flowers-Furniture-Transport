function Continer({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main className="container md:p-0 px-2 ">{children}</main>;
}

export default Continer;
