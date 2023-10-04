import { useState, useEffect } from "react";
import { useSession as useNextAuthSession } from "next-auth/react";

const useSession = () => {
  const [session, setSession] = useState(null);
  const { data: sessionData, status } = useNextAuthSession();

  useEffect(() => {
    if (status === "authenticated" && sessionData) {
      setSession(sessionData);
    }
  }, [status, sessionData]);

  return session;
};

export default useSession;
