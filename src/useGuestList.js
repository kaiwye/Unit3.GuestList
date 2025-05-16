import { useState, useEffect } from "react";

const API =
  "https://fsa-crud-2aa9294fe819.herokuapp.com/api/2504-FTB-ET-WEB-FT/guests";

export default function useGuestList(guestId = null) {
  const [guests, setGuests] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGuests = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(guestId ? `${API}/${guestId}` : API);
        if (!response.ok) throw new Error("Failed to fetch guests.");
        const json = await response.json();
        setGuests(guestId ? [json.data] : json.data);
        setIsLoading(false);
      } catch (e) {
        console.error(e);
        setError(e);
        setIsLoading(false);
      }
    };
    fetchGuests();
  }, [guestId]);
  return { guests, isLoading, error };
}

//   useEffect(() => {
//     fetch(API)
//       .then((response) => response.json())
//       .then((json) => {
//         console.log(json);
//         setGuests(json.data);
//         setIsLoading(false);
//       })
//       .catch((e) => {
//         console.error(e);
//         setError(e);
//         setIsLoading(false);
//       });
//   }, []);
//   return { guests, isLoading, error };
// }
