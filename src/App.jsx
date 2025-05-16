import { useEffect, useState } from "react";
import GuestList from "./GuestList";
import GuestDetails from "./GuestDetails";

export default function App() {
  const [guestId, setGuestId] = useState(null);
  return (
    <>
      {guestId ? (
        <GuestDetails setGuestId={setGuestId} />
      ) : (
        <GuestList setGuestId={setGuestId} />
      )}
    </>
  );
}
