'use client';

export default function AddPage() {
    return (
        <div className="bg-white p-6 rounded shadow-md">
            <h2 className="text-xl font-bold mb-4">Add New Blog</h2>
            <textarea className="w-full h-40 p-2 border rounded mb-4" placeholder="Write your blog..."></textarea>
            <div className="flex gap-4">
                <button className="btn">Check</button>
                <button className="btn">Post</button>
            </div>
        </div>
    );
}