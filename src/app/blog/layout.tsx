const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <header>Cabecera Blog</header>

      <main>
        <section>{children}</section>
        <aside>
          <form action="">
            <input type="search" />
            <input type="submit" />
          </form>
        </aside>
      </main>

      <footer>Pie del Blog</footer>
    </>
  )
}

export default Layout