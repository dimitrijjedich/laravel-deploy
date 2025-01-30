import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { PageProps } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import React from 'react';

interface CustomPageProps extends PageProps {
    weights: Weight[];
}

export default function Weight() {
    const {weights} = usePage<CustomPageProps>().props; // Retrieve weights passed from the backend

    return (
        <AuthenticatedLayout
            header={
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                        Weight Tracker
                    </h2>
                    <Link
                        href={route('weight.create')}
                        className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition"
                    >
                        + Add Entry
                    </Link>
                </div>
            }
        >
            <Head title="Weight Tracker"/>

            <div className="py-8">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow sm:rounded-lg dark:bg-gray-800">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            {weights.length > 0 ? (
                                <div>
                                    <h2 className="text-xl font-semibold mb-4">Weight History</h2>
                                    <ul className="space-y-2">
                                        {weights.map((weight) => (
                                            <li
                                                key={weight.id}
                                                className="flex justify-between p-4 border rounded"
                                            >
                                                <span>{weight.weight} kg</span>
                                                <span>{new Date(weight.measured_at).toLocaleString()}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ) : (
                                <p className="text-center text-gray-500 dark:text-gray-400">
                                    No weight entries yet. Click "Add Entry" to get started!
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
