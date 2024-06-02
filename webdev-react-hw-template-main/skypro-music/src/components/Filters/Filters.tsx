'use client'

import styles from "./Filters.module.css";
import FilterItem from "./FilterItem/FilterItem";
import { useState } from "react";
import { filters } from "./data";



export default function Filters() {
  const [actieFilter, setActiveFilter] = useState<string | null>(null);
  function handleFilterClick(newFilter: string) {
    setActiveFilter((prev) => prev === newFilter ? null : newFilter)
  }
  return (
    <div className={styles.centerblockFilter}>
      <div className={styles.filterTitle}>
        Искать по:
      </div>
      {filters.map((filter) => (
        <FilterItem 
        key={filter.title}
        isOpened={actieFilter === filter.title} 
        handleFilterClick={handleFilterClick} 
        title={filter.title} 
        list={filter.list} 
        />
      ))}
    </div>
  )
}