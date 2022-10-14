import { ComponentChildren, createContext } from 'preact';
import { StateUpdater, useContext, useMemo, useState } from 'preact/hooks';

type Section = 'none' | 'hero' | 'info' | 'qualification' | 'reward' | 'timeline' | 'scope' | 'contact';

type NavbarContextValue = {
  visibleSection: Section,
  setVisibleSection: StateUpdater<Section>,
};

type NavbarProviderProps = {
  children: ComponentChildren,
};

const NavbarContext = createContext<NavbarContextValue>({} as NavbarContextValue);

export const NavbarProvider = ({
  children,
}: NavbarProviderProps) => {
  const [visibleSection, setVisibleSection] = useState<Section>('none');

  const contextValue = useMemo(() => {
    return {
      visibleSection: visibleSection,
      setVisibleSection: setVisibleSection,
    };
  }, [visibleSection]);

  return (
    <NavbarContext.Provider value={contextValue}>
      {children}
    </NavbarContext.Provider>
  );
};

export const useNavbar = () => {
  return useContext(NavbarContext);
};
