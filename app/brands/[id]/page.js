"use client";
import { useParams } from 'next/navigation';

const CircleDetailPage = () => {
  const router = useParams();

  // Check if router.query is available
  if (!router.query) {
    return <div>Loading...</div>;
  }

  // Destructure the id property with a default value to avoid errors
  const { id = '' } = router.query;

  return (
    <div>
      <h1>Circle Detail Page</h1>
      <p>Circle ID: {id}</p>
    </div>
  );
};

export default CircleDetailPage;
