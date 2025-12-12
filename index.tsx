import React from 'react';
import data from '../data/characters.json';
import ProfileCard from '../components/ProfileCard';

export default function Home() {
  return (
    <main className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">AI Multi-Model Profiles</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {data.map((c: any) => (
          <ProfileCard key={c.id} {...c} />
        ))}
      </div>
    </main>
  );
}
