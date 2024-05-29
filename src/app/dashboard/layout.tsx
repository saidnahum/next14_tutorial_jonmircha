const DashboardLayout = ({ 
    children,
    analytics,
    chat,
    video
  }: { 
    children: React.ReactNode,
    analytics: React.ReactNode,
    chat: React.ReactNode,
    video: React.ReactNode 
  }) => {
  return (
    <>
      <article>
        <h1>{children}</h1>
      </article>

      <section>
        <aside>{analytics}</aside>
        <aside>{chat}</aside>
        <aside>{video}</aside>
      </section>
    </>
  )
}

export default DashboardLayout