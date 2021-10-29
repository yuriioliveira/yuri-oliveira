import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function List() {
    const [owners, setOwners] = useState([]);
    useEffect(() => {
        async function loadData() {
            const res = await fetch('http://localhost:3000/api/vehicles');
            const ownersList = await res.json();
            setOwners(ownersList);
        }

        loadData();
    }, []);
    
    return (
        <div>
            {owners.map((e, index) => (
                <div key={index}>
                    <Link as={`/${e.vehicle}/${e.ownerName}`} href="/[vehicle]/[person]">
                        <a>Navigate to {e.ownerName}'s {e.vehicle}</a>
                    </Link>
                </div>
            ))}

        </div>

    )
}