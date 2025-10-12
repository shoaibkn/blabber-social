// "use server";
// import { client } from "@/lib/prisma";
// import { auth } from "../../auth";
// import { headers } from "next/headers";
// import { refreshToken } from "@/lib/fetch";

// const onBoardUser = async () => {
//   const session = await auth.api.getSession({
//     headers: await headers(),
//   });

//   console.log("session", session);
//   const found = await client.user.findUnique({
//     where: {
//       id: session.user.id,
//     },
//     include: {
//       Integrations: true,
//       Automations: true,
//     },
//   });

//   if (found) {
//     if (found.Integrations.length > 0) {
//       const today = new Date();
//       const time_left =
//         found.Integrations[0].expiresAt?.getTime() - today.getTime();
//       const days = Math.round(time_left / (1000 * 60 * 60 * 24));
//       if (days < 5) {
//         console.log("refreshing token");
//         const refresh = await refreshToken(found.Integrations[0].token);
//         console.log("refresh", refresh);
//         const expire_date = today.setDate(today.getDate() + 60); // 60 days
//         const updated = await client.integrations.update({
//           where: {
//             id: found.Integrations[0].id,
//           },
//           data: {
//             token: refresh.access_token,
//             expiresAt: new Date(expire_date),
//           },
//         });
//         console.log("updated", updated);
//         if (!updated) {
//           console.log("unable to update token");
//         }
//       }
//     }
//   }
// };

// export { onBoardUser };
