import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import React from 'react';

export default function WeightCreate() {
    const {data, setData, post, processing, errors} = useForm({
        weight: '',
        measured_at: new Date().toISOString().slice(0, 16),
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('weight.store'));
    };

    return (
        <AuthenticatedLayout
            header={
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                        Add Weight Entry
                    </h2>
                    <Link
                        href={route('weight.index')}
                        className="px-4 py-2 text-white bg-gray-500 rounded-lg hover:bg-gray-600 transition"
                    >
                        Back
                    </Link>
                </div>
            }
        >
            <Head title="Add Weight Entry"/>

            <div className="py-8">
                <div className="mx-auto max-w-4xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow sm:rounded-lg dark:bg-gray-800">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <form onSubmit={submit} className="space-y-6">
                                {/* Weight Input */}
                                <div>
                                    <label className="block font-medium text-gray-700 dark:text-gray-300">
                                        Weight (kg)
                                    </label>
                                    <input
                                        type="number"
                                        step="0.1"
                                        min="0"
                                        className="mt-1 w-full rounded-lg border-gray-300 shadow-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                        value={data.weight}
                                        onChange={(e) => setData('weight', e.target.value)}
                                        required
                                    />
                                    {errors.weight && (
                                        <p className="mt-1 text-sm text-red-600">
                                            {errors.weight}
                                        </p>
                                    )}
                                </div>

                                {/* Date Input */}
                                <div>
                                    <label className="block font-medium text-gray-700 dark:text-gray-300">
                                        Date
                                    </label>
                                    <input
                                        type="datetime-local"
                                        className="mt-1 w-full rounded-lg border-gray-300 shadow-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                        value={data.measured_at}
                                        onChange={(e) => setData('measured_at', e.target.value)}
                                        required
                                    />
                                    {errors.measured_at && (
                                        <p className="mt-1 text-sm text-red-600">
                                            {errors.measured_at}
                                        </p>
                                    )}
                                </div>

                                {/* Submit Button */}
                                <div className="flex justify-end">
                                    <button
                                        type="submit"
                                        className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition"
                                        disabled={processing}
                                    >
                                        {processing ? 'Saving...' : 'Save Entry'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
