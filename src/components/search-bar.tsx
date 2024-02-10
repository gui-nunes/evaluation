'use client';

import { Dispatch, SetStateAction } from 'react';
interface SearchBarProps {
  placeholder?: string;
  searchQuery: string;
  setSearchQuery: Dispatch<SetStateAction<string>>;
}
export function SearchBar(props: SearchBarProps) {
  return (
    <input
      type="text"
      value={props.searchQuery}
      onChange={e => props.setSearchQuery(e.target.value)}
      placeholder={props.placeholder || 'Pesquisar'}
      className="bg-gray-200 rounded-full px-4 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
    />
  );
}
