"use client"; // Bu yerda 'Client Component' ekanligini belgilaymiz

import { useSession } from "next-auth/react";

const Profile = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (!session) {
    return <p>You need to be authenticated to view this page.</p>;
  }

  return (
    <div className="container">
      <h1 className="text-center font-bold text-yellow-500">User Profile</h1>
      <div className="flex flex-col justify-center items-center">
        <p>
          <strong>Name:</strong> {session.user?.name}
        </p>
        <p>
          <strong>Email:</strong> {session.user?.email}
        </p>
      </div>
    </div>
  );
};

export default Profile;
