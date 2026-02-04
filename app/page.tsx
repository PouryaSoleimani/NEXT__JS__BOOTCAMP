import prisma from "@/lib/prisma";

const Home = async () => {
  const users = await prisma.user.findMany();
  console.log('users: ', users)

  return <div className="container grid grid-cols-3 gap-4 p-3 min-h-dvh  place-items-center">
    {users.map((user) => (
      <div key={user.id} className="flex flex-col w-fit items-center gap-2 p-5 border bg-stone-800 rounded-md text-white">
        <h1 className="text-2xl font-bold">{user.name}</h1>
        <p className="text-sm text-gray-500">{user.email}</p>
      </div>
    ))}
  </div>;
};

export default Home;
