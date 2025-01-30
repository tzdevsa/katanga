 
 
 
"use client";

import React, {
    createContext, useContext,
  } from 'react';
import { Environment, Service } from '@think-zambia-foundation/api';

export interface KatangaContextType {
    /**
     * 
     */  
    children?: React.ReactNode,

    /**
     * The organisation or environment
     */
    organisation: Environment

    services: Service[]
}

const KatangaContext = createContext<KatangaContextType>(undefined!);
export function useKatanga() {
    return useContext(KatangaContext);
}
  
  
/**
 * Katanga Provider
 * @param param0
 * @returns
 */
export function KatangaProvider({children, organisation, services}: KatangaContextType) {
  
    // ███████ ████████  █████  ████████ ███████
    // ██         ██    ██   ██    ██    ██
    // ███████    ██    ███████    ██    █████
    //      ██    ██    ██   ██    ██    ██
    // ███████    ██    ██   ██    ██    ███████
  
    // const [organisation, setOrganisation] = useState<Environment>();
  
    //  ███    ███ ███████ ███    ███  ██████  ██ ███████ ███████ ██████
    //  ████  ████ ██      ████  ████ ██    ██ ██    ███  ██      ██   ██
    //  ██ ████ ██ █████   ██ ████ ██ ██    ██ ██   ███   █████   ██   ██
    //  ██  ██  ██ ██      ██  ██  ██ ██    ██ ██  ███    ██      ██   ██
    //  ██      ██ ███████ ██      ██  ██████  ██ ███████ ███████ ██████
  
  
    // const isFeatureEnabledForEnvironment = (featureKey: string) => { return environmentAppFeatureMap.get(featureKey) === true; };
  
    return (
      <KatangaContext.Provider
        value={{
          organisation,
          services
        }}
      >
        {children}
      </KatangaContext.Provider>
    );
}
  