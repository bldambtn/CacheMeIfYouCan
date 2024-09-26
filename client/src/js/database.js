import { openDB } from "idb";

const initdb = async () =>
  openDB("jate", 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains("jate")) {
        console.log("jate database already exists");
        return;
      }
      db.createObjectStore("jate", { keyPath: "id", autoIncrement: true });
      console.log("jate database created");
    },
  });

// Added logic to the method below that accepts some content and adds it to the database
export const putDb = async (content) => {
  const jateDb = await openDB("jate", 1);
  const tx = jateDb.transaction("jate", "readwrite");
  const store = tx.objectStore("jate");
  const request = store.put({ content });

  try {
    const result = await request;
    console.log("Content saved to IndexedDB", result);
  } catch (error) {
    console.error("Error saving content to IndexedDB", error);
  }
};

// Added logic to the method below that gets all the content from the database
export const getDb = async () => {
  const jateDb = await openDB("jate", 1);
  const tx = jateDb.transaction("jate", "readonly");
  const store = tx.objectStore("jate");
  const request = store.getAll();

  try {
    const result = await request;
    console.log("Retrieved content from IndexedDB:", result);
    return result;
  } catch (error) {
    console.error("Error retrieving content from IndexedDB", error);
  }
};

initdb();
