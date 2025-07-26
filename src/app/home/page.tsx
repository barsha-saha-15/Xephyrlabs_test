'use client';

export default function HomePage() {
    return (
        <div>
            <h2 className="text-xl font-bold mb-4">My Blog</h2>
            <div className="bg-white p-4 rounded shadow mb-4">
                <p className="mb-2">Sample blog content...</p>
                <div className="flex gap-4">
                    <button className="btn">Update</button>
                    <button className="btn">Delete</button>
                </div>
            </div>
            <div className="bg-white p-4 rounded shadow mb-4">
                <p className="mb-2">Another sample content...</p>
                <div className="flex gap-4">
                    <button className="btn">Update</button>
                    <button className="btn">Delete</button>
                </div>
            </div>
        </div>
    );
}
