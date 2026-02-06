const Home = async () => {
   // const users = await prisma?.user?.findMany();
   // console.info("USERS =>", users);
   return (
      <section className="container min-h-dvh center-col border border-stone-700 rounded-md p-3">
         {/* {users.length < 1 && <div>NO USERS FOUND</div>}
         <div className="grid grid-cols-3 gap-2">
            {users?.map((user: UserType) => (
               <SingleUserComponent
                  key={user.id}
                  name={user.name}
                  id={user.id}
                  email={user.email}
               />
            ))}
         </div> */}
      </section>
   );
};

export default Home;
