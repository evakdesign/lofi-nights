//Here is where I am creating a new context, a set of data that is passed along anywhere in the app.
const AuthContext = React.createContext();
//The AuthProvider is a component that exposes the context for all of its descendants. Whatever is put in the AuthProvider has access to the AuthContext.
const AuthProvider = AuthContext.Provider;
//The same applies to these constants.
const ShowContext = React.createContext();
const ShowProvider = ShowContext.Provider;