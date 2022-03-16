import MyContext from './MyContext';

function MyProvider({ children }) {
  const reveal = {};

  return <MyContext.Provider value={reveal}>{children}</MyContext.Provider>;
}

export default MyProvider;
