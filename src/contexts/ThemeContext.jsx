// src/contexts/ThemeContext.js
import { createContext, useState, useContext, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Pega o tema salvo no localStorage ou define um padrão (false para light mode)
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('isDarkMode');
    return savedMode === 'true'; // Converte string para boolean
  });

  // Aplica a classe 'dark-mode' ao body quando o estado do tema muda
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
    // Salva a preferência do usuário no localStorage
    localStorage.setItem('isDarkMode', isDarkMode);
  }, [isDarkMode]);

  // Função para alternar o tema
  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hook personalizado para facilitar o uso do contexto
export const useTheme = () => useContext(ThemeContext);