import { useEffect } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase/Firebase";

const Storage = () => {
  const fetchUserLocation = async () => {
    const url = process.env.REACT_APP_IP_API;
    try {
      const response = await fetch(url, {
        method: "GET",
      });

      const result = await response.text();
      return result;
    } catch (error) {
      throw error;
    }
  };

  const InsertIntoDatabase = async (ip) => {
    try {
      await addDoc(collection(db, "UserIp"), {
        ip: ip,
      });
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  useEffect(() => {
    const fetchAndInsert = async () => {
      try {
        const ip = await fetchUserLocation();
        if (ip) {
          await InsertIntoDatabase(ip);
        }
      } catch (error) {
        throw error;
      }
    };
    fetchAndInsert();
  }, []);
  return <></>;
};

export default Storage;
