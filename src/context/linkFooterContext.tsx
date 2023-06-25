import {
  ReactNode,
  createContext,
  useContext,
  useRef,
} from "react";

type useFooterProps = {
  children: ReactNode;
};

const LinkFooterContext = createContext<any>(undefined);

export const useFooter = () => {
  const context = useContext(LinkFooterContext);

  if (context)
    throw new Error("useFooter must be used within a LinkFooterContext");

  return context;
};
// todo: tipar isso direito

export const LinkFooterProvider = ({ children }: useFooterProps) => {
  const ref = useRef<{ scrollIntoView: any }>();

  return (
    <LinkFooterContext.Provider value={ref}>
      {children}
    </LinkFooterContext.Provider>
  );
};
