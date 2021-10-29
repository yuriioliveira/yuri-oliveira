import { useRouter } from 'next/router';

export default function Person() {
  const router = useRouter();
  const vp = router.query;
  console.log(vp);
  return <h2>{vp.person}'s { vp.vehicle}</h2>
}