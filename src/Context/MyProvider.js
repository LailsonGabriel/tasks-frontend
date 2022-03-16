import MyContext from './MyContext';

function MyProvider({ children }) {
  const reveal = { teste: 'oi' };

  return <MyContext.Provider value={reveal}>{children}</MyContext.Provider>;
}

export default MyProvider;
