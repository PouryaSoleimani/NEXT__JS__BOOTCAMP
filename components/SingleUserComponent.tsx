"use client";

type SingleUserComponentType = {
   id: number;
   name: string;
   email: string;
};

const SingleUserComponent = ({
   id,
   name,
   email,
}: SingleUserComponentType) => {
   return (
      <div className="flex flex-col w-auto items-center py-4  border bg-stone-900 rounded-lg text-white">
         <div className="px-4">
            <h1 className="text-2xl font-bold">
               {id}.{name}
            </h1>
            <p className="text-sm text-gray-500">{email}</p>
         </div>
      </div>
   );
};

export default SingleUserComponent;
