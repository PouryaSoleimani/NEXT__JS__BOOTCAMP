import SingleUserComponent from "@/components/SingleUserComponent";
import prisma from "@/lib/prisma";

const Home = async () => {
    const users = await prisma.user.findMany();
console.info("users", users);
    return (
        <section className="container min-h-dvh center-col gap-4 border border-stone-700 rounded-md p-3">
            <div className="grid grid-cols-3 gap-4 p-3 min-h-fit">
                {users?.map((user) => (
                    <SingleUserComponent
                        key={user.id}
                        name={user.name}
                        id={user.id}
                        email={user.email}
                    />
                ))}
            </div>
        </section>
    );
};

export default Home;
