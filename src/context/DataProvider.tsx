import useDataStore from "@/store/dataStore";
import { DataContext } from "./DataContext";

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { posts, users, setPosts, setUsers } = useDataStore();

  return (
    <DataContext.Provider value={{ posts, setPosts, users, setUsers }}>
      {children}
    </DataContext.Provider>
  );
};
