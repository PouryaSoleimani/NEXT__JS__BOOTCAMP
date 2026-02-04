"use client";
import { Trash2Icon } from "lucide-react";

type SingleUserComponentType = {
    id: number;
    name: string;
    email: string;
    deleteFunction: Promise<void>;
};

const SingleUserComponent = ({
    id,
    name,
    email,
    deleteFunction,
}: SingleUserComponentType) => {
    return (
        <div className="flex flex-col w-fit items-center gap-2 pt-4 border bg-stone-900 rounded-md text-white">
            <div className="px-4">
                <h1 className="text-2xl font-bold">{id}.{name}</h1>
                <p className="text-sm text-gray-500">{email}</p>
            </div>
            <div className="flex items-center-safe p-1.5 justify-end w-full">
                <button
                    onClick={() => deleteFunction}
                    className="w-fit bg-rose-900 p-2 rounded-sm">
                    <Trash2Icon />
                </button>
            </div>
        </div>
    );
};

export default SingleUserComponent;
