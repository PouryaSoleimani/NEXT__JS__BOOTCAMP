import prisma from "@/lib/prisma";

const Home = async () => {
  const users = await prisma.user.findMany();
  console.log('users: ', users)

  return (
    <section className="container min-h-dvh center-col gap-4 border border-stone-700 rounded-md p-3">
      <div className="grid grid-cols-3 gap-4 p-3 min-h-fit">
    {users.map((user) => (
      <div key={user.id} className="flex flex-col w-fit items-center gap-2 p-5 border bg-stone-900 rounded-md text-white">
        <h1 className="text-2xl font-bold">{user.name}</h1>
        <p className="text-sm text-gray-500">{user.email}</p>
      </div>
    ))}
      </div>
    </section>)
};

export default Home;
