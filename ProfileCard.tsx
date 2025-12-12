import React from 'react';

type Props = {
  id: string;
  name: string;
  bio: string;
  image: string;
};

export default function ProfileCard({ id, name, bio, image }: Props) {
  return (
    <div className="p-4 rounded-lg shadow-md border">
      <div style={{height: '220px', overflow: 'hidden'}} className="rounded">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      <h3 className="mt-3 text-xl font-semibold">{name}</h3>
      <p className="text-sm mt-1">{bio}</p>
      <button className="mt-3 px-4 py-2 rounded bg-blue-600 text-white">Subscribe for content</button>
    </div>
  );
}
