import React, { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';

interface HeaderProps {
  children: ReactNode;
}

const Header: React.FC<HeaderProps> = ({ children }) => {
  const location = useLocation();
  const path = location.pathname;

  const getPageContent = () => {
    if (path === '/location') {
      return <span>Як нас знайти</span>;
    } else if (path === '/single-catalog') {
      return <span>Одинарні пам'ятники</span>;
    } else if (path === '/double-catalog') {
      return <span>Подвійні пам'ятники</span>;
    } else if (path === '/sales-catalog') {
      return <span>Акційні пам'ятники</span>;
    }
    return children;
  };

  return <header>{getPageContent()}</header>;
};

export default Header;
