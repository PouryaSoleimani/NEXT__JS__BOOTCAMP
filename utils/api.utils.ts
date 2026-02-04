import { NextResponse } from "next/server";

export async function wrapWithTryCatch<T>(callback: () => Promise<T>) {
   try {
      return await callback();
   } catch (error) {
      if (error instanceof Error) {
         return NextResponse.json({
            ok: false,
            status: 500,
            name: error.name,
            message: `${error.message.slice(0, 50)}  ...`,
         });
      }
   }
}
