// import { Button } from "@/components/ui/button";
// import Image from "next/image";
// import Dashboard from "./dashboard/page";

// export default function Home() {
//   return (
//    <>
//    {/* <Button>subscribe</Button> */}
//    {/* <Dashboard/> */}
//    </>
//   );
// }


import { redirect } from 'next/navigation';

export default function Home() {
  // Redirect to /dashboard
  redirect('/dashboard');

  return null; // This component won't render because of the redirect.
}
