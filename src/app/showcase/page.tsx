'use client';

export default function ShowcasePage() {
    return (
        <div>
            <h2 className="text-xl font-bold mb-4">All Blogs</h2>
            <div className="bg-white p-4 rounded shadow mb-4">
                <p className="mb-2">User 1 posted at 09-03-2025</p>
                <p>Sample blog content...</p>
            </div>
            <div className="bg-white p-4 rounded shadow mb-4">
                <p className="mb-2">User 2 posted at 12-07-2025</p>
                <p>Another user blog...</p>
            </div>
        </div>
    );
}