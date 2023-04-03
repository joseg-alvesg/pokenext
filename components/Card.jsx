import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import styles from '../styles/Card.module.css';

export default function Card({pokemon}) {
  return (
    <div className={styles.card}>
      <Image src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${pokemon.id}.svg`} width="120" height="120" alt={pokemon.name} />
      <p className={styles.id}>#{pokemon.id}</p>
      <h3 className={styles.title}>{pokemon.name}</h3>
      <Link legacyBehavior href={`/pokemon/${pokemon.id}`}>
        <a className={styles.btn}>Detalhes</a>
      </Link>
    </div>
  )
}
